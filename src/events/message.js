import { validMsg, getAction } from '../utils'
import { RichEmbed } from 'discord.js'

const onMessage = client => async message => {
  if (!validMsg(message)) return
  const [command, ...args] = getAction(message.content)
  
  if (!client.commands.has(command)) return

  try {
    const getCommand = client.commands.get(command)
    await getCommand.execute(message, args)
  } catch (error) {
    message.reply('Ooopss')
    const embed = new RichEmbed()
      .setColor('999999')
      .setTitle(`${error.toString()}`)
      .setFooter(`${client.user.username} ®`)
    
    message.channel.send(embed)
  }
}

export default onMessage
