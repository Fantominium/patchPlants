import React, {useState, useEffect} from 'react'
import Am from './timeslotComponents/Am'
import Pm from './timeslotComponents/Pm'
import Eve from './timeslotComponents/Eve'
import CarouselRender from './displayComponents/CarouselRender'

function Days () {

const [dayCollection, setDays] = useState({days: []})
const [displayGroup, setDisplayGroup] = useState(4)


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

/**
 * on change to time slots, call side effect to update db value instantly
 */
useEffect(
    () => {
        if(dayCollection.days){
            /**Define database call and pass relevant values to be entered into db. Close connection when finished. */
        }
    }, [dayCollection]
)

//assign them to a var for cleaner rendering
const displayDates = dayCollection.days.map(day => { 
    return(
        <ul>
            <li key={day.id} style={day.am && day.pm && day.eve ? {display:"none"} : {display:"block"}}>
                {day.id}
                <Am {...day} handleChange={handleChange} currentTime={currentTime}/>
                <Pm {...day} handleChange={handleChange} currentTime={currentTime}/>
                <Eve {...day} handleChange={handleChange} currentTime={currentTime}/>
            </li>
        </ul>
    )
})
return(
    <div>
        <CarouselRender
            displayDates={displayDates}
            displayDatesCopy = {displayDates}
            displayGroup={displayGroup}
        />
    </div>
)
    //have the day "display:none" when all the booked states are true

}

export default Days