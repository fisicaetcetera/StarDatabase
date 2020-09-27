// To include a camera
// that flies through the stars
// Can especify colors of stars or use the color from the data
// Each loop from the point of view of the next star.  Starts // with Sirius.
let angle = 0;
let star;
let data;
let cor;
let alfax, alfay, alfaz, alfadist;
let starx, stary, starz, stardist;
let radiusSun = 3.5;
let estrela = 9;
let f;
let myFont;

function preload() {
  data = loadJSON("stars_named.json");
}

function setup() {
  star = data.star;
  createP("Star database by Jay Crossler");
  createP("js code by Enivaldo Bonelli");
  createP("Instructions below");
  createCanvas(1366, 700, WEBGL);
  alfax = star[9].galX;
  alfay = star[9].galY;
  alfaz = star[9].galZ;
  //botão para controla saltos
  jump = createButton("Jump!");
  jump.mousePressed(Jump);
  h3 = createElement('h5', 'Estrela perto de nós');
  h3.html(star[estrela].starName);
  createP("Instructions: you travel through the galaxy.  When you click 'Jump', you jump through hyperspace to another star, name shown.")
  createP("When your ship passes by the star, the camera will reverse to show it again.");

  //lista estrelas
  //  for (let is = 0; is < star.length; is++) {
  //    console.log(is, star[is].starName, star[is].dist);
  //  }
  estrela = floor(random(star.length - 1));
}


function draw() {
  background(0);
  normalMaterial();
  h3.html(star[estrela].starName);

  //translate(0, 0, 0);
  angle -= 0.005
  let fc = 0.001;
  //camera(sin(frameCount * fc) * 50, cos(frameCount * fc) * 50, sin(frameCount * fc) * 50, 0,0,0, 0, 1, 0);
  camera(0, 0, 250 * sin(frameCount * fc*3), 0, 0,0,0, 1, 0);

  //"Sirius", "id":601, "galX":-5.895, "galY":-6.152, "galZ":-1.167,  "dist":8.6, "color":"#baccff"}, 



  for (let i = 0; i < star.length - 1 && i != estrela; i++) {
    //translate(0, 0, mouseY / 30);
    //beginShape();
    radius = radiusSun;


    push()
    translate(0, 0, 0)
    rotateY(angle);
    rotateX(angle/2);
    starx = star[i].galX * 30 - star[estrela].galX * 30;
    stary = star[i].galY * 30 - star[estrela].galY * 30;
    starz = star[i].galZ * 30 - star[estrela].galZ * 30;
    alfadist = star[estrela].dist;
    cor = star[estrela].color;

    translate(starx, stary, starz);
    distancia = abs(star[i].dist - alfadist);

    fill(cor);
    sphere(radius / (0.5 + distancia / 8));
    pop();
  }
}


function Jump() {
  estrela = floor(random(star.length - 1));
  redraw();
}

//function mouseReleased() {
//  loop();
//}
