import fs from "fs";
import { v4 as uuidv4 } from 'uuid';

export const agregarGastosQuery = async (req, res) => {
    try {
        const { name, descripcion, monto } = req.body;
        const id = uuidv4().slice(4, 12);
        const gastos = JSON.parse(fs.readFileSync("../data/gastos.Json", "utf8"));
        gastos.push({ id, name, descripcion, monto });
        fs.writeFileSync("../data/gastos.Json", JSON.stringify({ gastos }));
        return (gastos);
    }
    catch (error) {
        res.status(500).send("Error: " + error);
    };
};

export const buscarGastosQuery = async () => {
    try {
        const gastos = JSON.parse(fs.readFileSync("../data/gastos.Json", "utf8"));
        return (gastos);
    }
    catch (error) {
        res.status(500).send("Error: " + error);
    };
}

export const borrarGastosQuery = async (id) => {
    try {
        const gastos = JSON.parse(fs.readFileSync("../data/gastos.Json", "utf8"));
        fs.writeFileSync("../data/gastos.Json", JSON.stringify({ gastos }));
        gastos=gastos.filter((g) => g.id !== id);
        fs.writeFileSync("../data/gastos.Json", JSON.stringify({ gastos }));
    }
    catch (error) {
        res.status(500).send("Error: " + error);
    };
}