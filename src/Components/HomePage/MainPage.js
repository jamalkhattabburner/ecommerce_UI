import React, { Component } from 'react';
import AdOne from "./AdOne/AdOne";
import AdFour from "./AdFour/AdFour";
import "./MainPage.css"

class MainPage extends Component {
    constructor(props) {
        super(props);
        this.state = {}
    }
    render(){
        return (
            <div className='mainpage'>
                <div style={{paddingTop: "330px", display:"flex", flexWrap: "wrap"}}>
                    <AdOne />
                    <AdFour />
                    <AdOne />
                    <AdFour />
                    <AdOne />
                    <AdFour />  
                    <AdOne />
                    <AdFour /> 
                    <AdOne />
                    <AdFour />                   
                </div>
            </div>
        );
    }
}

export default MainPage;