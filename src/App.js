import { BrowserRouter } from 'react-router-dom';
import Container from './components/Container';
import Header from './components/Header';
import Main from './components/Main';
import Footer from './components/Footer';

function App() {
  return (
    <>
      <BrowserRouter>
        <Container>
          <Header/>
          <Main/>
          <Footer/>
        </Container>
      </BrowserRouter>
    </>
  );
}

export default App;
