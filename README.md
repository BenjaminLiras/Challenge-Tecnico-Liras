# Challenge-Tecnico-Liras

## Complejidad

Analizando la dificultad en ambas resoluciones se puede decir mandarle un prompt a la ia
pasandole la consigna lo hace y punto. Considero que cosas como estas es mucho mas sencillo
que lo hagamos ocn la ia ya que mas alla de lo que pedia la consigna, no era algo muy especifico
que la ia no pueda interpretar como nosotros esperabamos.
En cuanto a la parte sin ia tengo que admitir que al no saber mucho de React aun opte por 
realizar las soluciones con la ia para poder basarme un poco para hacer mi solucion personal,
pero al no tener mucha practica con react obviamente fue mucho mas dificil.

## Comparacion IA´s

Para las soluciones utilize GPT y Sonnet, siento que una diferencia entre ambos es en la estetica, 
en el caso de Sonnet siento que a pesar de no haber sido especifico con la estetica hizo una app
mucho mas elaborada que gpt en ese sentido. Tambien un pequeño inconveniente que tuve con GPT fue que
con un primer prompt a diferencia de Sonnet no supo resolver de manera totalmente funcional la solucion
ya que presentaba algunos problemas con el tema del tiempo limite de 5 segundos.

## Prompts

- GPT:
    1er prompt:
    Contexto
    El presente documento refiere a un desafío técnico real de una empresa, para el puesto de Desarrollador
    FrontEnd React Junior.
    Resumen
    Desarrollar en React un juego muy simple en el que los usuarios puedan competir contra sí mismos
    intentando clickear la mayor cantidad de veces posible un botón durante 5 segundos.
    Descripción del ejercicio
    Crear una App web en React llamada “JuegoContador” que muestre en todo momento:
    • Dos botones: uno para iniciar el juego y otro para clickear durante el mismo
    • Un indicador de puntaje máximo iniciado en 0
    Al presionar el botón de inicio, dicho botón debe deshabilitarse y el componente debe mostrar una
    cuenta regresiva visual con los mensajes "Preparados","Listos" y "Ya" en intervalos de 1 segundo.
    Al mostrarse el "Ya", el botón para clickear debe habilitarse durante 5 segundos, permitiendo al usuario
    clickear tantas veces como desee. El usuario debe poder ver durante el juego el tiempo restante
    disponible para clickear el botón y el contador actual.
    Concluido el tiempo, el botón para clickear debe deshabilitarse, el botón para iniciar debe habilitarse
    nuevamente
    y, en caso de que se haya superado el puntaje máximo, el valor mostrado debe cambiar por el actual.
    Requisitos
    1. Crea una App web en React llamada "JuegoContador".
    2. Incluir los estados internos necesarios para cumplir con la funcionalidad detallada.
    3. Definir una distribución de elementos en la pantalla simple y funcional.
    4. Resolver la necesidad utilizando componentes funcionales.
    5. Mostrar la información solicitada con los elementos HTML que considere más apropiados según
    el caso.
    6. Puedes utilizar una librería de componentes (como MUI) si lo consideras útil y simplifica la tarea.
    7. Puedes agregar estilos o elementos visuales adicionales para hacer el juego de contador más
    atractivo.
    8. Entregar el código en un repositorio de GitHub (o la plataforma de preferencia) público. Se
    deberá incluir un README con instrucciones precisas y claras sobre cómo correr la solución en
    un entorno local.
    9. Se evaluará la prolijidad del código, su mantenibilidad y el uso de buenas prácticas de
    programación.
    10. El enunciado es suficientemente explicativo para avanzar, y no se responderán preguntas. En
    caso de algún supuesto o consideración que consideres relevante para la solución, por favor
    incluirlo en una sección aparte dentro del mismo README.

    En ambos casos el primer prompt fue el mismo, la consigna que nos dieron ya que queria comparar entre ambos
    como cada ia interpretaba y que resultado me daba

    2do prompt:
    El temporizador de 5 minutos no anda como deberia, si bien cuando no hago click funciona, ciuando el usuario
    empieza a clickear este se para por cada click.

    Como dice el prompt y mencione antes, en una primera instancia el temporizador no andaba como deberia,
    por lo que le pedi rapidamente que lo corriga.

- Sonnet:
    1er prompt:
    Contexto
    El presente documento refiere a un desafío técnico real de una empresa, para el puesto de Desarrollador
    FrontEnd React Junior.
    Resumen
    Desarrollar en React un juego muy simple en el que los usuarios puedan competir contra sí mismos
    intentando clickear la mayor cantidad de veces posible un botón durante 5 segundos.
    Descripción del ejercicio
    Crear una App web en React llamada “JuegoContador” que muestre en todo momento:
    • Dos botones: uno para iniciar el juego y otro para clickear durante el mismo
    • Un indicador de puntaje máximo iniciado en 0
    Al presionar el botón de inicio, dicho botón debe deshabilitarse y el componente debe mostrar una
    cuenta regresiva visual con los mensajes "Preparados","Listos" y "Ya" en intervalos de 1 segundo.
    Al mostrarse el "Ya", el botón para clickear debe habilitarse durante 5 segundos, permitiendo al usuario
    clickear tantas veces como desee. El usuario debe poder ver durante el juego el tiempo restante
    disponible para clickear el botón y el contador actual.
    Concluido el tiempo, el botón para clickear debe deshabilitarse, el botón para iniciar debe habilitarse
    nuevamente
    y, en caso de que se haya superado el puntaje máximo, el valor mostrado debe cambiar por el actual.
    Requisitos
    1. Crea una App web en React llamada "JuegoContador".
    2. Incluir los estados internos necesarios para cumplir con la funcionalidad detallada.
    3. Definir una distribución de elementos en la pantalla simple y funcional.
    4. Resolver la necesidad utilizando componentes funcionales.
    5. Mostrar la información solicitada con los elementos HTML que considere más apropiados según
    el caso.
    6. Puedes utilizar una librería de componentes (como MUI) si lo consideras útil y simplifica la tarea.
    7. Puedes agregar estilos o elementos visuales adicionales para hacer el juego de contador más
    atractivo.
    8. Entregar el código en un repositorio de GitHub (o la plataforma de preferencia) público. Se
    deberá incluir un README con instrucciones precisas y claras sobre cómo correr la solución en
    un entorno local.
    9. Se evaluará la prolijidad del código, su mantenibilidad y el uso de buenas prácticas de
    programación.
    10. El enunciado es suficientemente explicativo para avanzar, y no se responderán preguntas. En
    caso de algún supuesto o consideración que consideres relevante para la solución, por favor
    incluirlo en una sección aparte dentro del mismo README.

    Como mencione anteriormente en ambas ia´s utilize como primer prompt la consigna que nos dieron.

## Conclusion

En conclusion ambas ia´s fueron capaz de realizar el juego en react solo mandando la consigna, exceptuando
el error que tuvo gpt. Algo a destacar que veo fue en la manera en que ambas interpretaron la consigna, es decir, 
si bien ambas cumpleron bien con la consigna en mi opinion GPT dio una solucion funcional pero mucho mas simple que sonnet
como si solo hubiese hecho lo que se le pidio en la consigna no agrego nada ni complico mucho la estetica, siento que GPT 
interpreto mas que la consigna era dedicada a un alumno empezando con React entonces no se exigio tanto con la solucion, ya
que en el caso de Sonnet dio una solucion mucho mas preparada para un entorno mas profesional.

