"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.saveRepository = exports.getRepository = void 0;
var fs = require("fs");
var path = require("path");
var DATA_FILE = path.join(__dirname, '../market_repository.json');
// Initialize empty repository if not exists
if (!fs.existsSync(DATA_FILE)) {
    fs.writeFileSync(DATA_FILE, JSON.stringify({ lastUpdated: '', items: [], history: {} }, null, 2));
}
var getRepository = function () {
    try {
        var data = fs.readFileSync(DATA_FILE, 'utf-8');
        return JSON.parse(data);
    }
    catch (error) {
        console.error('Error reading repository:', error);
        return { lastUpdated: '', items: [], history: {} };
    }
};
exports.getRepository = getRepository;
var saveRepository = function (data) {
    try {
        fs.writeFileSync(DATA_FILE, JSON.stringify(data, null, 2));
    }
    catch (error) {
        console.error('Error saving repository:', error);
    }
};
exports.saveRepository = saveRepository;
