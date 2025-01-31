import { Box, Button, FormControl, InputLabel, MenuItem, Select, TextField } from '@mui/material';
import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addRoutine } from '../store/routine-slice';

const AddRoutineForm: React.FC = () => {
    const [name, setName] = useState<string>('');
    const [frequency, setFrequency] = useState<'daily' | 'weekly'>('daily');
    const [error, setError] = useState<string>('');

    const dispatch = useDispatch();

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        if (name) {
            dispatch(addRoutine({
                name, frequency
            }));
            setName('');
        } else {
            setError('Enter a Routine Name!')
        }
    }

    return (
        <form onSubmit={handleSubmit}>
            <Box sx={{
                display: 'flex',
                flexDirection: 'column',
                gap: 2
            }}>
                <TextField
                    label='Routine Name'
                    placeholder='Enter a routine'
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    fullWidth
                    error={error ? true : false}
                />
                <FormControl>
                    <InputLabel>Frequency</InputLabel>
                    <Select
                        value={frequency}
                        onChange={(e) => setFrequency(e.target.value as 'daily' | 'weekly')}
                    >
                        <MenuItem value='daily'>Daily</MenuItem>
                        <MenuItem value='weekly'>Weekly</MenuItem>
                    </Select>
                </FormControl>
                <Button
                    type='submit'
                    variant='contained'
                    color='primary'
                >
                    Add Routine
                </Button>
            </Box>
        </form>
    )
}

export default AddRoutineForm;
