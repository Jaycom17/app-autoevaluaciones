import './styles/EvaluationListItem.css'

function SelfEvaluationListItem({ selfEvaluation, onDelete, onShow, onUpdate }){

    const deleteSelfEvaluation = () => {
        onDelete(selfEvaluation.usr_identificacion, selfEvaluation.per_nombre);
    }

    const handleShow = () =>{
        onShow(selfEvaluation.usr_identificacion, selfEvaluation.per_nombre);
    }

    const handleUpdate = () =>{
        onUpdate(selfEvaluation.usr_identificacion, selfEvaluation.per_nombre);
    }

    return(
        <>
        <section id='evaluationItem'>
            <section id="dates">
            <h1 id="tittle">{selfEvaluation.usu_nombre} {selfEvaluation.usu_apellido}</h1>
            <h2 id="tittle">{selfEvaluation.per_nombre}</h2>
            </section>
            <section id='buttons-evaluation'>
                <button type='submit' id="update_delete_button" onClick={handleUpdate}>
                    Actualizar
                </button>
                <button type="submit" id="update_delete_button" onClick={deleteSelfEvaluation}>
                    Eliminar
                </button>
                <button type="submit" id="update_delete_button" onClick={handleShow}>
                    Ver
                </button>
            </section>
        </section>
        
        </>
        
        
    );
}

export default SelfEvaluationListItem;