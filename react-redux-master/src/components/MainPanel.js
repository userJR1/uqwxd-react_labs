import React from 'react'
import MyButton from './MyButton'
import DivPanel from './DivPanel';

const MainPanel = ()=>{
    return (
        <div>
            <h5 className="h5 display-5 mt-5 mb-3">This is the main panel</h5> 
            <MyButton/>
            <DivPanel/>
        </div>
    );
}
export default MainPanel;