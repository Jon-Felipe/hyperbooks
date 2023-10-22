import { Outlet } from 'react-router-dom';

// components
import Header from './components/Header';

// mui
import Container from '@mui/material/Container';

function App() {
  return (
    <>
      <Header />
      <Container component='main' maxWidth='xl' sx={{ marginTop: '20px' }}>
        <Outlet />
      </Container>
    </>
  );
}

export default App;
