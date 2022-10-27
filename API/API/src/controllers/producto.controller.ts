import { Producto } from "../model/producto"
import * as DaoProducto from '../dao/producto.dao'

export const GetProducto = async (): Promise<Producto[]> => {
    try {
        let p: Producto[] = await DaoProducto.ListarProducto();
        return p;
    } catch (error) {
        throw error;
    }
}


export const PostProducto = async (P: Producto): Promise<boolean> => {
    try {
        return DaoProducto.CrearProducto(P);
    } catch (error) {
        throw error;
    }
}