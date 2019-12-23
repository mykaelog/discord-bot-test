import fetch, { Headers } from 'node-fetch'
import { Collection, DiscordAPIError, Util } from 'discord.js'
import { toLower } from 'ramda'

export const createCommandCollection = commands => {
  const entries = commands.reduce((acc, cur) => ([...acc, [toLower(cur.name), cur]]), [])
  return new Collection(entries)
}

export const fetchUrl = async (url, params) => {
  const endPoint = new URL(url)
  endPoint.search = params
  console.log(endPoint.toString())
  const response = await fetch(endPoint.toString(), {
    headers: new Headers({
      'Content-Type': 'application/json'
    })
  })

  const body = await response.json()
  if (response.status !== 200) {
    throw Util.makeError({ 
      name: `[${body.statusCode}] ${body.error}`, 
      message: body.message,
    })
  }
  return body
}

