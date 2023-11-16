import './styles/CreateAcademicPeriodForm.css'

function CreateAcademicPeriodForm() {
    return (
        <div class="modal">
            <div class="modal__container">
                <div class="modal__featured">
                    <button type="button" class="button--transparent button--close">
                        <svg class="nc-icon glyph" xmlns="http://www.w3.org/2000/svg" xmlns: xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" width="32px" height="32px" viewBox="0 0 32 32">
                            <g>
                                <path fill="#ffffff" d="M1.293,15.293L11,5.586L12.414,7l-8,8H31v2H4.414l8,8L11,26.414l-9.707-9.707 C0.902,16.316,0.902,15.684,1.293,15.293z"></path>
                            </g>
                        </svg>
                        <span class="visuallyhidden">Return to Product Page</span>
                    </button>
                    <div class="modal__circle">

                    </div>
                    <img src="https://upload.wikimedia.org/wikipedia/commons/5/57/Logo_de_la_Universidad_del_Cauca.svg" class="modal__product" id="img_uni" />
                </div>
                <div class="modal__content">
                    <h2>Crear Periodo Academico</h2>

                    <form>
                        <ul class="form-list">
                            <li class="form-list__row">
                                <label>id del Periodo</label>
                                <input type="text" name="" required="" />
                            </li>
                            <li class="form-list__row">
                                <label>Nombre de Periodo</label>
                                <input type="text" name="" required="" />
                            </li>
                            <li class="form-list__row">
                                <div>
                                    <label>Fecha Inicio</label>
                                    <div class="form-list__input-inline">
                                        <input type="text" name="cc_month" placeholder="MM" pattern="\\d*" minlength="2" maxlength="2" required="" />
                                        <input type="text" name="cc_year" placeholder="YY" pattern="\\d*" minlength="2" maxlength="2" required="" />
                                    </div>
                                </div>
                            </li>
                            <li class="form-list__row">
                                <div>
                                    <label>Fecha Fin</label>
                                    <div class="form-list__input-inline">
                                        <input type="text" name="cc_month" placeholder="MM" pattern="\\d*" minlength="2" maxlength="2" required="" />
                                        <input type="text" name="cc_year" placeholder="YY" pattern="\\d*" minlength="2" maxlength="2" required="" />
                                    </div>
                                </div>
                            </li>
                            <li class="form-list__row form-list__row--inline">

                            </li>
                            <li>
                                <button type="submit" class="button">Crear Periodo</button>
                            </li>
                        </ul>
                    </form>
                </div>
            </div>
        </div>
    )
}
export default CreateAcademicPeriodForm;
