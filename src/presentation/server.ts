import express from "express";
import path from "path";

//interface para recibir el puerto desde las variables de entorno
interface Options {
  port: number;
}

//patron presentador de nuestro servidor
export class Server {
  //podria cambiar express por cualquier otro framework sin cambiar toda la app
  private app = express();
  private readonly port: number;

  //Recibe las Props de la interface
  constructor(options: Options) {
    const { port } = options;
    this.port = port;
  }

  //Metodo de la clase
  async start() {
    //usar la carpeta publica
    this.app.use(express.static("public"));

    //como servir una SPA y que se pueda recargar cada vez que accedemos a una ruta nueva
    this.app.get("*", (req, res) => {
      const indexPath = path.join(__dirname + "../../../public/index.html");
      res.sendFile(indexPath);
    });

    this.app.listen(this.port, () => {
      console.log(`App listen on port ${this.port}`);
    });
  }
}
