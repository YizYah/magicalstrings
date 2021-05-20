import {closingForDelimiters, openingForDelimiters, space, specString} from './regExShared'
import {markupTags} from '../constants'
import {Delimiters} from "../constants/types/general";

export const regExFileText = (delimiters: Delimiters) =>
  openingForDelimiters(delimiters) + markupTags.FILE_INFO +
  space + 'unit:' + specString + ',' +
  space + 'comp:' + specString +
  closingForDelimiters(delimiters)
