A lot of constants and some incantations for working with genies. Used with [ns-flip](https://www.npmjs.com/package/ns-flip) tools.

![](images/MAGICALSTRINGS-GIF.gif)

You probably won't need to include this directly.  It would make more sense to use tools that access it, such as [copyKat](https://www.npmjs.com/package/copykat).

# API
{This will be filled out soon.}
## Types
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

## Config Files
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


## Settings
These functions are for retrieving and updating settings.
```
getNsInfo
```
```
setNsInfo
```

## Constants
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

## RegEx
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

## Functions
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
