import React from "react";

import './wrapper.css';
import Left from "../Left";
import Main from "../Main";
import Right from "../Right";

export default function Wrapper(){
    return(
        <div className="wrapper">
            <Left />
            <Main />
            <Right />
        </div>
    )
}