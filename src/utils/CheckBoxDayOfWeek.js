import React, { useState } from 'react';
import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';

const CheckBoxDayOfWeek = ({ onChange }) => {
    const daysOfWeek = [
        { name: 'Domingo', value: 7, color: '#e53935' },        // vermelho
        { name: 'Segunda-feira', value: 1, color: '#fb8c00' },   // laranja
        { name: 'Terça-feira', value: 2, color: '#fdd835' },     // amarelo
        { name: 'Quarta-feira', value: 3, color: '#43a047' },    // verde
        { name: 'Quinta-feira', value: 4, color: '#1e88e5' },    // azul
        { name: 'Sexta-feira', value: 5, color: '#8e24aa' },     // roxo
        { name: 'Sábado', value: 6, color: '#6d4c41' },          // marrom
    ];

    const [selectedDays, setSelectedDays] = useState([]);

    const handleCheckboxChange = (dayValue) => {
        const updatedSelectedDays = selectedDays.includes(dayValue)
            ? selectedDays.filter((v) => v !== dayValue)
            : [...selectedDays, dayValue];

        setSelectedDays(updatedSelectedDays);

        if (onChange) {
            onChange(updatedSelectedDays);
        }
    };

    return (
        <FormGroup sx={{ display: "grid", gridTemplateColumns: "200px 200px", mb: 3}}>
            {daysOfWeek.map((day) => (
                <FormControlLabel
                    key={day.value}
                    control={
                        <Checkbox
                            checked={selectedDays.includes(day.value)}
                            onChange={() => handleCheckboxChange(day.value)}
                            size='medium'
                            sx={{
                                height: 64,
                                width: 64,
                                color: day.color,
                                '&.Mui-checked': {
                                    color: day.color,
                                },
                            }}
                        />
                    }
                    label={day.name}
                />
            ))}
        </FormGroup>
    );
};

export default CheckBoxDayOfWeek;
