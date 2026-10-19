// there's a bunch of stuff in here related to interactivity

let circles = [];
let webcam;

function setup() {
  createCanvas(400, 400);
  background('#91C4B2');
  webcam = createCapture(VIDEO, {flipped:true});
  webcam.size(200,200);
  webcam.hide(); // hides default vid elements
}

function draw() {
  // background('#91C4B2');
  // line(mouseX, 0, mouseX, height);
  // line(0, mouseY, width, mouseY);
  
  // if(mouseButton.left){
  //   circle(50,50,50);
  // }
  // if(mouseButton.right){
  //   square(25,25,50);
  // }
  // if(mouseButton.center){
  //   triangle(25,75,50,30,80,75);
  // }
  
  // textAlign(CENTER);
  // textSize(12);
  // text(mouseIsPressed,25,80);
  // text(key,width/2, height/2);
  
  // if(key==='w'){
  //   circle(40,40,30);
  // }
  // if(key==='a'){
  //   circle(80,80,30);
  // }
  // if(key==='s'){
  //   circle(120,120,30);
  // }
  // if(key==='d'){
  //   circle(160,160,30);
  // }
  
  // if(keyCode === 40){ // arrow down
  //   fill(random(180), random(255), random(90));
  // }
  
  // if(keyIsDown(LEFT_ARROW)){
  //   fill('#ED864E');
  // } // the newest way to do it
  
  // for (let circle of circles){
  //   fill(circle.rand_color);
  //   ellipse(circle.x, circle.y, 50);
  // }
  
  // if(mouseIsPressed){
  //   let newCircle = {
  //     x:mouseX,
  //     y:mouseY,
  //     rand_color:color(random(255), random(255), random(255))
  //   };
  // circles.push(newCircle);
  //   }
  
  // body:
  // fill('#54C8D6');
  // ellipse(200,300,100,150);
  
  // hat:
  // push();
  // translate(200,200);
  // fill('#5481D6');
  // scale(2);
  // arc(0,0,100,100,PI,0,CHORD);
  // pop();
  
  // head:
  // fill('#54C5D6');
  // ellipse(200,200,80);
  
  image(webcam,0,0);
  filter(POSTERIZE, 5);
  }

function mousePressed(){
  // let newCircle = {
  //     x:mouseX,
  //     y:mouseY,
  //     rand_color:color(random(255), random(255), random(255))
  //   };
  // circles.push(newCircle);
}