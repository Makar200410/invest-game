const fs = require('fs');
const path = require('path');

const filePath = path.join(__dirname, 'src/features/game/data/locales/learning/en.ts');
let content = fs.readFileSync(filePath, 'utf8');

// Fix all cases where } is followed by "ib_ or "sm_ or "bf_ etc without a comma
content = content.replace(/\}\r?\n(\s+)"(ib_|sm_|bf_|fe_|fx_|cb_|cf_|as_|pm_|tp_)/g, '},\n$1"$2');

// Fix module transitions
content = content.replace(/\}\r?\n\r?\n(\s+)\/\/ Module/g, '},\n\n$1// Module');

fs.writeFileSync(filePath, content);
console.log('Fixed all missing commas');
