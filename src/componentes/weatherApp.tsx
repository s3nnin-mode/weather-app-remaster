import { DetallesConIconos } from './detallesconiconos';
import { CartaInfo } from './cartas';
import { Molinos } from './molinos';
import '../stylesheet/weatherApp.scss';


export const WeatherApp = () => {

    return (
      <div className='App container-fluid'>
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
              <ul className='sugerencias-container'>

              </ul>
            </div>

          </div>

          <DetallesConIconos />
        </section>
        <section className='seccion-tablas'>
          <div className='cartas-y-pronostico'>
            <div className='cartas-de-dias'>
              <CartaInfo />
            </div>
            <div className='pronostico-del-dia-seleccionado'>

            </div>
          </div>
          <div className='viento-y-sol'>
            <div className='viento-container'>
              <Molinos />
              <div className='detalles-del-viento'>
                <div>
                  <p>Velocidad del viento:</p>
                  <p>7K/H</p>
                </div>
                <div>
                  <p>Direccion del viento:</p>
                  <p>290°</p>
                </div>
              </div>
            </div>
            <div className='sol-container'>
            </div>
          </div>

        </section>
      </div>
  )
}