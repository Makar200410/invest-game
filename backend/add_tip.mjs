
import fetch from 'node-fetch';

const url = 'https://invest-game-production.up.railway.app/api/insider';
const tip = {
    title: "Upcoming FDA Approval Leak",
    content: "Internal memos from a major biotech firm indicate their flagship drug has passed final trials ahead of schedule. Official announcement expected Friday.",
    impact: "High",
    reliability: "Verified"
};

fetch(url, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(tip)
})
    .then(res => res.json())
    .then(data => console.log('Success:', data))
    .catch(err => console.error('Error:', err));
