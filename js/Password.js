/**************************************
 * 
 *   Bietet statische Methoden zum
 *   Erzeugen, Überprüfen und Arbeiten
 *   mit Passwörtern an.
 * 
 *   ------------------------------
 * 
 *   Geschrieben von
 *     Konstantin Kobs
 *     1. Dezember 2013
 * 
 * ***********************************/
function Password(){
  
}

// Bei keiner angegebenen Länge in der generate-Funktion
// wird ein Passwort mit zufälliger Länge erzeugt.
// min und max geben hier die minimale und maximale Länge
// dieses Passwortes an.
Password.min = 10;
Password.max = 15;

// Die möglichen Zeichen in dem Passwort
Password.chars = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789-_";

/**************************************
 * 
 *   Generiert ein zufälliges Passwort
 *   aus den gegebenen Zeichen
 * 
 *   Beispiel eines Aufrufs:
 *     alert(Password.generate(30));
 * 
 *   ---------------------------------
 * 
 *   laenge : Die gewünschte Länge des Passwortes
 * 
 *   Liefert einen String mit dem Passwort
 * 
 * ***********************************/
Password.generate = function( laenge ){
  
  // Ist die Länge nicht angegeben, so wird eine zufällige Länge generiert.
  laenge = (typeof laenge === "undefined") ? randLength(Password.min, Password.max) : laenge;
  
  // Am Anfang ist das Passwort leer
  var password = "";
  
  // Jedes Zeichen wird einzeln bestimmt,
  // damit das auch wirklich eine
  // zufällige Reihenfolge vorliegt
  for(var i = 0; i < laenge; i++){
    
    // Wir generieren einen zufälligen Index
    // für den String mit allen zulässigen
    // Zeichen
    var randomPos = Math.random() * (this.chars.length + 1);
    
    // Wir holen uns das Zeichen an dieser Stelle
    // aus unserem "zulässige Zeichen"-String
    var c = this.chars.charAt(randomPos);
    
    // Wir hängen das Zeichen an die vorher
    // schon generierten Zeichen
    password += c;
  }
  
  // Gib das Passwort als String zurück
  return password;
  
};

/**************************************
 * 
 *   Gibt einen zufälligen Integer
 *   zwischen min und max aus.
 *   
 *   ---------------------------------
 * 
 *   min : Kleinste mögliche Zahl
 *   max : Größte mögliche Zahl
 * 
 *   Gibt einen Integer mit der zufälligen Zahl zurück
 * 
 * ***********************************/
function randLength(min, max){
	return Math.floor(Math.random() * (max - min + 1)) + min;
}

/********************************************
 * 
 *   Überprüft, ob ein Passwort nur aus Zeichen
 *   besteht, die zugelassen sind.
 * 
 *   ---------------------------------------
 * 
 *   pw : Der String, der überprüft werden soll
 * 
 *   Liefert true, wenn der String aus den
 *   zugelassenen Zeichen besteht, uns false,
 *   wenn nicht.
 * 
 * *****************************************/
Password.check = function(pw){
  
  // Wir gehen jedes Zeichen des übergebenen Strings durch
  for(var i = 0; i < pw.length; i++){
    
    // Befindet sich das Zeichen in dem String von
    // zugelassenen Zeichen?
    var inValid = this.chars.indexOf(pw.charAt(i)) !== -1;
    
    // Wenn nicht, ist der String kein zugelassenes
    // Passwort. Wenn ja, mache weiter.
    if(!inValid){
      return false;
    }
    
  }
  
  // Durchlaufen wir alle Zeichen des Passworts
  // ohne Fehler, so ist das Passwort gültig.
  return true;
  
};