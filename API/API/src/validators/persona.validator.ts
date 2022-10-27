import { check } from "express-validator";
import express from 'express';
import { Validar } from "../helpers/Validation.helper";

export const ValidateCreate = [
    check('Nombre')
        .exists()
        .withMessage("La propiedad es requeridad")
        .notEmpty()
        .withMessage("NO vacio"),
    (req: express.Request, res: express.Response, next: () => any) => {
        Validar(req, res, next);
    }

];