const { ethers } = require('hardhat')

async function main() {
  const Staking = await ethers.getContractFactory('Gou_Staking')
  const staking = await Staking.deploy(
    '0x212Fd30e63911B3EFb22d3ab177de3d26b6F5584',
    500,
  )

  await staking.deployed()

  console.log('deployed to:', staking.address)
}

main().catch((error) => {
  console.error(error)
  process.exitCode = 1
})
