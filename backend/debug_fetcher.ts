
import { updateMarketData } from './src/services/fetcher.js';
import { initDB } from './src/services/storage.js';

async function run() {
    console.log("Initializing DB...");
    await initDB();
    console.log("Running updateMarketData...");
    await updateMarketData();
    console.log("Done.");
}

run().catch(console.error);
