// const ganache = require('ganache');
// const { Web3 } = require('web3');

import assert from "assert";
import ganache from "ganache";
import { beforeEach, it } from "mocha";
import { Web3 } from "web3";
import { abiInterface, bytecode } from "../compile.js";
