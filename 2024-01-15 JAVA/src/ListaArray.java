import java.util.ArrayList;
import java.util.Iterator;

public class ListaArray {

	public static void main(String[] args) {
		ArrayList<String> miLista = new ArrayList();
		
		miLista.add("Rojo");
		miLista.add("Azul");
		miLista.add("Verde");
		
		for(int i = 0; i<miLista.size(); i++) {
			System.out.println(miLista.get(i));
		}
		
		System.out.println("--------------");
		
		miLista.add("Negro");
		miLista.add("Blanco");
		miLista.add(3, "Amarillo");
		
		for(String color: miLista) {
			System.out.println(color);
		}
		
		System.out.println("--------------");
		
		System.out.println(miLista.get(3));
		System.out.println(miLista.get(4));
		
		miLista.remove(1);
		miLista.remove("Verde");
		//// para borrar un número
		miLista.remove(new Integer(1));
		
		System.out.println("--------------");
		
		miLista.indexOf("Amarillo");
		miLista.lastIndexOf("Amarillo");
		
		miLista.clear();
		
		// chequear si está vacía
		miLista.isEmpty();
		
		Iterator<String> miIterador = miLista.iterator();
		
		while(miIterador.hasNext()) {
			String elemento = miIterador.next();
			System.out.println(elemento + " - ");
		}
	}

	public static void imprimir(ArrayList<String> lista) {
		System.out.println("--------------");
		for(String item: lista) {
			System.out.println(item);
		}
		
	}
}
