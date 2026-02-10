let noFrases = [
    "Are you sure?",
    "Think again!",
    "Last chance...",
    "Surely not?",
    "You're breaking my heart! 😭"
];

let fraseIndex = 0; // keeps track of which phrase

function clickNo() {
    const happyGif = document.querySelector('.gif-happy');
    const sadGif = document.querySelector('.gif-sad');
    const h1 = document.querySelector('h1');
    const noBtn = document.querySelector('.no');

    document.querySelector('.gif-yes').style.display = 'none';
    happyGif.style.display = 'none';
    sadGif.style.display = 'block';

    if (fraseIndex < noFrases.length) {
        // Still have messages to show
        h1.innerText = noFrases[fraseIndex];
        fraseIndex++;
        document.querySelector('.yes').style.fontSize = (1 + fraseIndex) + "em";
    } else {
        // Teleport Messages
        teleportButton(noBtn);

        // Make it run away from cursor
        noBtn.onmouseover = () => teleportButton(noBtn);
    }
}

// Create a helper function so we don't repeat code
function teleportButton(btn) {
    const x = Math.floor(Math.random() * (window.innerWidth - btn.offsetWidth));
    const y = Math.floor(Math.random() * (window.innerHeight - btn.offsetHeight));

    btn.style.position = 'fixed'; // 'fixed' is better for jumping around the whole screen
    btn.style.left = x + 'px';
    btn.style.top = y + 'px';
    btn.style.zIndex = "1000"; // Keep it on top
}

function clickYes() {
    const happyGif = document.querySelector('.gif-happy');
    const sadGif = document.querySelector('.gif-sad');
    const yesGif = document.querySelector('.gif-yes');
    const h1 = document.querySelector('h1');


    yesGif.style.display = 'block';
    happyGif.style.display = 'none';
    sadGif.style.display = 'none';
    h1.innerText = 'I Love you ❤️';

    document.querySelector('.buttons').style.display = 'none';

    //hearts explosion middle
    for (let i = 0; i < 100; i++) {
        const heart = document.createElement('div');
        heart.innerHTML = '❤️';
        heart.style.position = 'fixed';

        // 1. Center them, but add a tiny bit of random 'spawn' area 
        // so they aren't all on one single pixel
        heart.style.left = '50vw';
        heart.style.top = '50vh';

        // 2. IMPORTANT: Make sure they are in front of the background
        heart.style.zIndex = '100';

        heart.style.fontSize = Math.random() * 20 + 20 + 'px';

        // Use a slight delay on the transition property itself
        heart.style.transition = `all ${Math.random() * 2 + 2}s ease-out`;

        document.body.appendChild(heart);

        // 3. We use a double timeout or a slightly longer delay (50ms) 
        // to make sure the browser registers the starting position first
        setTimeout(() => {
            const randomX = (Math.random() - 0.5) * 200;
            const randomY = (Math.random() - 0.5) * 200;

            heart.style.transform = `translate(${randomX}vw, ${randomY}vh) rotate(${Math.random() * 360}deg)`;
            heart.style.opacity = '0';
        }, 50);

        setTimeout(() => { heart.remove(); }, 4000);
    }
}
