 /*import {
    agregarGastosQuery,
    buscarGastosQuery, 
    borrarGastosQuery,
} from "../querys/gastosQuery.js";
import {
    calcularGastosQuerys,
} from "../querys/roommatesQuery.js"

export const agregarGastosCtrl = async (req, res) => {
    try {
        const result = await agregarGastosQuery(req, res);
        response = await calcularGastosQuerys();
        res.send(result);
    }
    catch (error) { 
        res.status(500).send("Error: " + error);
    };
};*/
/*
export const buscarGastosCtrl = async (req, res) => {
    try {
        const result = await buscarGastosQuery();
        res.json(result);
    }
    catch (error) { 
        res.status(500).send("Error: " + error);
    };
}
export const borrarGastosCtrl = async (req, res) => {
    const { id } = req.query;
    try {
        const result = await borrarGastosQuery(id);
        response = await calcularGastosQuerys();
        res.status(200).send(result);
    }
    catch (error) { 
        res.status(500).send("Error: " + error);
    };
} */