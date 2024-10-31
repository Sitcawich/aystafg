import React from 'react';
import { Link } from "react-router-dom";


export default class Submit extends React.Component {

    render() {
        return (
            <button className='navButton' to='/results'>
                Submit
            </button>
        );
    }
}