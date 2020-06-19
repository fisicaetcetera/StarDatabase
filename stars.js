let data;
let star;
function preload(){
  data = loadJSON("stars_named.json");

function setup() {
  createCanvas(400, 400); 
  star = data.star;
  for(i=0; i<10; i++){
   console.log(star[i].starName, star[i].dist)
  }
  
}
function draw() {
  background(0);
  fill(data.star[1].color);
   
 
  text(data.star[0].starName, 10,50);
  text(data.star[0].dist, 50,50);
  text(data.star[1].starName, 10,70);
  text(data.star[1].dist, 50,70);
}
