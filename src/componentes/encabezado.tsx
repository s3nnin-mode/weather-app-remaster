import '../stylesheet/encabezado.scss';
import { DetallesConIconos } from './detallesconiconos';

export const Encabezado = () => {

    return (
    <section className='encabezados'>

      <div className='primer-encabezado'>

        { /* BOTON PARA ESCOGER LA UNIDAD DE MEDIDA (F | C)*/ }
        <div className='container-btns'>
          <i className="bi bi-three-dots-vertical" />
        </div>

        {/*TEMP ACTUAL*/}

        <div className="current-temp-container">
          <p className='temp font-google-delgada'>15°</p>
          <div className='font-google'>
            <p>C</p>
            <p>F</p>
          </div>
        </div>

        { /*CIUDAD, CIELO, MAS DATOS DEL CLIMA ACTUAL*/ }
        
        <div className='localidad-mas-detalles'>
          <p className='localidad font-google'>Delegacion plyas de Tijuana Baja California MX</p>
          <p className='descripcion-del-cielo font-google-delgada'>clearSky 0%</p>
          <div className='detalles'>
            <p className='font-google-delgada'>Sensacion termica<span className='font-google'>14°</span></p>
            <p className='font-google-delgada'>Temperatura min<span className='font-google'>14°</span></p>
            <p className='font-google-delgada'>Temperatura max<span className='font-google'>16°</span></p>
          </div>
        </div>

        { /*BUSCADOR Y SUGERENCIAS*/ }

        <div className='input-search-container'>
          <div>
            <i className="bi bi-search"></i>
            <input />
          </div>
          <ul>

          </ul>
        </div>

      </div>

      <DetallesConIconos />
      
    </section>
  )
}