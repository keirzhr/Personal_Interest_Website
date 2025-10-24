const codeSnippets = {
    python: `print("Hello, World! ☕")
for i in range(3):
print("Coding with passion!")`,
    cpp: `#include <iostream>
using namespace std;
int main() {
cout << "Hello, World! ☕" << endl;
return 0;
}`,
    javascript: `console.log("Hello, World! ☕");
for (let i = 0; i < 3; i++) {
console.log("Coding with passion!");
}`
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
        <p style="color: #ff6666; margin-top: 20px;">Ready to dominate the battlefield!</p>
    `;
    document.getElementById('popupOverlay').style.display = 'flex';
}

// Coder Popup
function showCoderPopup() {
    const popupBody = document.getElementById('popupBody');
    popupBody.innerHTML = `
        <h3>☕💻 Debug Mode Activated</h3>
        <p style="font-size: 1.2em;">Debugging with coffee...</p>
        <div class="progress-bar">
            <div class="progress-fill"></div>
        </div>
        <p style="color: #00ff00; font-weight: 600; font-size: 1.3em;">✓ Error fixed successfully!</p>
        <p style="margin-top: 20px;">Coffee level: <span style="color: #ff6666;">Optimal</span></p>
    `;
    document.getElementById('popupOverlay').style.display = 'flex';
}

// Movie Popup
function showMoviePopup(title, description, year, rating) {
    const stars = '⭐'.repeat(rating);
    const popupBody = document.getElementById('popupBody');
    popupBody.innerHTML = `
        <h3>🎬 ${title}</h3>
        <p><strong>Year:</strong> ${year}</p>
        <p class="stars">${stars}</p>
        <p style="margin-top: 20px; line-height: 1.8;">${description}</p>
        <p style="color: #ff6666; margin-top: 20px; font-style: italic;">"A must-watch masterpiece!"</p>
    `;
    document.getElementById('popupOverlay').style.display = 'flex';
}

// Music Popup with Audio Player
function showMusicPopup(title, artist, audioSrc) {
    const popupBody = document.getElementById('popupBody');
    popupBody.innerHTML = `
        <h3>🎧 ${title}</h3>
        <p><strong>Artist:</strong> ${artist}</p>
        <p style="margin-top: 20px; color: #ffaaaa;">Now Playing...</p>
        <audio controls autoplay style="width: 100%; margin-top: 20px;">
            <source src="${audioSrc}" type="audio/mpeg">
            Your browser does not support the audio element.
        </audio>
        <p style="margin-top: 20px; color: #ff6666;">"This song keeps me going through late-night coding sessions!"</p>
    `;
    document.getElementById('popupOverlay').style.display = 'flex';
}

// Contact Popup
function showContactPopup() {
    const popupBody = document.getElementById('popupBody');
    popupBody.innerHTML = `
        <h3>💬 Let's Connect!</h3>
        <p style="margin-bottom: 30px;">Find me on these platforms:</p>
        <div class="social-links">
            <a href="https://www.facebook.com/keirzhr?mibextid=ZbWKwL" target="_blank" class="social-icon" title="Facebook">
                <img src="images/fb.png" alt="Facebook Logo" style="width:80px; height:80px;">
            </a>
            <a href="https://github.com/keirzhr" target="_blank" class="social-icon" title="GitHub">
                <img src="images/github.png" alt="GitHub Logo" style="width:80px; height:80px;">
            </a>
            <a href="https://www.instagram.com/keirzhr/" target="_blank" class="social-icon" title="Instagram">
                <img src="images/instagram.png" alt="Instagram Logo" style="width:80px; height:80px;">
            </a>
            <a href="mailto:keilrizherv@gmail.com" target="_blank" class="social-icon" title="Gmail">
                <img src="images/gmail.png" alt="Gmail Logo" style="width:80px; height:80px;">
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
        <h3>✨ ${title}</h3>
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