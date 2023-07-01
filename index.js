import openai from './config/open_ai.js'
import readlineSync from 'readline-sync';
import colors from 'colors';

const main = async() => {
    console.log(colors.bold.bgGreen.white('TERMICHAT WELCOMES YOU!'))
    console.log(colors.bold.green('Termichat is a chatbot that can talk to you about anything.'))
    console.log(colors.bold.green('It is powered by OpenAI\'s GPT-3 API.'))
    console.log(colors.bold.yellow('Type exit to exit this session.'))

    let messagesSession = []
    console.log('\n\n')

    const name = readlineSync.question(colors.bold.yellow('What is your name? '))
    messagesSession.push(['assistant', 'What is your name?'])
    messagesSession.push(['user', name])

    console.log()
    console.log(colors.bold.bgYellow.white('Termichat: ') + colors.bold.green(`Hello ${name}!`))
    messagesSession.push(['assistant', `Hello ${name}!`])

    while(true) {
        console.log()
        const prompt = readlineSync.question(colors.bold.yellow('You: ')+' ')
        if(prompt.toLowerCase() === 'exit') {
            console.log()
            console.log(colors.bold.bgYellow.white('Termichat: ')+ ' ' + colors.bold.green(`Bye ${name}!`))
            break
        }

        try{
            const messages = messagesSession.map((msg) => ({
                role: msg[0],
                content: msg[1]
            }))

            messages.push({ role: 'user', content: prompt })

            const response = await openai.createChatCompletion({
                model: 'gpt-3.5-turbo',
                messages: messages,
            })
            console.log()
            const answer = response.data.choices[0].message.content
            console.log(colors.bold.green('Termichat: ')+ ' ' + answer)

            messagesSession.push(['user', prompt])
            messagesSession.push(['assistant', answer])
        }
        catch(err) {
            console.log()
            console.log(colors.bold.bgRed.white('Termichat: ') + colors.bold.red(err))
        }
    }
}

main()