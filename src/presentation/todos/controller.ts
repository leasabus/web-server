/*Maneja la logica de las peticiones
No va a tener metodos estaticos porque necesitamos inyeccion de dependencias
*/

import { Request, Response } from "express";

export class TodosController {
  constructor() {}
  //metodo publico a utilizar en las rutas
  public getTodos = (req: Request, res: Response) => {
    res.json([
      { id: 1, text: "Buy milk", createdAt: new Date().getTime() },
      { id: 2, text: "Wash car", createdAt: new Date().getTime() },
      { id: 3, text: "Study Node", createdAt: new Date().getTime() },
    ]);
  };
}
