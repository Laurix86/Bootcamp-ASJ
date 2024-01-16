--- 1 - Listar todos los artitas por Discografica, ordenados por el nombre del artista

SELECT a.nombre as 'Nombre Artista', d.nombre as 'Discogr�fica'
FROM artista a
JOIN discografica d on a.discografica_id = d.id
order by a.nombre asc

------------------------------------------------------

--- 2 - Que Discogr�fica NO tiene artistas?

SELECT d.nombre
FROM discografica d
where d.id not in (Select a.discografica_id from artista a);

SELECT d.nombre
from discografica d
left join artista a on d.id = a.discografica_id
where a.id is null;

---------------------------------------------------------- 
-- 3 - Listar el numero de canciones por artista en orden descendiente

SELECT count(c.id) as 'N�mero Canciones', a.nombre as 'Nombre Artista'
FROM artista a
JOIN album al on a.id = al.artista_id
JOIN canciones c on al.id = c.album_id
group by a.nombre
order by [Nombre Artista] desc

---------------------------------------------------------

-- 4 - Que artista grab� el mayor numero de canciones?

SELECT TOP 1 count(c.id) as 'N�mero Canciones', a.nombre as 'Nombre Artista'
FROM artista a
JOIN album al on a.id = al.artista_id
JOIN canciones c on al.id = c.album_id
group by a.nombre
order by [N�mero Canciones] desc

---------------------------------------------
--- 5 - Por cada artista y cada album, cuantas canciones tienen menos de 5 minutos de duracion?

SELECT count(c.id) as ' Cantidad canciones', a.nombre as 'Nombre Artista', al.nombre as 'Album'
FROM canciones c
JOIN album al on al.id = c.album_id
JOIN artista a ON a.id = al.artista_id
WHERE c.duracion < 5
GROUP BY a.nombre, al.nombre

---------------------------------------------------
--- 6 - En relaci�n con la consulta anterior, muestra tambi�n las canciones y su duraci�n

SELECT count(c.id) as ' Cantidad canciones', a.nombre as 'Nombre Artista', al.nombre as 'Album', c.nombre as 'Canci�n', c.duracion as 'Duraci�n'
FROM canciones c
JOIN album al on al.id = c.album_id
JOIN artista a ON a.id = al.artista_id
WHERE c.duracion < 5
GROUP BY a.nombre, al.nombre, c.nombre, c.duracion
ORDER BY a.nombre, al.nombre

------------------------------------------------------
--- 7 - Qu� artistas grabaron canciones mas largas que 5 minutos, y cu�ntas canciones fueron?

SELECT count(c.id) as ' Cantidad canciones', a.nombre as 'Nombre Artista'
FROM canciones c
JOIN album al on al.id = c.album_id
JOIN artista a ON a.id = al.artista_id
WHERE c.duracion > 5 
GROUP BY a.nombre
order by [ Cantidad canciones]

--------------------------------------------------
--- 8 - En que a�o se grabaron la mayor�a de las canciones?

SELECT TOP 1 count(c.id) as 'Cantidad', al.anio
FROM canciones c
JOIN album al on c.album_id = al.id
group by al.anio
order by count(c.id) desc

--------------------------------------------------------
--- 9 - Mostrar el ranking de los 5 artistas, album, cancion y a�o con las canciones m�s largas

SELECT TOP 5 a.nombre as 'Artista', al.nombre as 'Album', c.nombre as 'Canci�n', al.anio as 'A�o'
FROM canciones c
JOIN album al on c.album_id = al.id
JOIN artista a ON a.id = al.artista_id
ORDER BY c.duracion DESC

-------------------------------------------------------------------
--- 10 - Duraci�n total de todas las canciones grabadas por cada artista en orden descendente

SELECT SUM(c.duracion) as 'Duraci�n total', a.nombre as 'Artista'
FROM canciones c
JOIN album al on c.album_id = al.id
JOIN artista a ON a.id = al.artista_id
GROUP BY a.nombre
order by a.nombre desc

-----------------------------------------------------------------------------
--- 11 - Que artistas y album no tienen canciones de menos de 5 minutos?

SELECT distinct a.nombre, al.nombre
FROM canciones c
JOIN album al on c.album_id = al.id
JOIN artista a ON a.id = al.artista_id
WHERE al.id in (SELECT al.id
				FROM album al
				where al.id not in (select c.album_id
									From canciones c
									where c.duracion <5))

----------------------------------------------------------------
--- 12 - Mostrar el top 3 de artistas con el promedio de duraci�n de las canciones, 
--- en orden descendente con la canci�n mas larga primero

SELECT a.nombre as 'Artista', c.nombre as 'Canci�n', c.duracion as 'Duraci�n'
FROM canciones c
JOIN album al on c.album_id = al.id
JOIN artista a ON a.id = al.artista_id
WHERE a.id in (SELECT top 3  a.id, a.nombre
				FROM canciones c
				JOIN album al on c.album_id = al.id
				JOIN artista a ON a.id = al.artista_id
				ORDER BY a.nombre desc)
AND c.id in (SELECT c.id, a.id
			FROM canciones c
			JOIN album al on c.album_id = al.id
			JOIN artista a ON a.id = al.artista_id
			order by c.duracion desc)

SELECT a.nombre as 'Artista', AVG(c.duracion) as 'Promedio', c.nombre, c.duracion
FROM canciones c
JOIN album al on c.album_id = al.id
JOIN artista a ON a.id = al.artista_id
group by a.nombre, c.nombre, c.duracion

order by a.nombre desc

-----------------------------------------------------------------------------
--- 13 - Qu� artistas no lanzaron un album durante la decada de 1980 y 1990?

SELECT a.nombre as 'Artista'
FROM artista a
WHERE a.id NOT IN(SELECT al.artista_id
				FROM album al
				where al.anio between 1980 and 2000)

-----------------------------------------------------------------------------------
--- 14 - Duraci�n total del album Sgt. Pepper's de los Beatles (mostrar en minutos y segundos)

SELECT CAST(SUM(CAST(c.duracion * 60 AS INT)) / 60 AS INT) AS Minutos,
       SUM(CAST(c.duracion * 60 AS INT)) % 60 AS Segundos
FROM album al
JOIN canciones c ON al.id = c.album_id
WHERE al.nombre LIKE 'Sgt. Pepper%';