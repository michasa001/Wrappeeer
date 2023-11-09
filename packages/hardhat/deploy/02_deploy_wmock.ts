import { HardhatRuntimeEnvironment } from "hardhat/types";
import { DeployFunction } from "hardhat-deploy/types";


const deployYourContract: DeployFunction = async function (hre: HardhatRuntimeEnvironment) {

  const { deployer } = await hre.getNamedAccounts();
  const { deploy, get } = hre.deployments;

  const MOCK = await get("MOCK");
  const mockAddress = MOCK.address;

  await deploy("WMOCK", {
    from: deployer,
    args: [mockAddress],
    log: true,

    autoMine: true,
  });


};

export default deployYourContract;

deployYourContract.tags = ["Wmock"];
