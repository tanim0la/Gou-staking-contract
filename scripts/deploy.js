// 0x14e31AAD6E875cC552d24dD177730b1958CC6C02

const { ethers } = require("hardhat")

async function main() {
  const Staking = await ethers.getContractFactory("Gou_Staking")
  const staking = await Staking.deploy(
    "0x796d99FeeFbC1CC820636DED9283AAa21a5C4A9E",
    500,
  )

  await staking.deployed()

  console.log("deployed to:", staking.address)
}

main().catch((error) => {
  console.error(error)
  process.exitCode = 1
})
