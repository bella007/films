import React, {Component} from 'react';
import {get_films} from "../actions/index"
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import Film from './Film'


const mapStateToProps = (state, ownProps) => {
    console.log(state.films);
    return {
        films: state.films
    }
};

const mapDispatchToProps = (dispatch) => (bindActionCreators({get_films}, dispatch));

class Films extends Component {

    constructor(props) {
        super(props);
    }

    componentDidMount() {
        this.props.get_films()

        // this.props.films.length === 0 ?
        //     this.props.get_films()
        //     : this.props.films
    }

    render() {
        return (
            <div>
                {
                    this.props.films.map((item, index) => (<Film data={item}
                                                                 key={index}
                    />))
                }
            </div>
        )
    }
}

// export default Films;
export default connect(mapStateToProps, mapDispatchToProps)(Films);
