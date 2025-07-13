function launchFireworks() {
    const canvas = document.getElementById('fireworksCanvas');
    const ctx = canvas.getContext('2d');
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    // Configuración de los fuegos artificiales
    const fireworks = [];
    for (let i = 0; i < 100; i++) {
        fireworks.push({
            x: Math.random() * canvas.width,
            y: Math.random() * canvas.height,
            radius: Math.random() * 3 + 1,
            color: `hsl(${Math.random() * 360}, 100%, 50%)`,
            speed: Math.random() * 3 + 1
        });
    }

    function drawFireworks() {
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        fireworks.forEach(firework => {
            ctx.beginPath();
            ctx.arc(firework.x, firework.y, firework.radius, 0, Math.PI * 2);
            ctx.fillStyle = firework.color;
            ctx.fill();
            firework.y -= firework.speed;
        });
        requestAnimationFrame(drawFireworks);
    }
    drawFireworks();
}