export const findExercisesByName = async (name, language) => {
    const response = await fetch("https://wger.de/api/v2/exerciseinfo?limit=1000", {
        method: "GET",
        headers: {
            "Accept": "application/json",
            "Authorization": "Token 2c483ec862409acabfe7f357245ad15737a7ba17"
        }
    });

    const data = await response.json();
    const filtered = data.results.filter(ex => {
        const translatedName = getNameByLanguage(ex, language);
        return translatedName != null && (translatedName.toLowerCase().includes(name.toLowerCase())); 
    });

    return filtered;
};

export const getNameByLanguage = (exercise, language) => {
    const translation = exercise.translations.find(t => t.language === language);
    return translation != null ? translation.name : null;
}

export const findIngredientsByName = async (name, language) => {
    const response = await fetch("https://wger.de/api/v2/ingredient?limit=1000&language=" + language, {
        method: "GET",
        headers: {
            "Accept": "application/json",
            "Authorization": "Token 2c483ec862409acabfe7f357245ad15737a7ba17"
        }
    });

    const data = await response.json();
    console.log(data);
    const filtered = data.results.filter(ingredient => 
        ingredient.name.toLowerCase().includes(name.toLowerCase())
    );

    return filtered;
};