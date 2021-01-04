/* following are types */
export * from './exports/constants/types/configuration'
export * from './exports/constants/types/nsInfo'
export * from './exports/constants/types/schema'
export * from './exports/constants/types/custom'

/* following is everything else */
export const configs = {
    getConfig: require('./exports/configs/getConfig').getConfig,
    getIgnoredList: require('./exports/configs/getIgnoredList').getIgnoredList,
    setConfig: require('./exports/configs/setConfig').setConfig,
}

export const nsFiles = {
    getNsInfo: require('./exports/nsFiles/getNsInfo').getNsInfo,
    setNsInfo: require('./exports/nsFiles/setNsInfo').setNsInfo,
}

const rawConstants = require('./exports/constants/index')
rawConstants.chalkColors = require('./exports/constants/chalkColors')
rawConstants.fileOptions = require('./exports/constants/fileOptions')
rawConstants.parseSpecName = require('./exports/constants/parseSpecName')
rawConstants.types = {}
// rawConstants.types.configuration = require('./exports/constants/types/configuration')
// rawConstants.types.nsInfo = require('./exports/constants/types/nsInfo')
rawConstants.types.custom = require('./exports/constants/types/custom')
rawConstants.types.dingKats = require('./exports/constants/types/dingKats')
rawConstants.types.schema = require('./exports/constants/types/schema')

rawConstants.Regex = {}
rawConstants.Regex.regExCleanupText = require('./exports/constants/Regex/regExCleanupText')
rawConstants.Regex.regExCustomCleanup = require('./exports/constants/Regex/regExCustomCleanup')
rawConstants.Regex.regExCustomLocation = require('./exports/constants/Regex/regExCustomLocation')
rawConstants.Regex.regExFileInfo = require('./exports/constants/Regex/regExFileInfo')
rawConstants.Regex.regExNewCustomLocation = require('./exports/constants/Regex/regExNewCustomLocation')
rawConstants.Regex.regExObjectValueString = require('./exports/constants/Regex/regExObjectValueString')
rawConstants.Regex.regExReplacedCodeSection = require('./exports/constants/Regex/regExReplacedCodeSection')
rawConstants.Regex.regExShared = require('./exports/constants/Regex/regExShared')
rawConstants.Regex.regExTemplateAbbreviation = require('./exports/constants/Regex/regExTemplateAbbreviation')
export const constants = rawConstants

export const isRequired = require('./exports/isRequired')
export const testCodeDir = require('./exports/testCodeDir')
export const ensureDirectory = require('./exports/ensureDirectory')
export const codeNameFromPath = require('./exports/codeNameFromPath')
export const resolveDir = require('./exports/resolveDir')
export const inflections = require('./exports/inflections')
export const dirOptions = require('./exports/dirOptions')
export const removeNpmDependencyPrefix = require('./exports/removeNpmDependencyPrefix')
export const copyCodeBaseToNewDir = require('./exports/copyCodeBaseToNewDir')
export const fileMatchesCustomFileFilter = require('./exports/fileMatchesCustomFileFilter')
export const moveOverIgnored = require('./exports/moveOverIgnored')
export const errorMessage = require('./exports/errorMessage')
