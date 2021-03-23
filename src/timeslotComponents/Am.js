import React from  'react'


function Am (props) {

    return(

        <div>
            <input className="time-slot" type="checkbox" name={props.id} value="am" checked={props.amBooked} onChange={props.handleChange}/>Morning

        </div>
    )
}

export default Am