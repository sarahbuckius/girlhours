function setup() {
  createCanvas(600, 600);
  background(245, 240, 230);
  noLoop();

  drawCanvasFace();
  drawPunchCardPattern();
  drawCodeStream();
  drawCaption();
}

function drawCanvasFace() {
  // Face (a symbolic operator — female-coded computing unit)
  fill(255, 220, 200);
  stroke(120);
  ellipse(width / 2, height / 2, 180, 220);

  // Eyes as code viewers
  fill(255);
  ellipse(260, 280, 30, 15);
  ellipse(340, 280, 30, 15);
  fill(0);
  ellipse(260, 280, 6, 6);
  ellipse(340, 280, 6, 6);

  // Mouth — a binary port
  fill(0);
  rect(290, 340, 20, 6);
  fill(255);
  rect(292, 342, 3, 2);
  rect(297, 342, 3, 2);
  rect(302, 342, 3, 2);
}

function drawPunchCardPattern() {
  // Repeating punch card background pattern
  for (let y = 0; y < height; y += 40) {
    for (let x = 0; x < width; x += 100) {
      drawPunchCard(x + 10, y + 10);
    }
  }
}

function drawPunchCard(x, y) {
  fill(250);
  stroke(200);
  rect(x, y, 80, 20, 2);

  fill(0);
  noStroke();
  for (let i = 0; i < 5; i++) {
    ellipse(x + 10 + i * 12, y + 10, 2, 2);
  }
}

function drawCodeStream() {
  // "Streaming code" flowing like hair or energy
  fill(0, 150);
  textSize(12);
  textFont('monospace');
  for (let i = 0; i < 30; i++) {
    let x = random(width);
    let y = random(height);
    let code = random([
      "for(", "if(", "let ", "draw()", "setup()", "0101", "true", "void", "else", "while("
    ]);
    text(code, x, y);
  }
}

function drawCaption() {
  fill(50);
  textSize(16);
  textAlign(CENTER);
  textFont("Georgia");
  text("Self-Portrait: Girl-Hours\np5.js remembers its predecessors", width / 2, height - 40);
}
