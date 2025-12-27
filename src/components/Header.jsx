import {Navbar, Container, Button} from "react-bootstrap";
import IconCarrito from "./IconCarrito";



const Header = () => {
    return (
       
        <Navbar expand="lg" className="custom-navbar">
            <Container>
                 <Navbar.Brand href="/" className="d-flex align-items-center">
                   
                    <span className="fw-bold">Libreria Digital</span>
                </Navbar.Brand>

                <IconCarrito/>

            </Container>
        </Navbar>
    );
};


export default Header;
