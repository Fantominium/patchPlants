import React, {useState, useEffect} from 'react'


function Days () {

const [days, setDays] = useState('') //intended array of 28 days
const [booked, setBooked] = useState({
    amBooked: false,
    pmBooked: false,
    eveBooked: false
})


const [currentDay, setCurrentDay] = useState(new Date().toDateString())
const [currentTime, setCurrentTime] = useState(new Date().getTime())



function handleChange (event) { //onClick, book the time slot using handleChange
    const[name, value] = event.target
    setBooked( prevBooked => {
        return{
            ...booked,
            [name]:value
        }
    })
}

function getDays() {
    let retArray=[]
    let oneDay = 1000*60*60*24
    let currentDayMiliseconds = new Date().getTime()
    let sum = currentDayMiliseconds + oneDay

    //assign current day to subscript 0 
    retArray.push(new Date().toLocaleString())
    for (let i =1; i < 28; i++) {
        let tempDate = new Date(sum).toLocaleString()        
        retArray.push(tempDate)
        sum += oneDay
    }

    return retArray
}

useEffect(
    () => {
        if(true){
            console.log(getDays())//just to test and see what I'm working with
        }
    }, []
)

console.log("get time", new Date())
    return(
        //title of the date card
        <div>{currentDay}</div>
        // this comp will render these smaller comps via a map function, passing down the booked state to the time slots
        //have the day "display:none" when all the booked states are true
        // <Am amBooked={amBooked} handleChange={handleChange} currentTime={currentTime}/>
        // <Pm />
        // <Eve />
    )
}

export default Days