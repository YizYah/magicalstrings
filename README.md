A lot of constants and some incantations for working with genies. Used with [geenee](https://www.npmjs.com/package/geenee) tools.

![magicalstrings gif](images/magicalstrings-new.gif)

You probably won't need to include this directly.  It would make more sense to use tools that access it, such as [copyKat](https://www.npmjs.com/package/copykat).

<!-- toc -->
* [:pushpin: API](#api)
* [:paperclip: Types](#types)
* [:file_folder: Config Files](#config-files)
* [:wrench: Settings](#settings)
* [:triangular_ruler: Constants](#constants)
* [:bookmark: RegEx](#regex)
* [:memo: Functions](#functions)
  <!-- tocstop -->

# <a name="api"></a>:pushpin: API
{This will be filled out soon.}
## <a name="types"></a>:paperclip: Types
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

## <a name="config-files"></a>:file_folder: Config Files
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


## <a name="settings"></a>:wrench: Settings
These functions are for retrieving and updating settings.
```
getNsInfo
```
```
setNsInfo
```

## <a name="constants"></a>:triangular_ruler: Constants
A lot of these constants are being moved out gradually to more relevant packages.

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
Please note: the `Schema` type has been moved to the [stack-info](https://www.npmjs.com/package/stack-info) package.  This is a **Breaking Change**!!!

### dingbats
```
dingKats 
```

### nsInfo
nsInfo

## <a name="regex"></a>:bookmark: RegEx
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

## <a name="functions"></a>:memo: Functions
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
