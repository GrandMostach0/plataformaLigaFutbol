

const FormularioInscripcion = () => {
    return(
        <div className="text-left py-2">
            <h1 className="text-lg font-semibold">Informacion del Equipo</h1>
            <p className="text-slate-600 mb-2">Proporciona los datos básicos de tu equipo para la inscripción.</p>
            <form action="">
                <div className="flex items-center gap-5 py-2">
                    <div className="flex-1/2">
                        <label htmlFor="nombreEquipo">Nombre del Equipo</label>
                        <input type="text" name="nombreEquipo" />
                    </div>
                    <div className="flex-1/2">
                        <label htmlFor="fechaFundacion">Fecha Fundación</label>
                        <input type="date" name="fechaFundacion" />
                    </div>
                </div>
                
                <div className="flex items-center gap-5 py-2">
                    <div className="flex-1/2">
                        <label htmlFor="categoriaEquipo">Categoria</label>
                        <select name="categoriaEquipo" id="categoriaEquipo">
                            <option value="0">Selecciona una categoria</option>
                        </select>
                    </div>
                    <div className="flex-1/2">
                        <label htmlFor="divisionEquipo">Disivión</label>
                        <select name="divisionEquipo" id="divisionEquipo">
                            <option value="0">Selecciona una divisón</option>
                        </select>
                    </div>
                </div>

                <div className="py-2">
                    <label htmlFor="campoEquipo">Campo Local</label>
                    <input type="text" name="campoEquipo" placeholder="Campo del Equipo"/>
                    <span className="text-xs text-red-500">Si no tienes campo propio ingresa <strong>SIN CAMPO</strong> y procederemos a asignarte uno de nuestras instalaciones.</span>
                </div>
                <br />
                <h1 className="text-lg font-semibold">Informacion Contacto</h1>
                <p className="text-slate-600 mb-2">Datos de la persona responsable del equipo.</p>

                <div className="flex items-center gap-5 py-2">
                    <div className="flex-1/2">
                        <label htmlFor="nombreCompletoResponsable">Nombre Completo</label>
                        <input type="text" name="nombreCompletoResponsable" placeholder="Ej: Jorge Ramierez Uc" />
                    </div>
                    <div className="flex-1/2">
                        <label htmlFor="correoResponsable">Correo Eléctronico</label>
                        <input type="email" name="correoResponsable" placeholder="Ej: jorgeramirez@gmail.com"/>
                    </div>
                </div>

                <div className="py-2">
                    <label htmlFor="telefonoResponsable">Télefono</label>
                    <input type="text" name="telefonoResponsable" placeholder="1234 567 891"/>
                </div>

                <div className="py-2">
                    <label htmlFor="informacionAdicialResponsable">Información adicional</label>
                    <textarea rows={5} name="informacionAdicialResponsable" id="informacionAdicialResponsable" placeholder="Cualquier Información adicial que consideres relevante..."></textarea>
                </div>

                <button
                 className="w-[100%] py-2 bg-black text-white rounded-lg cursor-pointer"
                >Enviar Solicitud de Inscripción</button>
            </form>
        </div>
    )
}

export default FormularioInscripcion;