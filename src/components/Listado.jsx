import PropTypes from 'prop-types'
import Gasto from './Gasto'

function Listado ({ gastos }) {
  return (
    <div className='gastos-realizados'>
      <h2>Listado</h2>
      {gastos.map(gasto => {
        return (
          <Gasto
            key={gasto.id}
            gasto={gasto}
          />
        )
      })}
    </div>
  )
}
Listado.propTypes = {
  gastos: PropTypes.array.isRequired
}
export default Listado
