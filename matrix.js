// === LATAR BELAKANG MATRIX EMAS BERCAHAYA ===
const canvas = document.getElementById('matrix-bg');
const ctx = canvas.getContext('2d');
canvas.width = innerWidth;
canvas.height = innerHeight;

const letters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789';
const fontSize = 16;
const cols = canvas.width / fontSize;
const drops = Array(Math.floor(cols)).fill(1);

function draw() {
  ctx.fillStyle = 'rgba(0,0,0,0.05)';
  ctx.fillRect(0, 0, canvas.width, canvas.height);
  ctx.shadowBlur = 6;
  ctx.shadowColor = '#FFD700';
  ctx.fillStyle = '#FFD700';
  ctx.font = fontSize + 'px monospace';
  drops.forEach((y, i) => {
    const text = letters[Math.floor(Math.random() * letters.length)];
    ctx.fillText(text, i * fontSize, y * fontSize);
    if (y * fontSize > canvas.height && Math.random() > 0.975) drops[i] = 0;
    drops[i]++;
  });
}

setInterval(draw, 35);

window.addEventListener('resize', () => {
  canvas.width = innerWidth;
  canvas.height = innerHeight;
});