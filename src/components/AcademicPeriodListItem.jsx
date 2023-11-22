import { Link } from 'react-router-dom';
import './styles/Item.css'

function AcademicPeriodListItem({ academicList, onDelete }) {

    const handleDelete = async() => {
        await onDelete(academicList.per_id);
    }

    return (
        <section id='academicPeriod'>
            <h2 id= "tittle">{academicList.per_nombre}</h2>
            <section id='dates'>
                <h1 id="tittle">{academicList.per_fechainicio}</h1>
                <h1 id="tittle">   -   </h1>
                <h1 id="tittle">{academicList.per_fechafin}</h1>
            </section>
            <section id='buttons'>
                <Link id="update_delete_button" to={`/academic-periods/update/${academicList.per_id}`}>
                    Actualizar
                </Link>
                <button id="update_delete_button" onClick={handleDelete}>
                    Eliminar
                </button>
            </section>

        </section>
    );
}

export default AcademicPeriodListItem;