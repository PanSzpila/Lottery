import path from ("path");
import fs from ("fs");
import solc from ("solc");

const lotteryPath = path.resolve(__dirname, "contracts", "Lottery.sol");
const source = fs.readFileSync(lotteryPath, "utf8");
const myContract = solc.compile(source, 1).contracts[":Lottery"];

export default myContract;
//export const bytecode = myContract.bytecode;
export const abiInterface = myContract.interface;
