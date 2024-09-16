import express, { Router } from "express";
import path from "path";

//interface para recibir el puerto desde las variables de entorno
interface Options {
  port: number;
  routes: Router;
}

//patron presentador de nuestro servidor
export class Server {
  //podria cambiar express por cualquier otro framework sin cambiar toda la app
  private app = express();
  private readonly port: number;
  private readonly routes: Router;

  //Recibe las Props de la interface
  constructor(options: Options) {
    const { port, routes } = options;
    this.port = port;
    this.routes = routes;
  }

  //Metodo de la clase
  async start() {
    //* Public folder
    this.app.use(express.static("public"));

    //* Routes middleware
    this.app.use(this.routes);

    //*como servir una SPA y que se pueda recargar cada vez que accedemos a una ruta nueva
    this.app.get("*", (req, res) => {
      const indexPath = path.join(__dirname + "../../../public/index.html");
      res.sendFile(indexPath);
    });

    this.app.listen(this.port, () => {
      console.log(`App listen on port ${this.port}`);
    });
  }
}
