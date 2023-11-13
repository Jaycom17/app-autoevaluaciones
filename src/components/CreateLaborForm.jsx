import './styles/LaborForm.css'

function CreateLaborForm() {
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
                    <img src="https://www.unicauca.edu.co/regionalizacion/sites/default/files/logo-unicauca.png" class="modal__product" id = "img_uni" />
                </div>
                <div class="modal__content">
                    <h2>Crear labor</h2>

                    <form>
                        <ul class="form-list">
                            <li class="form-list__row">
                                <label>Nombre de labor</label>
                                <input type="text" name="" required="" />
                            </li>
                            <li class="form-list__row">    
                                <label>Horas asignadas</label>
                                <input type="text" name="" required="" />
                            </li>
                            <li class="form-list__row">    
                                <label>Tipo de labor</label>
                                <select name="TipoL" id="tl_input" required>
                                    <option disabled hidden selected>Tipo de labor</option>
                                    <option>Docencia (D)</option>
                                    <option>Trabajos Docencia (TD)</option>
                                    <option>Proyectos Investigación (PI)</option>
                                    <option>Trabajos Investigación (TI)</option>
                                    <option>Administración (AD)</option>
                                    <option>Asesoría (AS)</option>
                                    <option>Servicios (S)</option>
                                    <option>Extensión (E)</option>
                                    <option>Capacitación (C)</option>
                                    <option>Otros Servicios (OS)</option>
                                </select>
                            </li>
                            <li class="form-list__row form-list__row--inline">
                            
                            </li>
                            <li>
                                <button type="submit" class="button">Crear labor</button>
                            </li>
                        </ul>
                    </form>
                </div>
            </div>
        </div>
    );
}

export default CreateLaborForm;

