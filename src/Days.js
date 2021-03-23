import React, {useState, useEffect} from 'react'
import Am from './timeslotComponents/Am'
import Pm from './timeslotComponents/Pm'
import Eve from './timeslotComponents/Eve'

function Days () {

const [dayCollection, setDays] = useState({days: []})


const [currentDay, setCurrentDay] = useState(new Date().toDateString())
const [currentTime, setCurrentTime] = useState(new Date().getTime())


/**
 * Uses attr from the event to check against the id, to determine which day ans slot to book
 * @param {*} event 
 */
function handleChange (event) {
    const{name, checked, value} = event.target
    const dayGroup = dayCollection.days

    for (const day of dayGroup){
        if(name === day.id) {
            setDays(
                previousDay =>{
                    return{
                        ...previousDay,
                        [value]:checked
                    }
                }
            )
        }
    }
}

/**
 * retrieves the array of 28 day objects in the future 
 * from current date
 */
function getDays() {
    let retArray= []
    let oneDay = 1000*60*60*24
    let currentDayMiliseconds = new Date().getTime()
    let sum = currentDayMiliseconds + oneDay


    //assign current day to subscript 0 
    retArray.push(
        {
            id:new Date().toDateString(),
            am:false,
            pm:false,
            eve:false
        })
    for (let i =1; i < 28; i++) {
        let tempDate = {
            id: new Date(sum).toDateString(),
            am:false,
            pm:false,
            eve:false
        }      
        retArray.push(tempDate)
        sum += oneDay
    }
    return retArray
}

/**
 * on mount, set days array to array of date strings 
 */
useEffect(
    () => {
        if(currentDay){
            let daysArray = getDays()
            setDays({days:daysArray})
        }
    }, []
)

//assign them to a var for cleaner rendering
const displayDates = dayCollection.days.map(day => { 
    return(
        <li key={day.id}>
        {day.id}
        <Am {...day} handleChange={handleChange} currentTime={currentTime}/>
        <Pm {...day} handleChange={handleChange} currentTime={currentTime}/>
        <Eve {...day} handleChange={handleChange} currentTime={currentTime}/>
    </li>
    )
})
return(
    <ul>
        {displayDates}
    </ul>
)
    //have the day "display:none" when all the booked states are true

}

export default Days