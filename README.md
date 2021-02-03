A lot of constants and some incantations for working with genies. Used with [geenee](https://www.npmjs.com/package/geenee) tools.

![](images/MAGICALSTRINGS-GIF.gif)

You probably won't need to include this directly.  It would make more sense to use tools that access it, such as [copyKat](https://www.npmjs.com/package/copykat).

<!-- toc -->
* [:pushpin: API](#api)
* [:paperclip: Types](##types)
* [:file_folder: Config Files](##config-files)
* [:wrench: Settings](##settings)
* [:triangular_ruler: Constants](##constants)
* [:bookmark: RegEx](##regex)
* [:memo: Functions](##functions)
  <!-- tocstop -->

# :pushpin: API
{This will be filled out soon.}
## :paperclip: Types
Interfaces.
### Configuration
Configuration and subTypes

### Settings (nsInfo)
NsInfo and subTypes
### Backend (schema)
Schema and subTypes

### Custom
CustomCodeByFile and subTypes

### General
* Delimiter
* BoilerPlateInfoType

## :file_folder: Config Files
There are 3 functions for working with config files.
```
const {getConfig} = require('magicalstrings').configs 
```
```
const {setConfig} = require('magicalstrings').configs 
```
```
const {getIgnoredList} = require('magicalstrings').configs 
```


## :wrench: Settings
These functions are for retrieving and updating settings.
```
getNsInfo
```
```
setNsInfo
```

## :triangular_ruler: Constants
### chalkColors
A number of terms used consistently in the UI.

### fileOptions

### parseSpecName

### configuration

### Other Constants

## Types
### custom
custom

### schema
schema

### dingbats
```
dingKats 
```

### nsInfo
nsInfo

## :bookmark: RegEx
A number of Regex utilities.

* regExCleanupText
* regExCustomCleanup
* regExCustomLocation
* regExFileInfo
* regExNewCustomLocation
* regExReplacedCodeSection
* regExObjectValueString
* regExShared
* regExTemplateAbbreviation

## :memo: Functions
Several functions used by genies and copykats.

* inflections
* testCodeDir
* isRequired
* ensureDirectory
* codeNameFromPath
* resolveDir
* inflections
* dirOptions
* removeNpmDependencyPrefix
* copyCodeBaseToNewDir
* fileMatchesCustomFileFilter
* moveOverIgnored
* errorMessage
