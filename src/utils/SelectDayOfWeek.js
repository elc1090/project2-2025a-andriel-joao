import * as React from 'react';
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';

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

    const handleChange = (event) => {
        onChange(event.target.value);
    };

    return (
        <Box sx={{marginLeft: 5, marginTop: 1, width: "12em"}}>
            <FormControl fullWidth>
                <InputLabel id="select-day-label">Dia da Semana</InputLabel>
                <Select
                    labelId="select-day-label"
                    id="select-day"
                    value={value}
                    label="Dia da Semana"
                    onChange={handleChange}
                >
                    <MenuItem value="" disabled>
                        Selecione um dia
                    </MenuItem>
                    {daysOfWeek.map((day) => (
                        <MenuItem key={day.value} value={day.value}>
                            {day.label}
                        </MenuItem>
                    ))}
                </Select>
            </FormControl>
        </Box>
    );
};

export default SelectDayOfWeek;
