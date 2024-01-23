import fs from "fs";
import { yarg } from "./config/plugins/args.plugin";

const {b:base, l:limit, s:showTable} = yarg;

let mensajeSalida = '';
const headerMessage = `
========================================
        Tabla del ${base}
========================================\n
`;
 for (let i = 0; i <= limit; i++) {
  mensajeSalida += `${base} x ${i} = ${base * i}\n`;
 }
 mensajeSalida = headerMessage + mensajeSalida;
 if (showTable) {
        console.log(mensajeSalida);       
 };
 
 const resultPath = `resultado`;
 fs.mkdirSync(resultPath, {recursive: true});

 fs.writeFileSync(`resultado/tabla-${base}.txt`, mensajeSalida);
 console.log('File created!');