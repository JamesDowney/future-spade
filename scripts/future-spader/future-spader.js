/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	// The require scope
/******/ 	var __webpack_require__ = {};
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "main": () => (/* binding */ main)
});

;// CONCATENATED MODULE: external "kolmafia"
const external_kolmafia_namespaceObject = require("kolmafia");
;// CONCATENATED MODULE: ./src/main.ts


function itemSpade(startIndex, endIndex) {
  for (var x = startIndex; x <= endIndex; x++) {
    var itemPage = (0,external_kolmafia_namespaceObject.visitUrl)("inv_equip.php?pwd=&which=2&action=equip&whichitem=".concat(x));

    if (itemPage.includes("Nopers.")) {
      (0,external_kolmafia_namespaceObject.print)("Item ".concat(x, " does not exist."));
    } else {
      var fleamarketPage = (0,external_kolmafia_namespaceObject.visitUrl)("town_sellflea.php?pwd=&whichitem=".concat(x, "&sellprice=&selling=Yep."));
      (0,external_kolmafia_namespaceObject.print)(fleamarketPage.includes("That item cannot be sold or transferred.") ? "Item ".concat(x, " exists but is untradeable.") : "Item ".concat(x, " exists and is tradeable."), "green");
    }
  }
}

function skillSpade(startIndex, endIndex) {
  for (var x = startIndex; x <= endIndex; x++) {
    var skillPage = (0,external_kolmafia_namespaceObject.visitUrl)("desc_skill.php?whichskill=".concat(x, "}&self=true"));

    if (skillPage.includes("No skill found.")) {
      (0,external_kolmafia_namespaceObject.print)("Skill ".concat(x, " does not exist."), "red");
    } else {
      (0,external_kolmafia_namespaceObject.print)("Skill ".concat(x, " exists."), "green");
    }
  }
}

function familiarSpade(startIndex, endIndex) {
  for (var x = startIndex; x <= endIndex; x++) {
    var familiarPage = (0,external_kolmafia_namespaceObject.visitUrl)("desc_familiar.php?which=".concat(x));

    if (familiarPage.includes("No familiar was found.")) {
      (0,external_kolmafia_namespaceObject.print)("Familiar ".concat(x, " does not exist."), "red");
    } else {
      (0,external_kolmafia_namespaceObject.print)("Familiar ".concat(x, " exists."), "green");
    }
  }
}

function outfitSpade(startIndex, endIndex) {
  for (var x = startIndex; x <= endIndex; x++) {
    var skillPage = (0,external_kolmafia_namespaceObject.visitUrl)("desc_outfit.php?whichoutfit=".concat(x));

    if (skillPage.includes("No such outfit is a thing.")) {
      (0,external_kolmafia_namespaceObject.print)("Outfit ".concat(x, " does not exist."), "red");
    } else {
      (0,external_kolmafia_namespaceObject.print)("Outfit ".concat(x, " exists."), "green");
    }
  }
}

function main(argument) {
  if (argument === undefined) {
    (0,external_kolmafia_namespaceObject.abort)("Please provide an argument.");
  }

  var command = argument.split(" ", 3);

  if (command.length !== 3) {
    (0,external_kolmafia_namespaceObject.abort)('Arguments should be formatted as: "item/skill/familiar/outfit start_index end_index"');
  }

  switch (command[0].toLowerCase()) {
    case "item":
      itemSpade(+command[1], +command[2]);
      break;

    case "skill":
      skillSpade(+command[1], +command[2]);
      break;

    case "familiar":
    case "fam":
      familiarSpade(+command[1], +command[2]);
      break;

    case "outfit":
      outfitSpade(+command[1], +command[2]);
      break;

    default:
      (0,external_kolmafia_namespaceObject.print)("Invalid argument.", "red");
      break;
  }
}
var __webpack_export_target__ = exports;
for(var i in __webpack_exports__) __webpack_export_target__[i] = __webpack_exports__[i];
if(__webpack_exports__.__esModule) Object.defineProperty(__webpack_export_target__, "__esModule", { value: true });
/******/ })()
;