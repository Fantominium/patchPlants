import React from  'react'


function Pm (props) {

    return(

        <div>
            <input className="time-slot" type="checkbox" name={props.id} value="pm" checked={props.pmBooked} onChange={props.handleChange}/>Afternoon

        </div>
    )
}

export default Pm