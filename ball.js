// ref video: https://www.youtube.com/watch?v=vYlE_fEZwvU
class Ball{
  constructor(x, y, dx, dy){
    this.x = x;
    this.y = y;
    this.dx = dx;
    this.dy = dy;
  }
  drawCircle(){
    fill(206, 231, 240);
    ellipse(this.x, this.y, 10, 10);
  }
  
  moveCircle(){
    this.x = this.x + this.dx;
    this.y = this.y + this.dy;
  }
  
  checkBoundary(){
    if (this.x > width || this.x < 0){
      this.dx = this.dx * -1;
    }
    if (this.y > height || this.y < 0){
      this.dy = this.dy * -1;
    }
  }
  
}