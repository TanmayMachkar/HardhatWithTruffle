const { artifacts } = require('hardhat');
const { Contract } = require('ethers');


const Data = artifacts.require('Data');

contract('Data', (accounts) => {
  it("should return the new data once it's changed", async() => {
    const data = await Data.new('hello macho');
    assert.equal(await data.requestdata(), 'hello macho');
    await data.setdata('hello tanmay');
    assert.equal(await data.requestdata(), 'hello tanmay');
  })
})

//npm install --save-dev @nomiclabs/hardhat-truffle5 @nomiclabs/hardhat-web3 web3