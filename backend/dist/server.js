"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const body_parser_1 = __importDefault(require("body-parser"));
const nonprofitRoutes_1 = __importDefault(require("./routes/nonprofitRoutes"));
const foundationRoutes_1 = __importDefault(require("./routes/foundationRoutes"));
const emailRoutes_1 = __importDefault(require("./routes/emailRoutes"));
const cors_1 = __importDefault(require("cors"));
const app = (0, express_1.default)();
app.use((0, cors_1.default)());
app.options('*', (0, cors_1.default)());
app.use(body_parser_1.default.json());
app.use('/nonprofits', nonprofitRoutes_1.default);
app.use('/foundations', foundationRoutes_1.default);
app.use('/emails', emailRoutes_1.default);
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
