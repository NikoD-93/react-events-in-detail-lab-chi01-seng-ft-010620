// Code CoordinatesButton Component Here
import React from 'react';


export default class CoordinatesButton extends React.Component {


    handleClick = (event) => {
        this.props.onReceiveCoordinates([event.clientX, event.clientY])
    }



    render () {
        console.log(this.props.onReceiveCoordinates)
        return (
        <div> 
            <button onClick={this.handleClick}> </button>

        </div>
        )
    }
}