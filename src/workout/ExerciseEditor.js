import { useEffect, useState, useRef } from "react"
import { findExerciseImage, getNameByLanguage } from "../functions/APIFunctions"
import imageNotFound from '../assets/Image-not-found.png'

export const ExerciseEditor = ({exercise, onSave}) => {

    const [setsNumber, setSetsNumber] = useState(0);
    const [executionTime, setExecutionTime] = useState(0);
    const [reps, setReps] = useState(0);
    const [restTime, setRestTime] = useState(0);
    const [totalTime, setTotalTime] = useState(0);

    const saveExercise = () => {
        const exerciseEntry = {
            exercise: exercise,
            series: setsNumber,
            executionTime: executionTime,
            reps: reps,
            restTime: restTime,
            totalTime: totalTime
        }
        onSave(exerciseEntry)
    }

    useEffect(() => {
        setTotalTime((setsNumber * executionTime) + (restTime * (setsNumber - 1)));
    }, [executionTime, restTime, setsNumber])

    return (
        <section>
            <div style={{display: 'flex'}}>
                <div>
                    <div>{getNameByLanguage(exercise, 2)}</div>
                    { exercise.images.length > 0 &&
                        <img src={exercise.images[0].image}/>
                    }
                    { exercise.images.length == 0 &&
                        <img src={imageNotFound}/>
                    }
                </div>
                {/* todo: adicionar imagens dos músculos */}
                <div>
                    <input onChange={(e) => setSetsNumber(e.target.value)} placeholder="Séries"/>
                </div>
                <div>
                    <input onChange={(e) => setExecutionTime(e.target.value)} placeholder="Tempo médio de execução da série"/>
                </div>
                <div>
                    <input onChange={(e) => setReps(e.target.value)} placeholder="Repetições"/>
                </div>
                <div>
                    <input onChange={(e) => setRestTime(e.target.value)} placeholder="Tempo de descanso entre séries"/>
                </div>
                <div>
                    <div>total time</div>
                    <input readOnly={true} value={totalTime}/>
                </div>
            </div>
            <button onClick={saveExercise}>Adicionar</button>
        </section>
    )
}