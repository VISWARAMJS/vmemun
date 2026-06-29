const committeesData = [
    { name: "UNSC", full: "United Nations Security Council", logo: "assets/UNSC.png", agenda: "\"The Great War Of Africa\" · Freeze: Aug 2, 1998", eb: [{ name: "Shivang", role: "Chairperson", img: "assets/MUNchair26/Shivang - Chairperson - UNSC.jpeg"},{ name: "Santhosh", role: "Vice Chairperson", img: "assets/MUNchair26/Santhosh- Vice Chairperson- UNSC.jpeg"}] },
    { name: "UNODC", full: "United Nations Office on Drugs & Crime", logo: "assets/UNODC.png", agenda: "Assessing Drug Policy Frameworks and Their Impact on Public Health, Human Rights", eb: [{ name: "Navam Endlay", role: "Chairperson", img: "assets/MUNchair26/NavamEndlay_Chairperson_UNODC.JPG"},{ name: "Viswaram", role: "Vice Chairperson", img: "assets/MUNchair26/VISWARAM-VICECHAIRPERSON-UNODC.jpeg"}] },
    { name: "ECOSOC", full: "Economic & Social Committee", logo: "assets/ECOSOC.png", agenda: "Post-2030 Development Agenda", eb: [{ name: "Chairperson", role: "TBA", img: "https://placehold.co/100x100/6b3bc9/white?text=ECOSOC"}, {name: "Chairperson", role: "TBA", img: "https://placehold.co/100x100/6b3bc9/white?text=ECOSOC"},{ name: "Grhitha Sahu", role: "Vice Chair", img: "assets/MUNchair26/Grhitha Sahu_Vice Chair_ECOSOC.jpeg"}] },
    { name: "UNEP", full: "United Nations Environment Programme", logo: "assets/UNEP.png", agenda: "Combating Plastic Pollution Across Global Ecosystem", eb: [{ name: "Chair", role: "TBA", img: "https://placehold.co/100x100/6b3bc9/white?text=UNEP"},{ name: "Vedesh", role: "Vice Chair", img: "assets/MUNchair26/Vedesh_Vice chair_ UNEP.jpg"}] },
    { name: "WHO", full: "World Health Organization", logo: "assets/WHO.png", agenda: "Addressing long-term health impacts of biological weaponry", eb: [{ name: "Dr. Representative", role: "Chair", img: "https://placehold.co/100x100/6b3bc9/white?text=WHO"},{ name: "Vice Chair", role: "TBA", img: "assets/MUNchair26"}] },
    { name: "UNHRC", full: "United Nations Human Rights Council", logo: "assets/UNHRC.png", agenda: "Discussion On The Status Of Reproductive Rights", eb: [{ name: "Chairperson", role: "TBA", img: "assets/MUNchair26"},{ name: "Ishan Nithilan", role: "Vice Chairperson", img: "assets/MUNchair26/Ishan Nithilan ViceChairperson UNHRC.jpeg"}] },
    { name: "COPUOS", full: "Committee on Peaceful Uses of Outer Space", logo: "assets/COPUOS.png", agenda: "Developing International Frameworks For Space Traffic Management", eb: [{ name: "Chair", role: "TBA", img: "assets/MUNchair26"},{ name: "Madhu Sandhana", role: "Vice Chair", img: "assets/MUNchair26/MADHU SANDHANA.I _ VICE CHAIR _ COPUOS.jpg"}] },
    { name: "UNDP", full: "United Nations Development Program", logo: "assets/UNDP.png", agenda: "Ensuring Affordable Basic Services for All", eb: [{ name: "Arya Katoch", role: "Chair", img: "assets/MUNchair26/Arya Katoch-Chair-UNDP.jpg"},{ name: "Pragati", role: "Vice Chair", img: "assets/MUNchair26/Pragati--Vice Chair--UNDP.png"}] },
    { name: "UNICEF", full: "United Nations International Children's Fund", logo: "assets/UNICEF.png", agenda: "Addressing emergency child protection services amid escalating armed conflicts", eb: [{ name: "Chairperson", role: "TBA", img: "assets/MUNchair26/UNIC"},{ name: "Harini Rajkumar", role: "Vice Chairperson", img: "assets/MUNchair26/Harini_Rajkumar_ViceChair_UNICEF.jpeg"}] },
    { name: "DISEC", full: "Disarmament & International Security Committee", logo: "assets/DISEC.png", agenda: "Establishment of a nuclear-weapon free zone in the Middle East · Freeze: Sept 25, 2012", eb: [{ name: "Chairperson", role: "TBA", img: "assets/MUNchair26"},{ name: "Aadhavan S", role: "Vice Chairperson", img: "assets/MUNchair26/AADHAVAN S_VICE CHAIR_DISEC.jpg"}] },
    { name: "UNFCCC", full: "United Nations Framework Convention on Climate Change", logo: "assets/UNFCCC.png", agenda: "The Climate Refugee Crisis: Bridging the Legal Gap in Human Mobility", eb: [{ name: "Chairperson", role: "TBA", img: "assets/MUNchair26/UNF"},{ name: "Vice Chairperson", role: "TBA", img: "assets/MUNchair26"}] },
    {name: "UNHCR", full: "United Nations High Commissioner for Refugees", logo: "assets/UNHCR.png", agenda: "Balancing The Principle of Non-Refoulment With State Security", eb: [{ name: "Akhil MC", role: "Chairperson", img: "assets/MUNchair26/Akhil MC- Chair- UNHCR.png"},{ name: "Vice Chairperson", role: "TBA", img: "assets/MUNchair26/UNH"}] },
    { name: "UNW", full: "United Nations Women", logo: "assets/UNW.png", agenda: "Ensuring Equitable Access to Maternal and Reproductive Healthcare", eb: [{ name: "Vaishali Vinayaga", role: "Chairperson", img: "assets/MUNchair26/Vaishali Vinayaga_Chair_UNW.jpg"},{ name: "Rithesh B", role: "Vice Chairperson", img: "assets/MUNchair26/Rithesh B_Vice Chairperson_UNW.png"}] },
    { name: "SOCHUM", full: "Social Cultural and Humanitarian Committee", logo: "assets/SOCHUM.png", agenda: "Deliberation on deteriorating human rights associated with immigration and forced migration", eb: [{ name: "Chairperson", role: "TBA", img: "assets/MUNchair26"},{ name: "Vice Chairperson", role: "TBA", img: "assets/MUNchair26"}] },
    { name: "IPC", full: "International Press Corps", logo: "assets/IPC.png", agenda: "Role of media in reporting international affairs", eb: [{ name: "Chairperson", role: "TBA", img: "assets/MUNchair26"},{ name: "Vice Chairperson", role: "TBA", img: "assets/MUNchair26"}] }
];

const container = document.getElementById('committeesGrid');
committeesData.forEach(com => {
    const card = document.createElement('div'); card.className = 'committee-card reveal';
    const ebHTML = `<div class="eb-members-horizontal">${com.eb.map(m => `<div class="eb-member"><img src="${m.img}" class="eb-logo1" alt="${m.name}"><span>${m.name}</span><small>${m.role}</small></div>`).join('')}</div>`;
    card.innerHTML = `<div class="card-inner"><div class="card-front"><img src="${com.logo}" class="committee-logo" alt="${com.name}"><h3>${com.name}</h3><p>${com.full}</p><div class="committee-topic">${com.agenda}</div></div><div class="card-back"><h3>MEET THE EB</h3>${ebHTML}</div></div>`;
    container.appendChild(card);
});
const featuredData =[
    { name: "UNGA", full: "United Nations General Assembly", logo: "assets/UNGA.png", agenda: "Situation in the Indian Subcontinent · Freeze: Dec 7, 1971", eb: [{ name: "Ronit", role: "Chair", img: "assets/MUNchair26/Ronit - UNGA - Chair.jpeg"},{ name: "Kishore", role: "Vice Chair", img: "assets/MUNchair26/kishore unga chair.JPG"}] },
    { name: "NARCOS+", full: "FLAGSHIP COMMITTEE", logo: "assets/NARCOS.png", agenda: "The Extradition Question · 7th August 1982", eb: [{ name: "Crisis Director", role: "NARCOS+", img: "assets/MUNchair26/"},{ name: "Co-Director", role: "Operations", img: "https://placehold.co/100x100/ff3b6f/white?text=CoDir"}] },
    { name: "OAS", full: "Organization of American States", logo: "assets/OAS.png", agenda: "Twentieth Meeting of Consultation · Freeze: April 26, 1982", eb: [ { name: "Keshav puri", role: "Chairperson", img: ""}, { name: "Sai Smrithi", role: "Vice Chairperson", img: "assets/MUNchair26/Sai smrithi - vice chairperson- OAS.jpg"},{ name: "Praghathi Suresh", role: "Moderator", img: "assets/MUNchair26/Praghathi Suresh_Moderator_OAS.jpeg"}] }
];

const fcontainer = document.getElementById('firstgrid');
featuredData.forEach(com => {
    const card = document.createElement('div'); card.className = 'featured-card reveal';
    const ebHTML = `<div class="featured-eb-members">${com.eb.map(m => `<div class="featured-eb-member"><img src="${m.img}" class="featured-eb-img" alt="${m.name}"><span>${m.name}</span><small>${m.role}</small></div>`).join('')}</div>`;
    card.innerHTML = `<div class="featured-card-inner"><div class="featured-card-front"><img src="${com.logo}" class="featured-committee-logo" alt="${com.name}"><h3>${com.name}</h3><p>${com.full}</p><div class="featured-topic">${com.agenda}</div></div><div class="featured-card-back"><h3>MEET THE EB</h3>${ebHTML}</div></div>`;
    fcontainer.appendChild(card);
});

const countryFlags = [
    { code: "us" }, { code: "in" }, { code: "gb" }, { code: "fr" }, 
    { code: "mx" }, { code: "ma" }, { code: "ru" }, { code: "cn" },
    { code: "de" }, { code: "jp" }, { code: "ca" }, { code: "au" },
    { code: "br" }, { code: "it" }, { code: "kr" }, { code: "za" },
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
    for (let i = 0; i < 50; i++) {
        const particle = document.createElement('div');
        particle.className = 'dust-mote';
        particle.style.left = Math.random() * 100 + '%';
        particle.style.top = Math.random() * 100 + '%';
        particle.style.animationDelay = Math.random() * 7 + 's';
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
const GOOGLE_SHEETS_URL = 'https://script.google.com/macros/s/AKfycby-dbelyRhsml00cZCl0xd0VmQufGWjSnBT_141DZRpxOk8sRjNVP5jmK4_VXGECR1P/exec';

function sendToGoogleSheets() {
    const name = document.getElementById('userName').value.trim();
    const email = document.getElementById('userEmail').value.trim();
    const mobile = document.getElementById('userMobile').value.trim();
    const institution = document.getElementById('userInstitution').value.trim();
    const message = document.getElementById('userMessage').value.trim();
    const statusDiv = document.getElementById('formStatus');
    
    if (!name || !email || !message) {
        statusDiv.style.display = 'block';
        statusDiv.style.backgroundColor = '#f8d7da';
        statusDiv.style.color = '#721c24';
        statusDiv.innerHTML = '❌ Please fill in all required fields (*)';
        setTimeout(() => statusDiv.style.display = 'none', 3000);
        return;
    }
    
    if (!email.includes('@')) {
        statusDiv.style.display = 'block';
        statusDiv.style.backgroundColor = '#f8d7da';
        statusDiv.style.color = '#721c24';
        statusDiv.innerHTML = '❌ Please enter a valid email';
        setTimeout(() => statusDiv.style.display = 'none', 3000);
        return;
    }
    
    statusDiv.style.display = 'block';
    statusDiv.style.backgroundColor = '#d4edda';
    statusDiv.style.color = '#155724';
    statusDiv.innerHTML = '📤 Sending...';
    
    const formData = new URLSearchParams();
    formData.append('timestamp', new Date().toLocaleString());
    formData.append('name', name);
    formData.append('email', email);
    formData.append('mobile', mobile || 'Not provided');
    formData.append('institution', institution || 'Not provided');
    formData.append('message', message);
    
    fetch(GOOGLE_SHEETS_URL, {
        method: 'POST',
        mode: 'no-cors',
        body: formData
    });
    
    statusDiv.innerHTML = '✅ Message sent successfully! We will contact you soon.';
    document.getElementById('userName').value = '';
    document.getElementById('userEmail').value = '';
    document.getElementById('userMobile').value = '';
    document.getElementById('userInstitution').value = '';
    document.getElementById('userMessage').value = '';
    
    setTimeout(() => statusDiv.style.display = 'none', 5000);
}
document.getElementById('crisisBtn').addEventListener('click', function() {
    window.open('registration.html', '_blank');
});
document.getElementById('btn-outline').addEventListener('click', function() {
    window.open('registration.html', '_blank');

});
document.getElementById('btn-small').addEventListener('click', function() {
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
