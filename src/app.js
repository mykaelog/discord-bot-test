import client from './client'
import { token } from './config.json'


client.once('ready', () => {
  client.user.setActivity('your commands', { type: 2 })
  console.log('I\'m ready!')

  
})

client.login(token)
