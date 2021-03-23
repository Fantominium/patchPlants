import React, {useState, useEffect} from 'react'
import Am from './Am'

function Days () {

const [days, setDays] = useState([]) //intended array of 28 days
const [booked, setBooked] = useState({
    amBooked: false,
    pmBooked: false,
    eveBooked: false
})


const [currentDay, setCurrentDay] = useState(new Date().toDateString())
const [currentTime, setCurrentTime] = useState(new Date().getTime())



function handleChange (event) { //onClick, book the time slot using handleChange
    const{name, checked} = event.target
    setBooked( prevBooked => {
        return{
            ...prevBooked,
            [name]:checked
        }
    })
}

/**
 * retrieves the array of 28 days in the future 
 * from current date
 */
function getDays() {
    let retArray=[]
    let oneDay = 1000*60*60*24
    let currentDayMiliseconds = new Date().getTime()
    let sum = currentDayMiliseconds + oneDay

    //assign current day to subscript 0 
    retArray.push(new Date().toDateString())
    for (let i =1; i < 28; i++) {
        let tempDate = new Date(sum).toDateString()        
        retArray.push(tempDate)
        sum += oneDay
    }

    return retArray
}

/**
 * on mount, set days array
 */
useEffect(
    () => {
        if(currentDay){
            setDays(getDays())
        }
    }, []
)
const displayDates = days.map(day => <li key={day}>{day}</li>)
    return(
        <ul>
        {displayDates}
        <Am {...booked} handleChange={handleChange} currentTime={currentTime}/>
        {console.log(booked.amBooked)}
        
        
        </ul>
    )
        //title of the date card
        // this comp will render these smaller comps via a map function, passing down the booked state to the time slots
        //have the day "display:none" when all the booked states are true

}

export default Days