import React from 'react'
import MyButton from './MyButton'
import DivPanel from './DivPanel';

const MainPanel = ()=>{
    return (
        <div className="container">
            <div className="row">
                <div className="col">
                    <h5 className="h5 display-5">This is the main panel</h5> 
                </div>
            </div>
            <div className="row align-items-center">
                <div className="col">
                    <MyButton/> 
                </div>
                <div className="col btn-align">
                    <DivPanel/> 
                </div>
            </div>   
        </div>
    );
}
export default MainPanel;