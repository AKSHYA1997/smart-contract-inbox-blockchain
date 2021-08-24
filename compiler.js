// compile code will go here
const path = require("path");
const fs = require("fs");
const solc = require("solc");

const inboxPath = path.resolve(__dirname, "contracts", "Inbox.sol"); // this will give us the path of Inbox.sol and
const source = fs.readFileSync(inboxPath, "utf8");

console.log(solc.compile(source, 1));
module.exports = solc.compile(source, 1).contracts[":Inbox"]; // 1 is for number of files to be compiled
