import { Navbar, Container, Nav } from 'react-bootstrap';
import { Outlet } from 'react-router-dom';
import Footer from '../components/Footer';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCcVisa, faCcMastercard, faCcAmex } from '@fortawesome/free-brands-svg-icons';
import '../App.css';
import Header from '../components/Header';

const MainLayout = () => {
  return (
    <>
    <Header />

      {/* Aquí es donde se renderizarán las páginas */}
      <main className="py-4">
        <Outlet /> 
      </main>

    
      <Footer />
    </>
  );
};

export default MainLayout;