var exercises = null

export const findExercisesByName = async (name, language) => {
    try {
        if (exercises == null) {
            const response = await fetch("https://wger.de/api/v2/exerciseinfo?limit=1000", {
                method: "GET",
                headers: {
                    "Accept": "application/json",
                    "Authorization": "Token 2c483ec862409acabfe7f357245ad15737a7ba17"
                }
            });
            exercises = (await response.json()).results;
        }
        const filtered = exercises.filter(ex => {
            const translatedName = getNameByLanguage(ex, language);
            return translatedName != null && (translatedName.toLowerCase().includes(name.toLowerCase())); 
        });
        return filtered.slice(0, 10);
    } catch (err) {
        console.log(err);
        return [];
    }
};

export const getNameByLanguage = (exercise, language) => {
    const translation = exercise.translations.find(t => t.language === language);
    return translation != null ? translation.name : null;
}

export const getFoodByName = async (name) => {
    const proxyUrl = "https://corsproxy.io/?";
    const apiUrl = `https://br.openfoodfacts.org/cgi/search.pl?search_terms=${encodeURIComponent(name)}&search_simple=1&action=process&json=1`;

    const response = await fetch(`${proxyUrl}${encodeURIComponent(apiUrl)}`, {
        method: "GET",
        headers: {
            "Accept": "application/json",
        }
    });
    const data = await response.json();
    return data.products.filter((p) => p.serving_size != undefined || p.serving_quantity != undefined).slice(0, 10);
};