const pluralize = require('pluralize')
const inflection = require('inflection')

export function allCaps(text: string) {
  if (text) return inflection.underscore(text).toUpperCase()
}

export function singularLowercaseName(name: string) {
  if (name) return name.charAt(0).toLowerCase() + name.slice(1)
}

export function singularName(name: string) {
  if (name) return inflection.camelize(name)
}

export function pluralName(name: string) {
  if (name) return inflection.camelize(pluralize(name))
}

export function pluralLowercaseName(name: string) {
  if (name) return pluralize(singularLowercaseName(name))
}

export function relationshipsForSource(source: string) {
  if (source) return `${allCaps(source)}_RELATIONSHIPS`
}

export function queryForSource(source: string) {
  if (source) return `SOURCE_${allCaps(source)}_QUERY`
}
