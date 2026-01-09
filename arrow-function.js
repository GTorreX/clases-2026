const greeting = function (name){
    return `hi, ${name}`
}

// arrow function - explicit return
const newGreeting = (name) => {
    return `hi, ${name}`
}


//Arrow function - implicit return
const newGreetingImplicit = name => `hi, ${name}`


// Lexical bingind

const finctionalCharacter = {
    name: 'Uncle Ben',
    messageWithTraditionalFunction: function(message) {
        console.log(`${this.name} says: ${message}`)
 },
    messageWithArrowFunction: message => {
        console.log(`${this.name} says: ${message}`)
 }
}

finctionalCharacter.messageWithTraditionalFunction('with great power, comes great responsibility.')
finctionalCharacter.messageWithArrowFunction('Beware of doctor octopus.')