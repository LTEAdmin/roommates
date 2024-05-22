 import express from "express";
import path from "path";
/*import {
  agregarGastosCtrl,
  buscarGastosCtrl,
  borrarGastosCtrl,
} from "../controllers/gastosCtrl.js";
*/
 
import {
    agregarRoommateCtrl,
   // buscarRoommatesCtrl,
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

// - /roommate POST: Almacena un nuevo roommate ocupando random user
router.post("/roommate", agregarRoommateCtrl);

// - /ruta generica
 router.get("*", (req, res) => {
  res.send("Error 404: Página no encontrada, por favor revise la ruta ingresada.");
});

export default router; 

// - /gastos POST
//router.post("/gastos", agregarGastosCtrl);    


// - gastos GET: Devuelve el historial con todos los gastos registrados.
//router.get("/gastos", buscarGastosCtrl);

// - /gasto PUT: Edita los datos de un gasto.
//router.put("/gasto", editarGastoCtrl);


// - /gasto DELETE: Elimina un gasto del historial.
//router.delete("/gasto", borrarGastosCtrl);
 
// - /roommate GET: Devuelve todos los roommates almacenados.
//router.get("/roommates", buscarRoommatesCtrl);