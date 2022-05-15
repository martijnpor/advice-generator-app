"use strict";
//developer.mozilla.org/en-US/docs/Glossary/IIFE
// An IIFE (Immediately Invoked Function Expression) is a JavaScript function that runs as soon as it is defined.
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
(() => __awaiter(void 0, void 0, void 0, function* () {
    var _a;
    (_a = document.getElementById("btn-roll-dice")) === null || _a === void 0 ? void 0 : _a.addEventListener("click", () => {
        alert("click");
    });
}))();
