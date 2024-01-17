/*Crea una clase llamada Cuenta que tendrá los siguientes atributos: titular y cantidad
(puede tener decimales).
El titular será obligatorio y la cantidad es opcional. Crea dos constructores que cumpla lo anterior.

Crea sus métodos get, set y toString.

Tendrá dos métodos especiales:
ingresar(double cantidad): se ingresa una cantidad a la cuenta, si la cantidad
introducida es negativa, no se hará nada.
retirar(double cantidad): se retira una cantidad a la cuenta, si restando la cantidad
actual a la que nos pasan es negativa, la cantidad de la cuenta pasa a ser 0.*/


public class Cuenta {
	private String titular;
	private double cantidad;
	
	
	public Cuenta(String t) {
		this.titular = t;
		this.cantidad =0;
	}
	
	public Cuenta(String t, double c) {
		this.titular = t;
		this.cantidad = c;
	}
	
	public String getTitular() {
		return titular;
	}
	public void setTitular(String titular) {
		this.titular = titular;
	}
	public double getCantidad() {
		return cantidad;
	}
	public void setCantidad(double cantidad) {
		this.cantidad = cantidad;
	}
	
	public void ingresar(double c) {
		if(c>0) {
			this.cantidad += c;
			System.out.println("Saldo: " + this.cantidad);
		}else {
			System.out.println("Saldo: " + this.cantidad);
		}
	}
	
	public void retirar(double c) {
		if(c>this.cantidad) {
			c= this.cantidad;
			this.cantidad =0;
			System.out.println("Sólo se pudo retirar " + c + ". Su saldo actual es: " + this.cantidad);
		}else {
			this.cantidad -= c;
			System.out.println("Su saldo actual es: " + this.cantidad);
		}
	}
}
