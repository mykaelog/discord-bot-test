import { concat } from 'ramda'
import { createCommandCollection } from './utils'
import other from './others'
import raiderio from './raiderio'

const commands = concat(other, raiderio)
export default createCommandCollection(commands)