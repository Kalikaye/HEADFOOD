import GetConnection from "../conexion/connection";
import { Producto } from "../model/producto";
export const dataProducto: Producto[] = [
    { Id: 1, Nombre: "Tostadas de aguacate", Descripcion: "", Precio: 1000, Categoria: "Desayuno", Imagen: "./img/tostadas-aguacate.jpg"},
    { Id: 2, Nombre: "Bowl de avena con kiwi", Descripcion: "", Precio: 1000, Categoria: "Desayuno", Imagen: "./img/bowl-avenkiwi.jpg"},
    { Id: 3, Nombre: "Crumble de manzana con cereal", Descripcion: "Bowl ", Precio: 2000, Categoria: "Desayuno", Imagen: "./img/crumble-manzana.jpeg" },
    { Id: 4, Nombre: "Yogurt de avellanas con vainilla", Descripcion: "Bowl con avena acompañada de manzana picada y banano, cubierta con mantequilla de mani", Precio: 3000, Categoria: "Desayuno", Imagen: "./img/tostadas-aguacate.jpg" },
    { Id: 5, Nombre: "Tortilla de avena con platano", Descripcion: "5 tortillas cubiertas de maple rellenas con banano y fresa", Precio: 4000, Categoria: "Desayuno", Imagen: "./img/tostada-huevo.jpg" },
    
    { Id: 1, Nombre: "Filete de champiñones", Descripcion: "Filete de lenguado con queso asadero en medio y tocino, encima salsa de champiñones con cebollitas, pimientos rojos, apio, condimentados con mantequilla, sal, pimienta blanca, sal de ajo", Precio: 35000, "Categoria": "Almuerzos", Imagen: "./img/filete-champi.jpg" },
    { Id: 2, Nombre: "Estofado jamaicano", Descripcion: "Este estofado de cordero al curry de inspiración jamaicana agrega calor y un sabor extra sabroso a una receta tradicional de estofado de cordero, con cordero deshuesado en cubos y especias para un guiso", Precio: 40000, "Categoria": "Almuerzos", Imagen: "./img/estofado-jamaicano.jpg" },
    { Id: 3, Nombre: "Quinua con vegetales", Descripcion: "Quinoa cocinada con caldo de vegetales, curcuma, curry, y hiervas provenzales, incorparadas lleva cebolla, ajo, pimientos, zanahoria y tomate sofreidos en aceite de oliva ", Precio: 33000, "Categoria": "Almuerzos", Imagen: "./img/quinua-vegetales.jpg" },
    { Id: 4, Nombre: "Ensalada con pollo", Descripcion: "Filete grueso de pechuga de pollo cocinada al grill, cortada en cubitos sobre una base de lechuga fresca de huerta, tomates cherry picados, aceitunas negras rebanadas, pimientos rojos y amarillos con una reducción de vino blnaco, vinagre balsamico y menta", Precio: 37000, "Categoria": "Almuerzos", Imagen: "./img/bowl-ensapollo.jpg" },
    { Id: 5, Nombre: "Salmon salteado", Descripcion: "Salmon sin piel, mazorquitas de maiz, cebolla morada cortada en rodajas, pimientos salteados en jerez semiseco y mantequilla guee", Precio: 45000, "Categoria": "Almuerzos", Imagen: "./img/salmon-salteado.jpg" },
   
    { Id: 1, Nombre: "Batido de melocotón", Descripcion: "Cremoso batido con trozos pequeños de melocoton fresco", Precio: 15000, Categoria: "Bebidas", Imagen: "./img/bati-meloc.jpg" },
    { Id: 2, Nombre: "Batido de fresa", Descripcion: "Cremoso batido con trozos pequeños de melocoton fresco", Precio: 18000, Categoria: "Bebidas", Imagen: "./img/bati-fresa.jpeg" },
    { Id: 3, Nombre: "Lassie yogur y mango", Descripcion: "Una bebida tradicional de la India a base de yogur que se bebe fría y tiene un gran poder refrescante.", Precio: 16000, Categoria: "Bebidas", Imagen: "./img/las-yogmango.jpg"  },
    { Id: 4, Nombre: "Coctel vino con naranja", Descripcion: "Vino tinto con extracto de jarabe de jengribre, con jugo de limón y naranja, acompañado de hojas de menta ", Precio: 24000, Categoria: "Bebidas", Imagen: "./img/coctel-vino.jpg" },
    { Id: 5, Nombre: "Coctel toronja con piña", Descripcion: "Caballito de tequila, con jugo de toronja y jugo de piña, con cubitos de piña fresca, y decorado con hojas de menta", Precio: 26000, Categoria: "Bebidas", Imagen: "./img/coctel-toron.jpg" },

    { Id: 1, Nombre: "Brownie con helado  ", Descripcion: "", Precio: 18000,Categoria: "Postres", Imagen: "./img/brownie-helado.jpg" },
    { Id: 2, Nombre: "Flan de queso", Descripcion: "", Precio: 17000,Categoria: "Postres" , Imagen: "./img/flan-queso.jpg" },
    { Id: 3, Nombre: "Tarta de arequipe coco ", Descripcion: "", Precio: 20000,Categoria: "Postres" , Imagen: "./img/tarta-arequipe.jpg" },
    { Id: 4, Nombre: "Tarta de durazno ", Descripcion: "", Precio: 22000,Categoria: "Postres" , Imagen: "./img/tarta-durazno.jpg" },
    { Id: 5, Nombre: "Tarta de frambuesa", Descripcion: "", Precio: 20000,Categoria: "Postres" , Imagen: "./img/tarta-frambue.jpg" }

];

export const ListarProducto = async (): Promise<Producto[]> => {
    try {
        // let tsql = "SELECT * FROM Producto";
        // const pool = await GetConnection();
        // let rs = await pool.query<Producto>(tsql);
        // if (rs != undefined) {
        //     return rs.recordset;
        // }
        // return [];

        return dataProducto;
    } catch (error) {
        throw error;
    }
}

export async function CrearProducto(p: Producto): Promise<boolean> {
    try {
        // let sql = `INSERT INTO Producto(Nombre,Descripcion,Precio) VALUES('${p.Nombre}','${p.Descripcion}',${p.Precio})`;
        // const pool = await GetConnection();
        // let rs = await pool.query(sql);
        // if (rs != undefined) {
        //     return rs.rowsAffected.length == 1;
        // }
        // return false;

        if (dataProducto.filter(x => x.Id === p.Id).length > 0) {
            return false;
        }
        
        dataProducto.push(p);
        return true;
    } catch (error) {
        throw error;
    }
}