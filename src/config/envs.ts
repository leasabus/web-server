import "dotenv/config";
import { get } from "env-var";

//Convenciones de nuestras variables de entorno

export const envs = {
  //variable de entorno de nuestro puerto
  PORT: get("PORT").required().asPortNumber(),
};
