/**
 * TERMINAL.JS 
 * Linux-style Search Engine with Automated DOM Scraping
 */

const termInput = document.getElementById('terminal-input');
const termOutput = document.getElementById('terminal-output');
let siteData = {}; // This will be populated automatically

// --- 1. AUTOMATED DOM SCRAPER ---
// This function "reads" your website to build the search database
function updateSiteData() {
    const data = {
        experience: [],
        tech: [],
        education: [],
        projects: {}
    };

    // Scrape Tech Stack (from marquee and tech-pills)
    document.querySelectorAll('.tech-pill span, .animate-marquee span').forEach(el => {
        const text = el.innerText.trim();
        if (text && !data.tech.includes(text)) data.tech.push(text);
    });

    // Scrape Experience
    document.querySelectorAll('.bento-card').forEach(card => {
        const title = card.querySelector('h3')?.innerText;
        const sub = card.querySelector('p')?.innerText;
        // Check if it looks like a job entry (has a date span usually)
        if (title && sub && card.querySelector('span[class*="mono"]')) {
            data.experience.push(`${title} at ${sub}`);
        }
    });

    // Scrape Education
    document.querySelectorAll('i[data-lucide="graduation-cap"], i[data-lucide="book-open"]').forEach(icon => {
        const container = icon.closest('.bento-card');
        if (container) {
            const degree = container.querySelector('h3')?.innerText;
            if (degree) data.education.push(degree);
        }
    });

    // Scrape Projects
    document.querySelectorAll('#portfolio-section .bento-card, .md\\:col-span-8.bento-card').forEach(card => {
        const title = card.querySelector('h3')?.innerText;
        const desc = card.querySelector('p')?.innerText;
        if (title && desc) {
            const key = title.toLowerCase().split(' ')[0]; // Use first word as key
            data.projects[key] = `${title}: ${desc}`;
        }
    });

    siteData = data;
    console.log("Terminal Intelligence Synced:", siteData);
}

// --- 2. IMPROVED SEARCH ENGINE ---
function searchEngine(query) {
    query = query.toLowerCase();

    // Deep Project Match
    for (const [key, value] of Object.entries(siteData.projects)) {
        if (query.includes(key)) return value;
    }

    // Keyword Mapping
    if (query.includes("tech") || query.includes("stack") || query.includes("skill") || query.includes("use")) 
        return "Technical Arsenal: " + (siteData.tech.length ? siteData.tech.join(", ") : "Refer to 'Technical Arsenal' section.");

    if (query.includes("experience") || query.includes("work") || query.includes("previous") || query.includes("years")) 
        return "Career Summary: " + (siteData.experience.length ? siteData.experience.join(" | ") : "Senior Architect with 11+ years experience.");

    if (query.includes("education") || query.includes("study") || query.includes("university")) 
        return "Academic Roots: " + (siteData.education.length ? siteData.education.join(" and ") : "Alumni of Daffodil International University.");

    if (query.includes("project") || query.includes("portfolio") || query.includes("application")) 
        return "Selected Works: " + siteData.projects.summary || "Key projects include Fintech Core, SSO Identity Providers, and Admin Dashboards.";

    if (query.includes("contact") || query.includes("email") || query.includes("linkedin"))
        return "Contact: hashibul1914@gmail.com | LinkedIn: hashibulh";

    return `System cannot find '${query}' in local nodes. Try asking about 'tech', 'experience', or 'projects'.`;
}

// --- 3. UI & TOGGLE LOGIC ---
function toggleTerminal() {
    const t = document.getElementById('terminal-mode');
    const isOpening = t.classList.contains('hidden');
    t.classList.toggle('hidden'); 
    t.classList.toggle('flex');
    
    if(isOpening) { 
        updateSiteData(); // Refresh data every time terminal opens
        setTimeout(() => { termInput.focus(); }, 100); 
        if(termOutput.innerHTML === '') runBootSequence(); 
    }
}

function runBootSequence() {
    const lines = ["> INITIALIZING BASH...", "> ACCESSING SYSTEM_ROOT...", "> DATA SCRAPE COMPLETE.", "> TYPE 'HELP' FOR COMMANDS."];
    lines.forEach((line, i) => {
        setTimeout(() => {
            const div = document.createElement('div'); 
            div.innerHTML = line; 
            div.className = "text-cyan-400 opacity-70";
            termOutput.appendChild(div); 
            termOutput.scrollTop = termOutput.scrollHeight;
        }, i * 120);
    });
}

// --- 4. EVENT LISTENERS ---
document.addEventListener('keydown', (e) => {
    if (e.key === "Escape") {
        const t = document.getElementById('terminal-mode');
        if (t && !t.classList.contains('hidden')) toggleTerminal();
    }
});

termInput.addEventListener('keydown', (e) => {
    if(e.key === 'Enter') {
        const query = termInput.value.trim();
        if (query === '') return;

        // User Line
        const userLine = document.createElement('div');
        userLine.className = "mb-1";
        userLine.innerHTML = `<span class="text-emerald-400 font-bold">root@h-hasan</span>:<span class="text-indigo-400">~</span>$ ${query}`;
        termOutput.appendChild(userLine);

        // Result Line with Processing Effect
        const resultLine = document.createElement('div');
        resultLine.className = "text-slate-400 mb-4 pl-4 border-l-2 border-indigo-500/30 italic";
        resultLine.innerText = "Searching...";
        termOutput.appendChild(resultLine);

        setTimeout(() => {
            resultLine.classList.remove('italic');
            if (query.toLowerCase() === 'help') {
                resultLine.innerHTML = "CMDS: [CLEAR], [EXIT], [RESUME]. <br> SEARCH: Try 'What is your tech stack?' or 'Tell me about Nagad'.";
            } else if (query.toLowerCase() === 'clear') {
                termOutput.innerHTML = '';
            } else if (query.toLowerCase() === 'exit') {
                toggleTerminal();
            } else {
                resultLine.innerText = searchEngine(query);
            }
            termOutput.scrollTop = termOutput.scrollHeight;
        }, 400);

        termInput.value = '';
    }
});