import './styles/Item.css'

function LaborListItem({ labor }){

    const goToEvaluate = () => {

    }

    return(
        <a onClick={goToEvaluate} id='academicPeriod'>
            <h1>{labor.nombre}</h1>
            <section id='dates'>
                <h2>{labor.horasAsignadas}</h2>
                <h2>   -   </h2>
                <h2>{labor.tipoLabor}</h2>
            </section>
            
        </a>
    );
}

export default LaborListItem;
