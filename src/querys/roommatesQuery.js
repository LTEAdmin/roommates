import fs from "fs";
import { v4 as uuidv4 } from "uuid";
import path from "path";
const __dirname = import.meta.dirname; 

const apiUser = "https://randomuser.me/api";

 
export const agregarRoommateQuery = async (req,res) => {
  try {
    const response = await fetch(apiUser);
    const { results } = await response.json();
    const data = {
      id: uuidv4().slice(0, 4),
      name: results[0].name.first + " " + results[0].name.last,
      email: results[0].email,
      debe: 0,
      recibe: 0,
    };
    let roommateData  = JSON.parse(
      fs.readFileSync("./data/roommates.json", "utf8")
    );
    roommateData.roommates.push(data);
    fs.writeFileSync("/data/roommates.json", JSON.stringify({ roommateData }));
  } catch (error) {
    console.log("Error: " + error);
  }
};

export const calcularGastosQuerys= async () => {
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

/*
export const buscarRoommatesQuery = async () => {
  try {
    const response = await JSON.parse(fs.readyFileSync(".data/roommates.Json", "utf8"))
    return (response);
  } catch (error) {
    console.log("Error: " + error);
  }
};
 */
