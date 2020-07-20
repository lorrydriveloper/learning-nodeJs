import * as fs from "fs";

// fs.writeFile()
// fs.readFile()
// ~There is a lot on the fs module it worth experimenting with it //

fs.writeFileSync("./test.txt", "Hello world from file System", "utf8");
fs.appendFileSync("./test.txt", "\nnew line on my file");

const file = fs.readFileSync("./test.txt", { encoding: "utf-8" });
console.log(file);
