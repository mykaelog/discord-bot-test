
const execute = async (msg, args) => {
  const sended = await msg.channel.send('Pong')
  sended.edit(
    `Pong! Latency is ${sended.createdTimestamp - msg.createdTimestamp}ms.`
  )
}

export default {
  name: 'Ping',
  description: 'Ping description',
  execute
}