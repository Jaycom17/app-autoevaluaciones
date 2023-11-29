import { Link } from 'react-router-dom';

import { useAuth } from '../context/AuthContext';

import './styles/MainPage.css';

function MainPage() {
    const { user } = useAuth();
    return (
        <>
            <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
            <main>
                
        {
            user.usu_notificacion === 's' && (<Link id='notification-item' to={"/self-evaluations/make"}>
            Tiene una autoevaluación pendiente
          </Link>)
        }
                <div className="intro">
                    <h1>Gestión Académica</h1>
                    <p>Nuestra aplicación web de gestión académica abarca labores, seguimiento académico y autoevaluación docente</p>
                </div>
                <div className="achievements">
                    <div className="work">
                        <i className="fas fa-user-graduate"></i>
                        <p className="work-heading">Gestión de labor</p>
                        <p className="work-text">Permite al coordinador gestionar las tareas docentes. Esto incluye crear, editar, consultar y desactivar tareas. Cada tarea tiene un nombre, está vinculada a un tipo de labor y se le asigna una cantidad de horas</p>
                    </div>
                    <div className="work">
                        <i className="fas fa-user-clock"></i>
                        <p className="work-heading">Gestión períodos académicos</p>
                        <p className="work-text">Define un periodo académico como el tiempo en que estará activa la labor
                        académica, tiene una un nombre o descripción, año (2023) y semestre (toma valor 1 o 2) , fecha inicio y fecha
                        final.</p>
                    </div>
                    <div className="work">
                        <i className="fas fa-graduation-cap"></i>
                        <p className="work-heading">Gestión de autoevaluación</p>
                        <p className="work-text"> Esto involucra la asignación de períodos académicos, docentes y la creación de ítems de evaluación que contienen detalles esenciales, como el nombre de la labor o actividad, el tipo de labor, las horas dedicadas, 
                        una descripción, un campo para indicar si se ha completado, fechas de inicio y finalización, un estado, resultados y una calificación</p>
                    </div>
                </div>
                <div className="about-me">
                    <div className="about-me-text">
                        <h2>Sobre Nosotros</h2>
                        <p>Somos un equipo de desarrolladores de la Universidad del Cauca, encargados de crear y mejorar esta aplicación de gestión académica. Estamos dedicados a proporcionar soluciones eficientes para facilitar la administración educativa en nuestra institución.</p>
                    </div>
                    <img src="./WhatsApp Image 2023-11-16 at 9.59.11 PM.jpeg" alt="me" />
                </div>
            </main>
            <footer className="footer">
                <div className="copy">&copy; 2023 Universidad del Cauca</div>
                <div className="bottom-links">
                   
                    <div className="links">
                        <span>Social Links</span>
                        <a href="#"><i className="fab fa-facebook"></i></a>
                        <a href="#"><i className="fab fa-twitter"></i></a>
                        <a href="#"><i className="fab fa-instagram"></i></a>
                    </div>
                </div>
            </footer>
        </>
    )
}
export default MainPage;