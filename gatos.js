var gato[];
function preload(){
  gato = loadJSON("./gatinho.json");
}
function setup() {
  createCanvas(400, 400); 
  console.log(gatinho);
}
function draw() {
  background(0);
  fill(255,110,20);
  text(gato[0].nome, 10,50);
  text(gato[1].nome, 10, 70);
  text(gato[0].revolution, 10, 90);
  text(gato[0].raiva, 10,110);
}
