import React, { useContext } from 'react'
import { NavLink, Link } from 'react-router-dom';
import { Shop } from '../context/CartContext';

export default function Cart() {

    const { cart, removeItem, clearCart } = useContext(Shop);

    return (
        <div className='container'>
            <div className='wrap-table'>
                {cart.length <= 0 ? <div className='no-items'>
                    <h3>No hay ningún elemento en tu carrito :( </h3>
                    <NavLink to={'/'}>Volver a la tienda</NavLink>
                </div> : <table>
                    <thead>
                        <tr>
                            <th>Imagen</th>
                            <th>Nombre</th>
                            <th>Precio</th>
                            <th>Acciones</th>
                        </tr>
                    </thead>
                    <tbody>
                        {cart.map(element => {
                            return (
                                <tr key={element.id}>
                                    <td><img src={element.pictureUrl} alt="Imagen de producto" width='50' /></td>
                                    <td>{element.name}</td>
                                    <td>{element.price}</td>
                                    <td>
                                        <button className='btn btn-danger' onClick={() => removeItem(element.id)}>Eliminar</button>
                                    </td>
                                </tr>
                            )
                        })
                        }
                    </tbody>
                    <tfoot> 
                        <tr align="center">
                            <td className="right" colSpan={1}><button onClick={clearCart} className='btn btn-danger'>Limpiar carrito</button></td>
                            <td className="right" colSpan={3}><Link to='/checkout' className='btn btn-success'>Terminar compra</Link></td>
                        </tr>
                    </tfoot>
                </table>}

            </div>
        </div>
        // <div className='cart'>
        //     {cart.length <= 0 ? <div className='no-items'>
        //         <h2>No hay ningún item añadido a tu carrito :( </h2>
        //         <NavLink to={'/'}><button className='btn btn-success'>Agregar elementos a mi carrito</button></NavLink>
        //     </div> : <div className='list-items-bought'>
        //         <ul>{cart.map(element => {
        //             return (
        //                 <li className="item-bought" key={element.id}>
        //                     <img className='item-description item-image' src={element.pictureUrl} alt="Imagen del elemento" width='50' height='50' />
        //                     <p className='item-description'>{element.name}</p>
        //                     <p className='item-description'>Precio: {element.price}</p>
        //                     <div className='item-buttons'>
        //                         <button className='btn btn-danger' onClick={() => removeItem(element.id)}>Eliminar producto</button>
        //                     </div>
        //                 </li>
        //             )
        //         })}</ul>
        //         <div className='list-buttons'>
        //             <button className='btn btn-success me-3'>Terminar mi compra</button>
        //             <button className='btn btn-danger ms-3' onClick={clearCart}>Eliminar todos los ítems</button>
        //         </div>
        //     </div>}
        // </div>
    )
}
