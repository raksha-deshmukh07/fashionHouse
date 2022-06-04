import logo from './logo.svg';
import './App.css';
import { Container } from 'react-bootstrap';
import Card from 'react-bootstrap/Card'
import CardGroup from 'react-bootstrap/CardGroup'
import CardComponent from './card';
import { faregular } from '@fortawesome/free-solid-svg-icons';
import Header from './Header';
import Footer from './Footer';
import HomePage from './HomePage';

function App() {
  return (
    <div>
      <Header></Header>

      <Container fluid>
        <HomePage></HomePage>
      </Container>
        <Footer></Footer>

    </div>
  );
}
export default App;