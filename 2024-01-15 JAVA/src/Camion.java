
public class Camion extends Automovil{

	
	private double cargaMax;
	
	public Camion(String marca, int anio, double carga) {
		super(marca,anio);
		this.cargaMax = carga;
		System.out.println("Creando Instancia de Camión");
	}

	public double getCargaMax() {
		return cargaMax;
	}

	public void setCargaMax(double cargaMax) {
		this.cargaMax = cargaMax;
	}
	
	public void mostrar() {
		System.out.println("[MARCA CAMION: ");
	}
}
