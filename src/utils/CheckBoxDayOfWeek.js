import React, { useState } from 'react';

const CheckBoxDayOfWeek = ({ onChange }) => {
    const daysOfWeek = [
        { name: 'Domingo' },
        { name: 'Segunda-feira' },
        { name: 'Terça-feira' },
        { name: 'Quarta-feira' },
        { name: 'Quinta-feira' },
        { name: 'Sexta-feira' },
        { name: 'Sábado' },
    ];

    const [selectedDays, setSelectedDays] = useState([]);

    const handleCheckboxChange = (dayName) => {
        const updatedSelectedDays = selectedDays.includes(dayName)
            ? selectedDays.filter((name) => name !== dayName)
            : [...selectedDays, dayName];

        setSelectedDays(updatedSelectedDays);

        if (onChange) {
            onChange(updatedSelectedDays);
        }
    };

    return (
        <div>
            <h3>Selecione os dias da semana:</h3>
            {daysOfWeek.map((day) => (
                <div key={day.name}>
                    <label>
                        <input
                            type="checkbox"
                            value={day.name}
                            checked={selectedDays.includes(day.name)}
                            onChange={() => handleCheckboxChange(day.name)}
                        />
                        {day.name}
                    </label>
                </div>
            ))}
            <div>
                <h4>Dias selecionados:</h4>
                <p>
                    {selectedDays.length > 0
                        ? selectedDays.join(', ')
                        : 'Nenhum dia selecionado'}
                </p>
            </div>
        </div>
    );
};

export default CheckBoxDayOfWeek;
