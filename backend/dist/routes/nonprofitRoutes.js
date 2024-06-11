"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const nonprofitController_1 = require("../controllers/nonprofitController");
const router = (0, express_1.Router)();
router.get('/', nonprofitController_1.getAllNonprofits);
router.post('/', nonprofitController_1.createNonprofit);
exports.default = router;
