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