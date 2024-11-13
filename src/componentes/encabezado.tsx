import '../stylesheet/encabezado.scss';

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
          <p className='temp'>15°</p>
          <div>
            <p>C</p>
            <p>F</p>
          </div>
        </div>

        { /*CIUDAD, CIELO, MAS DATOS DEL CLIMA ACTUAL*/ }
        
        <div>
          <p>Delegacion plyas de Tijuana Baja California MX</p>
          <p>clearSky 0%</p>
          <div>
            <p>Sensacion termica<span>14°</span></p>
            <p>Temperatura min<span>14°</span></p>
            <p>Temperatura max<span>16°</span></p>
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

      
    </section>
  )
}