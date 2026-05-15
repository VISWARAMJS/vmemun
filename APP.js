
const countryFlags = [
    { code: "us" }, { code: "in" }, { code: "gb" }, { code: "fr" }, 
    { code: "de" }, { code: "jp" }, { code: "ca" }, { code: "au" },
    { code: "br" }, { code: "it" }, { code: "kr" }, { code: "za" }
];

const crisisIssues = [
    "💥 Global stock markets plunge amid banking fears",
    "📉 Recession alarms: GDP contracts 2.1%",
    "🏦 Central bank emergency rate hike",
    "💸 Inflation soars to record 9.4%",
    "🌍 IMF warns of 'lost decade' for economies",
    "🔻 Oil prices collapse 18% in one week",
    "💰 Currency crisis: Yen hits 30-year low",
    "⚠️ Sovereign debt crisis spreads to EU",
    "🏭 Manufacturing PMI hits 10-year low",
    "🔥 Climate crisis escalates worldwide",
    "🍞 Global food crisis: wheat prices jump 40%"
];

function randomItem(arr) {
    return arr[Math.floor(Math.random() * arr.length)];
}

function randomRange(min, max) {
    return min + Math.random() * (max - min);
}

function createFlags() {
    const flagContainer = document.getElementById('flagZone');
    if (!flagContainer) return;
    for (let i = 0; i < 14; i++) {
        const country = randomItem(countryFlags);
        const flagWrapper = document.createElement('div');
        flagWrapper.className = 'pure-flag';
        flagWrapper.style.left = randomRange(3, 92) + '%';
        flagWrapper.style.top = randomRange(10, 85) + '%';
        flagWrapper.style.animationDelay = randomRange(0, 11) + 's';
        flagWrapper.style.animationDuration = randomRange(9, 15) + 's';
        const img = document.createElement('img');
        img.src = `https://flagcdn.com/w80/${country.code}.png`;
        img.className = 'flag-img-clean';
        img.onerror = () => { img.src = 'https://flagcdn.com/w80/un.png'; };
        flagWrapper.appendChild(img);
        flagContainer.appendChild(flagWrapper);
    }
}
function createHeadlines() {
    const headlineZone = document.getElementById('crisisHeadlineZone');
    if (!headlineZone) return;
    for (let i = 0; i < 10; i++) {
        const headline = document.createElement('div');
        headline.className = 'crisis-headline';
        headline.style.left = randomRange(2, 85) + '%';
        headline.style.top = randomRange(5, 82) + '%';
        headline.style.animationDelay = randomRange(0, 12) + 's';
        headline.style.animationDuration = randomRange(8, 14) + 's';
        headline.innerText = randomItem(crisisIssues);
        headlineZone.appendChild(headline);
    }
}
function createParticles() {
    const particleZone = document.getElementById('particleZone');
    if (!particleZone) return;
    for (let i = 0; i < 40; i++) {
        const particle = document.createElement('div');
        particle.className = 'dust-mote';
        particle.style.left = Math.random() * 100 + '%';
        particle.style.top = Math.random() * 100 + '%';
        particle.style.animationDelay = Math.random() * 8 + 's';
        particle.style.backgroundColor = `hsl(${260 + Math.random() * 40}, 75%, 65%)`;
        particleZone.appendChild(particle);
    }
}

function startRefresh() {
    setInterval(() => {
        const flagContainer = document.getElementById('flagZone');
        if (flagContainer) {
            const flags = document.querySelectorAll('.pure-flag');
            if (flags.length > 8 && flags[0]) {
                flags[0].remove();
                const newCountry = randomItem(countryFlags);
                const newFlag = document.createElement('div');
                newFlag.className = 'pure-flag';
                newFlag.style.left = randomRange(2, 94) + '%';
                newFlag.style.top = randomRange(8, 86) + '%';
                newFlag.style.animationDelay = '0s';
                newFlag.style.animationDuration = randomRange(9, 15) + 's';
                const img = document.createElement('img');
                img.src = `https://flagcdn.com/w80/${newCountry.code}.png`;
                img.className = 'flag-img-clean';
                newFlag.appendChild(img);
                flagContainer.appendChild(newFlag);
            }
        }
        
        const headlineZone = document.getElementById('crisisHeadlineZone');
        if (headlineZone && Math.random() > 0.5) {
            const headlines = document.querySelectorAll('.crisis-headline');
            if (headlines.length > 6 && headlines[0]) {
                headlines[0].remove();
                const newHead = document.createElement('div');
                newHead.className = 'crisis-headline';
                newHead.style.left = randomRange(2, 88) + '%';
                newHead.style.top = randomRange(5, 85) + '%';
                newHead.style.animationDelay = '0s';
                newHead.innerText = randomItem(crisisIssues);
                headlineZone.appendChild(newHead);
            }
        }
    }, 7000);
}
function initScrollReveal() {
    const reveals = document.querySelectorAll('.reveal');
    const scrollIndicator = document.getElementById('scrollTop');
    
    function checkReveal() {
        reveals.forEach(reveal => {
            const rect = reveal.getBoundingClientRect();
            if (rect.top < window.innerHeight - 100) {
                reveal.classList.add('active');
            }
        });
        if (scrollIndicator) {
            scrollIndicator.classList.toggle('visible', window.scrollY > 300);
        }
    }
    
    window.addEventListener('scroll', checkReveal);
    checkReveal();
    
    if (scrollIndicator) {
        scrollIndicator.addEventListener('click', () => {
            window.scrollTo({ top: 0, behavior: 'smooth' });
        });
    }
}

function initAccordion() {
    const accordionHeaders = document.querySelectorAll('.accordion-header');
    accordionHeaders.forEach(header => {
        header.addEventListener('click', () => {
            const item = header.parentElement;
            item.classList.toggle('active');
            const icon = header.querySelector('i');
            if (icon) {
                icon.style.transform = item.classList.contains('active') ? 'rotate(180deg)' : 'rotate(0)';
            }
        });
    });
}

function initMobileMenu() {
    const menuToggle = document.getElementById('menuToggle');
    const navLinks = document.getElementById('navLinks');
    
    if (menuToggle) {
        menuToggle.addEventListener('click', () => {
            navLinks.classList.toggle('show');
        });
    }
    
    document.querySelectorAll('.nav-links a').forEach(link => {
        link.addEventListener('click', () => {
            navLinks.classList.remove('show');
        });
    });
}

function initSmoothScroll() {
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({ behavior: 'smooth', block: 'start' });
            }
        });
    });
}

document.getElementById('crisisBtn').addEventListener('click', function() {
    window.open('registration.html', '_blank');
});
function init() {
    createFlags();
    createHeadlines();
    createParticles();
    startRefresh();
    initScrollReveal();
    initAccordion();
    initMobileMenu();
    initSmoothScroll();
    initCrisisButton();
}
document.addEventListener('DOMContentLoaded', init);