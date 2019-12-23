import onMessage from './message'
import onGuildMemberAdd from './guildMemberAdd'

const events = client => {
  client.on('message', onMessage(client))
  client.on('guildMemberAdd', onGuildMemberAdd(client))
}

export default events