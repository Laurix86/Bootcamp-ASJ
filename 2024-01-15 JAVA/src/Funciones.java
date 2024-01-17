import java.util.Iterator;
import java.util.Random;
import java.util.Scanner;

public class Funciones {

	public static void main(String[] args) {

		Scanner sc = new Scanner(System.in);
		int[][] matriz = new int[3][3];
		
//		ejercicio2(sc);
//		ejercicio3();
//		ejercicio4(matriz);
//		ejercicio5(matriz, sc);
		ejercicio6(sc);
		
		
	}
	
	
	public static void ejercicio2(Scanner scanner) {
		
		/* Escribe un programa que lea 15 números por teclado 
		 * y que los almacene en un array. Rota los elementos de ese array, es decir, 
		 * el elemento de la posición 0 debe pasar a la posición 1, el de la 1 a la 2, etc. 
		 * El número que se encuentra en la última posición debe pasar a la posición 0. 
		 * Finalmente, muestra el contenido del array.*/ 
		
		int[] numbers = new int[15];
		int[] aux = new int[15];
		int j = 14;
		
		for(int i = 0; i<15; i++) {
			System.out.println("Ingresar el número " + (i+1));
			numbers[i] = scanner.nextInt();
		}
		
		for (int n : numbers) {
			aux[j] = n;
			j--;
		}
		
		numbers = aux.clone();
		
		System.out.println("El nuevo orden de las números ingresados es: ");
		for (int n : numbers) {
			System.out.println(n);
		}
	}

	
	public static void ejercicio3() {
		/*Escribe un programa que genere 20 números enteros aleatorios entre 0 y 100 
		 * y que los almacene en un array. El programa debe ser capaz de pasar todos 
		 * los números pares a las primeras posiciones del array (del 0 en adelante) 
		 * y todos los números impares a las celdas restantes. Utiliza arrays 
		 * auxiliares si es necesario.*/
		
		int j = 19, k = 0, n = 0;
		int[] arrayNumber = new int[20];
		Random random = new Random();
		
		for(int i = 0; i<20;i++) {
		
				n = random.nextInt(101);
				System.out.print(n);
				if(n%2 ==0 || n ==0) {
					arrayNumber[k] = n;
					k++;
				}else{
					arrayNumber[j] = n;
					j--;
				}
			
		}
		
		System.out.println("Se muestran los números generados: ");
		for (int num : arrayNumber) {
			System.out.println(num);
		}
		
		
	}
	
	public static void ejercicio4(int[][] matriz) {
		/*Generar una matriz de 3×3 con números aleatorios sin repetirse.*/
		Random random = new Random();
		
		
		for(int i = 0; i<3; i++) {
			for(int j = 0; j<3; j++) {
				matriz[i][j] = random.nextInt(10);
			}
		}
		
		for(int i = 0; i<3; i++) {
			for(int j = 0; j<3; j++) {
				System.out.print(matriz[i][j] + " ");
			}
			System.out.println();
		}
		
	}

	public static void ejercicio5(int[][] matriz, Scanner scanner) {
		/*Dada la matriz anterior, realizar la suma de una columna o fila aleatoria 
		 * (preguntar al usuario que desea sumar, si una fila o una columna, y cual de ellas).
		 * Extra: mostrar el resultado al final de la fila/columna correspondiente*/
		
		int row = 0, column = 0, suma = 0;
		char opt;
		
		System.out.println("Qué quiere sumar, una fila o una columna? (presione f o c según elija):");
		opt = Character.toLowerCase(scanner.next().charAt(0));
		
		switch (opt) {
			case 'f': {
				System.out.println("Qué fila quiere sumar? Elija 1, 2, o 3");
				row = scanner.nextInt()-1;
				for(int i = 0; i<3; i++) {
					for(int j = 0; j<3; j++) {
						if(row == i) {
							suma += matriz[i][j];
							System.out.print(matriz[i][j] + " ");
							
						}
						else {
							System.out.print(matriz[i][j] + " ");
						}
						
					}
					if(suma >0 && row == i) {
						System.out.print(suma);
					}
					
					System.out.println();
				}
				
				break;
			}
			case 'c': {
				System.out.println("Qué columna quiere sumar? Elija 1, 2, o 3");
				column = scanner.nextInt()-1;
				for(int i = 0; i<3; i++) {
					for(int j = 0; j<3; j++) {
						if(column == j) {
							suma += matriz[i][j];
							System.out.print(matriz[i][j]+ " ");
							
						}
						else {
							System.out.print(matriz[i][j]+ " ");
						}
						
					}
					
					
					System.out.println();
				}
				
				for(int j = 0; j<3; j++) {
					if(suma >0 && j == column) {
						System.out.print(suma);
					}else {
						System.out.print("  ");
					}
				}
				break;	
			}
			default:
				System.out.println("Se produjo un error.");
		
		}
		
	}
	

	public static void ejercicio6(Scanner scanner) {
		/* Nos piden crear una matriz de 4×4 de números enteros que inicialmente esta vacía, 
		 * nos piden hacer un menú con estas opciones:
				Rellenar TODA la matriz de números, debes pedírselo al usuario.
				Suma de una fila que se pedirá al usuario (controlar que elija una correcta)
				Suma de una columna que se pedirá al usuario (controlar que elija una correcta)
				Sumar la diagonal principal (ver ejemplo)
				Sumar la diagonal inversa (ver ejemplo)
				La media de todos los valores de la matriz

			IMPORTANTE: hasta que no se haga la primera opción, el resto de opciones 
			no se deberán de ejecutar, simplemente mostrar un mensaje donde diga que 
			debes rellenar la matriz*/
		
		int[][] matrix = new int[4][4];
		
		boolean flag = false;
		String[] optMenu = {"Rellenar Matriz", 
							"Sumar una fila a elección", 
							"Suma de una columna a elección",
							"Sumar la diagonal principal", 
							"Sumar la diagonal inversa",
							"Obtener la media de la Matriz",
							"Salir"};
		
		int opt = -1;
		
		while(opt!=7) {
			showMenu(optMenu);
			opt = scanner.nextInt();
			switch (opt) {
				case 1: {
					llenarMatrix(matrix,scanner);
					flag = true;
					break;
				}
				case 2: {
					if(flag) {
						sumarFilasColumnas(matrix, scanner, 'f');
					}else {
						System.out.println("Primero debe completar la matriz (opción 1)");
					}
					
					break;
				}
				case 3: {
					
					if(flag) {
						sumarFilasColumnas(matrix, scanner, 'c');
					}else {
						System.out.println("Primero debe completar la matriz (opción 1)");
					}
					
					break;
					
				
				}
				case 4: {
					if(flag) {
						sumarDiagonal(matrix);
					}else {
						System.out.println("Primero debe completar la matriz (opción 1)");
					}
					
					break;
				}
				case 5: {
					if(flag) {
						sumarDiagonalInvertida(matrix);
					}else {
						System.out.println("Primero debe completar la matriz (opción 1)");
					}
					
					break;
				}
				case 6: {
					if(flag) {
						sumaMediaMatriz(matrix);
					}else {
						System.out.println("Primero debe completar la matriz (opción 1)");
					}
					
					break;
				}
					
			}
			
		}
		
	}
	
	public static void llenarMatrix(int[][] matrix,Scanner scanner) {
		System.out.println("A continuación se le pedirán los números para la matriz: ");
		
		for(int i = 0; i<4; i++) {
			for(int j= 0; j<4; j++) {
				System.out.println("Ingrese el número para la posición ["+i+"]["+j+"]: " );
				matrix[i][j] = scanner.nextInt();
			}
		}
	}
	
	public static void showMenu(String[] optMenu) {
		
		System.out.println("Elija una opción:");
		for(int i = 0; i<optMenu.length; i++) {
			System.out.println("Opción " + (i+1) + " => " + optMenu[i]);
		}
		
	}
	
	public static void sumarFilasColumnas(int[][] matrix, Scanner scanner, char letra) {
		int suma = 0, index =0;
		
		while(index <1 && index>4) {
			System.out.println("Qué fila quiere sumar, ingrese 1, 2, 3 o 4");
			index = scanner.nextInt();
		}
		
		index--;
		
		if(letra == 'f') {
			for(int i = 0; i<4; i++) {
				suma += matrix[index][i];
			}
		}else {
			for(int i = 0; i<4; i++) {
				suma += matrix[i][index];
			}
		}
		
		System.out.println("El resultado de la suma es: " + suma);
		
	}
	
	public static void sumarDiagonal(int[][] matrix) {
		int suma = 0;
		
		for(int i = 0; i<4; i++) {
			for(int j= 0; j<4; j++) {
				
				if(i == j) {
					suma += matrix[i][j];
				}
			}
		}
		
		System.out.println("La suma de la diagonal es: " + suma );
	}
	
	public static void sumarDiagonalInvertida(int[][] matrix) {
		int suma = 0;
		
		for(int i = 0; i<4; i++) {
			for(int j= 0; j<4; j++) {
				
				if(i + j == 3) {
					suma += matrix[i][j];
				}
			}
		}
		System.out.println("La suma de la diagonal invertida es: " + suma );
	}

	public static void sumaMediaMatriz(int[][] matrix) {
		double suma = 0, elementos = 16;
		
		for(int i = 0; i<4; i++) {
			for(int j= 0; j<4; j++) {
				
				suma += matrix[i][j];
				
			}
		}
		System.out.println("La suma de la diagonal invertida es: " + (suma/elementos) );
	}

	public static void ejercicio7() {
		/*Queremos realizar una encuesta a 10 personas, en esta encuesta indicaremos 
		 * el sexo (1=masculino, 2=femenino), si trabaja (1=si trabaja, 2= no trabaja) 
		 * y su sueldo (si tiene un trabajo, sino sera un cero) estará entre 600 y 2000 (valor entero). 
		 * Los valores pueden ser generados aleatoriamente. Calcula y muestra lo siguiente:

			Porcentaje de hombres (tengan o no trabajo).
			Porcentaje de mujeres (tengan o no trabajo).
			Porcentaje de hombres que trabajan.
			Porcentaje de mujeres que trabajan.
			El sueldo promedio de las hombres que trabajan.
			EL sueldo promedio de las mujeres que trabajan.
			Usa todos los métodos que veas necesarios, piensa que es aquello que 
			se repite o que puede ser mejor tenerlo por separado.*/
			
		int[][] encuestados = new int[10][3];
		
	
	
	}
	
	public static void llenarEncuesta(int[][] encuestados, Scanner scanner) {
		int aux = -1;
		
		for(int i = 0; i<10; i++) {
			for(int j = 0; j<3; j++) {
				
				while(aux <0 && aux>2) {
					System.out.println("Indicar sexo (masculino = 1 - femenino = 2): ");
					aux = scanner.nextInt();
				}
				encuestados[i][j]= aux;
				
			}
			
			
		}
	}

}
