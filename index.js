import openai from './config/open_ai.js'
import readlineSync from 'readline-sync';
import colors from 'colors';

const main = () => {
    console.log(colors.bold.bgGreen.white('TERMICHAT WELCOMES YOU!'))
    console.log(colors.bold.green('Termichat is a chatbot that can talk to you about anything.'))
    console.log(colors.bold.green('It is powered by OpenAI\'s GPT-3 API.'))
    console.log(colors.bold.yellow('Type exit to exit this session.'))

    let messagesSession = []
    console.log('\n\n')
    const name = readlineSync.question(colors.bold.yellow('What is your name? '))
    console.log(colors.bold.bgYellow.white('Termichat: ') + colors.bold.green(`Hello ${name}!`))
    while(true) {
        const prompt = readlineSync.question(colors.bold.bgYellow.white('You: '))
        if(prompt.toLowerCase() === 'exit') {
            console.log(colors.bold.bgYellow.white('Termichat: ') + colors.bold.green(`Bye ${name}!`))
            break
        }

        
    }
}

main()