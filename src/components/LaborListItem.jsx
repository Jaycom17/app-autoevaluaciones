import './styles/Item.css'

function LaborListItem({ labor }){

    const goToEvaluate = () => {

    }

    return(
        <section id='academicPeriod'>
            <h1 id="tittle">{labor.nombre}</h1>
            <section id='dates'>
                <h2>{labor.horasAsignadas}</h2>
                <h2>   -   </h2>
                <h2>{labor.tipoLabor}</h2>
            </section>
            <section id='buttons'>
                <button type="submit" id="update_delete_button">
                    Actualizar
                </button>
                <button type="submit" id="update_delete_button">
                    Eliminar
                </button>
            </section>
        </section>
    );
}

export default LaborListItem;
