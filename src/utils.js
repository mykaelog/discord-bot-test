import { startsWith, pipe, replace, toLower, split } from 'ramda'
import { prefix } from './config.json'

const traceM = msg => val => console.log(msg, val) || val
const trace = val => console.log(val) || val
export const validMsg = message => !message.author.bot && startsWith(prefix, message.content)
export const getAction = pipe(
  replace(prefix, ''),
  toLower,
  split(' ')
)