import java.util.ArrayList;
import java.util.Random;

public class Password {
	private int longitud;
	private String contrasenia;
	
	public Password() {
		this.setLongitud(8);
		this.contrasenia = this.generarPassword(longitud);
	}
	
	public Password(int l) {
		this.longitud = l;
		this.contrasenia = this.generarPassword(l);
		
	}
	
	public Password(String  p) {
		this.contrasenia = p;
		this.longitud = this.contrasenia.length();
	}
	public void setLongitud(int longitud) {
		this.longitud = longitud;
	}
	public String getContrasenia() {
		return contrasenia;
	}
	public void setContrasenia(String  contrasenia) {
		this.contrasenia = contrasenia;
	}
	
	
	private String  generarPassword(int l) {
		Random random = new Random();
		int numRandom;
		String pass= "";
		
        for(int i=0; i<l; i++) {
        	numRandom = random.nextInt(125 - 48) + 48;
        	while(numRandom >57 && numRandom<65) {
        		numRandom = random.nextInt(125 - 48) + 48;
        	}
        	pass += (char)numRandom;
        }
        
        return pass;
		

	}
	
	public String esFuerte(String p) {
		
		int contMayusculas = 0, contMinusculas = 0, contNumeros = 0;
		
		char letra; 
		
		for(int i = 0; i<p.length(); i++) {
			letra = (p.charAt(i));
			if(Character.isUpperCase(letra)) {
				contMayusculas++;
			}else if(Character.isLowerCase(letra)) {
				contMinusculas++;
			}else if(Character.isDigit(letra)) {
				contNumeros++;
			}
		}
		
		if(contMayusculas>2 && contMinusculas>1 && contNumeros>5) {
			return"FUERTE"; 
		}else {
			return "DÉBIL";
		}
	}
	
	public void checkLista(ArrayList<String> listaPass){
		
		for(String pass:listaPass) {
			System.out.println("La contraseña '" + pass + "' es: "+ this.esFuerte(pass));
		}
	}
}

/*Haz una clase llamada Password que siga las siguientes condiciones:
Que tenga los atributos longitud y contraseña . Por defecto, la longitud sera de 8.
Un constructor por defecto.
Un constructor con la longitud que nosotros le pasemos. Generara una contraseña
aleatoria con esa longitud.
Los métodos que implementa serán:

    -- esFuerte(): devuelve un booleano si es fuerte o no, para que sea fuerte debe
tener mas de 2 mayúsculas, mas de 1 minúscula y mas de 5 números.
    -- generarPassword(): genera la contraseña del objeto con la longitud que
tenga.
   -- Método get para contraseña y longitud.
   -- Método set para longitud.

Ahora, crea una clase clase ejecutable:
Obtener por teclado, contraseñas ingresadas por el usuario (pueden utilizar arrays o ArrayList).
Mostrar todas las contraseñas y si son fuertes o no

Ej: 
contraseña_1 FUERTE
  contraseña_2 DEBIL
  contraseña_3 FUERTE 
*/