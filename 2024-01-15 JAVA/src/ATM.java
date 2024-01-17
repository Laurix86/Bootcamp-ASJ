import java.util.Scanner;

public class ATM {

	public static void main(String[] args) {
		Scanner scanner = new Scanner(System.in);
		double dineroActual =0;
		int opt = -1, contadorMovimientos = 0;
		String[] optMenu = {"Extraer", "Depositar", "Consultar Saldo","Últimos Movimientos", "Salir"};
		Double movimientos[] = new Double[20];
		
		System.out.println("Cuál es el saldo inicial de la cuenta?");
		dineroActual = scanner.nextInt();
		
		while(opt != 5) {
			showMenu(optMenu);
			opt = scanner.nextInt();
			switch (opt) {
				case 1: {
					System.out.println("Cuánto dinero quiere retirar? Su saldo actual es: $" + dineroActual);
					double retiro = scanner.nextDouble();
					
					if(retiro > dineroActual) {
						retiro = dineroActual;
					}
					
					double saldo = retirar(retiro, dineroActual);
					
					
					if(saldo != dineroActual) {
						movimientos[contadorMovimientos] = -retiro;
						contadorMovimientos = contador(contadorMovimientos);
					};
					break;
				}
				case 2: {
					System.out.println("Su saldo actual es: $" + dineroActual + "Cuánto dinero quiere depositar?");
					double deposito = scanner.nextDouble();
					double saldo = depositar(deposito, dineroActual);
					
					if(saldo != dineroActual) {
						movimientos[contadorMovimientos] = deposito;
						contadorMovimientos = contador(contadorMovimientos);
					};
					break;
				}
				case 3: {
					System.out.println("Su saldo actual es: $" + dineroActual);
					break;
				}
				case 4: {
					showMovimientos(movimientos, contadorMovimientos);
					break;
				}
				case 5: {
					System.out.println("Gracias por utilizar nuestros servicios.");
					scanner.close();
					System.exit(0);
					break;
				}
				default:
					System.out.println("La opción: " + opt + "no es una opción válida.");
				}
		}
		
	}

	public static void showMenu(String[] optMenu) {
		
		System.out.println("Elija una opción:");
		for(int i = 0; i<optMenu.length; i++) {
			System.out.println("Opción " + (i+1) + " => " + optMenu[i]);
		}
		
	};
	
	public static double retirar(double retiro, double saldo){
		try {
			
				saldo -= retiro;
			
			
			
			
		} catch (Exception e) {
			System.out.println("Se produjo un error, no se ha podido realizar la operación.");
			
		};
	
		
		return saldo;
	};
	
	public static double depositar(double deposito, double saldo) {
		try {
			saldo += deposito;
		} catch (Exception e) {
			System.out.println("Se produjo un error, no se ha podido realizar la operación.");
			
		};
		return saldo;
	};
	
	public static int contador(int cont) {
		if(cont == 20) {
			cont = 0;
		}else {
			cont++;
		}
		
		return cont;
	};
	
	public static void showMovimientos(Double[] mov, int cont) {
		System.out.println("A continuación se muestran los últimos 20 movimientos => ");
		for (int i = 0; i<cont; i++) {
			if(mov[i]<0) {
				System.out.println("Retiró: $" + Math.abs(mov[i]));
			}else {
				System.out.println("Depositó: $" + mov[i]);
			}
		}
	}
}

