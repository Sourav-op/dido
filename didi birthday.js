function showSection(id) {
    document.getElementById('landing').classList.add('hidden');
    document.getElementById(id).classList.remove('hidden');
    window.scrollTo(0, 0);
}

function goBack() {
    document.getElementById('birthday-section').classList.add('hidden');
    document.getElementById('note-section').classList.add('hidden'); // if you add one
    document.getElementById('landing').classList.remove('hidden');
}

// Simple Star Generator
const container = document.getElementById('star-container');
for (let i = 0; i < 100; i++) {
    const star = document.createElement('div');
    star.className = 'star';
    star.style.position = 'absolute';
    star.style.left = Math.random() * 100 + 'vw';
    star.style.top = Math.random() * 100 + 'vh';
    star.style.width = '2px';
    star.style.height = '2px';
    star.style.backgroundColor = '#fff';
    star.style.opacity = Math.random();
    container.appendChild(star);
}