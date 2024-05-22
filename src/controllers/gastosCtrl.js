import {
    agregarGastosQuery,
    buscarGastosQuery
} from "../querys/gastosQuery";

export const agregarGastosCtrl = async (req, res) => {
    try {
        const result = await agregarGastosQuery(req, res);
        response = await calcularCuentas();
        res.send(result);
    }
    catch (error) { 
        res.status(500).send("Error: " + error);
    };
};

export const buscarGastos = async (req, res) => {
    try {
        const result = await buscarGastosQuery();
        res.json(result);
    }
    catch (error) { 
        res.status(500).send("Error: " + error);
    };
}
export const borrarGastos = async (req, res) => {
    const { id } = req.query;
    try {
        const result = await borrarGastosQuery();
        response = await calcularCuentas();
        res.status(200).send(result);
    }
    catch (error) { 
        res.status(500).send("Error: " + error);
    };
}