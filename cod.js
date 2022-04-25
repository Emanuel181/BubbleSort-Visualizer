let vector = [] ; // declar un vector global- vectorul pe care voi face sortarea 

let i = 0 ; // variabila globala pentru iterarea prin vector
let j = 0 ; // variabila globala pentru iterarea prin vector

// Am declarat global variabilele pentru usurinta, nemaifiind cazul sa transmit de fiecare data acesti iteratori ca si parametri

function setup() { // Aceasta funtie se apeleaza prima data cand programul incepe, este folosita pentru a defini caracteristicile "mediului" in care va rula programul:
                   // dimensiunea ecranului , sau fundalul. Aceasta este echivalentul functiei principale din C++ "int main()", nemaiputand fi declarata de 2 ori.  
 
  //frameRate ( 500 ) ; // rata de refresh - OPTIONAL - Poate fi ignorata
                      // Daca puterea de procesare a laptopului/calculatorului nu e mare ( calculatorul este foarte vechi, are putini rami - 1 gb sau 2 gb ), recomand sa se schimbe numrul din paranteza cu "24" - numarul este o conventie ce asigura tranzitia smooth provocata de rata de refresh

  createCanvas ( windowWidth, windowHeight ) ; // parametrii "windowWidth" si "windowHeight" vor exprima in pixeli, dimensiunea oricarui ecran
                                               // adica fiecare laptop/calculator are ecrane de dimensiuni diferite, folosind aceste 2 utilitati,
                                               // vom putea rula programul cu un aspect optim specific fiecarui ecran.
  //                 |              |
  /*              latime         inaltime

  Mai jos sunt cateva exemple ce pot fi rulate pentru a se intelege mai clar functia "createCanvas":

  createCanvas (800 , 600 ) ;

  createCanvas (800 , 900 ) ;

  createCanvas (1000 , 850 ) ;

  Aceasta functie este teoretic optonala. Daca nu se foloseste, programul va folosi dimensiuni "by dafault" pentru "mediul" in care ruleaza programul, insa noi nu vrem acest lucru,
  vrem sa personalizam interfata in functie de fiecare ecran, astfel avem parte de o generalitate mai mare a codului. Declararea functiei se face o singura data.

  */
  /*

  Aceasta functie, dupa cum sugereaza si numele va crea o "fereastra" in care se va executa codul.
  Aceasta fereastra are niste atribute, adica o latime si o inaltime, pe care i le dam. Primul atribut este latimea, al doilea atribut este inaltimea.
  Aceste atribute sunt exprimate in pixeli.
  Putem crea si alte forme, cum ar fi cercuri sau triunghiuri,dar in alta functie, aceasta functie reprezinta doar "ecranul" de vizualizare unde ruleaza codul

  */

 vector = new Array ( windowWidth ) ;  // nedefinind marimea vectorului la inceput, il voi initializa acum cu o dimensiune, aceasta dimenisune reprezentand: windowWidth
                                      // chiar latimea declarata in linia 15 de cod, adica vom avea atatea elemente, pentru a "umple" pe latime "fereastra" in care ruleaza programul
                                     // Putem avea si o alta constanta ca numar de elemente

  // Am terminat de configurat spatiul de lucru si de dat vectorului un numar de elemente, urmeaza sa initializam vectorul cu elemente de sortat

  for ( let i = 0; i < vector.length ; i++ ) { // iterez de la 0 pana la sfarsitul vectorului ( latimea vectorului - windowWidth )

    vector [ i ] = random ( windowHeight ) ;  // cu ajutorul functiei "random" initializez vectorul cu numere randomizate dintre 0 si inaltimea acestuia, vrand ca liniile din animatie sa ia valori "de jos pana sus"
                                             // "random" - functie din JavaScript                                                             
  }

}

function draw() {  // In aceasta functie putem "desena" si crea diverse forme ce vor aparea in functia "function setup"

  background ( 65,105,225) ; 

  // Aceasta este o functie ce reprezinta culoarea fundalului functiei "function setup".
  // Are ca parametrii 3 nuante : RGB - Rosu , Galben si Albastru.
  // Numerele in acea ordine, reprezinta cantitatile de culoare care se vor "amesteca" si vor forma culoarea.

    if ( i < vector.length ) // functia draw se executa in continuare si dupa terminarea for-ului deoarece nu mai avem "return 0" ca in c++, asa ca ne facem noi o conditie de oprire
    {

    for ( let j = 0 ; j < vector.length - i - 1 ; j++ ) // iterare prin vector
    {

      if  ( vector [ j ] > vector [ j + 1 ] ) // daca gasesc 2 elemente pozitionate necorespunzator
      {

        let temp = vector [ j ] ; // retin intr-o variabila auxiliara

        vector [ j ] = vector [ j + 1 ] ; // interschimb elementele
      
        vector [ j + 1 ] = temp ; // interschimb a doua valoare ; 

         // Pur si simplu am interschimbat cele doua numere ( in plan vizual, cele 2 linii )

      }

    }

  }

 else // ramura de else reprezinta oprirea functiei "draw" care continua sa se execute chiar si dupa terminarea parcurgerii vectorului
      
   noLoop() ; // functia "draw" se opreste la intalnirea functiei "noLoop()"

  i++ ; // incrementam i-ul ce reprezinta o variabila de verificare pentru acel if. Aceasta verificare este similara cu structura repetitiva "while ( conditie )"
        // unde blocul de cod din interiorul lui while se executa cat timp conditia era adevarata. Ex pseudocot: cat timp timp nu ai ajuns la final de vector ( ruleaza )
        // mai pe scurt, ii zicem functiei "draw" sa se opreasca odata cu terminarea de sortat a vectorului
        // Pentru simplitate, aceasta verificare poate lipsi, neffind observabile erori din cauza anvergurii mici a codului
        // Este adevarat ca for-ul meu s-a terminat, dar functia "draw" se executa in continuare pana la intalnirea conditiei "noLoop" 
        // acest lucru este mai mult pentru rigoare

  for ( let i = 0 ; i < vector.length ; i++ ) { // acest for reprezinta liniile din animatie care difera in marime, aceasta marime reprezinta de fapt, un numar ( o linie mai mare este un numar mai mare, o linie mai mica, este un numar mai mic )
       
    line ( i , height , i , height - vector [ i ] ) ; // aceasta functie creeaza si deplaseaza liniile corespunzator daca s-au interschimbat.
                                                      // primul "i" este coordonata X1 , primul "height" este coordonata Y1- pozitiile initiale ale liniei ce trebuie interschimbata
                                                      // Al doilea "i" este coordonata X2 , iar "height - vector [ i ]" este coordonata Y2, adica pozitia unde va fi mutata linia de pe pozitia initiala
                                                      // Acest lucru este echivalentul functiei swap din C++ ;

    stroke ( 255, 255 , 255 ) ; // acesta este o functie pentru a da culoare liniilor prin parametrii RGB ( Rosu , Galben , Albastru - cantitati ce se  "amesteca" si formeaza o culoare )
                                // stroke - "margine" - liniile "by default" au grosimea unei margini
      
  }

}