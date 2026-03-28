const music = document.getElementById("bgMusic");

window.addEventListener("load", () => {

  const isPlaying = localStorage.getItem("musicPlaying");

  if (isPlaying === "true") {
    music.play().catch(()=>{});
  } else {
    music.play().then(()=>{
      localStorage.setItem("musicPlaying","true");
    }).catch(()=>{});
  }

});

// Play music on the very first user interaction (browser requires this)
let musicStarted = false;

function startMusic() {
  if (!musicStarted) {
    const music = document.getElementById('bgMusic');
    music.play().catch(() => {
      // Browser still blocked it — silently ignore
    });
    musicStarted = true;
  }
}

// Trigger music on any click or keypress on the page
document.addEventListener('click', startMusic, { once: true });
document.addEventListener('keydown', startMusic, { once: true });

function celebrate() {
  // Start music immediately on the cake click (counts as user interaction)
  startMusic();

  document.getElementById('msg').classList.add('show');

  // Confetti burst
  for (let i = 0; i < 40; i++) {
    const dot = document.createElement('span');
    dot.style.cssText = `
      position: fixed;
      left: ${Math.random() * 100}vw;
      top: -10px;
      width: ${6 + Math.random() * 8}px;
      height: ${6 + Math.random() * 8}px;
      border-radius: 50%;
      background: ${['#F70D77','#FF9809','#fff','#ffb3d9'][Math.floor(Math.random()*4)]};
      animation: fall ${1.2 + Math.random() * 1.5}s ease-in forwards;
      z-index: 999;
      pointer-events: none;
    `;
    document.body.appendChild(dot);
    setTimeout(() => dot.remove(), 3000);
  }

  // Navigate to next page after a short delay
  setTimeout(() => {
    window.location.href = 'page2.html';
  }, 2000);
}

function createBalloon() {
  const balloon = document.createElement('div');
  balloon.classList.add('balloon');

  const colors = ['#ff4d6d', '#ff758f', '#ff8fa3', '#ffd166', '#ff85a1'];
  balloon.style.background = colors[Math.floor(Math.random() * colors.length)];
  balloon.style.left = Math.random() * 100 + 'vw';
  balloon.style.animationDuration = 4 + Math.random() * 3 + 's';

  document.querySelector('.balloon-container').appendChild(balloon);
  setTimeout(() => balloon.remove(), 7000);
}

for (let i = 0; i < 2000; i++) {
  setTimeout(createBalloon, i * 200);
}