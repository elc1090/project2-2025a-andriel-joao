import React, { useState } from 'react';

const CheckBoxDayOfWeek = ({ onChange }) => {
    const daysOfWeek = [
        { name: 'Domingo', value: 7 },
        { name: 'Segunda-feira', value: 1 },
        { name: 'Terça-feira', value: 2 },
        { name: 'Quarta-feira', value: 3 },
        { name: 'Quinta-feira', value: 4 },
        { name: 'Sexta-feira', value: 5 },
        { name: 'Sábado', value: 6 },
    ];

    const [selectedDays, setSelectedDays] = useState([]);

    const handleCheckboxChange = (dayValue) => {
        const updatedSelectedDays = selectedDays.includes(dayValue)
            ? selectedDays.filter((name) => name !== dayValue)
            : [...selectedDays, dayValue];

        setSelectedDays(updatedSelectedDays);

        if (onChange) {
            onChange(updatedSelectedDays);
        }
    };

    return (
        <div>
            {daysOfWeek.map((day) => (
                <div key={day.name}>
                    <label>
                        <input
                            type="checkbox"
                            value={day.value}
                            checked={selectedDays.includes(day.value)}
                            onChange={() => handleCheckboxChange(day.value)}
                        />
                        {day.name}
                    </label>
                </div>
            ))}
        </div>
    );
};

export default CheckBoxDayOfWeek;
