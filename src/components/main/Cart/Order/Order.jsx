import { React } from 'react'
import { Link } from 'react-router-dom'
import './Order.css'
import '../CartItem/CartItem.css'

function Order({order, name, mail}) {
  return (
    <div className='mt-4 d-flex flex-column align-items-center gap-2'>
        <h2>Compra realizada con exito, {name}</h2>
        <p>Enviamos los detalles de la orden al email {mail}</p>
        <p>id de la orden: <span className='fw-bold text-warning'>{order}</span></p>
        <Link to={'/'}><button className='boton__confirmar'>Ir a la pagina principal</button></Link>        
    </div>
  )
}
export default Order