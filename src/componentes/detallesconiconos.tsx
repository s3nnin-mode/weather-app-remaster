import '../stylesheet/weatherApp.scss';

interface Props {
  data: string;
  iconClass: string; 
}

export const DetallesConIconos = () => {

  return (
    <div className='segundo-encabezado'>
      <div className='detalle'>
        <i className="bi bi-moisture" />
        <div>
          <p>Humedad</p>
          <p>50%</p>
        </div>
      </div>
      <div className='detalle'>
        <i className="bi bi-eye" />
        <div>
          <p>Visibilidad</p>
          <p>10k</p>
        </div>
      </div>
      <div className='detalle'>
        <i className="bi bi-thermometer" />
        <div>
          <p>Presion</p>
          <p>1017mb</p>
        </div>
      </div>
    </div>
  )
}