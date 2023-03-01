const { ethers } = require('hardhat');

async function main() {
  const [deployer] = await ethers.getSigners();
  console.log('Deploying contracts with the account:', deployer.address);

  const MyContract = await ethers.getContractFactory('Escrow');
  const myContract = await MyContract.deploy(
    '0x1CBd3b2770909D4e10f157cABC84C7264073C9Ec',
    '0x1CBd3b2770909D4e10f157cABC84C7264073C9Ec'
  );

  console.log('MyContract deployed to address:', myContract.address);
}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });
