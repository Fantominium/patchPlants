import React, {useState, useEffect} from "react"

/**
 * Takes care of the rendering of carousels for individual locations
 * @param {*} props 
 * 
 * TODO - need back end to save the dismounted states of days
 */
function CarouselRender (props){

    const [slidePosition, setSlidePosition] = useState(0)
    const [endFlag, setEndFlag] = useState(false)

    const endMsg = "End of the time slot picker"

    useEffect(
        ()=> {
            if(props.displayDates) {
                setEndFlag(false)
            }
        }, [props.displayDates, slidePosition]
    )

    // /**
    //  * Carousel action buttons 
    //  */
    function moveToNext () {
        slidePosition === props.displayDates.length - props.displayGroup ? 
        setEndFlag(!endFlag) :
        setSlidePosition( prevSlidePosition =>  prevSlidePosition + 1 )
    }
    
    function moveToPrev () {
        slidePosition === 0 ? 
        setEndFlag(!endFlag) :
        setSlidePosition( prevSlidePosition =>  prevSlidePosition - 1 )
    }
const show = () => {
    return(
        <div className="carousel-item" style={{display:"block"}}>
            {props.displayDates[slidePosition]}
        </div>
    )
} // use this to display a day with the slide position
//could this selective rendering be leveraged by using useEffect?

    if(props.displayDates) {
        return (
            <div className="carousel">
                <p className="carousel-title">Time Slots</p>
                <div className="carousel-item" style={{display:"block"}}>
                    {props.displayDates[slidePosition]}
                    {props.amProp}
                </div>
                <div className="carousel-item" style={{display:"none"}}>
                    {props.displayDates[slidePosition+1]}
                </div>
                <div className="carousel-item" style={{display:"block"}}>
                    {props.displayDates[slidePosition+2]}
                </div>
                <div className="carousel-item" style={{display:"block"}}>
                    {props.displayDates[slidePosition+3]}                
                </div>
                <div className="carousel-actions">
                    <button id="carousel-button-prev" aria-label="Previous Slide" onClick={moveToPrev}>Previous</button>
                    <button id="carousel-button-next" aria-label="Next Slide" onClick={moveToNext}>Next</button>
                </div>
                <span>{endFlag ? endMsg : ''}</span>
            </div>
        )
    }
    return (
        <div>
           <p> No date info, something is wrong, report this message </p>
        </div>
    )
}

export default CarouselRender