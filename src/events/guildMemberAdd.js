import { defaultRole } from '../config.json'

const onGuildMemberAdd = client => async member => {
  try {
    const memberRole = member.guild.roles.find(r => r.name === defaultRole)
    member.addRole(memberRole)
    console.log(
      `${member.guild.name} has been added to role ${memberRole.name}`
    )
  } catch (error) {
    console.log(`Bot has not permission to perform the requested action`)
  }
}

export default onGuildMemberAdd