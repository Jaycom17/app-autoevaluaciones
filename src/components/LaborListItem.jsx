import { Link } from 'react-router-dom';
import './styles/Item.css'

function LaborListItem({ labor, onDelete }){

    const handleDelete = async () => {
        await onDelete(labor.lab_id);
    }

    return(
        <section id='academicPeriod'>
            <h1 id="tittle">{labor.lab_nombre}</h1>
            <section id='dates'>
                <h2>{labor.lab_horas}</h2>
                <h2>   -   </h2>
                <h2>{labor.tl_descripcion}</h2>
            </section>
            <section id='buttons'>
                <Link id="update_delete_button" to={`/labor/update/${labor.lab_id}`}>
                    Actualizar
                </Link>
                <button id="update_delete_button" onClick={handleDelete}>
                    Eliminar
                </button>
            </section>
        </section>
    );
}

export default LaborListItem;
