import React from 'react'
import { useSelector } from 'react-redux';

const DivPanel = () =>{
    let counterVal = useSelector(state => state.counter)
    return (
            <span className="btn-align">{counterVal}</span>
    );
}

export default DivPanel;
