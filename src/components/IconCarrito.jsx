import {Button} from "react-bootstrap";
import { Cart } from "react-bootstrap-icons";
import Badge from 'react-bootstrap/Badge';
import {Link} from "react-router-dom";


const IconCarrito = () => {
    return (

        <Link to="/carrito">
                <Button variant="outline-light">
                    <Cart className="me-2" /><Badge bg="danger">2</Badge>  
                </Button>
        </Link>
    );
};

export default IconCarrito;