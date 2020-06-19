let data;
function preload(){
  data = loadJSON("stars_named.json");
}
function setup() {
  createCanvas(400, 400); 
  // console.log(data);
}
function draw() {
  background(0);
  fill(data.star[1].color);
  text(data.star[0].starName, 10,50);
  text(data.star[0].dist, 30,50);
  text(data.star[1].starName, 10,70);
  text(data.star[1].dist, 30,70);
}
