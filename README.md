# React Rick & Morty Lab

En este laboratorio vas a practicar la integración de una API externa en una aplicación React. El objetivo es mostrar el listado de personajes de Rick & Morty en la home page.

La aplicación ya tiene configurado el routing y una barra de navegación. Tu trabajo empieza aquí.

---

## Estructura del proyecto

```
src/
├── components/
│   ├── characters/
│   │   ├── characters-list/   ← crearás tu componente aquí
│   │   └── characters-item/   ← crearás tu componente aquí
│   └── ui/
│       └── navbar/
├── pages/
│   └── home-page.jsx          ← modificarás esta página
├── services/
│   └── rm-service.js          ← crearás el servicio aquí
└── App.jsx
```

---

## Pasos

### Paso 1 — Instala axios

Axios es una librería que facilita las peticiones HTTP. Instálala con:

```bash
npm install axios
```

---

### Paso 2 — Crea el servicio `rm-service.js`

Crea el archivo `src/services/rm-service.js`.

Este servicio se encargará de todas las llamadas a la API de Rick & Morty. La URL base de la API es:

```
https://rickandmortyapi.com/api
```

El servicio debe exportar una función llamada `listCharacters` que haga una petición GET al endpoint `/character` y devuelva el array de personajes.

Puedes consultar la documentación de la API aquí: https://rickandmortyapi.com/documentation/#get-all-characters

> **Pista:** La respuesta de la API tiene esta forma:
> ```json
> {
>   "info": { ... },
>   "results": [ array de personajes ]
> }
> ```
> Tu función debe devolver únicamente el array `results` y quedarse sólo con la información que necesites.

---

### Paso 3 — Crea el componente `CharacterItem`

Crea el archivo `src/components/characters/characters-item/character-item.jsx`.

Este componente recibe un **personaje** como prop y muestra su información. Cada personaje tiene, entre otros, los siguientes campos:

| Campo | Descripción |
|---|---|
| `name` | Nombre del personaje |
| `image` | URL de la imagen |
| `status` | Estado: `Alive`, `Dead` o `unknown` |
| `species` | Especie del personaje |

Como mínimo muestra la imagen, el nombre, el estado y la especie.

---

### Paso 4 — Crea el componente `CharactersList`

Crea el archivo `src/components/characters/characters-list/characters-list.jsx`.

Este componente es el responsable de obtener los datos de la API y renderizar la lista. Para ello:

1. Declara un estado para almacenar el listado de personajes (inicialmente un array vacío).
2. Usa el hook `useEffect` para llamar a `listCharacters` cuando el componente se monte.
3. Guarda los personajes obtenidos en el estado.
4. Itera el estado con `.map()` y renderiza un `CharacterItem` por cada personaje.

Recuerda:
- Cada elemento del `.map()` necesita una prop `key` única. Puedes usar `character.id`.

---

### Paso 5 — Usa `CharactersList` en `HomePage`

Abre `src/pages/home-page.jsx` y renderiza el componente `CharactersList`.

`HomePage` no necesita saber nada sobre los personajes ni sobre la API; esa responsabilidad ya la tiene `CharactersList`.

---

## Bonus

Si has completado los pasos anteriores, prueba a añadir estas mejoras:

- **Loading state:** Muestra un spinner mientras se cargan los personajes. Puedes usar la librería [react-spinners](https://www.davidhu.io/react-spinners/) (`npm install react-spinners`).
- **Error handling:** Si la petición falla, muestra una notificación de error al usuario. Puedes usar [react-toastify](https://fkhadra.github.io/react-toastify/) (`npm install react-toastify`).
- **Filtro por estado:** Añade botones para filtrar los personajes por `status` (Alive / Dead / Unknown) sin hacer una nueva llamada a la API.
- **Página de detalle:** Crea una nueva ruta `/characters/:id` que muestre el detalle de un personaje al hacer clic en su tarjeta. Necesitarás añadir un método `getCharacter(id)` al servicio.

---

## Recursos

- [Rick & Morty API — Documentación](https://rickandmortyapi.com/documentation)
- [Axios — Documentación](https://axios-http.com/docs/intro)
- [React — useEffect](https://react.dev/reference/react/useEffect)
- [React — useState](https://react.dev/reference/react/useState)
