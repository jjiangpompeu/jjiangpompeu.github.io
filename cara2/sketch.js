function setup() {
  createCanvas(600, 600);//l'area de dibuix de 600 px del 600 de cada costat.
}
//mouseX=300; mouseY=300 
function draw() {
  background(mouseY,mouseX-mouseY,200-mouseX);//fons de la pantalla o dibuix, gris si te un número entre 0 i 255, zero es negra i 255 es blanc. Qualsevol número entre 0 i 255 serà gris. Si tenim 3 numeros el primer número és vermellor o R (red), el segon número és la verdor o G (green) i el tercer número és la blavor o B (bleu). Els colors RGB permeten construir setze mil·lions de colors diferents (255x255x255)
  text("mouseX: "+mouseX,20,20)
    text("mouseY: "+mouseY,20,40)
fill(mouseX-75,mouseY-43,28);//Color marró del cabell
ellipse(mouseX,mouseY-80,230,120);//Dibuixa una el·lipse per formar el cabell
ellipse(mouseX,mouseY-150,75,75);// Dibuixa una altra el·lipse per formar el cabell
  fill(250, 220, 192);//Color de la cara
  ellipse(mouseX,mouseY,250+mouseY/241+mouseX/5,250);//El primer número entre parèntesis és la posició x del centre,el segon número és la posició i alçada del centre de l'el·lipse,el tercer número és l'amplada i el queart número és l'alçada de l'el·lipse
  fill(243-mouseX,217-mouseY,mouseX-mouseY);//Color ull dret esquerre.Funciona com el background amb rgb
    ellipse(mouseX+40,mouseY-50,60,60);//ull esquerre
  fill(148, 72, 55);//color ull esquerre
  ellipse(mouseX-50,mouseY-50,90,90);//ull dret
    fill(148, 72, 55);//color ull dret
  fill(115,41,41);//color marró fos del nas
  arc(mouseX,mouseY+50,mouseX,70,0,PI);//Funciona com l'el·lipse els priemrs quatre números i els dos últims són 0 PI o PI,0.Boca
      strokeWeight(4);
triangle(mouseX-20,mouseY,mouseX+20,mouseY,mouseX,mouseY+35);//El nas
  fill(70, 40, 25); // Color marró fosc de les pupil·les
  ellipse(mouseX-45,mouseY-45,30,40);//Pupil·la de l'ull dret
  ellipse(mouseX+45,mouseY-45,30,40);//Pupil·la de l'ull esquerre
  fill(255,255,255);//Color blanc per donar brillantor als ulls
  ellipse(mouseX-40,mouseY-55,10,10);//Brillantor de l'ull dret
  ellipse(mouseX+50,mouseY-55,10,10);//Brillantor de l'ull esquerre
    line(mouseX-80,mouseY-75,mouseX-35,mouseY-85,0,PI);//Cella esquerre
  line(mouseX+25,mouseY-85,mouseX+60,mouseY-80,0,PI);//Cella dreta
  fill(245, 150, 150, 120);//Color rosa clar per a les galtes
  ellipse(mouseX-75,mouseY+25,40,22);//Galta dreta
  ellipse(mouseX+75,mouseY+25,40,22);//Galta esquerre
  
  

  


 

  
'}'

  
  

  

 


 
  

  
  
 
}
