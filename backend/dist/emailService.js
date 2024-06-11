"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.mockSendEmail = void 0;
function mockSendEmail({ from, to, subject, text }) {
    console.log(`Email sent from ${from} to ${to} with subject "${subject}" and text "${text}"`);
}
exports.mockSendEmail = mockSendEmail;
