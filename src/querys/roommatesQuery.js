import fs from "fs";
import { v4 as uuid } from "uuid";

const apiUser = "https://randomuser.me/api";

const calcularGastos= async () => {
  try {
    const { roommates } = JSON.parse(fs.readyFileSync("../data/roommates.Json", "utf8"));
    const { gastos } = JSON.parse(fs.readyFileSync("../data/gastos.Json", "utf8"));
    for (let i = 0; i < roommates.length; i++) {
      for (let j = 0; j < gastos.length; j++) {
        if (roommates[i].id === gastos[j].roommate) {
          roommates[i].debe = gastos[j].monto;
          roommates[i].recibe = gastos[j].monto;
        }
      }
    };
    fs.writeFileSync("../data/roommates.Json", JSON.stringify({ roommates }));
  }
  catch (error) {
        console.log("Error: " + error);
   };
}
export const agregarRoommateQuery = async (datos) => {
  try {
    const response = await fetch(apiUser);
    const { results } = await response.json();
    const data = {
      id: uuid(),
      name: results[0].name.first + " " + results[0].name.last,
      email: results[0].email,
      debe: 0,
      recibe: 0
    };
    const { roommates } = JSON.parse(fs.readyFileSync("../data/roommates.Json", "utf8"))
    roommates.push(data);
    fs.writeFileSync("../data/roommates.Json", JSON.stringify({ roommates }));
    datos = await calcularGastos();

  }
     catch (error) {
    console.log("Error: " + error);
  }
};

export const buscarRoommatesQuery = async () => {
  try {
    const response = await JSON.parse(fs.readyFileSync(".data/roommates.Json", "utf8"))
    return (response);
  } catch (error) {
    console.log("Error: " + error);
  }
};

