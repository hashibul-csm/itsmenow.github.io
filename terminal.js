/**
 * TERMINAL SYSTEM FOR HASHIBUL HASAN PORTFOLIO
 * Intelligent conversational interface with portfolio knowledge base
 * Version: 2.4.0
 * Author: Hashibul Hasan
 */

class PortfolioTerminal {
    constructor() {
        this.siteData = { tech: [], experience: [], education: [], projects: {} };
        this.apiKey = "";
        this.termInput = null;
        this.termOutput = null;
        this.init();
    }

    /**
     * COMPREHENSIVE PORTFOLIO KNOWLEDGE BASE
     * Intelligent dataset for answering questions about Hashibul Hasan
     */
    get PORTFOLIO_KNOWLEDGE() {
        return {
            "personal": {
                "name": "Hashibul Hasan",
                "title": "Senior Engineering Lead",
                "location": "Dhaka, Bangladesh",
                "email": "hashibul1914@gmail.com",
                "linkedin": "linkedin.com/in/hashibul-hasan",
                "facebook": "facebook.com/hashibul.hasan",
                "experience_years": 11,
                "specialization": "Distributed Systems & Fintech"
            },
            "experience": [
                {
                    "company": "Nagad",
                    "position": "Senior Engineering Lead",
                    "duration": "2020 - Present",
                    "description": "Leading distributed systems architecture for Bangladesh's largest fintech platform. Managing 50+ microservices, implementing high-throughput transaction processing, and overseeing DevOps infrastructure.",
                    "technologies": ["Spring Boot", "Microservices", "AWS", "Docker", "Kubernetes", "Redis", "PostgreSQL"],
                    "achievements": ["10k+ TPS transaction processing", "99.99% uptime", "Led migration to cloud-native architecture"]
                },
                {
                    "company": "Singularity Ltd",
                    "position": "Senior Software Engineer",
                    "duration": "2018 - 2020",
                    "description": "Developed enterprise-grade applications and led technical architecture decisions. Implemented SSO solutions and worked on high-performance backend systems.",
                    "technologies": ["Java", "Spring Framework", "PHP", "Laravel", "Vue.js", "MySQL", "Redis"],
                    "achievements": ["Built multi-tenant SSO provider", "Optimized database queries for 10x performance improvement", "Led team of 8 developers"]
                },
                {
                    "company": "Various Companies",
                    "position": "Software Engineer",
                    "duration": "2013 - 2018",
                    "description": "Started career developing web applications and gradually moved into enterprise software development. Gained expertise in full-stack development and system architecture.",
                    "technologies": ["PHP", "Laravel", "JavaScript", "MySQL", "HTML/CSS", "jQuery"],
                    "achievements": ["Developed 20+ web applications", "Implemented agile development practices", "Mentored junior developers"]
                }
            ],
            "education": [
                {
                    "degree": "M.Sc in Computer Science",
                    "institution": "Daffodil International University",
                    "year": "2015",
                    "focus": "Advanced software engineering, distributed systems, and research methodologies"
                },
                {
                    "degree": "B.Sc in Computer Science",
                    "institution": "Daffodil International University",
                    "year": "2013",
                    "focus": "Computer science fundamentals, programming, algorithms, and software development"
                }
            ],
            "skills": {
                "programming_languages": ["Java", "PHP", "JavaScript", "Python", "SQL"],
                "frameworks": ["Spring Boot", "Laravel", "Vue.js", "React", "Node.js"],
                "technologies": ["Microservices", "Docker", "Kubernetes", "AWS", "Redis", "PostgreSQL", "MySQL", "MongoDB"],
                "tools": ["Git", "Jenkins", "Maven", "Gradle", "Postman", "VS Code", "IntelliJ IDEA"],
                "methodologies": ["Agile", "Scrum", "TDD", "CI/CD", "DevOps"],
                "security": ["OAuth 2.0", "OpenID Connect", "JWT", "SSL/TLS"]
            },
            "projects": [
                {
                    "name": "Fintech Core Engine",
                    "description": "High-throughput transaction processor capable of handling 10k+ requests per second with ACID compliance",
                    "technologies": ["Spring Boot", "Redis", "PostgreSQL", "Docker", "Kubernetes"],
                    "type": "Enterprise Fintech Platform"
                },
                {
                    "name": "SSO Multi-Tenant Provider",
                    "description": "Custom Keycloak implementation with custom mappers for secure multi-tenant enterprise SSO",
                    "technologies": ["Java", "Keycloak", "Spring Security", "OAuth 2.0"],
                    "type": "Identity Management System"
                },
                {
                    "name": "Microservices Architecture",
                    "description": "Distributed system with 50+ microservices handling millions of daily transactions",
                    "technologies": ["Spring Boot", "Netflix OSS", "AWS ECS", "API Gateway"],
                    "type": "Distributed Systems"
                }
            ],
            "achievements": [
                "Led architecture for Bangladesh's largest fintech platform",
                "Achieved 99.99% system uptime for critical financial services",
                "Optimized transaction processing to handle 10,000+ TPS",
                "Migrated monolithic systems to cloud-native microservices",
                "Implemented enterprise-grade SSO solutions",
                "Mentored and led teams of 8+ developers",
                "Delivered 20+ production web applications"
            ],
            "interests": [
                "Distributed Systems",
                "Fintech Innovation",
                "Cloud Architecture",
                "DevOps & Automation",
                "Open Source Contributions",
                "Technical Leadership",
                "System Performance Optimization"
            ],
            "responses": {
                "greeting": [
                    "System active. Welcome, User. How can I assist you with Hashibul's professional data?",
                    "Kernel handshake successful. Awaiting your query about the principal architect.",
                    "Portfolio interface initialized. Ready to provide information about Hashibul Hasan."
                ],
                "help": "COMMANDS: [TECH], [EXPERIENCE], [EDUCATION], [PROJECTS], [SKILLS], [CONTACT], [JSON], [DATA], [CLEAR], [EXIT]. You can also ask natural language questions about Hasan's background.",
                "status": "All nodes online. Distributed system is stable. Latency: 0.02ms.",
                "who": "I am the Core System Interface for Hashibul Hasan, Senior Engineering Lead. I manage and present his professional repository.",
                "contact": "Contact Information: Email - hashibul1914@gmail.com | LinkedIn - linkedin.com/in/hashibul-hasan | Location - Dhaka, Bangladesh",
                "about": "Hashibul Hasan is a Senior Engineering Lead with 11+ years of experience in distributed systems and fintech. He specializes in Spring Boot, microservices, and cloud architecture.",
                "experience_summary": "Hashibul has 11+ years of experience, currently leading engineering at Nagad (Bangladesh's largest fintech), previously at Singularity Ltd, with expertise in distributed systems and enterprise software.",
                "skills_summary": "Technical arsenal includes Java/Spring Boot, PHP/Laravel, Vue.js, microservices, Docker/K8s, AWS, Redis, PostgreSQL, and various DevOps tools.",
                "education_summary": "M.Sc and B.Sc in Computer Science from Daffodil International University, with focus on software engineering and distributed systems.",
                "projects_summary": "Key projects include fintech core engine (10k+ TPS), multi-tenant SSO provider, and large-scale microservices architecture.",
                "unrelated": "ERR_UNSUPPORTED_PROTOCOL: Query outside local system scope. Please ask about Hasan's technical background, experience, or projects."
            }
        };
    }

    /**
     * INTELLIGENT QUERY PROCESSOR
     * Processes natural language questions about the portfolio
     */
    processPortfolioQuery(query) {
        const q = query.toLowerCase().trim();

        // Direct command responses
        if (this.PORTFOLIO_KNOWLEDGE.responses[q]) {
            return this.PORTFOLIO_KNOWLEDGE.responses[q];
        }

        // Keyword-based responses
        if (q.includes('tech') || q.includes('skill') || q.includes('technologies')) {
            return "ARSENAL: " + Object.values(this.PORTFOLIO_KNOWLEDGE.skills).flat().join(" // ");
        }

        if (q.includes('work') || q.includes('experience') || q.includes('job')) {
            const exp = this.PORTFOLIO_KNOWLEDGE.experience.map(e => `${e.position} @ ${e.company} (${e.duration})`).join(" || ");
            return "PROFESSIONAL HISTORY: " + exp;
        }

        if (q.includes('study') || q.includes('education') || q.includes('degree')) {
            const edu = this.PORTFOLIO_KNOWLEDGE.education.map(e => `${e.degree} from ${e.institution} (${e.year})`).join(" // ");
            return "ACADEMIC BACKGROUND: " + edu;
        }

        if (q.includes('project') || q.includes('work')) {
            const proj = this.PORTFOLIO_KNOWLEDGE.projects.map(p => `${p.name}: ${p.description}`).join(" || ");
            return "KEY PROJECTS: " + proj;
        }

        if (q.includes('contact') || q.includes('email') || q.includes('linkedin')) {
            return this.PORTFOLIO_KNOWLEDGE.responses.contact;
        }

        // Natural language processing for common questions
        if (q.includes('what') && q.includes('do')) {
            return this.PORTFOLIO_KNOWLEDGE.responses.about;
        }

        if (q.includes('where') && q.includes('work')) {
            return `Currently employed as ${this.PORTFOLIO_KNOWLEDGE.personal.title} at ${this.PORTFOLIO_KNOWLEDGE.experience[0].company} in ${this.PORTFOLIO_KNOWLEDGE.personal.location}.`;
        }

        if (q.includes('how') && q.includes('experience')) {
            return `${this.PORTFOLIO_KNOWLEDGE.personal.experience_years}+ years in ${this.PORTFOLIO_KNOWLEDGE.personal.specialization}.`;
        }

        if ((q.includes('total') || q.includes('how many')) && q.includes('experience')) {
            return `Total experience: ${this.PORTFOLIO_KNOWLEDGE.personal.experience_years} years in ${this.PORTFOLIO_KNOWLEDGE.personal.specialization}.`;
        }

        if (q.includes('achievement') || q.includes('accomplishment')) {
            return "KEY ACHIEVEMENTS: " + this.PORTFOLIO_KNOWLEDGE.achievements.slice(0, 3).join(" | ");
        }

        // Fallback to external API for complex queries
        return null; // Will trigger external API call
    }

    /**
     * PROPRIETARY LOCAL LIBRARY
     * Handles instant responses without API calls.
     */
    get CORE_LIBRARY() {
        return {
            "hi": this.PORTFOLIO_KNOWLEDGE.responses.greeting[Math.floor(Math.random() * this.PORTFOLIO_KNOWLEDGE.responses.greeting.length)],
            "hello": this.PORTFOLIO_KNOWLEDGE.responses.greeting[Math.floor(Math.random() * this.PORTFOLIO_KNOWLEDGE.responses.greeting.length)],
            "help": this.PORTFOLIO_KNOWLEDGE.responses.help,
            "status": this.PORTFOLIO_KNOWLEDGE.responses.status,
            "who": this.PORTFOLIO_KNOWLEDGE.responses.who,
            "clear": "CLEAR_ACTION_TRIGGERED",
            "exit": "EXIT_ACTION_TRIGGERED",
            "json": JSON.stringify(this.PORTFOLIO_KNOWLEDGE, null, 2),
            "data": JSON.stringify(this.siteData, null, 2)
        };
    }

    /**
     * PROPRIETARY ENGINE: SYSTEM CORE INTEGRATION
     * Obfuscated logic for internal data retrieval.
     */
    async queryInternalCore(uQ) {
        const sP = `You are the Proprietary System Interface for Hashibul Hasan's engineering portfolio.
        CONTEXT:
        - Principal Architect: Hashibul Hasan, Senior Engineering Lead.
        - Experience: 11+ years in Distributed Systems and Fintech (Nagad, Singularity Ltd).
        - Arsenal: Spring Boot, PHP Laravel, Vue.js, Microservices, OIDC, AWS, Docker, K8s.
        - Education: M.Sc & B.Sc CS from Daffodil International University.

        STRICT PROTOCOLS:
        - Respond ONLY to queries regarding Hashibul Hasan's professional background, skills, or projects.
        - If the user asks something unrelated (e.g., cooking, politics, random facts), respond strictly with: "ERR_UNSUPPORTED_PROTOCOL: Query outside local system scope. Please ask about Hasan's technical nodes or career evolution."
        - PRESENT YOURSELF STRICTLY AS THE SYSTEM INTERFACE. NEVER mention AI or external vendors.
        - Keep responses professional, technical, and under 3 sentences.`;

        let r = 0; const mR = 5; let d = 1000;
        const _u = "https://generativelanguage.googleapis.com/v1beta/models/gemini-2.5-flash-preview-09-2025:generateContent";

        while (r < mR) {
            try {
                const response = await fetch(`${_u}?key=${this.apiKey}`, {
                    method: 'POST',
                    headers: { 'Content-Type': 'application/json' },
                    body: JSON.stringify({
                        contents: [{ parts: [{ text: uQ }] }],
                        systemInstruction: { parts: [{ text: sP }] }
                    })
                });
                if (!response.ok) throw new Error();
                const res = await response.json();
                return res.candidates?.[0]?.content?.parts?.[0]?.text || "CORE_RESPONSE_EMPTY";
            } catch (e) {
                r++; if (r === mR) return "CORE_CONNECTION_FAILURE: Node timeout.";
                await new Promise(x => setTimeout(x, d)); d *= 2;
            }
        }
    }

    /**
     * SCRAPE SITE DATA
     * Extracts dynamic content from the portfolio page
     */
    scrapeSiteData() {
        this.siteData.tech = Array.from(new Set(Array.from(document.querySelectorAll('.tech-pill span, .animate-marquee span')).map(el => el.innerText.trim())));
        this.siteData.experience = Array.from(document.querySelectorAll('#experience-section + section .bento-card')).map(card => `${card.querySelector('h3')?.innerText} @ ${card.querySelector('p')?.innerText}`);
        this.siteData.education = Array.from(document.querySelectorAll('#academic-section + section .bento-card')).map(card => card.querySelector('h3')?.innerText);
    }

    /**
     * TOGGLE TERMINAL VISIBILITY
     */
    toggleTerminal() {
        const t = document.getElementById('terminal-mode'), isOpening = t.classList.contains('hidden');
        t.classList.toggle('hidden'); t.classList.toggle('flex');
        if (isOpening) {
            this.scrapeSiteData();
            this.termInput.focus();
            if (this.termOutput.innerHTML === '') this.runBoot();
        }
    }

    /**
     * MINIMIZE TERMINAL
     */
    minimizeTerminal() {
        document.getElementById('terminal-output').classList.toggle('hidden');
    }

    /**
     * MAXIMIZE TERMINAL
     */
    maximizeTerminal() {
        const term = document.getElementById('terminal-mode');
        term.classList.add('animate-pulse');
        setTimeout(() => term.classList.remove('animate-pulse'), 1000);
    }

    /**
     * RUN BOOT SEQUENCE
     */
    runBoot() {
        const lines = [
            "// INITIALIZING SYSTEM_CORE...",
            "// HANDSHAKE SUCCESSFUL: KERNEL_HASAN v2.4.0",
            "// KERNEL_SYNC: [STABLE]",
            "// SYSTEM NODES READY. QUERY REPOSITORY."
        ];
        lines.forEach((line, i) => {
            setTimeout(() => {
                const d = document.createElement('div');
                d.className = "text-indigo-400 mb-2 font-black italic opacity-60";
                d.innerText = line;
                this.termOutput.appendChild(d);
                this.termOutput.scrollTop = this.termOutput.scrollHeight;
            }, i * 150);
        });
    }

    /**
     * PROCESS TERMINAL INPUT
     */
    async processInput(event) {
        if (event.key === 'Enter') {
            const val = this.termInput.value.toLowerCase().trim();
            if (!val) return;

            const line = document.createElement('div');
            line.innerHTML = `<span class="term-user text-emerald-500 font-bold">root@h-hasan</span><span class="term-prompt text-indigo-400">:</span><span class="text-slate-500">~</span><span class="term-prompt text-white">$</span> ${val}`;
            this.termOutput.appendChild(line);
            this.termInput.value = '';

            // 1. Check Local Library First
            let localResponse = this.CORE_LIBRARY[val];
            if (!localResponse) {
                // 2. Try Intelligent Portfolio Query Processor
                localResponse = this.processPortfolioQuery(val);

                // 3. Fallback to keyword sub-checks (legacy)
                if (!localResponse) {
                    if (val.includes('tech') || val.includes('skill')) localResponse = "ARSENAL: " + this.siteData.tech.join(" // ");
                    if (val.includes('work') || val.includes('experience')) localResponse = "HISTORY: " + this.siteData.experience.join(" || ");
                    if (val.includes('study') || val.includes('education')) localResponse = "ROOTS: " + this.siteData.education.join(" // ");
                }
            }

            if (localResponse) {
                if (localResponse === "CLEAR_ACTION_TRIGGERED") {
                    this.termOutput.innerHTML = '';
                    return;
                }
                if (localResponse === "EXIT_ACTION_TRIGGERED") {
                    this.toggleTerminal();
                    return;
                }

                const resDiv = document.createElement('div');
                resDiv.className = "term-res text-slate-400 mb-6 pl-6 border-l-2 border-indigo-500/20";
                resDiv.innerText = localResponse;
                this.termOutput.appendChild(resDiv);
                this.termOutput.scrollTop = this.termOutput.scrollTop;
                return;
            }

            // 4. Escalate to System Core (API) for complex queries
            const res = document.createElement('div');
            res.className = "term-res text-slate-400 mb-6 pl-6 border-l-2 border-indigo-500/20 italic terminal-loading";
            res.innerText = "EXECUTING...";
            this.termOutput.appendChild(res);
            this.termOutput.scrollTop = this.termOutput.scrollTop;

            const cR = await this.queryInternalCore(val);
            res.classList.remove('terminal-loading', 'italic');
            res.innerText = cR;
            this.termOutput.scrollTop = this.termOutput.scrollTop;
        }
    }

    /**
     * SCRAPE SITE DATA
     * Updates knowledge base with current site content on first load
     */
    scrapeSiteData() {
        // Scrape technologies
        this.siteData.tech = Array.from(new Set(Array.from(document.querySelectorAll('.tech-pill span, .animate-marquee span')).map(el => el.innerText.trim())));

        // Scrape experience
        this.siteData.experience = Array.from(document.querySelectorAll('#experience-section + section .bento-card')).map(card => {
            const h3 = card.querySelector('h3')?.innerText;
            const p = card.querySelector('p')?.innerText;
            return h3 && p ? `${h3} @ ${p}` : '';
        }).filter(item => item);

        // Scrape education
        this.siteData.education = Array.from(document.querySelectorAll('#academic-section + section .bento-card')).map(card => 
            card.querySelector('h3')?.innerText
        ).filter(item => item);

        // Update knowledge base with scraped data
        if (this.siteData.tech.length > 0) {
            this.PORTFOLIO_KNOWLEDGE.skills.technologies = this.siteData.tech;
        }
        if (this.siteData.experience.length > 0) {
            // Update experience summary
            this.PORTFOLIO_KNOWLEDGE.responses.experience_summary = "EXPERIENCE: " + this.siteData.experience.join(" || ");
        }
        if (this.siteData.education.length > 0) {
            this.PORTFOLIO_KNOWLEDGE.responses.education_summary = "EDUCATION: " + this.siteData.education.join(" // ");
        }
    }

    /**
     * INITIALIZE TERMINAL SYSTEM
     */
    init() {
        this.termInput = document.getElementById('terminal-input');
        this.termOutput = document.getElementById('terminal-output');

        if (this.termInput && this.termOutput) {
            this.termInput.addEventListener('keydown', (e) => this.processInput(e));
        }

        // Scrape site data on first load to update knowledge base
        this.scrapeSiteData();

        // Make terminal functions globally available
        window.toggleTerminal = () => this.toggleTerminal();
        window.minimizeTerminal = () => this.minimizeTerminal();
        window.maximizeTerminal = () => this.maximizeTerminal();
    }
}

// Initialize terminal when DOM is ready
document.addEventListener('DOMContentLoaded', () => {
    window.portfolioTerminal = new PortfolioTerminal();
});

// Export for potential module usage
if (typeof module !== 'undefined' && module.exports) {
    module.exports = PortfolioTerminal;
}