function setup() {
  createCanvas(600, 600);//l'area de dibuix de 600 px del 600 de cada costat.
}

function draw() {
  background(171, 210, 255);//fons de la pantalla o dibuix, gris si te un número entre 0 i 255, zero es negra i 255 es blanc. Qualsevol número entre 0 i 255 serà gris. Si tenim 3 numeros el primer número és vermellor o R (red), el segon número és la verdor o G (green) i el tercer número és la blavor o B (bleu). Els colors RGB permeten construir setze mil·lions de colors diferents (255x255x255).
  fill(250, 220, 192);
  ellipse(300,300,200,250);//El primer número entre parèntesis és la posició x del centre,el segon número és la posició i alçada del centre de l'el·lipse,el tercer número és l'amplada i el queart número és l'alçada de l'el·lipse.
    fill(148, 72, 55);//Color ull dret esquerre.Funciona com el background amb rgb.
ellipse(250,250,50,30);//ull esquerre.
      fill(148, 72, 55);//color ull dret.
  ellipse(340,270,60,30);//ull dret.
      fill(255, 130, 151);//Funciona com l'el·lipse els priemrs quatre números i els dos últims són 0 PI o PI,0.
  fill(0)
  triangle(300,290,280,330,320,330);//Nas.
  
  noFill();//No pintis el color de la cella.
  
  arc(350,235,60,20,PI,0);//Cella dreta.
  line(220,230,265,220);
  stroke(0);
  strokeWeight(4);
  
  
  
  
 
}
