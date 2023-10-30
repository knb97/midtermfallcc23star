let columns = 20;
let rows = 20;
let colors = [];
let balls = [];

function setup() {
  createCanvas(500, 500);

  console.log("the current hour is: ", hour());
  console.log("the current minute is: ", minute());
  console.log("the current second is: ", second());

  //funky array grid background:
  for (var i = 0; i < columns; i++) {
    colors[i] = [];
    for (var j = 0; j < rows; j++) {
      colors[i][j] = random(255);
    }
  }
}
function draw() {
  background(255);

  //funky array grid background: https://processing.org/tutorials/2darray
  for (var i = 0; i < columns; i++) {
    for (var j = 0; j < rows; j++) {
      var x = i * 30;
      var y = j * 30;

      fill(colors[i], [j]);
      stroke(0);
      rect(x, y, 50, 30);
    }
  }

  //mini balls
  if (mouseIsPressed) {
    balls.push(new Ball(mouseX, mouseY, random(-2, 2), random(-2, 2)));
  }
  for (let i = 0; i < balls.length; i++) {
    balls[i].drawCircle();
    balls[i].moveCircle();
    balls[i].checkBoundary();
  }

  //mini circle
  fill(219, 217, 209);
  ellipse(350, 250, second() * 2);
  fill(90, 113, 52);
  ellipse(350, 250, second() * 1);

  //star
  push();
  fill(237, 161, 47);
  translate(width * 0.8, height * 0.5);
  rotate(frameCount / -150);
  star(0, -170, 30, 70, 5);
  pop();

  //triangle
  fill(255, 202, 156);
  triangle(150, 375, 58, 220, 286, 175);

  //med circle
  fill(104, 198, 227);
  ellipse(415, 415, 100, 100);

  fill(220, 233, 179);
  arc(415, 415, 100, 100, 0, HALF_PI);

  //mini square
  fill(255, 64, 65);
  rect(350, 350, 40, 40);

  //rainbow arc
  fill(220, 59, 64);
  arc(130, 480, 180, 180, PI, TWO_PI);
  fill(250, 123, 57);
  arc(130, 480, 160, 160, PI, TWO_PI);
  fill(231, 187, 18);
  arc(130, 480, 140, 140, PI, TWO_PI);
  fill(119, 172, 8);
  arc(130, 480, 120, 120, PI, TWO_PI);
  fill(18, 114, 216);
  arc(130, 480, 100, 100, PI, TWO_PI);
  fill(78, 51, 128);
  arc(130, 480, 80, 80, PI, TWO_PI);

  //   //rotating smileyface
  push();
  translate(100, 100);
  rotate(frameCount / 100);
  fill(250, 218, 1);
  ellipse(0, 0, 120, 120);
  rectMode(CENTER);
  fill(0);
  rect(20, -10, 3, 20);
  rect(-20, -10, 3, 20);

  noFill();
  strokeWeight(3);
  arc(0, 0, 50, 60, 0.2, PI - 0.2);
  pop();
}

//star function
function star(x, y, radius1, radius2, npoints) {
  let angle = TWO_PI / npoints;
  let halfAngle = angle / 2.0;
  beginShape();
  for (let a = 0; a < TWO_PI; a += angle) {
    let sx = x + cos(a) * radius2;
    let sy = y + sin(a) * radius2;
    vertex(sx, sy);
    sx = x + cos(a + halfAngle) * radius1;
    sy = y + sin(a + halfAngle) * radius1;
    vertex(sx, sy);
  }
  endShape(CLOSE);
}
