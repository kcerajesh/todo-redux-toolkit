import React from "react";
import { Box, Button, IconButton, List, ListItem, ListItemText, Paper } from "@mui/material";
import { AppDispatch, RootState } from "../store/store";
import { useDispatch, useSelector } from "react-redux";
import { Delete } from "@mui/icons-material";
import { removeRoutine, toggleRoutine } from "../store/routine-slice";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";

const DisplayRoutines: React.FC = () => {
    const routines = useSelector((state: RootState) => state.routines.routines);
    const dispatch = useDispatch<AppDispatch>();

    const today = new Date().toISOString().split("T")[0];

    return (
        <Box sx={{ display: 'flex', flexDirection: 'column', py: 4 }}>
            <List sx={{ bgcolor: 'background.paper', display: 'flex', flexDirection: 'column', gap: 2 }}>
                {routines.map((routine, index) => (
                    <Paper>
                        <ListItem key={index} secondaryAction={
                            <IconButton
                                edge="end"
                                color="error"
                                onClick={() => dispatch(removeRoutine(routine.id))}>
                                <Delete />
                            </IconButton>

                        }>
                            <ListItemText
                                primary={routine.name} secondary={routine.frequency}
                            />
                            <Button
                                variant="outlined"
                                color={
                                    routine.completedDates.includes(today) ? "success" : "primary"
                                }
                                onClick={() =>
                                    dispatch(toggleRoutine({ id: routine.id, date: today }))
                                }
                                startIcon={routine.completedDates.includes(today) ? <CheckCircleIcon /> : ''}
                            >
                                {routine.completedDates.includes(today)
                                    ? "Completed"
                                    : "Mark Complete"}
                            </Button>
                        </ListItem>
                    </Paper>
                ))}
            </List>
        </Box>
    )
};

export default DisplayRoutines;