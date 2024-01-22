// run the file: node --env-file=.env deploy.js

import HDWalletProvider from ('@truffle/hdwallet-provider');
import { Web3 } from ('web3');
import { abiInterface, bytecode } from ('./compile');

const provider = new HDWalletProvider(
  process.env.ACCOUNT_SRP,
  process.env.NETWORK_URL + process.env.NETWORK_API_KEY
);
const web3 = new Web3(provider);

const deploy = async () => {
  const accounts = await web3.eth.getAccounts();

  console.log('Attempting to deploy from account', accounts[0]);

  const result = await new web3.eth.Contract(JSON.parse(abiInterface))
    .deploy({ data: bytecode })
    .send({ gas: '1000000', from: accounts[0] });

  console.log(abiInterface);
  console.log("Contract deployed to", result.options.address);
  provider.engine.stop();
};
deploy();
