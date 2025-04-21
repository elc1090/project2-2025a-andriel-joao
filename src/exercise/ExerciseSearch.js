import { findExercisesByName } from "../functions/APIFunctions";

export const exerciseSearch = () => {

    //todo: precisa tratar o idioma
    const handleSearch = (event) => {
        const query = event.target.value;
        findExercisesByName(query).then((results) => {
            console.log(results);
        }).catch((error) => {
            console.error("Error fetching exercises:", error);
        });
    };
    return (
        <input onChange={handleSearch} placeholder='Nome do exercício'/>
    )
}

