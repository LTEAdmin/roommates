export const agregarGastosQuery = async (req, res) => {
    try { 
        const { name, descripcion, monto } = req.body;
    const id=uuidv4().slice(4,12);    }
    catch (error) {
        res.status(500).send("Error: " + error);
    };
};
