let particles = []; // Arreglo para almacenar las partículas

function setup() {
  createCanvas(windowWidth, windowHeight);
}

function draw() {
  background(0, 50); // Fondo negro con un poco de transparencia

  // Genera nuevas partículas en la posición del mouse al hacer clic
  if (mouseIsPressed) {
    for (let i = 0; i < 5; i++) {
      // Loop 1: Genera 5 partículas
      particles.push(new Particle(mouseX, mouseY)); // Crea una nueva partícula
    }
  }

  // Dibuja y actualiza cada partícula
  for (let i = particles.length - 1; i >= 0; i--) {
    // Loop 2: Itera sobre las partículas en el arreglo
    let p = particles[i];
    p.update(); // Actualiza la posición de la partícula
    p.display(); // Dibuja la partícula

    // Elimina la partícula si se sale de la pantalla
    if (p.isOffScreen()) {
      particles.splice(i, 1); // Elimina la partícula del arreglo
    }
  }
}

// Clase para las partículas
class Particle {
  constructor(x, y) {
    this.position = createVector(x, y); // Posición inicial
    this.velocity = createVector(random(-2, 2), random(-2, 2)); // Velocidad aleatoria
    this.size = random(5, 15); // Tamaño aleatorio
    this.color = color(random(255), random(255), random(255)); // Color aleatorio
  }

  update() {
    this.position.add(this.velocity); // Actualiza la posición según la velocidad
  }

  display() {
    fill(this.color);
    noStroke();
    ellipse(this.position.x, this.position.y, this.size); // Dibuja la partícula
  }

  isOffScreen() {
    return (
      this.position.x < 0 ||
      this.position.x > width ||
      this.position.y < 0 ||
      this.position.y > height
    ); // Comprueba si está fuera de la pantalla
  }
}
