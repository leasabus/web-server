import http from "http";
import fs from "fs";

const server = http.createServer((req, res) => {
  console.log(req.url);

  if (req.url === "/") {
    //buscamos el archivo html
    const htmlDoc = fs.readFileSync("./public/index.html", "utf-8");
    //lo devolvemos en su formato
    res.writeHead(200, { "Content-Type": "text/html" });
    res.end(htmlDoc);
    return;
  }

  //respuestas para archivos estaticos css y js
  if (req.url?.endsWith(".js")) {
    res.writeHead(200, { "Content-Type": "aplication/javascript" });
  } else if (req.url?.endsWith(".css")) {
    res.writeHead(200, { "Content-Type": "text/css" });
  }
  //respuesta aplicando el css y js
  const resposeContent = fs.readFileSync(`./public${req.url}`, "utf-8");
  res.end(resposeContent);
});

server.listen(8080, () => {
  console.log("Server running on port 8080");
});
