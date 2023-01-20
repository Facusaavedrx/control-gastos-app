import { useState } from 'react'
import shortid from 'shortid'
import Error from './Error'

function Formulario ({ agregarGasto }) {
  const [nombre, guardarNombre] = useState('')
  const [cantidad, guardarCantidad] = useState(0)
  const [error, guardarError] = useState(false)
  const handleSubmit = e => {
    e.preventDefault()
    if (cantidad < 0 || isNaN(cantidad) || nombre.trim() === '') {
      return guardarError(true)
    }
    guardarError(false)
    const gasto = {
      nombre,
      cantidad,
      id: shortid.generate()
    }
    agregarGasto(gasto)
    guardarCantidad(0)
    guardarNombre('')
  }
  return (
    <form
      onSubmit={handleSubmit}
    >
      <h2>Agrega tus gastos aquí</h2>
      {error ? <Error mensaje='Ambos cambos son obligatorios o presupuesto incorrecto' /> : null}
      <div className='campo'>
        <label>Nombre gasto</label>
        <input
          type='text'
          className='u-full-width'
          placeholder='Ejemplo: Transporte'
          value={nombre}
          onChange={e => guardarNombre(e.target.value)}
        />
      </div>
      <div className='campo'>
        <label>Cantidad gasto</label>
        <input
          type='number'
          className='u-full-width'
          value={cantidad}
          placeholder='Ejemplo: 300'
          onChange={e => guardarCantidad(Number(e.target.value))}
        />
      </div>
      <input
        type='submit'
        className='button-primary u-full-width'
        value='Agregar gasto'
      />
    </form>
  )
}
export default Formulario
