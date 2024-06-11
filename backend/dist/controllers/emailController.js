"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.sendEmail = exports.getAllEmails = void 0;
const dataStore_1 = __importDefault(require("../dataStore"));
const emailService_1 = require("../emailService");
const getAllEmails = (req, res) => {
    res.json(dataStore_1.default.emailLogs);
};
exports.getAllEmails = getAllEmails;
const sendEmail = (req, res) => {
    const { foundationEmail, nonprofitEmails } = req.body;
    nonprofitEmails.forEach((email) => {
        const nonprofit = dataStore_1.default.nonprofits.find(n => n.email === email);
        if (nonprofit) {
            const message = `Sending money to nonprofit ${nonprofit.name} at address ${nonprofit.address}`;
            const emailLog = {
                foundationEmail: foundationEmail,
                nonprofitEmail: nonprofit.email,
                content: message,
                date: new Date().toISOString(),
            };
            dataStore_1.default.emailLogs.push(emailLog);
            (0, emailService_1.mockSendEmail)({
                from: foundationEmail,
                to: nonprofit.email,
                subject: message,
                text: message
            });
        }
    });
    res.json({ message: 'Emails sent successfully!' });
};
exports.sendEmail = sendEmail;
