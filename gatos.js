let angle = 0;
let star;
let data;

function preload() {
  data = loadJSON("stars_named.json");
}

function setup() {
  star = data.star;
  createCanvas(1400, 800, WEBGL);
  //console.log(data);
}

function draw() {
  background(0);
  normalMaterial();
  translate(0, 0, 0);
  angle -= 0.001

  for (let i = 0; i < star.length - 1; i++) {
    translate(0, 0, mouseY / 30);

    push()
    rotateY(angle);
    translate(star[i].galX * 10, star[i].galY * 10, star[i].galZ * 10);

    fill(star[i].color);
    sphere(10 / (1 + star[i].dist/2));
    pop();
  }

}
