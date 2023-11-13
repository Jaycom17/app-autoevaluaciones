import './styles/MainPage.css'
import './script/MainPage.js';

function MainPage() {
    return (
        <>
            <main>
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
                        <a href="https://scontent.cdninstagram.com/v/t51.2885-15/316477849_523756596295247_7116080319620304079_n.webp?se=7&stp=dst-jpg_e35&efg=eyJ2ZW5jb2RlX3RhZyI6ImltYWdlX3VybGdlbi4xMDgweDEwODAuc2RyIn0&_nc_ht=scontent.cdninstagram.com&_nc_cat=111&_nc_ohc=Unhh26utdeAAX-1moJO&edm=APs17CUBAAAA&ccb=7-5&ig_cache_key=Mjk3ODE1NzI3OTEzNzM2ODY0Mw%3D%3D.2-ccb7-5&oh=00_AfDkWA47EIwDvEwEyWb6qohLdJMLslC0cz68BXhvXCywEA&oe=653F0BD4&_nc_sid=10d13b">Mostrar Fantasma</a>
                    </div>
                    <img src="src/Img/2.jpg" alt="me" />
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