"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
exports.app = express_1.default();
const seriesApi = "/api/series";
exports.app.get(`${seriesApi}/`, (req, res) => {
    res.setHeader("Access-Control-Allow-Origin", "*");
    res.status(200).send("Hello ts/java workshop participant!");
});
exports.default = exports.app;
