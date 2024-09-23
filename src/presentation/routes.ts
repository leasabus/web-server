import { Router } from "express";
import { TodosController } from "./todos/controller";
import { TodoRoutes } from "./todos/routes";

//router general de la aplicacion, se utiliza a traves de un middleware
export class AppRoutes {
  static get routes(): Router {
    const router = Router();

    //Utilizamos la ruta + controlador llamando a su metodo
    router.use("/api/todos", TodoRoutes.routes);

    return router;
  }
}
