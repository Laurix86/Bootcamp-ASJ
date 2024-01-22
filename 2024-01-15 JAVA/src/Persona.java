import java.util.Random;
import java.util.Scanner;

public class Persona {
	String nombre, DNI;
	int edad;
	char sexo;
	double peso, altura;
	
	public Persona() {
		this.DNI = this.generarDNI();
		this.nombre = "";
		this.edad = 0;
		this.sexo = 'H';
		this.peso = 0;
		this.altura = 0;
	}

	public Persona(String n, int e, char s, double p, double a) {
		this.DNI = this.generarDNI();
		this.nombre = "n";
		this.edad = e;
		this.sexo = s;
		this.peso = p;
		this.altura = a;
	}
	
	public Persona(String n, int e, char s) {
		this.DNI = this.generarDNI();
		this.nombre = "n";
		this.edad = e;
		this.sexo = s;
		this.peso = 0;
		this.altura = 0;
	}

	
	public String getNombre() {
		return nombre;
	}

	public void setNombre(String nombre) {
		this.nombre = nombre;
	}

	public int getEdad() {
		return edad;
	}

	public void setEdad(int edad) {
		this.edad = edad;
	}

	public char getSexo() {
		return sexo;
	}

	public void setSexo(char sexo) {
		this.sexo = sexo;
	}

	public double getPeso() {
		return peso;
	}

	public void setPeso(double peso) {
		this.peso = peso;
	}

	public double getAltura() {
		return altura;
	}

	public void setAltura(double altura) {
		this.altura = altura;
	}

	public String getDNI() {
		return DNI;
	}
	
	private String generarDNI() {
		Random random = new Random();
		int numRandom;
		String dni = "";
		
		for(int i = 0; i<8;i++) {
			numRandom = random.nextInt(9);
			dni += (char)numRandom;
		}
		
		return dni;
		
	}

	public int calcularIMC() {
		Scanner sc = new Scanner(System.in);
		double resultado;
		int calculo = -2;
		
		if(this.peso == 0) {
			System.out.println("Falta información sobre el peso, por favor ingresarla: ");
			this.setPeso(sc.nextDouble());
		}
		if(this.altura == 0) {
			System.out.println("Falta información sobre la altura, por favor ingresarla: ");
			this.setAltura(sc.nextDouble());
		}
		
		resultado = (this.peso / (Math.pow(this.altura, 2)));
		
		if(resultado < 20) {
			calculo = -1;
		} else if(resultado >= 20 && resultado <=25) {
			calculo = 0;
		} else if(resultado > 25) {
			calculo = 1;
		}
		
		return calculo;
	}

	
}

/* Crear una clase llamada Persona que siga las siguientes condiciones:
Atributos: nombre, edad, DNI, sexo (H hombre, M mujer), peso y altura. Pueden añadir algún 
atributo si quieren.
Por defecto, todos los atributos menos el DNI serán valores por defecto según su tipo 
(0 números, cadena vacía para String, etc.). Sexo sera hombre por defecto.
Constructores:
Un constructor por defecto.
Un constructor con el nombre, edad y sexo, el resto por defecto.
Un constructor con todos los atributos como parámetro.

Métodos:
calcularIMC(): calculara si la persona esta en su peso ideal (peso en kg/(altura^2 en m)). <br>
Si esta fórmula es menor que 20, la función devuelve un -1, 
si el resultado es un número entre 20 y 25 (incluidos),significa que esta por debajo 
de su peso ideal y la función devuelve un 0, y si el resultado es mayor que 25 significa 
que tiene sobrepeso y la función devuelve un 1.
  
esMayorDeEdad(): indica si es mayor de edad, devuelve un booleano.
comprobarSexo(char sexo): comprueba que el sexo introducido es correcto. 
Si no es correcto, sera H. No sera visible al exterior.
toString(): devuelve toda la información del objeto.
generaDNI(): genera un número aleatorio de 8 cifras. Este método sera invocado 
cuando se construya el objeto.
 
Crea una clase ejecutable que haga lo siguiente:
Crea 3 objetos: el primer objeto obtendrá los datos pedidas por teclado 
(nombre edad, sexo, peso y altura), el segundo objeto obtendrá por teclado 
todos los datos anteriores menos el peso y la altura, y el último por defecto.
Para cada objeto, deberá comprobar si esta en su peso ideal, tiene sobrepeso o 
por debajo de su peso ideal con un mensaje.
Indicar para cada objeto si es mayor de edad.
Por último, mostrar la información de cada objeto.*/