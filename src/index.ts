import { generate } from "markplus-charts";
import { writeFileSync } from "fs";

const main = async () => {
  const svgStr = await generate("A -> B");
  console.log(svgStr);
  writeFileSync("output.svg", svgStr);
};
main();
