let currentPersona = 'stellapaw'; 

const mainContent = document.getElementById('main-content');
const togglePersonaButton = document.getElementById('toggle-persona');
const meetXueruButton = document.getElementById('meet-xueru-button');
const stellapawSection = document.getElementById('stellapaw-section');
const yukirlySection = document.getElementById('yukirly-section');
const viewImagesButton = document.getElementById('view-stellapaw-images');
const backToProfileButton = document.getElementById('back-to-profile');
const stellapawInfoSection = document.querySelector('#stellapaw-section .stellapaw-info');
const stellapawGallerySection = document.getElementById('stellapaw-gallery-section');
const playButtonContainer = document.getElementById('play-button-container');
const featuredVideo = document.getElementById('featured-video');
const volumeControl = document.getElementById('volume-control');
const playButtonContainer2 = document.getElementById('play-button-container-2');
const featuredVideo2 = document.getElementById('featured-video-2');
const volumeControl2 = document.getElementById('volume-control-2');
const yukirlyTabContents = document.querySelectorAll('#yukirly-section .tab-content');
const playPauseButton1 = document.getElementById('play-pause-button-1');
const playPauseButton2 = document.getElementById('play-pause-button-2');

const snowEffectContainer = document.getElementById('snow-effect-container');
const sakuraEffectContainer = document.getElementById('sakura-effect-container');
const snowflakeImageUrls = [
    'https://imgur.com/nYMsR6L.png',
    'https://imgur.com/qEK4vFy.png',
    'https://imgur.com/QXkL2V1.png'
];
const sakuraImageUrls = [
    'https://imgur.com/aBRbOYV.png',
    'https://imgur.com/vrUjhnt.png',
    'https://imgur.com/SY2qtMN.png'
];
let particleEffects = {
    snow: { container: snowEffectContainer, images: snowflakeImageUrls, particles: [], intervalId: null, animationFrameId: null },
    sakura: { container: sakuraEffectContainer, images: sakuraImageUrls, particles: [], intervalId: null, animationFrameId: null }
};
const MAX_PARTICLES_COUNT = 8;
const PARTICLE_ADD_INTERVAL = 800;

function getRandomValue(min, max) { return Math.random() * (max - min) + min; }

function createParticleElement(effectType) {
    const effect = particleEffects[effectType];
    if (!effect || !effect.container) return null;
    const particle = document.createElement('div');
    particle.className = 'particle';
    const randomImage = effect.images[Math.floor(Math.random() * effect.images.length)];
    particle.style.backgroundImage = `url(${randomImage})`;
    const size = getRandomValue(10, effectType === 'snow' ? 20 : 30);
    particle.style.width = `${size}px`;
    particle.style.height = `${size}px`;
    particle.style.opacity = getRandomValue(0.5, 0.9);
    particle.style.left = `${getRandomValue(-size, window.innerWidth)}px`;
    particle.style.top = `-${size + 40}px`;
    particle.customData = {
        top: parseFloat(particle.style.top),
        left: parseFloat(particle.style.left),
        speedY: getRandomValue(0.3, effectType === 'snow' ? 1.5 : 1.0),
        speedX: getRandomValue(-0.15, 0.15),
        rotation: getRandomValue(0, 360),
        rotationSpeed: getRandomValue(-0.5, 0.5)
    };
    effect.container.appendChild(particle);
    effect.particles.push(particle);
    return particle;
}

function updateParticles(effectType) {
    const effect = particleEffects[effectType];
    if (!effect || !effect.container || effect.container.style.display === 'none') {
        if (effect && effect.animationFrameId) {
            cancelAnimationFrame(effect.animationFrameId);
            effect.animationFrameId = null;
        }
        return;
    }
    for (let i = effect.particles.length - 1; i >= 0; i--) {
        const p = effect.particles[i];
        if (!p.customData) { p.remove(); effect.particles.splice(i, 1); continue; }
        p.customData.top += p.customData.speedY;
        p.customData.left += p.customData.speedX;
        p.customData.rotation += p.customData.rotationSpeed;
        p.style.top = `${p.customData.top}px`;
        p.style.left = `${p.customData.left}px`;
        p.style.transform = `rotate(${p.customData.rotation}deg)`;
        if (p.customData.top > window.innerHeight + 50 || p.customData.left < -50 || p.customData.left > window.innerWidth + 50) {
            p.remove();
            effect.particles.splice(i, 1);
        }
    }
    effect.animationFrameId = requestAnimationFrame(() => updateParticles(effectType));
}

function manageParticleCreation(effectType) {
    const effect = particleEffects[effectType];
    if (!effect || !effect.container || effect.container.style.display === 'none') {
         if (effect && effect.intervalId) { clearInterval(effect.intervalId); effect.intervalId = null; }
        return;
    }
    if (effect.particles.length < MAX_PARTICLES_COUNT) { createParticleElement(effectType); }
}

function startParticleSystem(effectType) {
    const effectToStart = particleEffects[effectType];
    const effectToStop = particleEffects[effectType === 'snow' ? 'sakura' : 'snow'];

    if (effectToStop && effectToStop.container) {
        if (effectToStop.intervalId) clearInterval(effectToStop.intervalId);
        if (effectToStop.animationFrameId) cancelAnimationFrame(effectToStop.animationFrameId);
        effectToStop.intervalId = null;
        effectToStop.animationFrameId = null;
        effectToStop.container.style.display = 'none';
        effectToStop.container.innerHTML = '';
        effectToStop.particles = [];
    }

    if (effectToStart && effectToStart.container) {
        effectToStart.container.style.display = 'block';
        effectToStart.particles.forEach(p => p.remove());
        effectToStart.particles = [];
        for(let i=0; i < Math.min(MAX_PARTICLES_COUNT, 3); i++) {
            createParticleElement(effectType);
        }
        if (effectToStart.intervalId) clearInterval(effectToStart.intervalId);
        effectToStart.intervalId = setInterval(() => manageParticleCreation(effectType), PARTICLE_ADD_INTERVAL);

        if (effectToStart.animationFrameId) cancelAnimationFrame(effectToStart.animationFrameId);
        effectToStart.animationFrameId = requestAnimationFrame(() => updateParticles(effectType));
    }
}

function showPersona(persona) {
    currentPersonaGlobal = persona; // Update global persona state
    currentPersona = persona; // Update local persona state for this file

    if (persona === 'stellapaw') {
        document.body.classList.remove('yukirly-theme');
        document.body.classList.add('stellapaw-theme');
        if (stellapawSection) stellapawSection.style.display = 'block';
        if (yukirlySection) yukirlySection.style.display = 'none';
        startParticleSystem('snow');
    } else if (persona === 'yukirly') {
        document.body.classList.remove('stellapaw-theme');
        document.body.classList.add('yukirly-theme');
        if (stellapawSection) stellapawSection.style.display = 'none';
        if (yukirlySection) yukirlySection.style.display = 'block';
        startParticleSystem('sakura');

        const homeTabContent = document.getElementById('yukirly-home');
        if (homeTabContent && yukirlyTabContents) {
             yukirlyTabContents.forEach(content => content.classList.remove('active'));
             homeTabContent.classList.add('active');
        }
    }
    if (typeof updateContentInternal === 'function') {
        updateContentInternal(currentLang, currentPersona);
    }
}

document.addEventListener('DOMContentLoaded', () => {
    if (typeof currentLang === 'undefined') {
      currentLang = localStorage.getItem('preferredLang') || 'zh-tw';
    }
    if (currentPersona === 'stellapaw') {
        document.body.classList.add('stellapaw-theme');
    } else if (currentPersona === 'yukirly') {
        document.body.classList.add('yukirly-theme');
    }

    showPersona(currentPersona);

    if (togglePersonaButton) {
        togglePersonaButton.addEventListener('click', function() {
            showPersona(currentPersona === 'stellapaw' ? 'yukirly' : 'stellapaw');
        });
    }

    if (meetXueruButton) {
        meetXueruButton.addEventListener('click', function() {
            window.location.href = 'xueru.html';
        });
    }

    if (viewImagesButton && backToProfileButton && stellapawInfoSection && stellapawGallerySection) {
        viewImagesButton.addEventListener('click', function() {
            if (stellapawInfoSection) stellapawInfoSection.style.display = 'none';
            if (viewImagesButton) viewImagesButton.style.display = 'none';
            if (stellapawGallerySection) stellapawGallerySection.style.display = 'block';
        });
        backToProfileButton.addEventListener('click', function() {
            if (stellapawGallerySection) stellapawGallerySection.style.display = 'none';
            if (stellapawInfoSection) stellapawInfoSection.style.display = 'grid';
            if (viewImagesButton) viewImagesButton.style.display = 'block';
        });
    }

    if (playButtonContainer && featuredVideo) {
        playButtonContainer.addEventListener('click', function() {
            this.style.display = 'none';
            featuredVideo.style.display = 'block';
            featuredVideo.play().catch(error => console.error("Video 1 play failed:", error));
        });
        if (volumeControl) {
            volumeControl.addEventListener('input', function() {
                featuredVideo.volume = this.value;
            });
        }
        if (playPauseButton1) {
            playPauseButton1.addEventListener('click', () => {
                if (featuredVideo.paused || featuredVideo.ended) {
                    featuredVideo.play();
                } else {
                    featuredVideo.pause();
                }
            });
            featuredVideo.addEventListener('play', () => { playPauseButton1.textContent = '⏸'; });
            featuredVideo.addEventListener('pause', () => { playPauseButton1.textContent = '▶'; });
            featuredVideo.addEventListener('ended', () => { playPauseButton1.textContent = '▶'; });
        }
    }

    if (playButtonContainer2 && featuredVideo2) {
        playButtonContainer2.addEventListener('click', function() {
            this.style.display = 'none';
            featuredVideo2.style.display = 'block';
            featuredVideo2.play().catch(error => console.error("Video 2 play failed:", error));
        });
        if (volumeControl2) {
            volumeControl2.addEventListener('input', function() {
                featuredVideo2.volume = this.value;
            });
        }
        if (playPauseButton2) {
            playPauseButton2.addEventListener('click', () => {
                if (featuredVideo2.paused || featuredVideo2.ended) {
                    featuredVideo2.play();
                } else {
                    featuredVideo2.pause();
                }
            });
            featuredVideo2.addEventListener('play', () => { playPauseButton2.textContent = '⏸'; });
            featuredVideo2.addEventListener('pause', () => { playPauseButton2.textContent = '▶'; });
            featuredVideo2.addEventListener('ended', () => { playPauseButton2.textContent = '▶'; });
        }
    }
});