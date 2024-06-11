"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.createFoundation = exports.getAllFoundations = void 0;
const dataStore_1 = __importDefault(require("../dataStore"));
const getAllFoundations = (req, res) => {
    res.json(dataStore_1.default.foundations);
};
exports.getAllFoundations = getAllFoundations;
const createFoundation = (req, res) => {
    const { email } = req.body;
    const newFoundation = { email };
    const existingFoundation = dataStore_1.default.foundations.find((foundation) => foundation.email === email);
    if (existingFoundation) {
        return res.status(409).json({ error: 'Foundation with this email already exists.' });
    }
    dataStore_1.default.foundations.push(newFoundation);
    res.status(201).json(newFoundation);
};
exports.createFoundation = createFoundation;
