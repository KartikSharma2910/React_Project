let cp=require("child_process");
// console.log("Trying to open code");
// cp.execSync("code");
// console.log("Opened code");

let output=cp.execSync(node,file.js);
console.log(output);
