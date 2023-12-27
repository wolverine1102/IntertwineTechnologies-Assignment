import { PrimeReactProvider, PrimeReactContext } from 'primereact/api';
import UserTable from './views/UserTable';

function App() {
  return (
    <PrimeReactProvider>
      <UserTable />
    </PrimeReactProvider>
  )
}

export default App
