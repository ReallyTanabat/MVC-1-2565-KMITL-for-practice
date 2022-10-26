// const express = require('express');
// const chalk = require('chalk');
// const debug = require('debug')('app');
// const app = express();
// const port = 3100;

// app.get("/", (req, res)=>{
//     res.send("Hi PaDev Community");
// })

// app.listen(port, ()=>{
//     debug("Listening on port " + chalk.green(port));
// })

// ----------------------------------------Callback function-----------------------------------------------
// function calculate(x,y){
//     setTimeout(() => {
//         return x+y
//     }, 3000);
// }
// function display(result){
//     console.log('ผลบวก = ',result)
// }
// problem before using callback ผลบวก = undefined
// const sum = calculate(1,2)
// display(sum)


function calculate(x,y,callback){
    console.log("Calculating...")
    setTimeout(() => {
        const sum = x+y
        callback(sum)
    }, 3000);
}
function display(result){
    console.log(`ผลบวก = ${result}`)
}
calculate(1,2,display) 

 