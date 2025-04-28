import React from 'react';
import DaysOfWeek from './DaysOfWeek';

const SelectDayOfWeek = ({ value, onChange }) => {
    return (
        <select value={value} onChange={(e) => onChange(e.target.value)}>
            <option value="" disabled>
                Selecione um dia
            </option>
            {DaysOfWeek.map((day) => (
                <option key={day.value} value={day.value}>
                    {day.label}
                </option>
            ))}
        </select>
    );
};

export default SelectDayOfWeek;