# JuegoContador

Aplicacion web desarrollada con React + TypeScript + Vite para el desafio tecnico FrontEnd React Junior.

## Resumen funcional

- Muestra 2 botones: iniciar juego y click de puntaje.
- Muestra puntaje actual, puntaje maximo y tiempo restante.
- Al iniciar:
  - Se deshabilita el boton de inicio.
  - Se ejecuta cuenta regresiva visual de 1 segundo por mensaje: Preparados, Listos, Ya.
- Al mostrarse Ya:
  - Se habilita el boton de click durante 5 segundos.
  - Se puede clickear tantas veces como se quiera.
  - Se ve en pantalla el tiempo restante y el contador actual.
- Al finalizar el tiempo:
  - Se deshabilita el boton de click.
  - Se habilita nuevamente el boton de inicio.
  - Si el puntaje actual supera el maximo, se actualiza el record.

## Tecnologias

- React 19
- TypeScript
- Vite

## Como correr el proyecto localmente

1. Clonar el repositorio.
2. Entrar a la carpeta del proyecto:

```bash
cd mi-app-react
```

3. Instalar dependencias:

```bash
npm install
```

4. Ejecutar en modo desarrollo:

```bash
npm run dev
```

5. Abrir en el navegador la URL que muestra Vite (normalmente `http://localhost:5173`).

## Scripts disponibles

- `npm run dev`: inicia servidor de desarrollo.
- `npm run build`: compila TypeScript y genera build de produccion.
- `npm run preview`: levanta preview de la build.
- `npm run lint`: ejecuta ESLint.

## Estructura principal

- `src/App.tsx`: logica del juego, estados y render principal.
- `src/App.css`: estilos del componente principal.
- `src/index.css`: estilos globales y variables visuales.

## Supuestos y consideraciones

- La cuenta regresiva muestra tres estados visuales (Preparados, Listos, Ya) con intervalo de 1 segundo.
- El boton de click queda habilitado inmediatamente despues de mostrarse Ya.
- El tiempo de juego es exactamente de 5 segundos.
- El record se conserva durante la sesion activa de la pagina (no se persiste en almacenamiento local).
