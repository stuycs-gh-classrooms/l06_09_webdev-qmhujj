var x;
var y;
var s;
var m;
var h;
var sec;
var min;
var hr;

function setup() 
{ createCanvas(600, 600);
  x = width/2;
  y = height/2;}

function draw() { 
  timeToAngle();
  clockFace();
  drawHand();
  updateTime(); }
function updateTime()
{ hr = hour();
min = minute();
sec = second();
if (hr > 12) {
  println(hr - 12, ":" , min, ":", sec, "PM");}
else {println(hr, ":", min, ":", sec, "AM");}
  }

function timeToAngle(){
  s = radians(second()*6) - 90;
  h = radians(hour()*6) - 90;
  m = radians(minute()*6) - 90;
  }

function clockFace() {
 background(#B8C181);
  fill(#CDF2B3);
  circle(x, y,  min(height, width) * 0.7);}


function
drawHand() {
  stroke(#157427);
  strokeWeight(1.8);
  line(x, y, x + cos(s) * min(height, width) * 0.7 * 0.46, y + sin(s) * min(height, width) * 0.7 * 0.46);
  stroke(#2FDE50);
  strokeWeight(2);
  line(x, y, x + cos(m) * min(height, width) * 0.7 * 0.46, y + sin(m) * min(height, width) * 0.7 * 0.46);
  stroke(#0E4819);
  strokeWeight(5);
  line(x, y, x + cos(h) * min(height, width) * 0.7 * 0.36, y + sin(h) * min(height, width) * 0.7 * 0.36);
}
