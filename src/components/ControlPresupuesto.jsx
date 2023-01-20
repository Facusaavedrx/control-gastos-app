function ControlPresupuesto ({ presupuesto, restante }) {
  return (
    <>
      <div className='alert alert-primary'>
        Presupuesto: $ {presupuesto}
      </div>
      <div>
        Restante: $ {restante}
      </div>
    </>
  )
}
export default ControlPresupuesto
