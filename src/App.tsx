import { LocalizationProvider } from '@mui/x-date-pickers';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';

import { MultiStepForm } from './form';

function App() {
  return (
    <LocalizationProvider dateAdapter={AdapterDayjs}>
      <MultiStepForm />
    </LocalizationProvider>
  );
}

export default App;
