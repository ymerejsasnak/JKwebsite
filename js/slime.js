var canvas = document.getElementById("canvas");
var c = canvas.getContext("2d");
c.canvas.width  = window.innerWidth;
c.canvas.height = window.innerHeight;

var particles = [];
var tick = 0;

function loop() {
	window.requestAnimationFrame(loop);
	createParticles();
	updateParticles();
	killParticles();
	drawParticles();
	tick++;
}

function createParticles() {
	//every 2 ticks
	if (tick % 2 === 0) {
		//add particle if fewer than 100
		if (particles.length < 100) {
			particles.push({
				x: Math.random() * canvas.width,
				y: 0,
				speed: 0.1 + Math.random(),
				radius: 2 + Math.random() * 6,
				color: "rgba(" + Math.floor(Math.random() * 100) + "," +
					               Math.floor(Math.random() * 50 + 200) + ", 100, 1)"

			});
		}
	}
}

function updateParticles() {
	for (var i in particles) {
		var particle = particles[i];
		particle.y += particle.speed;
		particle.x += Math.random() - 0.5;
	}
}

function killParticles() {
	for (var i in particles) {
		var particle = particles[i];
		if (particle.y > canvas.height) {
			particles.splice(i, 1); 
		}
	}
}

function drawParticles() {
   
  for (var i in particles) {
  	var particle = particles[i];
  	c.beginPath();
  	c.arc(particle.x, particle.y, particle.radius, 0, Math.PI * 2);
  	c.closePath();
  	
  	c.fillStyle = particle.color;
  	c.fill();
  }
}







window.requestAnimationFrame(loop);