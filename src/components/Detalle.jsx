import { useParams } from "react-router-dom"
import { useEffect, useState } from "react";
import { obtenerProductosPorId } from "../services/productServices";

export default function Detalle() {
    const [producto, setProducto] = useState([])

    const{id} = useParams()

    useEffect(() => {
        obtenerProductosPorId(id).then((data) => setProducto(data));
      }, [id]);
      
    

  return (
    <div className="detalle">
        <img src={producto.image} />
        <div>
        <h3>${producto.title}</h3>
        <blockquote>${producto.description}</blockquote>
        <mark>${producto.price}</mark>
      </div>
    </div>  
  )
}
