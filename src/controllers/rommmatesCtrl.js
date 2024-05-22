import {
    agregarRoommateQuery,
    buscarRoommatesQuery
} from "../querys/roommatesQuery.js";

export const agregarRoommateCtrl = async (req, res) => {
    try { 

    }
    catch (error) {
        res.status(500).send("Error: " + error);
     }
};

export const buscarRoommatesCtrl = async (req, res) => {
    try { }
    catch (error) { 
        res.status(500).send("Error: " + error);
    }
};
  
