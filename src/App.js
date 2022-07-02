import logo from './logo.svg';
import './App.css';
import { Container } from 'react-bootstrap';
import Card from 'react-bootstrap/Card'
import CardGroup from 'react-bootstrap/CardGroup'
import CardComponent from './Card';
import { faregular } from '@fortawesome/free-solid-svg-icons';
import Header from './Header';
import Footer from './Footer';
import HomePage from './HomePage';
import {LinkContainer} from 'react-router-bootstrap'
import OverlayTrigger from 'react-bootstrap/OverlayTrigger'
import { BrowserRouter as Router,Route,Routes,Switch} from "react-router-dom";
import Men from './Men';
import Women from './Women';
import Kids from './Kids';

function App() {
  return (
    <div>
      <Header></Header>
      {/* <Card></Card> */}
      <Footer></Footer> 
                </div>
  );
}
export default App;