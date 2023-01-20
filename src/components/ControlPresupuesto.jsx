import PropTypes from 'prop-types'
import { revisarPresupuesto } from './helper'

function ControlPresupuesto ({ presupuesto, restante }) {
  return (
    <>
      <div className='alert alert-primary'>
        Presupuesto: $ {presupuesto}
      </div>
      <div className={revisarPresupuesto(presupuesto, restante)}>
        Restante: $ {restante}
      </div>
    </>
  )
}
ControlPresupuesto.propTypes = {
  presupuesto: PropTypes.number.isRequired,
  restate: PropTypes.number.isRequired
}
export default ControlPresupuesto
