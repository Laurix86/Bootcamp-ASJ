--CREATE database MATEMI;


-- create
CREATE TABLE FORMATOS (
  formato_id int PRIMARY KEY IDENTITY(1,1),
  formato_tipo varchar(50)
);

CREATE TABLE GENEROS(
  generos_id int PRIMARY KEY  IDENTITY(1,1), 
  generos_categoria varchar(50)
);

CREATE TABLE ORIGEN(
  origen_id int PRIMARY KEY  IDENTITY(1,1),
  origen_nombre varchar(50)
);

CREATE TABLE PRODUCTORAS(
  productoras_id int PRIMARY KEY  IDENTITY(1,1),
  productora_nombre varchar(70)
  );
  
  CREATE TABLE PRODUCTOS_TIPO(
  	tipo_id int PRIMARY KEY  IDENTITY(1,1),
    tipo_detalle varchar(25)
  );
  
  CREATE TABLE AUTORES(
  	autores_id int PRIMARY KEY IDENTITY(1,1),
    autores_denominacion varchar(100)
  );
  
  CREATE TABLE PRODUCTOS(
  	producto_id int PRIMARY KEY IDENTITY(1,1),
    producto_titulo varchar(100),
    producto_descripcion varchar(255),
    producto_duracion int, 
    producto_anio DATE,
    producto_stock int,
    producto_precio_venta decimal,
    producto_precio_alquiler decimal,
    id_autor int,
    id_formato int ,
    id_genero int,
    id_origen int,
    id_productora int,
    id_tipo int,
    FOREIGN KEY(id_autor) REFERENCES autores(autores_id),
    FOREIGN KEY(id_formato) REFERENCES formatos(formato_id),
    FOREIGN KEY(id_genero) REFERENCES generos(generos_id),
    FOREIGN KEY(id_origen) REFERENCES origen(origen_id),
    FOREIGN KEY(id_productora) REFERENCES productoras(productoras_id),
    FOREIGN KEY(id_tipo) REFERENCES productos_tipo(tipo_id)
  );
  
  CREATE TABLE PAISES(
  	paises_id int PRIMARY KEY IDENTITY(1,1),
    pais_nombre varchar(150)
  );
  
  CREATE TABLE PROVINCIAS(
  	provincias_id int PRIMARY KEY IDENTITY(1,1),
    provincia_nombre varchar(150),
    id_pais int,
    FOREIGN KEY(id_pais) REFERENCES paises(paises_id)
  );
  
  CREATE TABLE SUCURSALES(
  	sucursal_id int PRIMARY KEY IDENTITY(1,1),
    sucursal_nro int,
    sucursal_calle varchar(100),
    sucursal_nrocalle int,
    sucursal_ciudad varchar(100),
    id_provincia int, 
    FOREIGN KEY(id_provincia) REFERENCES provincias(provincias_id)
  );
  
  CREATE TABLE EMPLEADOS(
  	empleado_id int PRIMARY KEY IDENTITY(1,1),
    empleado_nombre varchar(50),
    empleado_apellido varchar(50),
    empleado_cuit varchar(12),
    id_sucursal int,
    FOREIGN KEY(id_sucursal) REFERENCES sucursales(sucursal_id)
  );
  
  CREATE TABLE CLIENTES(
  	cliente_id int PRIMARY KEY IDENTITY(1,1),
    cliente_nombre varchar(50),
    cliente_apellido varchar(50),
    cliente_telefono varchar(25),
    is_socio bit,
    cliente_calle varchar(70),
    cliente_nrocalle int,
    cliente_ciudad varchar(100), 
    id_provincia int, 
    FOREIGN KEY(id_provincia) REFERENCES provincias(provincias_id),
  );
  
  CREATE TABLE SOCIOS(
  	socio_id int PRIMARY KEY IDENTITY(1,1),
    socio_mail varchar(70),
    socio_fechanacimiento DATE,
    id_cliente int,
    FOREIGN KEY(id_cliente) REFERENCES clientes(cliente_id)
  );
  
  CREATE TABLE PEDIDOS(
  	pedido_id int PRIMARY KEY IDENTITY(1,1),
    pedido_nro bigint,
    pedido_fecha DATE,
    pedido_impuestos decimal,
    pedido_total decimal, 
    estado_devolucion bit NULL,
    id_cliente int,
    FOREIGN KEY(id_cliente) REFERENCES clientes(cliente_id),
    id_empleado int,
    FOREIGN KEY(id_empleado) REFERENCES empleados(empleado_id)
  );
  
  CREATE TABLE PEDIDO_DETALLES(
  	detalle_id int PRIMARY KEY IDENTITY(1,1),
    tipo_pedido bit,
    detalle_precio decimal,
    detalle_cantidad int,
    id_producto int,
    FOREIGN KEY(id_producto) REFERENCES productos(producto_id),
    id_pedido int,
    FOREIGN KEY(id_pedido) REFERENCES pedidos(pedido_id)
  );
  
  CREATE TABLE PAGOS(
  	pago_id int PRIMARY KEY IDENTITY(1,1),
    pago_fecha DATE,
    pago_medio varchar(50),
    pago_total decimal,
    cliente_facturacion varchar(255),
    is_penalizacion bit,
    id_pedido int,
    FOREIGN KEY(id_pedido) REFERENCES pedidos(pedido_id)
  );