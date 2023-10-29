import { Outlet } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

// components
import Header from './components/Header';

// mui
import Container from '@mui/material/Container';

function App() {
  return (
    <>
      <ToastContainer />
      <Header />
      <Container component='main' maxWidth='xl' sx={{ marginTop: '20px' }}>
        <Outlet />
      </Container>
    </>
  );
}

export default App;
