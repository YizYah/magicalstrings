import {Configuration} from '../constants/types/configuration'

const fs = require('fs-extra')
const yaml = require('js-yaml')

export async function getConfig(templateDir: string) {
  let config: Configuration
  const configFile = `${templateDir}/config.yml`
  try {
    const configYaml = fs.readFileSync(configFile, 'utf8')
    config = await yaml.load(configYaml)
  } catch (error) {
    throw new Error(`error finding the config file ${configFile}.
It may be that the template location is faulty, or that the file does not exist
or is not properly set up:
${error}`)
  }
  return config
}
