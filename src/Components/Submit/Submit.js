import React from 'react';
import { Link } from "react-router-dom";


export default function Submit() {
    return(
        <Link className = 'navButton' to = '/results'>
            Submit
        </Link>
    );
}