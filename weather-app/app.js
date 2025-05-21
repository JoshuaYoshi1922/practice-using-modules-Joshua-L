const yargs = require("yargs");
const chalk = require("chalk");

// Simulate weather data
const weatherData = {
  "New York": "Cold, 31F",
  "Las Vegas": "Hot, 100F",
  Chicago: "Sunny,65F",
};
//Prse comand-line argulments
const argv = yargs.options("city", {
  descrie: "City name",
  type: "string",
  demandOption: true,
}).argv;
//fetch and display weather
const city = argv.city;
const weather = weatherData[city] || "Weather data not available";
console.log(chalk.blue.bold(`weather in ${city};`));
console.log(chalk.green(weather));
