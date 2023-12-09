const fs = require('fs');
//====== Blocking, Synchronous way

// Read file syncronousely .. all we need is to define the path and the caracter encoding method
const result = fs.readFileSync('./txt/input.txt','utf-8')
//console.log(result)

// write file Syncrousely .. all we need is the path where to create the file and the text 
const outputText = `this is the content of the input file : ${result} \n Created at ${Date.now()}`

fs.writeFileSync('./txt/output.txt', outputText)

//====== Non-Blocking, Asynchronous way
fs.readFile('./txt/input.txt', 'utf-8', (err, data) => {
    if(err) {
        console.log('ERROR *');
    }else {
    
        console.log(data)
    }
        
})

fs.writeFile('./txt/final.txt', outputText, (err) => {
    console.log('the file is successful created')
})