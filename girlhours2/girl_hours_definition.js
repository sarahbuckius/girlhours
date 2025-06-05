let girlHours = 12; // e.g., 12 girl-hours

function setup() {
  createCanvas(600, 400);
  background(245, 240, 230);
  noLoop();

  drawTitle();
  drawGirlHours(girlHours);
}

function drawTitle() {
  fill(60);
  textFont("Georgia");
  textSize(20);
  textAlign(CENTER);
  text("Girl-Hours: Computing Labor, 1940s–1970s", width / 2, 40);
}

function drawGirlHours(n) {
  let cols = 6;
  let rows = ceil(n / cols);
  let spacingX = 90;
  let spacingY = 100;
  let startX = 60;
  let startY = 80;

  for (let i = 0; i < n; i++) {
    let col = i % cols;
    let row = floor(i / cols);
    let x = startX + col * spacingX;
    let y = startY + row * spacingY;
    drawWorkerUnit(x, y);
  }
}

function drawWorkerUnit(x, y) {
  // Head
  fill(255, 220, 200);
  stroke(120);
  ellipse(x, y, 25, 25);

  // Body
  fill(100, 150, 200);
  rect(x - 10, y + 15, 20, 30, 5);

  // Arms
  stroke(80);
  line(x - 10, y + 20, x - 25, y + 40);
  line(x + 10, y + 20, x + 25, y + 40);

  // Legs
  line(x - 5, y + 45, x - 5, y + 65);
  line(x + 5, y + 45, x + 5, y + 65);

  // Punch card
  drawPunchCard(x + 30, y + 15);
}

function drawPunchCard(x, y) {
  fill(255);
  stroke(180);
  rect(x, y, 30, 20, 3);

  fill(0);
  noStroke();
  for (let i = 0; i < 4; i++) {
    ellipse(x + 5 + i * 6, y + 7, 2, 2);
    ellipse(x + 5 + i * 6, y + 14, 2, 2);
  }
}
