const { execSync } = require("child_process");
const [ingore, ignore2, ...args] = process.argv;
execSync(`npm ${args.join(" ")}`, { windowsHide: true, stdio: "inherit" });
