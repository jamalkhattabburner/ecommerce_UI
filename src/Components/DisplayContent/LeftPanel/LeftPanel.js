import React from 'react'
import './LeftPanel.css'
function LeftPanel(props) {
    return (
        <div className='LeftPanel__main'>
            <div>
                <div className='LeftPanel__header'>
                    Brand
                </div>
                <div className='LeftPanel__brandname'>
                    <label className='brandname'>
                        <input type='checkbox' value="Apple"/>Apple
                    </label>
                    <label className='brandname'>
                        <input type='checkbox' value="Samsung"/>Samsung
                    </label>
                    <label className='brandname'>
                        <input type='checkbox' value="MI"/>Mi
                    </label> 
                </div>
            </div>
        </div>
    );

}
export default LeftPanel;