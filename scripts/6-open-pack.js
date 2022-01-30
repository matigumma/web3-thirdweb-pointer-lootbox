import { sdk } from "./helpers.js";

async function main() {
  const packModuleAddress = '0x27faE207E47D2E03D443835aFe3A698b0F6bb02e';
  const packModule = sdk.getPackModule(packModuleAddress);

  console.log('Opening the pack...');
  const opened = await packModule.open('0');
  console.log('Opened the pack!');
  console.log(opened);
}

try {
  await main();
} catch (error) {
  console.error("Error opening the pack", error);
  process.exit(1);
}