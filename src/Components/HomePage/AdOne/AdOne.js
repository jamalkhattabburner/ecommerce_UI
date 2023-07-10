import React from 'react'
import "./AdOne.css"

function AdOne(props) {
    return (
        <div className='AdOne__main'>
            <div className='AdOne__header'>
                Up to 70% off | Electronics clearance store
            </div>
            <div className='AdOne__body'>
                <img src='https://ik.imagekit.io/ewkxvskykt/amazon-image/V238940049_IN_PC_BAU_Edit_Creation_Laptops2X._SY608_CB667377204_.jpg?updatedAt=1684037291090' width="321px"/>
            </div>
            <div className='AdOne__footer'>
                See more
            </div>
        </div>
    );
}

export default AdOne;