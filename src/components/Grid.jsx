import {workoutProgram as training_plan} from '../utils/index.js'
import WorkoutCard from "./WorkoutCard"
import { useState , useEffect} from "react"

export default function Grid(){
    const [savedWorkouts,setSavedWorkouts] = useState(null)
    const [selectedWorkout, setSelectedWorkout] = useState(null)
    const completedWorkouts = Object.keys(savedWorkouts || {}).filter((val)=>{
        const entry = savedWorkouts[val]
        return entry.isComplete
    })

    function handleSave(index, data){
        //save to local storage and modify the saved state
        const newObject = {
            ...savedWorkouts, //duplicates savedWorkouts
            [index]:{ //dynamic key
                ...data,
                isComplete: !!data.isComplete //forced to be true or false
                || !!savedWorkouts?.[index]?.isComplete //checks if it was completed previously
            }
        }
        setSavedWorkouts(newObject)
        localStorage.setItem('fitnessprogram', JSON.stringify(newObject))
        setSelectedWorkout(null)


    }

    function handleComplete(index, data){
        //complete the workout
        const newObject = {...data}
        newObject.isComplete = true
        handleSave(index,newObject)
    }

    useEffect (()=> {
        if(!localStorage ){return}
        let savedData = {}
        if(localStorage.getItem('fitnessprogram')){
            savedData = JSON.parse(localStorage.getItem('fitnessprogram'))
        } 

        setSavedWorkouts(savedData)
    },[])
    return(
        <div className="training-grid-plan">
            {Object.keys(training_plan).map((workout, workoutIndex) => {

                const isLocked =(workoutIndex === 0 ? false : !completedWorkouts.includes(`${workoutIndex - 1}`))
                const type = workoutIndex % 3 === 0 ? 'Push' 
                                : workoutIndex % 1 === 1 ? 'Pull' 
                                : 'Legs'

                const trainingPlan = training_plan[workoutIndex]

                const dayNum = ((workoutIndex/8) <= 1) ? '0' + (workoutIndex + 1) : (workoutIndex +1)
                
                const icon = (
                    workoutIndex % 3 === 0 ? (<i className='fa-solid fa-dumbbell'></i>) 
                    : (
                        workoutIndex % 3 === 1 ? (<i className='fa-solid fa-weight-hanging'></i>) 
                        : (<i className='fa-solid fa-bolt'></i>)
                    )
                )

                if (workoutIndex === selectedWorkout){
                    return (
                        <WorkoutCard key= {workoutIndex} 
                        trainingPlan = {trainingPlan} 
                        type= {type} 
                        workoutIndex = {workoutIndex}
                        icon = {icon}
                        dayNum = {dayNum}
                        savedWeights = {savedWorkouts?.[workoutIndex]?.weights} //?. optional chaining syntax
                        handleComplete={handleComplete}
                        handleSave = {handleSave}
                        />
                    )
                }

                return(
                    <button onClick={()=>{
                        if(isLocked){return} 
                        setSelectedWorkout(workoutIndex)
                    }
                    } className={'card plan-card '+ (isLocked ? 'inactive' : '')} key={workoutIndex}>
                        <div className='plan-card-header'>
                            <p>Day {dayNum}</p>
                        </div>
                        {
                            isLocked ? (
                                <i className='fa-solid fa-lock'></i>
                            ) : (icon)
                        }
                        <div className='plan-card-header'>
                            <h4><b>{type}</b></h4>
                        </div>
                    </button>
                )
            })}
        </div>
    )
} 