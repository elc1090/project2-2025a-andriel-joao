import { useEffect, useState, useRef } from "react"
import { findExerciseImage, getNameByLanguage } from "../functions/APIFunctions"
import imageNotFound from '../assets/Image-not-found.png'

export const ExerciseEditor = ({exercise, onSave}) => {

    const [imageSrc, setImageSrc] = useState()
    
    const seriesRef = useRef(null);
    const executionTimeRef = useRef(null);
    const repsRef = useRef(null);
    const restTimeRef = useRef(null);

    const saveExercise = () => {
        const exerciseEntry = {
            exercise: exercise,
            series: seriesRef.current.value,
            executionTime: executionTimeRef.current.value,
            reps: repsRef.current.value,
            restTime: restTimeRef.current.value
        }
        onSave(exerciseEntry)
    }

    return (
        <section>
            <div style={{display: 'flex'}}>
                <div>
                    <div>{getNameByLanguage(exercise, 2)}</div>
                    { exercise.images.length > 0 &&
                        <img src={imageSrc}/>
                    }
                    { exercise.images.length == 0 &&
                        <img src={imageNotFound}/>
                    }
                </div>
                {/* adicionar imagens dos músculos */}
                <div>
                    <input ref={seriesRef} placeholder="Séries"/>
                </div>
                <div>
                    <input ref={executionTimeRef} placeholder="Tempo médio de execução da série"/>
                </div>
                <div>
                    <input ref={repsRef} placeholder="Repetições"/>
                </div>
                <div>
                    <input ref={restTimeRef} placeholder="Tempo de descanso entre séries"/>
                </div>
            </div>
            <button onClick={saveExercise}>Salvar</button>
        </section>
    )
}