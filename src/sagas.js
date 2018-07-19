import {call, put, takeEvery, all} from 'redux-saga/effects'
import * as types from './constants/ActionTypes';
import axios from 'axios';

const API_ENDPOINT = 'https://api.themoviedb.org';
const API_VERSION = '3';
const API_IMAGE_ENDPOINT = 'https://image.tmdb.org/t/p/w500';
const API_KEY = 'd5538b430fafe93e8f298f5afb2cc315';

export function request(path, params = {}) {
    return axios.get(API_ENDPOINT + '/' + API_VERSION + path, {
        params: Object.assign({
            api_key: API_KEY
        }, params)
    }).then(res => res.data);
}

function fetchAllFilms(query, adult = false) {
    if(!query){query='power rangers'}
    return request(`/search/movie`, {query, include_adult: adult})
}

function* films(element) {
    console.log('hello ', element);
    const {response, error} = yield call(fetchAllFilms, element.payload.query);
    if (response)
        yield put({type: types.GET_FILMS_SUCCESS, payload: response});
    else
        yield put({type: types.GET_FILMS_FAILURE, error})
}


export default function* rootSaga() {
    yield all([
        takeEvery('GET_FILMS_REQUEST', films),
    ])
};