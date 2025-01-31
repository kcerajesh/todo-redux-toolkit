
import { Provider } from 'react-redux';
import store from './store/store';
import { Box, Container, Typography } from '@mui/material';
import AddRoutineForm from './components/AddRoutineForm';
import DisplayRoutines from './components/DisplayRoutines';

const App: React.FC = () => {
  return (
    <Provider store={store}>
      <Container maxWidth='md'>
        <Box sx={{ my: 4 }}>
          <Typography maxWidth='md' variant="h2" component="h1" gutterBottom align="center">Routine Tracker</Typography>
          <AddRoutineForm />
          <DisplayRoutines />
        </Box>
      </Container>
    </Provider>
  )
}

export default App
