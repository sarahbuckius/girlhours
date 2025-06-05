function setup() {
  createCanvas(500, 600);
  background(240, 235, 225);
  noLoop();

  drawPunchCardBackground();
  drawFace();
  drawEyes();
  drawMouth();
  drawWiringHair();
  drawBinarySymbols();
}

function drawPunchCardBackground() {
  stroke(200);
  fill(250);
  for (let y = 0; y < height; y += 30) {
    for (let x = 0; x < width; x += 80) {
      rect(x + 5, y + 5, 70, 20, 2);
      for (let i = 0; i < 5; i++) {
        let px = x + 15 + i * 12;
        let py = y + 15;
        fill(180);
        ellipse(px, py, 3, 3); // punch holes
      }
    }
  }
}

function drawFace() {
  fill(255, 230, 210);
  stroke(150, 100, 80);
  strokeWeight(1);
  ellipse(250, 300, 180, 220); // face shape

  // punch card texture on face
  fill(180, 150, 140);
  noStroke();
  for (let i = -2; i <= 2; i++) {
    for (let j = -3; j <= 3; j++) {
      ellipse(250 + i * 20, 300 + j * 20, 3, 3);
    }
  }
}

function drawEyes() {
  fill(255);
  stroke(60);
  strokeWeight(1);
  ellipse(210, 280, 30, 15);
  ellipse(290, 280, 30, 15);

  fill(0);
  ellipse(210, 280, 8, 8);
  ellipse(290, 280, 8, 8);

  // lenses or scanner-like eyes
  stroke(0, 200, 255);
  noFill();
  ellipse(210, 280, 35, 20);
  ellipse(290, 280, 35, 20);
}

function drawMouth() {
  noFill();
  stroke(120, 60, 60);
  strokeWeight(2);
  arc(250, 340, 40, 20, 0, PI);
}

function drawWiringHair() {
  noFill();
  stroke(50, 70, 100, 120);
  strokeWeight(1.2);
  for (let a = -PI / 2; a <= PI / 2; a += PI / 8) {
    let x1 = 250 + cos(a) * 90;
    let y1 = 250 + sin(a) * 90;
    let x2 = 250 + cos(a) * 160;
    let y2 = 100 + random(-20, 20);
    bezier(x1, y1, x1 - 30, y1 - 80, x2 + 30, y2 - 40, x2, y2);
  }
}

function drawBinarySymbols() {
  fill(0, 100);
  noStroke();
  textFont('monospace');
  textSize(12);
  for (let i = 0; i < 40; i++) {
    let x = random(width);
    let y = random(height);
    text(random(["0", "1"]), x, y);
  }
}
