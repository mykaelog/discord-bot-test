import { RichEmbed } from 'discord.js'
import { fetchUrl } from '../utils'
import { defaultFlagRegion, defaultFlagLocale } from '../../config.json'

const endPoint = `https://raider.io/api/v1/mythic-plus/affixes`
const execute = async (msg, args) => {
  const [region, locale] = args
  const body = await fetchUrl(endPoint, new URLSearchParams({ region, locale }))
  if (!body) {
    msg.channel.send('An error occurred trying to get affixes')
    return
  }

  const {
    title, 
    leaderboard_url: url,
    affix_details: affixes
  } = body

  const embed = new RichEmbed({
    title: title,
    description: '',
    fields: affixes.map(aff => ({
      name: aff.name,
      value: `${aff.description} ${aff.wowhead_url}`,
      inline: false
    })),
    footer: "BLA BLA BLA BLA"
  })

  await msg.channel.send(embed)

}

export default {
  name: 'Affix',
  description: 'Gets week affixes',
  execute,
  url: endPoint
}