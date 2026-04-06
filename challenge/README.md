# JuegoContador

Aplicacion web en React donde el usuario intenta hacer la mayor cantidad de clicks posible en 5 segundos.

## Funcionalidad

- Boton para iniciar el juego.
- Boton para hacer clicks durante la partida.
- Puntaje maximo que arranca en 0.
- Cuenta regresiva visual: Preparados, Listos, Ya (1 segundo entre cada mensaje).
- Al aparecer Ya, se habilita el boton de click por 5 segundos.
- Durante el juego se muestra tiempo restante y contador actual.
- Al finalizar, se deshabilita el boton de click y se vuelve a habilitar el de inicio.
- Si el puntaje actual supera el maximo, se actualiza el maximo.

## Tecnologias

- React
- TypeScript
- Vite

## Como correrlo en local

1. Instalar dependencias:

```bash
npm install
```

2. Levantar entorno de desarrollo:

```bash
npm run dev
```

3. Abrir en el navegador la URL que muestra Vite (por ejemplo http://localhost:5173).

## Supuestos y consideraciones

- El puntaje maximo se guarda solo en memoria mientras la app esta abierta.
- Si el usuario intenta iniciar mientras ya hay una cuenta regresiva o una partida activa, no pasa nada.
