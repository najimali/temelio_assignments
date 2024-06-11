"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const emailController_1 = require("../controllers/emailController");
const router = (0, express_1.Router)();
router.get('/', emailController_1.getAllEmails);
router.post('/send', emailController_1.sendEmail);
exports.default = router;
