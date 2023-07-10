import React from 'react'
import RightPanel from './RightPanel/RightPanel';
import LeftPanel from './LeftPanel/LeftPanel';

function DisplayContent(props) {
    return (
        <div style={{display:'flex'}}>
            <div><LeftPanel/></div>
            <div><RightPanel/></div>
        </div>
    );

}
export default DisplayContent;