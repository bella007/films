import InitialState from '../constants/InitialState';
import * as types from '../constants/ActionTypes';

const initial = InitialState.films;

export default function films(state = initial, action) {

    let {type, payload} = action;

    switch (type) {
        case types.GET_FILMS_REQUEST:
            console.log('types.GET_FILMS_REQUEST');
            return {...payload};

        case types.GET_FILMS_SUCCESS:
            console.log('types.GET_FILMS_SUCCESS:');
            return {...payload};

        default:
            return state
    }
}
