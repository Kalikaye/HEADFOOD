import express from 'express';
import * as ProductoController from '../controllers/producto.controller';
import { Producto } from '../model/producto';
import * as Validaciones from '../validators/producto.validator';
const router = express.Router();

router.get('/', (_, res) => {
    ProductoController.GetProducto()
        .then((obj) => {
            res.json(obj);
        }).catch((e) => {
            res.status(500).json(e);
        });
});

router.post('/', Validaciones.ValidateCreate, (req: express.Request, res: express.Response) => {
    ProductoController.PostProducto(req.body as Producto)
        .then((f) => {
            if (f)
                res.status(201).send();
            else
                res.status(500).send()
        }).catch((e) => {
            res.status(500).json(e);
        });
});

export default router;