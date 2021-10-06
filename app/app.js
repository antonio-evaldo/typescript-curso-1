"use strict";
exports.__esModule = true;
var negociacao_js_1 = require("./models/negociacao.js");
var negociacao = new negociacao_js_1.Negociacao(new Date(), 10, 100);
console.log(negociacao.volume);
