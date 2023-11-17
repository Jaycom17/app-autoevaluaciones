// Importaciones
import 'bootstrap/dist/css/bootstrap.min.css';
import { Navbar, Container, Nav, NavDropdown } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './styles/NavigationItem.css';



const NavigationItem = () => {

  return(
<Navbar expand="lg" id='navbar'>
      <Container>
        <img id='logo' src="https://www.unicauca.edu.co/versionP/sites/default/files/images/Fiet_New_Generation.png" alt="Unicauca-Logo"/>
        <Navbar.Toggle aria-controls="navbarNavDropdown" />
        <Navbar.Collapse id="navbarNavDropdown">
          <Nav className="mr-auto">
            <Nav.Link as={Link} to={"/"} id = "home">
              Home
            </Nav.Link>
            <NavDropdown title="Gestion Labor" id="basic-nav-dropdown">
              <NavDropdown.Item as={Link} to={"/labor/create"}>Crear Labor</NavDropdown.Item>
              <NavDropdown.Item as={Link} to={"/labor"}>Listar Labores</NavDropdown.Item>
            </NavDropdown>
            <NavDropdown title="Gestion Autoevaluacion" id="basic-nav-dropdown">
              <NavDropdown.Item as={Link} to={"/self-evaluations/make"}>Realizar Autoevaluación</NavDropdown.Item>
              <NavDropdown.Item as={Link} to={"/self-evaluations/create"}>Crear Autoevaluación</NavDropdown.Item>
              <NavDropdown.Item as={Link} to={"/self-evaluations"}>Listar Autoevaluaciones</NavDropdown.Item>
            </NavDropdown>
            <NavDropdown title="Gestion Periodo" id="basic-nav-dropdown">
              <NavDropdown.Item as={Link} to={"/academic-periods/create"}>Crear Periodo</NavDropdown.Item>
              <NavDropdown.Item as={Link} to={"/academic-periods"}>Listar Periodos</NavDropdown.Item>
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  )

};

export default NavigationItem;
