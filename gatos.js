// To include a camera
// that flies through the stars
// Can especify colors of stars or use the color from the data
//
let angle = 0;
let star;
let data;
let cor;

function preload() {
  data = loadJSON("stars_named.json");
}

function setup() {
  star = data.star;
  createCanvas(1366,768, WEBGL);
  //console.log(data);
}

function draw() {
  background(0);
  normalMaterial();
  //translate(0, 0, 0);
  angle -= 0.0005
  let fc = 0.01;
  camera(150 + sin(frameCount * fc) * 100, 150 + cos(frameCount * fc) * 100, 150 + cos(frameCount * fc) * 100, 0, 0, 0, 0, 1, 0);

  //"Sirius", "id":601, "galX":-5.895, "galY":-6.152, "galZ":-1.167,  "dist":8.6, "color":"#baccff"}, 

  for (let i = 0; i < star.length - 1; i++) {
    //translate(0, 0, mouseY / 30);
    translate(0, 0, 0)
    push()
    //rotateY(angle);
    translate(star[i].galX * 10, star[i].galY * 10, star[i].galZ * 10);
    distancia = star[i].dist;
    if(distancia < 9) {
     cor = "#0000FF"; 
    } else 
    {
      cor = "#FF0000";
    }
    fill(cor);
    sphere(5 / (0.5 + star[i].dist / 2));
    pop();
  }

}
