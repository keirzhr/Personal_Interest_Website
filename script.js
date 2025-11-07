const codeSnippets = {
    python: `score = int(input("Enter your exam score: "))<br>
    if score >= 30:<br>&nbsp;&nbsp;&nbsp;&nbsp;print("Mag swimming")<br>
    else:<br>&nbsp;&nbsp;&nbsp;&nbsp;print("Magpabangga sa truck")`,

    cpp: `#include &lt;iostream&gt;<br>using namespace std;<br>int main() {<br> cout<< "Aray kooo" &lt;&lt; endl;<br>&nbsp;&nbsp;&nbsp;&nbsp;return 0;}`,

    javascript: `let msg = "keme lang bhie";<br>for (let i = 0; i < 3; i++) {<br>&nbsp;&nbsp;&nbsp;&nbsp;console.log(msg);<br>}`
};

function switchLanguage(lang) {
    const display = document.getElementById('codeDisplay');
    const buttons = document.querySelectorAll('.lang-btn');
    buttons.forEach(btn => btn.classList.remove('active'));
    event.target.classList.add('active');
    display.innerHTML = codeSnippets[lang] + '<span class="cursor"></span>';
}

// Game Popup
function showGamePopup(title, description) {
    const popupBody = document.getElementById('popupBody');
    popupBody.innerHTML = `
        <h3>🎮 ${title}</h3>
        <p>${description}</p>
        <p style="color: #ff6666; margin-top: 20px;">Ready to dominate the battlefield!</p>`;
    document.getElementById('popupOverlay').style.display = 'flex';
}

// Coder Popup
function showCoderPopup() {
    const popupBody = document.getElementById('popupBody');
    popupBody.innerHTML = `
        <h3>💻 Debug Mode Activated</h3>
        <p style="font-size: 1.2em;">Debugging with coffee...</p>
        <div class="progress-bar">
            <div class="progress-fill"></div>
        </div>
        <p style="color: #00ff00; font-weight: 600; font-size: 1.3em;">✓ Error fixed successfully!</p>
        <p style="margin-top: 20px;">Coffee level: <span style="color: #ff6666;">Optimal</span></p>`;
    document.getElementById('popupOverlay').style.display = 'flex';
}

// Skill Bar Animation
document.addEventListener('DOMContentLoaded', function() {
    const skillBars = document.querySelectorAll('.skill-bar');
    
    const animateSkills = (entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const bar = entry.target;
                const level = bar.getAttribute('data-level');
                bar.style.setProperty('--skill-level', level + '%');
                bar.classList.add('animate');
                observer.unobserve(bar);
            }
        });
    };
    
    const skillObserver = new IntersectionObserver(animateSkills, {
        threshold: 0.5
    });
    
    skillBars.forEach(bar => {
        skillObserver.observe(bar);
    });
});

function showMoviePopup(title, description, year, rating, trailerUrl) {
  const stars = '⭐'.repeat(rating);
  const popupBody = document.getElementById('popupBody');

  popupBody.innerHTML = `
    <h3>🎬 ${title}</h3>
    <p><strong>Year:</strong> ${year}</p>
    <p class="stars">${stars}</p>
    <p style="margin-top: 15px; line-height: 1.8;">${description}</p>
    <div class="trailer-container">
      <iframe width="100%" height="230" src="${trailerUrl}" frameborder="0" allowfullscreen></iframe>
    </div>`;
  document.getElementById('popupOverlay').style.display = 'flex';
}

// Music Popup with Audio Player
function showMusicPopup(title, artist, audioSrc, imageSrc) {
    const popupBody = document.getElementById('popupBody');
    popupBody.innerHTML = `
        <div class="music-popup-content" style="background-image: url('${imageSrc}');">
            <div class="music-popup-overlay">
                <div class="music-popup-header">
                    <h3 class="popup-title">${title}</h3>
                    <p class="popup-artist">${artist}</p>
                </div>
                
                <div class="music-popup-player">
                    <p class="now-playing">🎧 Now Playing...</p>
                    <audio controls autoplay>
                        <source src="${audioSrc}" type="audio/mpeg">
                        Your browser does not support the audio element.
                    </audio>
                </div>
            </div>
        </div>`;
    document.getElementById('popupOverlay').style.display = 'flex';
}

// Contact Popup
function showContactPopup() {
    const popupBody = document.getElementById('popupBody');
    popupBody.innerHTML = `
        <h3>Let's Connect!</h3>
        <p style="margin-bottom: 30px;">Find me on these platforms:</p>
        <div class="social-links">
            <a href="https://www.facebook.com/keirzhr?mibextid=ZbWKwL" target="_blank" class="social-icon" title="Facebook">
                <img src="images/fb.png" alt="Facebook Logo">
            </a>
            <a href="https://github.com/keirzhr" target="_blank" class="social-icon" title="GitHub">
                <img src="images/github.png" alt="GitHub Logo">
            </a>
            <a href="https://www.instagram.com/keirzhr/" target="_blank" class="social-icon" title="Instagram">
                <img src="images/instagram.png" alt="Instagram Logo">
            </a>
            <a href="mailto:keilrizherv@gmail.com" target="_blank" class="social-icon" title="Gmail">
                <img src="images/gmail.png" alt="Gmail Logo">
            </a>
            <a href="https://www.tiktok.com/@krzher?_t=ZS-90oV8t9KsFB&_r=1" target="_blank" class="social-icon" title="Tiktok">
                <img src="images/tiktok.png" alt="Tiktok Logo">
            </a>
            <a href="https://discord.com/users/1160141003429265409" target="_blank" class="social-icon" title="Discord">
                <img src="images/discord.png" alt="Discord Logo">
            </a>
        </div>
        <p style="margin-top: 30px; color: #ffaaaa; font-size: 0.95em;">Click on any icon to visit my profile!</p>
    `;

    document.getElementById('popupOverlay').style.display = 'flex';
}

// Close Popup
function closePopup() {
    const popup = document.getElementById('popupOverlay');
    const audioElements = popup.querySelectorAll('audio');
    audioElements.forEach(audio => {
        audio.pause();
        audio.currentTime = 0;
    });
    popup.style.display = 'none';
    document.getElementById('popupBody').innerHTML = '';
}

// Close popup when clicking outside
document.getElementById('popupOverlay').addEventListener('click', function(e) {
    if (e.target === this) {
        closePopup();
    }
});

// Comfort Corner Popup
function showComfortPopup(title, description) {
    const popupBody = document.getElementById('popupBody');
    popupBody.innerHTML = `
        <h3>${title}</h3>
        <p style="margin-top: 20px; line-height: 1.6;">${description}</p>
        <p style="color: #ff6666; margin-top: 20px; font-style: italic;">"Part of my comfort zone!"</p>
    `;
    document.getElementById('popupOverlay').style.display = 'flex';
}

// Add click events
const chillItems = document.querySelectorAll('.chill-item');

chillItems.forEach(item => {
    item.addEventListener('click', () => {
        const title = item.querySelector('h3').innerText;
        const description = item.querySelector('p').innerText;
        showComfortPopup(title, description);
    });
});

// Back to Top Button
window.addEventListener('scroll', function() {
    const backToTop = document.getElementById('backToTop');
    if (window.pageYOffset > 300) {
        backToTop.style.display = 'block';
    } else {
        backToTop.style.display = 'none';
    }
});

function scrollToTop() {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
}

// Hamburger Menu Toggle
const hamburger = document.getElementById('hamburger');
const navMenu = document.getElementById('navMenu');
const navLinks = document.querySelectorAll('.nav-link');

hamburger.addEventListener('click', () => {
    hamburger.classList.toggle('active');
    navMenu.classList.toggle('active');
});

// Close menu when clicking on a link
navLinks.forEach(link => {
    link.addEventListener('click', () => {
        hamburger.classList.remove('active');
        navMenu.classList.remove('active');
    });
});

// Smooth scroll to sections
navLinks.forEach(link => {
    link.addEventListener('click', (e) => {
        e.preventDefault();
        const targetId = link.getAttribute('href');
        
        if (targetId === '#home') {
            window.scrollTo({
                top: 0,
                behavior: 'smooth'
            });
        } else {
            const targetSection = document.querySelector(targetId);
            if (targetSection) {
                const navHeight = document.querySelector('.navbar').offsetHeight;
                const targetPosition = targetSection.offsetTop - navHeight;
                
                window.scrollTo({
                    top: targetPosition,
                    behavior: 'smooth'
                });
            }
        }
    });
});

// Close menu when clicking outside
document.addEventListener('click', (e) => {
    if (!hamburger.contains(e.target) && !navMenu.contains(e.target)) {
        hamburger.classList.remove('active');
        navMenu.classList.remove('active');
    }
});