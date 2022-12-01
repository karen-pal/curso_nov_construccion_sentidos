import {
  WORDS_LIST,
  WORDS_INPUT_ELEMENT_ID,
  WORDS_SUGGESTIONS_ELEMENT_ID,
  WORDS_SUGGESTIONS_MAX_SIZE,
} from './config.mjs';
import { AppDropdownElement } from './dropdown-element.mjs';
import { fuzzySearch } from './fuzzy-search.mjs';

const fuzzySearchBrowsersList = fuzzySearch(WORDS_LIST, ['shortName', 'longName', 'type']);

/** @type {HTMLInputElement} */
const browserInputElement1 = document.getElementById(WORDS_INPUT_ELEMENT_ID+"1");
const browserInputElement2 = document.getElementById(WORDS_INPUT_ELEMENT_ID+"2");
const browserInputElement3 = document.getElementById(WORDS_INPUT_ELEMENT_ID+"3");

const elementsToSuggest = [browserInputElement1, browserInputElement2,browserInputElement3];

// Filter the browsers list when the browser input changes
elementsToSuggest.forEach(browserInputElement => 
    { browserInputElement.addEventListener('input', () => {
  const searchKeyword = browserInputElement.value;
  const filteredList = fuzzySearchBrowsersList(searchKeyword);
  //console.log(filteredList);
  const cleanFilteredList = filteredList.slice(0, WORDS_SUGGESTIONS_MAX_SIZE).map(el => el.item.longName);
  renderInputSuggestions(browserInputElement, cleanFilteredList);
  //console.log(cleanFilteredList);

})})

/**
 * Renders a dropdown list of suggestions for an input element.
 *
 * @param {HTMLInputElement} inputEl
 * @param {Array<string>} suggestions
 * @returns {void}
 */
const renderInputSuggestions = (inputEl, suggestions) => {
  /**
   * <app-dropdown
   *   [id]="WORDS_SUGGESTIONS_ELEMENT_ID"
   *   [options]="suggestions"
   *   [connectedTo]="inputEl">
   */

  /** @type {AppDropdownElement} */
  const existingEl = document.getElementById(WORDS_SUGGESTIONS_ELEMENT_ID);
  if (existingEl) {
    existingEl.options = suggestions;
    existingEl.connectedTo = inputEl;
    return;
  }

  /** @type {AppDropdownElement} */
  const createdEl = document.createElement('app-dropdown');
  createdEl.id = WORDS_SUGGESTIONS_ELEMENT_ID;
  createdEl.options = suggestions;
  createdEl.connectedTo = inputEl;

  // On click, set the input value to the suggestion
  createdEl.addEventListener('option-select', () => {
    //console.log('option-select', createdEl.selected);
    inputEl.value = createdEl.selected;
    createdEl.remove();
  });
    // disable options dropdown when pressing esc
    window.addEventListener("keydown",  () => {
    if ( event.keyCode === 27 || event.keyCode === 13) {
        createdEl.remove();
    }
    });

  document.documentElement.appendChild(createdEl);
};
