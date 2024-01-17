
public class Automovil {
	private String marca;
	private int anio;
	private String color;
	
	public Automovil(String m, int a) {
		this.marca = m;
		this.anio = a;
		this.color = "-";
		System.out.println("Creando instancia de Clase Automóvil");
	}

	public String getMarca() {
		return marca;
	}

	public void setMarca(String marca) {
		this.marca = marca;
	}

	public int getAnio() {
		return anio;
	}

	public void setAnio(int anio) {
		this.anio = anio;
	}

	public String getColor() {
		return color;
	}

	public void setColor(String color) {
		this.color = color;
	}

	
	
}
