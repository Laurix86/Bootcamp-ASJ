import java.util.ArrayList;
import java.util.Scanner;

public class Clases {

	public static void main(String[] args) {
		Scanner sc = new Scanner(System.in);
		
		ArrayList<String> checkList = new ArrayList<String>();
		String auxString = "";
		
		Password pass1 = new Password();
		
		
		System.out.println(pass1.getContrasenia());
		System.out.println("Su nueva contraseña: " + pass1.getContrasenia() + " es " + pass1.esFuerte(pass1.getContrasenia()));;
		
		
		System.out.println("Quiere comprobar la seguridad de sus contraseñas? Ingréselas a continuación:");
		
		while(!auxString.equals("0")) {
			System.out.println("Para finalizar la carga, presione 0 y luego Enter");
			auxString = sc.nextLine();
			if(!auxString.equals("0")) {
				checkList.add(auxString);
			}
		}
		
		pass1.checkLista(checkList);
		
	}

}
