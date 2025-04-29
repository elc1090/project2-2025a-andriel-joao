const DaysOfWeek = [
    { value: 7, label: 'Domingo' },
    { value: 1, label: 'Segunda-feira' },
    { value: 2, label: 'Terça-feira' },
    { value: 3, label: 'Quarta-feira' },
    { value: 4, label: 'Quinta-feira' },
    { value: 5, label: 'Sexta-feira' },
    { value: 6, label: 'Sábado' },
];

export const getDayName = (dayValue) => {
    for (let day of DaysOfWeek) {
        if (day.value == dayValue) {
            return day.label;
        }
    }
    return null;
}

export default DaysOfWeek;