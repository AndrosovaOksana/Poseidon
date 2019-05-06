import React from 'react';
import './Block.css';

function Block() {
    return (
        <div className="block-div">
            <p>Some information</p>
            <label className="switch">
                <input type="checkbox"/>
                <span className="slider round"></span>
            </label>
        </div>
    );
}

export default Block;