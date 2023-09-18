import { Producto } from "./Producto";

export const Productos = ({
  productos,
  agregarAFavoritos,
  eliminarDeFavoritos,
}) => {
  return (
    <div className="productos">
      {productos.length > 0 ? (
        productos.map((producto) => (
          <Producto
            key={producto.id}
            producto={producto}
            eliminarDeFavoritos={eliminarDeFavoritos}
            agregarAFavoritos={agregarAFavoritos}
          />
        ))
      ) : (
        <p>No hay productos en la lista</p>
      )}
    </div>
  );
};
