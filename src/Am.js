import React, {useEffect} from  'react'


function Am (props) {

    return(

        <div>
            <input className="time-slot" type="checkbox" name="amBooked" checked={props.amBooked} onChange={props.handleChange}/>Morning

        </div>
    )
}

export default Am