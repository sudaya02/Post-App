import React, { Component } from 'react';
import {Navbar,Nav,NavDropdown,Form,FormControl,Button,Container} from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCog, faBell, faComment } from '@fortawesome/free-solid-svg-icons';

export default class BNavbar extends Component {
    render() {
        return (
            <div>
                <Navbar className='d1-bg'>
                    <Container>
                        
                        <Navbar.Toggle aria-controls="navbarScroll" />
                        <Navbar.Collapse id="navbarScroll" className='justify-content-between'>
                        <Nav
                            className="my-2 my-lg-0"
                            style={{ maxHeight: '100px' }}
                            navbarScroll
                        >
                            <Nav.Link href="#action1" className='header-icons'><FontAwesomeIcon className='text-light' icon={faCog} /></Nav.Link>
                            <Nav.Link href="#action2" className='header-icons'><FontAwesomeIcon className='text-light' icon={faBell} /></Nav.Link>
                            <Nav.Link href="#action2" className='header-icons'><FontAwesomeIcon className='text-light' icon={faComment} /></Nav.Link>
                            
                        </Nav>
                        <Navbar.Brand href="#"><img src='assets/images/logo.png' width='160px'/></Navbar.Brand>
                        <Nav.Link className="d-flex align-items-center">
                        <h5 className='user-name d-sm-block d-none'>Sujeevan</h5><img src='assets/images/avatar.png' width="40px"/>
                        </Nav.Link>
                        </Navbar.Collapse>
                    </Container>
                    </Navbar>
            </div>
        )
    }
}
