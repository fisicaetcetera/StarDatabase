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
let radiusSun = 3.5;

function preload() {
  data = loadJSON("stars_named.json");
}

function setup() {
  star = data.star;
  createCanvas(710, 400, WEBGL);
  alfax = star[9].galX;
  alfay = star[9].galY;
  alfaz = star[9].galZ;
  alfadist = star[9].dist;

  for (let is = 0; is < star.length; is++) {
    console.log(is, star[is].starName, star[is].dist);
  }
}

function draw() {
  background(0);
  normalMaterial();
  //translate(0, 0, 0);
  angle -= 0.01
  let fc = 0.01;
  //camera(sin(frameCount * fc) * 100, cos(frameCount * fc) * 100, sin(frameCount * fc) * 1000, 0,0,0, 0, 1, 0);
  camera(0,0,1000*sin(frameCount*fc), sin(100+frameCount*fc),100,100+cos(frameCount*fc),0,1,0);

  //"Sirius", "id":601, "galX":-5.895, "galY":-6.152, "galZ":-1.167,  "dist":8.6, "color":"#baccff"}, 


  for (let i = 0; i < star.length - 1; i++) {
    //translate(0, 0, mouseY / 30);
    //beginShape();
    radius = radiusSun;
    translate(0, 0, 0)
    push()
    rotateY(angle);
    starx = star[i].galX * 30 - alfax * 30;
    stary = star[i].galY * 30 - alfay * 30;
    starz = star[i].galZ * 30 - alfaz * 30;

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

    if (star[i].dist < 4.7) {
      cor = "#00f0ff";
      radius = radiusSun;
      //proxima centauri
    }
    if (star[i].dist == 0) {
      cor = "#ffffff";
      //radius = 3.5;
    }

    if (star[i].id == 601) {
      cor = "#baccff";
      radius = 2*radiusSun;
    }

    if (star[i].id == 221201) {
      //Betegeuse
      cor = "#ffc766";
      radius = 1.5*radiusSun;
    }


    fill(cor);
    sphere(radius / (0.5 + distancia / 2));
    pop();
  }
}


function mousePressed() {
  noLoop();
}

function mouseReleased() {
  loop();
}