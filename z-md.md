
    Reglas

    - Todos son diestros
    - No se equivocan
    - Siempre están de frente
    - Cada golpe tendrá una pausa para que el otro elija, si es que no tiene movimientos previamente elegidos.
    - Máximo 6 movimientos por turno.


A partir de aquí, los algoritmos se manejarán en 4 diferencias de 2 jugadores.
El que juega, será personaje, Y, cualquier otro personaje que lo ataque, será reconocido como enemigo. (talvez deba darle numeros a cada jugador para diferenciar eso)
pero el juego inicial reconocerá al personaje como personaje y sus números  serán reconocidos como 2 su-resultados.
atkPerson
defPerson

Y por lo pronto, los números del enemigo serán reconocidos como....
atkEnemy
defEnemy

//*-----------------------------------------------

Crear un número que se llame look, y que sirva para cualquier porcentaje necesario, (así no se necesita crear ese número en cada movimiento, ya nada mas para mutiplicarlo.)

//*-----------------------------------------------

Algoritmos (para un solo movimiento)

Golpes;

- La diferencia entre high y low, es que si se defiende low, y le tiran high, se anula
- Los golpes bajos tienen un valor menor que los altos, así que todo golpe bajo, tiene un - algo   (Pero asegurarse de que se subieron los valores)
- Separar los golpes en 3 niveles de fuerza
- Separar las defensas en 3 niveles de defensa
- los golpes bajos valen el 50% menos que los golpes altos
- los bajos pegan en un 90% si están a 1/2 paso o un paso
- Solo algunos pegan a dos pasos
- Algunos oegan mas fuertes a medio paso y otros a un paso
- Algunos no pegan ni a 1/2 paso y ni a 1 paso
- Algunos tienen un + en 1/2 paso
- Algunos tienen un + en 1 paso
- Algunos tienen un + en 2 paso
- Hooks solo funcionan a 1/2 paso
- Si enemy se mueve o se agacha o o se defiende a la derecha, los golpes de izq, se anulan.
- si enemy se mueve o se agacha o o se defiende a la izq, los golpes de der, se anulan.
- para defender golpes bajos, (aunque peguen menos fuerte), todos pegan, para que conecten se necesita equivocar la defensa
- Todos los golpes dependen de las defensas de enemy, 
- a 1/2 paso, la fuerza de los gopes deben entrar en porcentaje de suerte


//* Los resultados se quedarán en la variable atkPerson


Defensa;

- La diferencia entre high y low, es que si enemy tira high mientras personaje en low, se anula,
- Mas si enemy tira high, y person está en high, el golpe pasa al segundo movimiento (pega, pero dependiendo de la defensa o movimiento del enemy).
- Si tiran low, el golpe pega, (el número depende de la defensa (2o movimiento))
- Las defensas low, se defienden +5, mientras que las defensas high, tienen +2 
- Separar los golpes en 3 niveles de fuerza
- Separar las defensas en 3 niveles de defensa
- Las defensas high, vs atk high, dependen de las defensas exactas 
- A dos pasos, la defensa (cuaquiera) baja -3
- Los movimientos tienen que coinsidir, (si enemy tira), y en defensaq te mueves hacia el lado contrario del golpe, el golpe se anula.
- Si no hay defensa, cualquier golpe a la distancia adecuada, pega
- Si se aleja personaje, y enemy no camina hacia él, el golpe se anula por distancia 
- En medios pasos, los esquives tienen un +3
- En 1 paso, casi todos los golpes pegan, depende de la defensa o movimiento, o esquives.
- Algunas defensas no sirven en 1/2 paso
- Algunas defensas no sirven en 1 paso
- 

//* Los resultados se quedarán en la variable defPerson



Algoritmos para 2 Movimientos










//* Y recibirán los resultados de atkEnemy y defEnemy

//* Y con ellos competirán.

- A demas de eso, con if´s, hacer todas las convinaciones de 2, 3 y 4 opciones que se quieran

//* Se deben sacar dos, finales, el núnero de defensa, y el número de ataque.

//^ y esos dos finales competiran contra el rival, defensa contra ataque y ataque contra defensa, eso dará dos numeros, y los simplificamos a uno. 

al final;

let atkPerson = result in atack
let defPerson = result in defence

let atkEnemy = result in atack
let defEnemy = result in defence

let operOne = ((atkPerson)(defEnemy));
let operTwo = ((defPerson)(atkEnemy));

//* Se puede sacar un reslt ahí, aunque de nada sirve, mejor darle al result, la operación 

//* También puedo hacer lo mismo en situaciones con 2, tal vez 3 y 4, hacer algoritmos de defensa y ataque en esas situaciones.

//*-------------------------------------------------

2a parte. Funciones.

Al recibir los resultados, las cosas pasan en el juego...

(Las narraciones estarán en text cuando un golpe es soltado, (Si las condiciones se dan) El golpe contará como conectado)

No puede marcart más de 6 mocimientos consecutivos or turno, 

Poder quitar la opcion si se hace click otra vez.

