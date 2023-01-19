import { useState } from 'react'

function Formulario () {
  const [nombre, guardarNombre] = useState('')
  const [cantidad, guardarCantidad] = useState(0)
  const handleSubmit = e => {
    e.preventDefault()
  }
  return (
    <form
      onSubmit={handleSubmit}
    >
      <h2>Agrega tus gastos aquí</h2>
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
