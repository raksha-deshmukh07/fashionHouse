import React from 'react';
import { Navbar, Container, Nav, NavDropdown } from 'react-bootstrap'
import { Form, FormControl, Button } from 'react-bootstrap'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser} from '@fortawesome/free-solid-svg-icons';
import { faHeart } from '@fortawesome/free-solid-svg-icons';
import { faBagShopping } from '@fortawesome/free-solid-svg-icons';
function Header(props) {
    return (
    <div>
     <Navbar>
      <img
        class="logo"
        src="https://pbs.twimg.com/profile_images/269815509/fh_web_pic_2_06-09_400x400.jpg"></img>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="#home">MEN</Nav.Link>
            <Nav.Link href="#link">WOMEN</Nav.Link>
            <Nav.Link href="#link">KIDS</Nav.Link>
            <Nav.Link href="#link">HOME and LIVING</Nav.Link>
            <Nav.Link href="#link">BEAUTY</Nav.Link>
            <Nav.Link href="#link">STUDIO</Nav.Link>
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
          <Nav.Link href="#link"><FontAwesomeIcon icon={faUser} /> Profile</Nav.Link>
          <Nav.Link href="#link"><FontAwesomeIcon icon={faHeart}/>WishList</Nav.Link>
          <Nav.Link href="#link"><FontAwesomeIcon icon={faBagShopping}/>Bag</Nav.Link>
        </Navbar.Collapse>
      </Navbar>
    </div>
    )
}
export default Header;