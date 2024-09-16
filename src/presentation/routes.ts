import { Router } from "express";

//router de la aplicacion, se utiliza a traves de un middleware
//TODO: Crear controlador para delegar responsabilidades
export class AppRoutes {
  static get routes(): Router {
    const router = Router();

    router.get("/api/todos", (req, res) => {
      res.json([
        { id: 1, text: "Buy milk", createdAt: new Date().getTime() },
        { id: 2, text: "Wash car", createdAt: new Date().getTime() },
        { id: 3, text: "Study Node", createdAt: new Date().getTime() },
      ]);
    });

    return router;
  }
}
