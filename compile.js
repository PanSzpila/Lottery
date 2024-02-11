import path from "path";
import fs from "fs";
import solc from "solc";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const lotteryPath = path.resolve(__dirname, "contracts", "Lottery.sol");
const source = fs.readFileSync(lotteryPath, "utf8");

const input = {
  language: "Solidity",
  sources: {
    "Lottery.sol": {
      content: source,
    },
  },
  settings: {
    outputSelection: {
      "*": {
        "*": ["*"],
      },
    },
  },
};

const compiledContracts = JSON.parse(
  solc.compile(JSON.stringify(input))
).contracts;
export const { abi, evm } = compiledContracts["Lottery.sol"].Lottery;
