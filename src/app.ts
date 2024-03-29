import { yarg } from "./config/plugins/args.plugin";
import { ServerApp } from "./presentation/server-app";

// console.log(process.argv);

(async() => {
  await main();
  console.log('end program');
}) ();

async function main() {
  const {b:base, l:limit, s:showTable, n:name, d:destination} = yarg
  ServerApp.run({base, limit, showTable, name, destination });
  // console.log(yarg);
  // console.log(yarg.b);
}

