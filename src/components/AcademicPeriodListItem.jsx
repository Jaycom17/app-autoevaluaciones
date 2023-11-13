import './styles/AcademicPeriodItem.css'

function AcademicPeriodListItem({ academicList }){

    const goToEvaluate = () => {

    }

    return(
        <a onClick={goToEvaluate} id='academicPeriod'>
            <h1>{academicList.periodo}</h1>
            <section id='dates'>
                <h2>{academicList.dateStart}</h2>
                <h2>   -   </h2>
                <h2>{academicList.dateEnd}</h2>
            </section>
            
        </a>
    );
}

export default AcademicPeriodListItem;