import { Client } from 'discord.js'
import commands from './commands'
import events from './events'

const client = new Client()

client.once('ready', () => {
  console.log(`${client.user.username} is ready!!`)
  client.user.setActivity(
    `on ${client.guilds.size} servers`, 
    { type: 2 }
  )

  client.commands = commands
})

events(client)

export default client