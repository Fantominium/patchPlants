import React from  'react'


function Eve (props) {

    return(

        <div>
            <input className="time-slot" type="checkbox" name={props.id} value="eve" checked={props.eveBooked} onChange={props.handleChange}/>Evening

        </div>
    )
}

export default Eve