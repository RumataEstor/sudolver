/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/main.ts");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var inputs = [];
var LSIZE = 9 * 9;
function solve() {
    var solutions = document.getElementsByClassName('js-solutions')[0];
    solutions.innerHTML = '';
    var values = new Int8Array(LSIZE);
    for (var i = 0; i < LSIZE; ++i) {
        var value = parseInt(inputs[i].value);
        values[i] = value;
    }
    console.log(values); /**/
    /* const values = [
        0, 8, 5, 9, 0, 1, 0, 0, 3,
        0, 0, 2, 3, 0, 5, 6, 0, 0,
        4, 0, 7, 2, 0, 0, 0, 0, 0,
        0, 1, 6, 7, 0, 0, 0, 0, 8,
        0, 5, 0, 0, 1, 0, 0, 6, 0,
        2, 0, 0, 0, 0, 9, 5, 1, 0,
        0, 0, 0, 0, 0, 4, 3, 0, 6,
        0, 0, 9, 5, 0, 7, 8, 0, 0,
        8, 0, 0, 1, 0, 3, 2, 7, 0
    ]; /**/
    /* const values = [
        0, 0, 0, 0, 7, 8, 0, 6, 0,
        0, 0, 0, 3, 0, 0, 8, 0, 2,
        0, 0, 8, 0, 0, 0, 0, 0, 1,
        0, 8, 5, 1, 4, 0, 0, 0, 0,
        3, 0, 0, 0, 0, 0, 0, 0, 5,
        0, 0, 0, 0, 3, 7, 6, 2, 0,
        1, 0, 0, 0, 0, 0, 4, 0, 0,
        9, 0, 6, 0, 0, 3, 0, 0, 0,
        0, 2, 0, 7, 5, 0, 0, 0, 0
    ]; /* very hard */
    function rowContains(row, value) {
        for (var col = 0; col < 9; ++col) {
            if (values[row * 9 + col] == value)
                return true;
        }
        return false;
    }
    function colContains(col, value) {
        for (var row = 0; row < 9; ++row) {
            if (values[row * 9 + col] == value)
                return true;
        }
        return false;
    }
    function boxContains(row, col, value) {
        var i = Math.floor(row / 3) * 3 * 9 + Math.floor(col / 3) * 3;
        for (row = 0; row < 3; ++row) {
            for (col = 0; col < 3; ++col) {
                if (values[i + row * 9 + col] == value)
                    return true;
            }
        }
        return false;
    }
    function dumpSolution() {
        var field = document.createElement("div");
        field.classList.add('field');
        for (var row = 0; row < 9; ++row) {
            for (var col = 0; col < 9; ++col) {
                var el = document.createElement("span");
                el.classList.add("cell", "col" + col, "row" + row);
                el.innerText = values[row * 9 + col].toString();
                field.appendChild(el);
            }
        }
        solutions.appendChild(field);
    }
    function getCellChoices(i, maxChoices) {
        if (values[i] != 0)
            return;
        var row = Math.floor(i / 9);
        var col = i - row * 9;
        var result = [];
        for (var value = 1; value < 10; ++value) {
            if (!rowContains(row, value) && !colContains(col, value) &&
                !boxContains(row, col, value)) {
                result.push(value);
                if (result.length == maxChoices)
                    return;
            }
        }
        return result;
    }
    function findBestCell() {
        var best;
        var bestChoicesLen = 10;
        for (var i = 0; i < LSIZE; ++i) {
            var choices = getCellChoices(i, bestChoicesLen);
            if (!choices) {
                continue;
            }
            else if (choices.length <= 1) {
                return { i: i, choices: choices };
            }
            best = { i: i, choices: choices };
            bestChoicesLen = choices.length;
        }
        return best;
    }
    function solveStep() {
        var choice = findBestCell();
        if (!choice) {
            dumpSolution();
            return;
        }
        for (var _i = 0, _a = choice.choices; _i < _a.length; _i++) {
            var value = _a[_i];
            values[choice.i] = value;
            solveStep();
        }
        values[choice.i] = 0;
    }
    solveStep();
}
(function () {
    var field = document.getElementsByClassName("js-field")[0];
    for (var row = 0; row < 9; ++row) {
        for (var col = 0; col < 9; ++col) {
            var el = document.createElement("input");
            el.maxLength = 1;
            el.classList.add("cell", "col" + col, "row" + row);
            field.appendChild(el);
            inputs[row * 9 + col] = el;
        }
    }
    document.getElementsByClassName("js-solve")[0].addEventListener("click", solve);
})();


/***/ })

/******/ });
//# sourceMappingURL=main.js.map