// To include a camera
// that flies through the stars
// Can especify colors of stars or use the color from the data
//
let angle = 0;
let star;
let data;
let cor;
let alfax, alfay, alfaz, alfadist;
let starx, stary, starz, stardist;

function preload() {
  data = loadJSON("stars_named.json");
}

function setup() {
  star = data.star;
  createCanvas(710, 400, WEBGL);
  console.log(star[2].starName);
  alfax = star[2].galX;
  alfay = star[2].galY;
  alfaz = star[2].galZ;
  alfadist = star[2].dist;
}

function draw() {
  background(0);
  normalMaterial();
  //translate(0, 0, 0);
  angle -= 0.005
  let fc = 0.01;
  camera(150 + sin(frameCount * fc) * 100, 150 + cos(frameCount * fc) * 100, 150 + cos(frameCount * fc) * 100, 0, 0, 0, 0, 1, 0);
  //camera(0,0,0, 0,30,-100,0,1,0);

  //"Sirius", "id":601, "galX":-5.895, "galY":-6.152, "galZ":-1.167,  "dist":8.6, "color":"#baccff"}, 


  for (let i = 0; i < star.length - 1; i++) {
    //translate(0, 0, mouseY / 30);
    translate(0, 0, 0)
    push()
    rotateY(angle);
    starx = star[i].galX * 10 - alfax * 10;
    stary = star[i].galY * 10 - alfay * 10;
    starz = star[i].galZ * 10 - alfaz * 10;

    translate(starx, stary, starz);
    distancia = abs(star[i].dist - alfadist);
    if (distancia < 9) {
      cor = "#0000FF";
      //console.log(star.starName);
    } else if (star[i].dist == 0) {
      cor = "FFFFFF";
      //console.log(star[i].starName);
    } else {
      cor = "#FF0000";
    }
    if (distancia == 0) {
      cor = "00FFFF";
    }
    if (star[i].dist == 0) {
      cor = "ffff00";
    }
    if (star[i].dist == 4.22) {
      cor = "00f0ff";
      //proxima centauri
    }
    fill(cor);
    sphere(3 / (0.5 + distancia / 2));
    pop();
  }
}


    function mousePressed() {
      noLoop();
    }

    function mouseReleased() {
      loop();
    }