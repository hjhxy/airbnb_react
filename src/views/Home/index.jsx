import React, {PureComponent} from 'react';
import PropTypes from 'prop-types';
import {getHighScore} from '@/api/home.js';

class Home extends PureComponent {
    state={
        highscore:{},
    }

    componentDidMount() {
        // getHighScore().then(res=>{
        //     console.log(res.data);
        //     this.state.highscore=res.data;
        // })
    }

    render() {
        return (
            <div>
                首页
            </div>
        );
    }
}

Home.propTypes = {};

export default Home;