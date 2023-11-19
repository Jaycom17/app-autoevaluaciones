import './styles/AcademicPeriodItem.css'

function AcademicPeriodListItem({ academicList }) {

    const goToEvaluate = () => {

    }

    return (
        <section id='academicPeriod'>
            <h1 id="tittle">{academicList.periodo}</h1>
            <section id='dates'>
                <h2>{academicList.dateStart}</h2>
                <h2>   -   </h2>
                <h2>{academicList.dateEnd}</h2>
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

export default AcademicPeriodListItem;