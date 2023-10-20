// screens
import HomeScreen from './screens/HomeScreen';

// components
import Header from './components/Header';

// mui
import Container from '@mui/material/Container';

function App() {
  return (
    <>
      <Header />
      <Container component='main' maxWidth='xl' sx={{ marginTop: '20px' }}>
        <HomeScreen />
      </Container>
    </>
  );
}

export default App;
