import { useEffect, useState } from "react";
import { Container, Nav, Navbar } from "react-bootstrap";
// import "./navbar.css";
import { Link } from "react-router-dom";
import { useNavigate } from 'react-router-dom';
import { Table, Button, Modal, Form } from 'react-bootstrap';

const NavBar = () => {
  const [isFixed, setIsFixed] = useState(false);
  const navigate = useNavigate();

  // fixed Header
  // function scrollHandler() {
  //   if (window.scrollY >= 50) {
  //     setIsFixed(true);
  //   } else if (window.scrollY <= 0) {
  //     setIsFixed(false);
  //   }
  // }

  // useEffect(() => {
  //   window.addEventListener("scroll", scrollHandler);
  //   return () => window.removeEventListener("scroll", scrollHandler);
  // }, []);

  let token = localStorage.getItem("token") ?? "";

  const handleclick = () => {
    localStorage.removeItem("token");
    navigate('/signin');
  }

  return (
    // <Navbar
    //   fixed="top"
    //   expand="md"
    //   className={isFixed ? "navbar fixed" : "navbar"}
    // >
    //       <Nav className="justify-content-end flex-grow-1 pe-3">
       
    //         <Nav.Item>
    //           <Link
    //             aria-label="Go to Home Page"
    //             className="navbar-link"
    //             to="/home"
               
    //           >
    //             <Button className="nav-link-label">Home</Button>
    //           </Link>
    //         </Nav.Item>     
    //         <Nav.Item>
    //           <Link
    //             aria-label="Go to Home Page"
    //             className="navbar-link"
    //             to="/signin"
               
    //           >
                
    //           </Link>
    //         </Nav.Item>     
    //       </Nav>
    
     
    // </Navbar>

     <Navbar bg="dark" data-bs-theme="dark">
        <Container>
          <Nav className="me-auto">
            {/* <Nav.Link href="/home">Home</Nav.Link> */}
            <Nav.Link href="/signin" onClick={handleclick}>
         Logout
            </Nav.Link>
    
          </Nav>
        </Container>
      </Navbar>
     

  );
};

export default NavBar;
