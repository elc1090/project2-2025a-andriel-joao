import React from 'react';

const SelectDayOfWeek = ({ value, onChange }) => {
    const daysOfWeek = [
        { value: 7, label: 'Domingo' },
        { value: 1, label: 'Segunda-feira' },
        { value: 2, label: 'Terça-feira' },
        { value: 3, label: 'Quarta-feira' },
        { value: 4, label: 'Quinta-feira' },
        { value: 5, label: 'Sexta-feira' },
        { value: 6, label: 'Sábado' },
    ];

    return (
        <select value={value} onChange={(e) => onChange(e.target.value)}>
            <option value="" disabled>
                Selecione um dia
            </option>
            {daysOfWeek.map((day) => (
                <option key={day.value} value={day.value}>
                    {day.label}
                </option>
            ))}
        </select>
    );
};

export default SelectDayOfWeek;