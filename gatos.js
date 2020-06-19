let data;
function preload(){
  data = loadJSON("gatinho.json");
}
function setup() {
  createCanvas(400, 400); 
  console.log(data);
}
function draw() {
  background(0);
  fill(255,110,20);
  text(data.gato[0].nome, 10,50);
  text(data.gato[1].nome, 10, 70);
  text(data.gato[0].revolution, 10, 90);
  text(data.gato[0].raiva, 10,110);
}
