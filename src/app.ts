import { envs } from "./config/envs";
import { Server } from "./presentation/server";

//funcion anonima autoinvocada
(async () => {
  main();
})();

function main() {
  const server = new Server({
    port: envs.PORT,
  });

  server.start();
}
