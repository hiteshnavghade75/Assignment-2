const readLine = require('readline')

const readFunc = readLine.createInterface({
    input : process.stdin,
    output : process.stdout
})

function Input(message){
    return new Promise((callbackFunc,err) => {
        readFunc.question(message,(input) => {
            callbackFunc(input);
        }, function(){
            err()
        })
    })
}

async function readInput(){
    const name = await Input("Please enter your name:")
    console.log("Hello " + name)
}

readInput()
