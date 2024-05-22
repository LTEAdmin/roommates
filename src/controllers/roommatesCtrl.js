 import {
    agregarRoommateQuery,
//    buscarRoommatesQuery,
    calcularGastosQuerys,
} from "../querys/roommatesQuery.js";

export const agregarRoommateCtrl = async (req, res) => {
    try { 
        const result = await agregarRoommateQuery();
        const response = await calcularGastosQuerys();
        res.redirect ("/");
    }
    catch (error) {
        res.status(500).send("Error: " + error);
     }
};
/*
export const buscarRoommatesCtrl = async (req, res) => {
    try {
        const result = await buscarRoommatesQuery();
        res.json(result);
     }
    catch (error) { 
        res.status(500).send("Error: " + error);
    }
};
   */
