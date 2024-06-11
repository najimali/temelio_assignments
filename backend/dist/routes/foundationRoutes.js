"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const foundationController_1 = require("../controllers/foundationController");
const router = (0, express_1.Router)();
router.get('/', foundationController_1.getAllFoundations);
router.post('/', foundationController_1.createFoundation);
exports.default = router;
