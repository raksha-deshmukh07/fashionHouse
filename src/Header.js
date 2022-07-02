import React from 'react';
import { Navbar, Container, Nav, NavDropdown } from 'react-bootstrap'
import { Form, FormControl, Button } from 'react-bootstrap'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser } from '@fortawesome/free-solid-svg-icons';
import { faHeart } from '@fortawesome/free-solid-svg-icons';
import { faBagShopping } from '@fortawesome/free-solid-svg-icons';
import { useState } from 'react';
import { BrowserRouter, Route, Routes, Switch, Link, Navigate, useNavigate } from "react-router-dom";
import Men from './Men';
import Women from './Women';
import Kids from './Kids';
import ProfilePage from './ProfilePage';
import HomePage from './HomePage';
import HomeLiving from './HomeLiving';
import Terms from './Terms';
import SignUp from './SignUp';

function Header(props) {

  const [show, setShow] = useState(false);
  const [womenshow, setWomenShow] = useState(false);
  const[kidsshow, setKidsShow]=useState(false)

  const showDropdown = (e) => {
    setShow(!show);
  }
  const hideDropdown = e => {
    setShow(false);
  }

  const showwomenDropdown = (e) => {
    setWomenShow(!womenshow);
  }

  const hidewomenDropdown = (e) => {
    setWomenShow(false);
  }
const showKidsDropdown =(e)=>{
  setKidsShow(!kidsshow);
}
const hidekidsDropdown=(e)=>{
  setKidsShow(false);
}
 const navigate = useNavigate();
  
  return (
    <div>
      <Navbar>
        <img
        onClick={()=>navigate('/')}
          class="logo"
          src="https://pbs.twimg.com/profile_images/269815509/fh_web_pic_2_06-09_400x400.jpg"></img>
        
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <NavDropdown onClick={() => navigate('/men')} title="MEN" id="basic-nav-dropdown" show={show}
              onMouseEnter={showDropdown}
              onMouseLeave={hideDropdown}>
              <NavDropdown.Item href="#action/3.1">Topwear</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4">T-Shirt</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.4">Casual-Shirt</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.4">Formal-Shirt</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.4">Sweatshitrs</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.4">Jacket</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.4">Blezers and Coats </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.4">Suits</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.4">Rain Jacket</NavDropdown.Item>
            </NavDropdown>
            <NavDropdown onClick={() => navigate('/women')} title="WOMEN" id="basic-nav-dropdown" show={womenshow}
              onMouseEnter={showwomenDropdown}
              onMouseLeave={hidewomenDropdown}>
              <NavDropdown.Item href="#action/3.1">Topwear</NavDropdown.Item>
              <NavDropdown.Divider />
            </NavDropdown>
            <NavDropdown onClick={() => navigate('/kids')} title="KIDS" id="basic-nav-dropdown" show={kidsshow}
              onMouseEnter={showKidsDropdown}
              onMouseLeave={hidekidsDropdown}>
              <NavDropdown.Item href="#link">Boys clothing</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#link">Girls clothing</NavDropdown.Item>
              <NavDropdown.Divider />
            </NavDropdown>
            <Nav.Link onClick={()=>navigate('/homeliving')} title="HOME and LIVING" id="basic-nav-dropdown">HOME and LIVING</Nav.Link>
            <Nav.Link href="#beauty">BEAUTY</Nav.Link>
            <Nav.Link href="#studio">STUDIO</Nav.Link>
          </Nav>
          <Form className="d-flex">
            <FormControl
              type="search"
              placeholder="Search for product,brands and more"
              className="me-2 search"
              aria-label="Search for product,brands and more"
            />
            {/* <Button variant="outline-success">Search</Button> */}
          </Form>
          <Nav.Link href="#link" as={Link} to="/profile"><FontAwesomeIcon icon={faUser} /> Profile</Nav.Link>
          <Nav.Link href="#link"><FontAwesomeIcon icon={faHeart} />WishList</Nav.Link>
          <Nav.Link href="#link"><FontAwesomeIcon icon={faBagShopping} />Bag</Nav.Link>
        </Navbar.Collapse>
      </Navbar>
      <Routes>
        <Route path="/" element={<HomePage/>}/>
        <Route exact path="/men" element={<Men />} />
        <Route path="/women" element={<Women />} />
        <Route path="/kids" element={<Kids />} />
        <Route path='/profile' element={<ProfilePage/>} />
        <Route path='/homeliving' element={<HomeLiving/>}/>
        <Route path="/terms" element={<Terms/>}/>
       <Route path="/signup" element={<SignUp/>}/>
        {/* <Route path='/HomePage'element={<HomePage/>}/> */}
        {/* <Route redirect to="/" /> */}
      </Routes>

      {/* <Link to="/women">Women</Link>
      <Link to="/kids">Kids</Link>       */}
    </div>
  )
}
export default Header;