import React from 'react'

export const Hero = ({ imageId, historial, onAddElement }) => {
  const divStyle = {
    display: 'block',
    width: '2073px',
    height: '475px'
  };

  const todoElHistorial = [{
    nombre: 'p1',
    valor: 'a1'
  }, {
    nombre: 'p2',
    valor: 'a2'
  }, {
    nombre: 'p3',
    valor: 'a3'
  }, {
    nombre: 'p4',
    valor: 'a4'
  }, {
    nombre: 'p5',
    valor: 'a6'
  }]

  console.log("Cargado Hero")

  const isSelected = (nombre) =>  historial.some(h => h.nombre === nombre)
  
  return (
    <main className="col-md-9 ms-sm-auto col-lg-10 px-md-4"><div className="chartjs-size-monitor"><div className="chartjs-size-monitor-expand"><div className=""></div></div><div className="chartjs-size-monitor-shrink"><div className=""></div></div></div>
      <div className="d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center pt-3 pb-2 mb-3 border-bottom">
        <h1 className="h2">Dashboard - {imageId} </h1>
        <div className="btn-toolbar mb-2 mb-md-0">
          <div className="btn-group me-2">
            <button type="button" className="btn btn-sm btn-outline-secondary">Share</button>
            <button type="button" className="btn btn-sm btn-outline-secondary">Export</button>
          </div>
          <button type="button" className="btn btn-sm btn-outline-secondary dropdown-toggle">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-calendar" aria-hidden="true"><rect x="3" y="4" width="18" height="18" rx="2" ry="2"></rect><line x1="16" y1="2" x2="16" y2="6"></line><line x1="8" y1="2" x2="8" y2="6"></line><line x1="3" y1="10" x2="21" y2="10"></line></svg>
            This week
          </button>
        </div>
      </div>

      <img className="my-4 w-100 chartjs-render-monitor" style={divStyle} src={`https://picsum.photos/id/${imageId}/${800}/${600}`}/>

      <div className='btn-group'>
        {
          todoElHistorial.map(({ nombre, valor }, index) => {
            return (
              <div key={nombre}>
                <button type='button' onClick={() => onAddElement({ nombre, valor })} className={`btn ${isSelected(nombre) ? 'btn-success' : 'btn-outline-success'}`}>
                  {index} - {nombre} - {valor}
                </button>
              </div>
            )
          })
        }
      </div>

    </main>
  )
}