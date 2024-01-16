import java.util.Scanner;

public class Probando {

	public static void main(String[] args) {
		// Pedir al usuario que ingrese cuántas notas quiere ingresar,
				// en base a eso pedir que vaya ingresando las notas (del 1 al 10)
				// sacar el promedio
				// P.D. hacerlo con for, while y do while
				
				Scanner scanner = new Scanner(System.in);
				
				
				/*
				 * int cantNotas;
				double suma = 0;
				
				System.out.println("Con for");
				
				System.out.println("Cuántas notas quiere ingresar?");
				cantNotas = scanner.nextInt();
				
			
				
				for(int i = 0; i <cantNotas; i++) {
					System.out.println("Ingresar la nota n° " + (i+1));
					suma += scanner.nextInt();
				}
			
				System.out.println("El promedio de las notas es: " + (double)(suma/cantNotas));
				suma = 0;
				
				// --------------------------------------------------------------
				
				System.out.println("Con while");
				System.out.println("Cuántas notas quiere ingresar?");
				cantNotas = scanner.nextInt();
				
				int i = 0;
				while(i<cantNotas) {
					System.out.println("Ingresar la nota n° " + (i+1));
					suma += scanner.nextInt();
					i++;
				}
			
				System.out.println("El promedio de las notas es: " + (double)(suma/cantNotas));
				suma = 0;
				
				// --------------------------------------------------------------
				
				System.out.println("Con Do - While");
				System.out.println("Cuántas notas quiere ingresar?");
				cantNotas = scanner.nextInt();
				i = 0;
				do {
					System.out.println("Ingresar la nota n° " + (i+1));
					suma += scanner.nextInt();
					i++;
				}while(i<cantNotas);
				
				System.out.println("El promedio de las notas es: " + (double)(suma/cantNotas));
				suma = 0;
				
				scanner.close(); */
				
				// ---------------------------------------------------------------------------------
				
				//Crear un programa donde se introduzcan los tres ángulos 
				// internos de un triángulo y se determine si el triángulo es válido o no.
				
//				int sumaAngulos = 0;
//				
//				for(int i = 0; i<3; i++) {
//					System.out.println("Ingrese el valor del ángulo " + (1+i));
//					sumaAngulos += scanner.nextInt();
//					
//				}
//				if(sumaAngulos == 180) {
//					System.out.println("El triángulo es válido");
//				}else {
//					System.out.println("El triángulo no es válido");
//				}
//				
//				System.out.println("------------------------------");
				// ------------------------------------------------------------
				// Crear un programa que determine si un string 
				// introducido por un usuario empieza con un número o con una letra.
//				scanner.nextLine();
//				
//				String input = "";
//				int first;
//				
//				System.out.println("Ingresar una cadena de caracteres: ");
//				input = scanner.nextLine();
//				
//				first = input.charAt(0);
//				
//				
//				if(first < 48 && first > 57) {
//					System.out.println("Lo ingresado no comienza con un número, sino con: "+ input.charAt(0));
//				}else {
//					System.out.println("El primer caracter es el número: " + input.charAt(0));
//				}
//				
//				System.out.println("------------------------------");
				// -------------------------------------------------------------------
				// Realizar la suma de todos los números pares entre N y M 
				// donde N y M los ingresa un usuario.
				
				int N, M, suma = 0;
				
				System.out.println("Ingresar dos números enteros.");
				N = scanner.nextInt();
				M = scanner.nextInt();
				
				while(N>=M) {
					System.out.println("El primer número debe ser menor que el segundo, por favor vuelva a ingresarlos.");
					N = scanner.nextInt();
					M = scanner.nextInt();
				}
				
				for(int i =N; i<M; i++) {
					if(i%2 != 0) {
						continue;
					}else {
						suma += i;
					}
				}
				System.out.println("La suma de los número pares entre " + N + " y " + M + " es igual a: " + suma);
			
				System.out.println("------------------------------");
			// ------------------------------------------------------------------------------------------------------
				
				// Crear un programa que determine si un número es perfecto o no,
				// (se dice que un número es perfecto si el número es igual a la suma de 
				// sus divisores positivos, excluido él mismo., Ejemplos 6 = 1 + 2 + 3)
				
				
//				int num, sumaDivisores = 0;
//				
//				System.out.println("Ingresar el número a determinar si es perfecto.");
//				num = scanner.nextInt();
//				
//				for(int i = 1; i<num; i++) {
//					if(num%i == 0) {
//						sumaDivisores += i;
//					}
//				}
//				
//				if(num == sumaDivisores) {
//					System.out.println( num + " es un número perfecto.");
//				}else {
//					System.out.println( num + " no es un número perfecto.");
//				}
//				
//				System.out.println("------------------------------");
//				// ---------------------------------------------------------------------------------
//				
//				int renglones;
//				
//				System.out.println("Ingrese el número de renglones");
//				renglones = scanner.nextInt();
//				
//				for(int i =0; i<renglones; i++) {
//					if(i == 0 || i%2==0) {
//						System.out.println("********");
//					}else {
//						System.out.println("*******");
//					}
//				}
				scanner.close();

	}

}
