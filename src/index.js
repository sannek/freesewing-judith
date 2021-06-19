import freesewing from '@freesewing/core'
import plugins from '@freesewing/plugin-bundle'
import config from '../config'
import draftFront from './front'
import Maude from 'maude'

// Create new design
const Pattern = new freesewing.Design(config, plugins)

// Attach parts from Maude to prototype
Pattern.prototype.draftBaseFront = function (part) {
  return new Maude(this.settings).draftFront(part)
}
Pattern.prototype.draftBaseBack = function (part) {
  return new Maude(this.settings).draftBack(part)
}

// Attach the draft methods to the prototype
Pattern.prototype.draftFront = draftFront

export default Pattern
