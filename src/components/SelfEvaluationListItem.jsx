import './styles/EvaluationListItem.css'

function SelfEvaluationListItem({ selfEvaluation }){

    const goToEvaluate = () => {

    }

    return(
        <>
        <section id='evaluationItem'>
            <section id="dates">
            <h1 id="tittle">{selfEvaluation.periodo}</h1>
            <h2 id="tittle">{selfEvaluation.estado}</h2>
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
        
        </>
        
        
    );
}

export default SelfEvaluationListItem;