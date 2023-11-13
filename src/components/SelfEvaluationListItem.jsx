import './styles/EvaluationListItem.css'

function SelfEvaluationListItem({ selfEvaluation }){

    const goToEvaluate = () => {

    }

    return(
        <a onClick={goToEvaluate} id='evaluationItem'>
            <h1>{selfEvaluation.periodo}</h1>
            <h2>{selfEvaluation.estado}</h2>
        </a>
    );
}

export default SelfEvaluationListItem;