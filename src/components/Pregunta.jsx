import PropTypes from 'prop-types'
import { useState } from 'react'
import Error from './Error'

function Pregunta ({ guardarPresupuesto, guardarRestante, actualizarPregunta }) {
  const [cantidad, guardarCantidad] = useState(0)
  const [error, guardarError] = useState(false)
  const handleChange = e => {
    guardarCantidad(Number(e.target.value))
  }
  const handleSubmit = e => {
    e.preventDefault()
    if (cantidad < 0 || isNaN(cantidad)) {
      return guardarError(true)
    }
    guardarError(false)
    guardarPresupuesto(cantidad)
    guardarRestante(cantidad)
    actualizarPregunta(false)
  }
  return (
    <>
      <h2>Coloca tu presupuesto</h2>
      {error ? <Error mensaje='El presupuesto es incorrecto' /> : null}
      <form
        onSubmit={handleSubmit}
      >
        <input
          type='number'
          className='u-full-width'
          placeholder='Ejemplo: 1000'
          onChange={handleChange}
        />
        <input
          type='submit'
          className='button-primary u-full-width'
          value='Definir presupuesto'
        />
      </form>
    </>
  )
}
Pregunta.propTypes = {
  guardarPresupuesto: PropTypes.func.isRequired,
  guardarRestante: PropTypes.func.isRequired,
  actualizarPregunta: PropTypes.func.isRequired
}
export default Pregunta
