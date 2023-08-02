let table = require("table");
let data, config;

const game = {
  
  data: [
    ["A", "B", "C"],          
    ["D", "E", "F"],
    ["G", "H", "I"],
  ],

  config: {
  
    border: table.getBorderCharacters("ramac"),
  }
    
  let x = table.table(data, config);
  console.log(x)


}

module.exports = game;