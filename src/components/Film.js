import React, {Component} from 'react';
import {withRouter} from 'react-router';


class Film extends Component {
    render() {
        return (
            <div>
                {this.props.data[0]}
            </div>
        );
    }
}

export default (Film);
