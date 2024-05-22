import express from "express";
import path from "path";
import router from "./src/routers/routes.js";

const app = express();
import { dirname } from "path";
import { fileURLToPath } from "url";

const __dirname = dirname(fileURLToPath(import.meta.url));
const port = process.env.PORT || 3000;


//rutas estaticas a traves de middlewares

/* app.use("/img", express.static(path.join(__dirname, "/assets/img")));
app.use("/views", express.static(__dirname + "/views"));
app.use(express.urlencoded({ extended: false })); */






//middlewares
app.use(express.json());

//static files
app.use("/src", express.static(path.join(__dirname, "src")));
//app.use(express.static( '/src'));
//app.use(express.static('src' )));

//routes
app.use("/", router);

app.listen(
  port,
  console.log(`Example app listening on port http://localhost:${port}`)
);
