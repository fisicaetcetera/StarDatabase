//sketch-constelations-bigger-stars.js
//not having magnitude or actual radius, will make sure they appear on the plot
//by enlarging radius with distance
let angle = 0;
let angleyy = 0
let star;
let data;
let cor;
let alfax, alfay, alfaz, alfadist;
let starx, stary, starz, stardist;
let radiusSun = 3.5;
let estrela = 9;
let f;
let lookup = 0;
let lookright = 0;
let distanceTraveled = 0;

function preload() {
  data = loadJSON("stars_named.json");
  myfont = loadFont('Catallina.otf');
}

function setup() {
  star = data.star;

  createCanvas(1366, 766, WEBGL);
  //createCanvas(1366, 450, WEBGL);
  alfax = star[9].galX;
  alfay = star[9].galY;
  alfaz = star[9].galZ;
  //botão para controla saltos
  jump = createButton("Jump!");
  jump.mousePressed(Jump);
  //botao para ir para o setor de Sírio
  goHome = createButton("Go Home");
  goHome.mousePressed(GoHome);
  //botão para olhar para trás
  right = createButton("Direita");
  right.mousePressed(Direita);
  //botão para olhar para cima
  up = createButton("Up");
  up.mousePressed(Up);
  // botão para pausar (depois)

  h3 = createElement('h5', 'Estrela perto de nós');
  //h3.html(star[estrela].starName);
  createP("Star database adapted by J. Crossler, js code by E. Bonelli, v202103151134");
  createP("Travel through the galaxy: ");
  createP("'Jump': you jump to another star, name shown.");
  createP("'Go Home': takes you to the Sirius sector, after some jumps.");
  createP(" 'right' : girates around the vertical.");
  createP("'Up': togle motion to make stars go up / down");
  createP("When your ship passes by the star in question, the camera will reverse to show it again, on the other side of the ship.");

  estrela = floor(random(star.length - 1));
  epn = 'Estrela: ' + star[estrela].starName + ' , Distancia: ' + star[estrela].dist + ', Cor: ' + star[estrela].color;
  h3.html(epn);
}


function draw() {
  background(0);
  normalMaterial();
  //translate(0, 0, 0);
  //angle -= 0.005
  let fc = 0.001;
  //camera(sin(frameCount * fc) * 50, cos(frameCount * fc) * 50, sin(frameCount * fc) * 50, 0,0,0, 0, 1, 0);
 camera(500 * sin(-frameCount * fc * 3), 0, 500 * sin(frameCount * fc * 3), 0, 0, 0, lookright, 1, lookup);
 rotateZ(5*fc *frameCount);

  //"Sirius", "id":601, "galX":-5.895, "galY":-6.152, "galZ":-1.167,  "dist":8.6, "color":"#baccff"}, 

  epn = 'Estrela: ' + estrela +' '+ star[estrela].starName + ' , Distancia: ' + star[estrela].dist + ', Cor: ' + star[estrela].color;
  h3.html(epn);

  //for (let i = 0; i < star.length - 1 && i != estrela; i++) {
  for (let i = 0; i < star.length - 1; i++) {
    //translate(0, 0, mouseY / 30);
    //beginShape();//opa!
    radius = radiusSun;


    push()
    translate(0, 0, 0)
    rotateY(angleyy);
    rotateX(angle);
    xestela = star[estrela].galX * 100;
    yestela = star[estrela].galY * 100;
    zestela = star[estrela].galZ * 100;

    
    starx = star[i].galX * 100 - xestela;
    stary = star[i].galY * 100 - yestela;
    starz = star[i].galZ * 100 - zestela;
    nome = star[i].starName;
    
    alfadist = star[estrela].dist;
    cor = star[i].color;

    translate(starx, stary, starz);

    distancia = abs(star[i].dist - alfadist);

    fill(cor);
    noStroke();
    if(distancia > 10){
    raio =  radius *(1 + distancia/10);
    }
    else{
    raio = radius *5;
    }
    
    sphere(raio);
    //uma constelação tentativa
    if(distancia < 10){
    
    fill(111);
      strokeWeight(1);
      if(distancia == 0){
      size = 12
      }
      else{
      size = 55;
      }
      textFont(myfont, size);
      text(nome,raio,raio, raio);
    //
    }
    pop();
  }
}

function Jump() {
  estrela = floor(random(star.length - 1));
  redraw();
}


function GoHome() {
  estrela = floor(random(0, estrela));  //Para SOL
  //estrela = floor(random(399, estrela));  //Para Aldebaran
  redraw();
}

function Direita() {
  angleyy += 0.3;
}

function Up() {
angle += 0.3;
}
