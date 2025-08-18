import fs from "fs";
import { calcSum } from "./sum.mjs";

fs.readFile("README.md", "utf8", (err, data) => {
  if (err) {
    console.error("Error reading file: " + err);
    return;
  }
  console.log("File content: " + data);
});

console.log("Reading file...\n");

fs.writeFileSync("README.md", "hi", "utf-8");

calcSum(4, 3);
