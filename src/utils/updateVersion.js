import { fileURLToPath } from "url";
import fs from "fs/promises";
import path from "path";
import dotenv from "dotenv";

// Dapatkan direktori saat ini
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Load the current package.json
const packageJsonPath = path.resolve(__dirname, "../../package.json");
const packageJsonData = await fs.readFile(packageJsonPath, "utf-8");
const packageJson = JSON.parse(packageJsonData);

// Load the .env.dev file
const envStagingPath = path.resolve(__dirname, "../../.env.dev");
const envStagingConfig = dotenv.config({ path: envStagingPath });

// Load the .env.prod file
const envProductionPath = path.resolve(__dirname, "../../.env.prod");
const envProductionConfig = dotenv.config({ path: envProductionPath });

// Ensure the file is loaded
if (envStagingConfig.error) {
  throw envStagingConfig.error;
}

// Ensure the file is loaded
if (envProductionConfig.error) {
  throw envProductionConfig.error;
}

// Extract the current version
let [major, minor, patch] = packageJson.version.split(".").map(Number);

// Custom TIS YYMMDDHHmm
function getCustomTimestamp() {
  const now = new Date();

  const year = String(now.getFullYear()).slice(2); // Get the last two digits of the year
  const month = String(now.getMonth() + 1).padStart(2, "0"); // getMonth() returns 0-11
  const day = String(now.getDate()).padStart(2, "0");
  const hour = String(now.getHours()).padStart(2, "0");
  const minute = String(now.getMinutes()).padStart(2, "0");

  return `${year}${month}${day}${hour}${minute}`;
}

// Custom logic to increment the build number and add a build identifier
const buildNumber = packageJson.buildNumber || 0;
const newBuildNumber = buildNumber + 1;
const buildIdentifier = `build-${getCustomTimestamp()}`;

const version = packageJson.version || 0;
const customVersion = `${major}.${minor}.${patch}.${newBuildNumber}-${buildIdentifier}`;

// Update package.json with the new build number
packageJson.buildNumber = newBuildNumber;

// Variables for env.dev
const newEnvVariableStaging = {
  REACT_APP_VERSION: customVersion,
};

// Variables for env.prod
const newEnvVariableProduction = {
  REACT_APP_VERSION: version,
};

// Merge existing variables with new variables
const updatedEnvStagingConfig = {
  ...envStagingConfig.parsed,
  ...newEnvVariableStaging,
};

// Merge existing variables with new variables
const updatedEnvProductionConfig = {
  ...envProductionConfig.parsed,
  ...newEnvVariableProduction,
};

// Convert updated config to string
const updatedEnvString = Object.entries(updatedEnvStagingConfig)
  .map(([key, value]) => `${key}=${value}`)
  .join("\n");

// Convert updated config to string
const updatedEnvStringProduction = Object.entries(updatedEnvProductionConfig)
  .map(([key, value]) => `${key}=${value}`)
  .join("\n");

// Save the updated package.json
await fs.writeFile(
  packageJsonPath,
  JSON.stringify(packageJson, null, 2),
  "utf8"
);

// Save the updated .env.dev
await fs.writeFile(envStagingPath, updatedEnvString);

// Save the updated .env.prod
await fs.writeFile(envProductionPath, updatedEnvStringProduction);
