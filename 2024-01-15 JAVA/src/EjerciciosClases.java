
/*Cree una clase que me permita realizar una operación matemática de 2 números. 
 * (Crear los metodos y atributos necesarios)*/

public class EjerciciosClases {
	private int num1, num2;

	
	public EjerciciosClases(int n1, int n2) {
		this.num1 = n1;
		this.num2 = n2;
		
	}
	public int getNum1() {
		return num1;
	}

	public void setNum1(int num1) {
		this.num1 = num1;
	}

	public int getNum2() {
		return num2;
	}

	public void setNum2(int num2) {
		this.num2 = num2;
	}
	
	public void operacion(String operador) {
		switch (operador) {
		case "+": {
			
			System.out.println("El resultado de la suma es: " + (this.num1 + this.num2));
		}
		case "-": {
					
			System.out.println("El resultado de la resta es: " + (this.num1 - this.num2));
		}
		case "*": {
			System.out.println("El resultado de la resta es: " + (this.num1 * this.num2));
		}
		case "/": {
			System.out.println("El resultado de la resta es: " + (this.num1 / this.num2));
		}
		default:
			System.out.println("Se produjo un error y no se pudo completar la operación");
		}
	}
	
	
}
