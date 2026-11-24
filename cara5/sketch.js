function setup() {
  createCanvas(600, 600);//l'area de dibuix de 600 px del 600 de cada costat.
  // Create an Audio input
  mic = new p5.AudioIn();

  // start the Audio Input.
  // By default, it does not .connect() (to the computer speakers)
  mic.start();
}

function draw() {

let y = 100 * noise(0.005 * frameCount + 10000)
  
  // Get the overall volume (between 0 and 1.0)
  let vol = mic.getLevel();
  let h = map (vol, 0.001, 0.009, 0, 20);
  print(h)
  
  background(171, 210, 255);//fons de la pantalla o dibuix, gris si te un número entre 0 i 255, zero es negra i 255 es blanc. Qualsevol número entre 0 i 255 serà gris. Si tenim 3 numeros el primer número és vermellor o R (red), el segon número és la verdor o G (green) i el tercer número és la blavor o B (bleu). Els colors RGB permeten construir setze mil·lions de colors diferents (255x255x255)
 
fill(225,257,28);//Color marró del cabell
ellipse(300,220,230,120);//Dibuixa una el·lipse per formar el cabell
ellipse(300,150,75,75);// Dibuixa una altra el·lipse per formar el cabell
  fill(250, 220, 192);//Color de la cara
  ellipse(300,300,250,241,250);//El primer número entre parèntesis és la posició x del centre,el segon número és la posició i alçada del centre de l'el·lipse,el tercer número és l'amplada i el queart número és l'alçada de l'el·lipse
  fill(-57,-83,0);//Color ull dret esquerre.Funciona com el background amb rgb
    ellipse(340,250,60,60);//ull esquerre
  fill(148, 72, 55);//color ull esquerre
  ellipse(250,250,90,90);//ull dret
    fill(148, 72, 55);//color ull dret
  fill(115,41,41);//color marró fos del nas
  arc(300,350,100,70+h,0,PI);//Funciona com l'el·lipse els priemrs quatre números i els dos últims són 0 PI o PI,0.Boca
      strokeWeight(4);
triangle(280,300,320,300,300,335);//El nas
  fill(70, 40, 25); // Color marró fosc de les pupil·les
  ellipse(255,255,30,40);//Pupil·la de l'ull dret
  ellipse(345,255,30,40);//Pupil·la de l'ull esquerre
  fill(255,255,255);//Color blanc per donar brillantor als ulls
  ellipse(260,245,10,10);//Brillantor de l'ull dret
  ellipse(350,245,10,10);//Brillantor de l'ull esquerre
    line(220,225,265,215,0,PI);//Cella esquerre
  line(325,215,360,220,0,PI);//Cella dreta
  fill(245, 150, 150, 120);//Color rosa clar per a les galtes
  ellipse(255,325,40,22);//Galta dreta
  ellipse(375,325,40,22);//Galta esquerre
  
  
 ellipse (100 + y,200 + y,20,20) 
  


 

  
'}'

  
  

  

 


 
  

  
  
 
}
