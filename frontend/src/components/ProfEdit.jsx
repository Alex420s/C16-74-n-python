import React, { useState } from 'react'
import '../stylesheets/ProfesionalEdit.css'

const ProfEdit = () => {
  const [formData, setFormData] = useState({
    first_name: '',
    last_name: '',
    email: '',
    category: '',
    description: '',
    city: '',
    province: '',
    available_times: {}
  });

  const handleChange = () => {
    };

  const handleWeekdayChange = () => {
    };
  
  const handleTimeChange = () => {
    };

  return (
    <>
    <div className="cuerpoEdit">
      <div className='columnas'>
        <div className="info-1">
            <h3>Información personal</h3>
            <div>
                <div className="input-group">
                    <input type="file" id="foto" name="foto" className="form-control" accept="image/*" />
                    <label for="foto" className="camera-icon"><i className="fas fa-camera"></i></label>
                </div>
                <div className="fila">
                    <input className="input-box" type="text" placeholder="Nombre" required name="first_name" value={formData.first_name} onChange={handleChange} />
                    <input type="text" placeholder="Apellido" required name="last_name" value={formData.last_name} onChange={handleChange} />
                </div>
                <div className="fila">
                    <input type="email" name="email" id="email" required placeholder="Email" value={formData.email} onChange={handleChange} />
                </div>
            </div>
        </div>    
        <div className="info-2">
            <h3>Informacion profesional</h3>
            <div>
                <select name="category" id="discipline" value={formData.speciality} onChange={handleChange}>
                    <option value="Boxeo">Boxeo</option>
                    <option value="Zumba">Zumba</option>
                    <option value="Crossfit">Crossfit</option>
                    <option value="Gap">Gap</option>
                    <option value="Pilates">Pilates</option>
                    <option value="Yoga">Yoga</option>
                </select>
                <textarea name="description" id="descripcion" placeholder="Descripción" value={formData.description} onChange={handleChange}></textarea>
            </div>
        </div>
      </div>
      <div className="info-3">
        <h3>Información clases</h3>
        <div className="fila">
            <input type="text" name="city" id="Barrio" required placeholder="Barrio" value={formData.barrio} onChange={handleChange} />
            <input type="text" name="province" id="Provincia" required placeholder="Provincia/Estado" value={formData.province} onChange={handleChange} />
        </div>
        <div id="contenedor">
            <div className="general">
              <div className="posicion">
                <div className="opciones-checkbox">
                  <input type="checkbox" name="monday" id="lunes-opcion" value="monday" onChange={handleWeekdayChange} />
                  <label htmlFor="lunes-opcion">Lunes</label>
                </div>
                <div className="cupo-horario">
                  <div className="cupos">
                    <div className="tiempo">
                      <input type="number" min="0" name="cupoMonMor" placeholder="Cupo" value={formData.cupoMonMor} onChange={handleChange} />
                    </div>
                    <div className="tiempo">
                      <input type="number" min="0" name="cupoMonNoon" placeholder="Cupo" value={formData.cupoMonNoon} onChange={handleChange} />
                    </div>
                    <div className="tiempo">
                      <input type="number" min="0" name="cupoMonAft" placeholder="Cupo" value={formData.cupoMonAft} onChange={handleChange} />
                    </div>
                  </div>
                  <div className="columna-de-tiempo">
                    <div className="tiempo">
                      <input type="time" name="monMorStart" value={formData.available_times.monMorStart} onChange={handleTimeChange} />
                      <input type="time" name="monMorFinish" value={formData.available_times.monMorFinish} onChange={handleTimeChange} />
                    </div>
                    <div className="tiempo">
                      <input type="time" name="monNoonStart" value={formData.available_times.monNoonStart} onChange={handleTimeChange} />
                      <input type="time" name="monNoonFinish" value={formData.available_times.monNoonFinish} onChange={handleTimeChange} />
                    </div>
                    <div className="tiempo">
                      <input type="time" name="monAftStart" value={formData.available_times.monAftStart} onChange={handleTimeChange} />
                      <input type="time" name="monAftFinish" value={formData.available_times.monAftFinish} onChange={handleTimeChange} />
                    </div>
                  </div>
                </div>  
              </div>
              <div className="posicion">
                <div className="opciones-checkbox">
                  <input type="checkbox" name="tuesday" id="martes-opcion" value="tuesday" onChange={handleWeekdayChange} />
                  <label htmlFor="martes-opcion">Martes</label>
                </div>
                <div className="cupo-horario">
                  <div className="cupos">
                    <div className="tiempo">
                      <input type="number" min="0" name="cupoTueMor" placeholder="Cupo" value={formData.cupoTueMor} onChange={handleChange} />
                    </div>
                    <div className="tiempo">
                      <input type="number" min="0" name="cupoTueNoon" placeholder="Cupo" value={formData.cupoTueNoon} onChange={handleChange} />
                    </div>
                    <div className="tiempo">
                      <input type="number" min="0" name="cupoTueAft" placeholder="Cupo" value={formData.cupoTueAft} onChange={handleChange} />
                    </div>
                  </div>
                  <div className="columna-de-tiempo">
                    <div className='tiempo'>
                      <input type="time" name="TueMorStart" value={formData.available_times.tueMorStart} onChange={handleTimeChange} />
                      <input type="time" name="TueMorFinish" value={formData.available_times.tueMorFinish} onChange={handleTimeChange} />
                    </div>
                    <div className='tiempo'>
                      <input type="time" name="TueNoonStart" value={formData.available_times.tueNoonStart} onChange={handleTimeChange} />
                      <input type="time" name="TueNoonFinish" value={formData.available_times.tueNoonFinish} onChange={handleTimeChange} />
                    </div>
                    <div className='tiempo'>
                      <input type="time" name="TueAftStart" value={formData.available_times.tueAftStart} onChange={handleTimeChange} />
                      <input type="time" name="TueAftFinish" value={formData.available_times.tueAftFinish} onChange={handleTimeChange} />
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className='general'>
              <div className="posicion">
                <div className="opciones-checkbox">
                  <input type="checkbox" name="wednesday" id="miercoles-opcion" value="wednesday" onChange={handleWeekdayChange} />
                  <label htmlFor="miercoles-opcion">Miércoles</label>
                </div>
                <div className="cupo-horario">
                  <div className="cupos">
                    <div className="tiempo">
                      <input type="number" min="0" name="cupoWedMor" placeholder="Cupo" value={formData.cupoWedMor} onChange={handleChange} />
                    </div>
                    <div className="tiempo">
                      <input type="number" min="0" name="cupoWedNoon" placeholder="Cupo" value={formData.cupoWedNoon} onChange={handleChange} />
                    </div>
                    <div className="tiempo">
                      <input type="number" min="0" name="cupoWedAft" placeholder="Cupo" value={formData.cupoWedAft} onChange={handleChange} />
                    </div>
                  </div>
                  <div className="columna-de-tiempo">
                    <div className='tiempo'>
                      <input type="time" name="wedMorStart" value={formData.available_times.wedMorStart} onChange={handleTimeChange} />
                      <input type="time" name="wedMorFinish" value={formData.available_times.wedMorFinish} onChange={handleTimeChange} />
                    </div>
                    <div className='tiempo'>
                      <input type="time" name="wedNoonStart" value={formData.available_times.wedNoonStart} onChange={handleTimeChange} />
                      <input type="time" name="wedNoonFinish" value={formData.available_times.wedNoonFinish} onChange={handleTimeChange} />
                    </div>
                    <div className='tiempo'>
                      <input type="time" name="wedAftStart" value={formData.available_times.wedAftStart} onChange={handleTimeChange} />
                      <input type="time" name="wedAftFinish" value={formData.available_times.wedAftFinish} onChange={handleTimeChange} />
                    </div>
                  </div>
                </div>
              </div>  
              <div className="posicion">
                <div className="opciones-checkbox">
                  <input type="checkbox" name="thursday" id="jueves-opcion" value="thursday" onChange={handleWeekdayChange} />
                  <label htmlFor="jueves-opcion">Jueves</label>
                </div>
                <div className="cupo-horario">
                  <div className="cupos">
                    <div className="tiempo">
                      <input type="number" min="0" name="cupoThuMor" placeholder="Cupo" value={formData.cupoThuMor} onChange={handleChange} />
                    </div>
                    <div className="tiempo">
                      <input type="number" min="0" name="cupoThuNoon" placeholder="Cupo" value={formData.cupoThuNoon} onChange={handleChange} />
                    </div>
                    <div className="tiempo">
                      <input type="number" min="0" name="cupoThuAft" placeholder="Cupo" value={formData.cupoThuAft} onChange={handleChange} />
                    </div>
                  </div>
                  <div className="columna-de-tiempo">
                    <div className='tiempo'>
                      <input type="time" name="thuMorStart" value={formData.available_times.thuMorStart} onChange={handleTimeChange} />
                      <input type="time" name="thuMorFinish" value={formData.available_times.thuMorFinish} onChange={handleTimeChange} />
                    </div>
                    <div className='tiempo'>
                      <input type="time" name="thuNoonStart" value={formData.available_times.thuNoonStart} onChange={handleTimeChange} />
                      <input type="time" name="thuNoonFinish" value={formData.available_times.thuNoonFinish} onChange={handleTimeChange} />
                    </div>
                    <div className='tiempo'>
                      <input type="time" name="thuAftStart" value={formData.available_times.thuAftStart} onChange={handleTimeChange} />
                      <input type="time" name="thuAftFinish" value={formData.available_times.thuAftFinish} onChange={handleTimeChange} />
                    </div>
                  </div>  
                </div>
              </div>
            </div>
            <div className='general'>
              <div className="posicion">
                <div className="opciones-checkbox">
                  <input type="checkbox" name="friday" id="viernes-opcion" value="friday" onChange={handleWeekdayChange} />
                  <label htmlFor="viernes-opcion">Viernes</label>
                </div>
                <div className="cupo-horario">
                  <div className="cupos">
                    <div className="tiempo">
                      <input type="number" min="0" name="cupoFriMor" placeholder="Cupo" value={formData.cupoFriMor} onChange={handleChange} />
                    </div>
                    <div className="tiempo">
                      <input type="number" min="0" name="cupoFriNoon" placeholder="Cupo" value={formData.cupoFriNoon} onChange={handleChange} />
                    </div>
                    <div className="tiempo">
                      <input type="number" min="0" name="cupoFriAft" placeholder="Cupo" value={formData.cupoFriAft} onChange={handleChange} />
                    </div>
                  </div>
                  <div className="columna-de-tiempo">
                    <div className='tiempo'>
                      <input type="time" name="friMorStart" value={formData.available_times.friMorStart} onChange={handleTimeChange} />
                      <input type="time" name="friMorFinish" value={formData.available_times.friMorFinish} onChange={handleTimeChange} />
                    </div>
                    <div className='tiempo'>
                      <input type="time" name="friNoonStart" value={formData.available_times.friNoonStart} onChange={handleTimeChange} />
                      <input type="time" name="friNoonFinish" value={formData.available_times.friNoonFinish} onChange={handleTimeChange} />
                    </div>
                    <div className='tiempo'>
                      <input type="time" name="friAftStart" value={formData.available_times.friAftStart} onChange={handleTimeChange} />
                      <input type="time" name="friAftFinish" value={formData.available_times.friAftFinish} onChange={handleTimeChange} />
                    </div>
                  </div>  
                </div>
              </div>
              <div className="posicion">
                <div className="opciones-checkbox">
                  <input type="checkbox" name="saturday" id="sabado-opcion" value="saturday" onChange={handleWeekdayChange} />
                  <label htmlFor="sabado-opcion">Sábado</label>
                </div>
                <div className="cupo-horario">
                  <div className="cupos">
                    <div className="tiempo">
                      <input type="number" min="0" name="cupoSatMor" placeholder="Cupo" value={formData.cupoSatMor} onChange={handleChange} />
                    </div>
                    <div className="tiempo">
                      <input type="number" min="0" name="cupoSatNoon" placeholder="Cupo" value={formData.cupoSatNoon} onChange={handleChange} />
                    </div>
                    <div className="tiempo">
                      <input type="number" min="0" name="cupoSatAft" placeholder="Cupo" value={formData.cupoSatAft} onChange={handleChange} />
                    </div>
                  </div>
                  <div className="columna-de-tiempo">
                    <div className='tiempo'>
                      <input type="time" name="satMorStart" value={formData.available_times.satMorStart} onChange={handleTimeChange} />
                      <input type="time" name="satMorFinish" value={formData.available_times.satMorFinish} onChange={handleTimeChange} />
                    </div>
                    <div className='tiempo'>
                      <input type="time" name="satNoonStart" value={formData.available_times.satNoonStart} onChange={handleTimeChange} />
                      <input type="time" name="satNoonFinish" value={formData.available_times.satNoonFinish} onChange={handleTimeChange} />
                    </div>
                    <div className='tiempo'>
                      <input type="time" name="satAftStart" value={formData.available_times.satAftStart} onChange={handleTimeChange} />
                      <input type="time" name="satAftFinish" value={formData.available_times.satAftFinish} onChange={handleTimeChange} />
                    </div>
                  </div>  
                </div>
              </div>
            </div>
          </div>
        </div>
    </div>
    {/*<div className="contenedor-guardar">
       <input className="enviar hover" type="submit" name="guardar" value="Guardar" />
  </div>*/}
  </>
  );
}
    
export default ProfEdit