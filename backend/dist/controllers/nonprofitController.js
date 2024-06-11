"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.createNonprofit = exports.getAllNonprofits = void 0;
const dataStore_1 = __importDefault(require("../dataStore"));
const getAllNonprofits = (req, res) => {
    res.json(dataStore_1.default.nonprofits);
};
exports.getAllNonprofits = getAllNonprofits;
const createNonprofit = (req, res) => {
    const { email, name, address } = req.body;
    const existingNonprofit = dataStore_1.default.nonprofits.find((nonprofit) => nonprofit.email === email);
    if (existingNonprofit) {
        return res.status(409).json({ error: 'Nonprofit with this email already exists.' });
    }
    const newNonprofit = { email, name, address };
    dataStore_1.default.nonprofits.push(newNonprofit);
    res.status(201).json(newNonprofit);
};
exports.createNonprofit = createNonprofit;
