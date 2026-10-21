// controller stuffs

let x, y; // cursor position
let px, py; // previous cursor position
let brush_size;
let draw_color; // current color
let rainbow; // toggles rainbow mode
let prev_buttons = [];

function setup() {
  createCanvas(windowWidth, windowHeight);
  background(200);
  
  x = width/2;
  y = height/2;
  px = x;
  py = y;
  draw_color = color(0);
  strokeWeight(brush_size);
  textAlign(CENTER, CENTER);
}

function draw() {
  let gp = navigator.getGamepads()[0];
  if(!gp){
    fill(0);
    noStroke();
    textSize(16);
    text("please connect a gamepad and press any button!", width/2, height/2);
    return;
  }
  
  // left joystick
  let deadzone = 0.15;
  let dx = abs(gp.axes[0]) > deadzone ? gp.axes[0] : 0;
  let dy = abs(gp.axes[1]) > deadzone ? gp.axes[1] : 0;
  let speed = 6;
  px = x;
  py = y;
  x+= dx * speed;
  y+= dy * speed;
  x = constrain(x,0,width);
  y = constrain(y,0,height);
  
  // rainbow mode :)
  if(rainbow){
    draw_color = color(random(255), random(255), random(255));
  }
  stroke(draw_color);
  strokeWeight(brush_size);
  
  line(px, py, x, y);
  
  //triggers
  let left_trig = gp.buttons[6].value;
  let right_trig = gp.buttons[7].value;
  
  brush_size = map(right_trig - left_trig, -1, 1, 1, 30);
  brush_size = constrain(brushSize,1,30);
  handleButtons(gp);
  
  }

function handleButtons(gp){
  gp.buttons.forEach((button, index) => {
    let curr_pressed = button.pressed;
    let prev_pressed = prev_buttons[index] || false;
    
    if(curr_pressed && !prev_pressed){
      switch(index){
        case 0: // a
          draw_color = color(random(255), random(255), random(255));
          rainbow = false;
          break;
        case 1: // b
          background(240);
          break;
        case 2: // y
          rainbow = !rainbow;
          break;
        case 3: // x
          saveCanvas('etcha_gp', "png");
          break;
      }
    }
    
    prev_buttons[index] = curr_pressed;
    
  })
}
