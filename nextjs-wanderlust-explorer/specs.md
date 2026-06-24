## Requisitos de implementación

### Comportamiento de la búsqueda

La búsqueda debe filtrar las experiencias comparando el término buscado con el título de cada experiencia.

La búsqueda debe usar una expresión regular case-insensitive.

Ejemplo de lógica:

```ts id="046wuo"
const regex = new RegExp(searchTerm, "i");
const matchesSearch = regex.test(experience.title);
```

Los filtros de categoría y destino deben funcionar de forma independiente al campo de búsqueda.

Todos los filtros deben poder combinarse. Esto significa que la lista final solo debe mostrar experiencias que coincidan con:

* El término de búsqueda, si hay uno activo
* La categoría seleccionada, si hay una activa
* El destino seleccionado, si hay uno activo

Ejemplo:

```txt id="xsfcxv"
/experiences?search=sailing&category=Adventure&destination=Split, Croatia
```

Esto debería mostrar únicamente experiencias cuyo título coincida con `sailing`, cuya categoría sea `Adventure` y cuyo destino sea `Split, Croatia`.

### Requisitos del dataset

Usa un asistente de código con IA para generar un array local de TypeScript con 100 objetos de experiencias de viaje.

El dataset debe guardarse en un archivo TypeScript local.

Archivo sugerido:

```txt id="eh8xfc"
src/data/experiences.ts
```

Cada objeto de experiencia debe incluir como mínimo:

* `id`
* `title`
* `description`
* `category`
* `destination`
* `price`
* `rating`
* `imageUrl`

El campo `category` debe ser uno de los siguientes valores:

```txt id="d33cz6"
Adventure
Culture
Food
Wellness
Nature
```

El campo `destination` debe incluir ciudad y país.

Ejemplo:

```ts id="1c5qor"
{
  id: "exp-001",
  title: "Sunset Sailing Route in Split",
  description: "Explore the Adriatic coastline on a relaxed sunset sailing experience.",
  category: "Adventure",
  destination: "Split, Croatia",
  price: 89,
  rating: 4.8,
  imageUrl: "https://placehold.co/600x400"
}
```

Las imágenes pueden usar cualquier URL placeholder válida por ahora.

### Comportamiento de favoritos

Cada tarjeta de experiencia debe incluir un botón con icono de corazón.

Al hacer clic en el corazón, la experiencia debe activarse o desactivarse como favorita.

Si la experiencia no está guardada, hacer clic en el corazón debe añadirla a favoritos.

Si la experiencia ya está guardada, hacer clic en el corazón debe eliminarla de favoritos.

Los favoritos deben guardarse en un `useState` de nivel superior.

El estado de favoritos debe pasarse mediante props a los componentes que lo necesiten.

Enfoque permitido:

```ts id="7amnsf"
const [favoriteIds, setFavoriteIds] = useState<string[]>([]);
```

La lógica para activar o desactivar favoritos debe vivir en el componente padre o en un custom hook creado dentro del proyecto.

No se requiere persistencia por ahora.

Esto significa que los favoritos no necesitan mantenerse después de recargar la página.

El sistema de favoritos no debe usar:

* Redux
* Zustand
* LocalStorage
* Librerías externas de estado
* Persistencia en backend

## Design References: 

Ruta de imagenes de referencia dentro del proyecto de next: /workspaces/Santiago-Peinador-nextjs-wanderlust-explorer/nextjs-wanderlust-explorer/ref-images