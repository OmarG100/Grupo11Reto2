'use strict';

import foods from "././modules/foods.js";
import header from "././modules/header.js";
import characters from "././modules/character.js";

const documentReady = () => {
  header();
  characters();
  // foods();
  
};

document.addEventListener('DOMContentLoaded', documentReady);