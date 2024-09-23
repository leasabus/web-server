import { Router } from "express";
import { TodosController } from "./controller";

//Ruta indiviual destinada solo a las todos
export class TodoRoutes {
  static get routes(): Router {
    const router = Router();
    const todoController = new TodosController();

    //Utilizamos la ruta + controlador llamando a su metodo
    router.get("/", todoController.getTodos);

    return router;
  }
}
