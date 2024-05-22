import express from "express";
import path from "path";
import { } from "../controllers/gastosCtrl.js";
import {
    agregarRoommateCtrl,
    buscarRoommatesCtrl,
 } from "../controllers/roommatesCtrl.js";

const router = express.Router();
const __dirname = import.meta.dirname;

// GET: Devuelve la aplicación cliente disponible en el apoyo de la prueba. 
router.get("/", (req, res) => {
    try {
         res.sendFile(path.join(__dirname, "../views/index.html"));
     }
    catch (error) {
         console.log("Error: " + error);
    }; 
});

// - /roommate GET: Devuelve todos los roommates almacenados.
router.get("/roommates", buscarRoommatesCtrl);

// - /roommate POST: Almacena un nuevo roommate ocupando random user
router.post("/roommate", agregarRoommateCtrl);

// - /gastos POST
router.post("/gastos", agregarGastos);    


// - gastos GET: Devuelve el historial con todos los gastos registrados.
router.get("/gastos", buscarGastos);

// - /gasto PUT: Edita los datos de un gasto.
router.put("/gasto", editarGasto);


// - /gasto DELETE: Elimina un gasto del historial.
router.delete("/gasto", borrarGastos);

// - /ruta generica
router.get("*", (req, res) => {
  res.send("Error 404: Página no encontrada, por favor revise la ruta ingresada.");
});

export default router;