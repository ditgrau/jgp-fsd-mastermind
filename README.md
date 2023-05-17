<h1 align="center"> ~master ("mind");</h1>


__<p align="center">Proyecto 3 - Mastermind - Semana 4</p>__


<p align="center">Implementación en JavaScript del juego Mastermind, como parte del Bootcamp de Full Stack Developer de Geekshubs Academy.</p>
<p 

<table align="center">
<tr>
<td><b>🚧 Work in progress🚧</b>
</td>
</tr>
</table> 




### Bienvenido

En la vista de inicio, encontramos dos botones que nos dirigen: el primero hacia el flujo del juego y el segundo a las instrucciones del juego.

### Flujo del juego

En primer lugar, nos encontramos con un pequeño formulario donde podemos introducir el nombre de usuario. Una vez ingresado este dato, en el mismo documento HTML tendremos la opción de seleccionar el nivel. El siguiente paso será personalizar los colores con los que deseamos jugar, y finalmente llegaremos al tablero de juego.

#### Tablero de juego

Al iniciar una nueva partida, se mostrará el tablero vacío donde el jugador podrá introducir su combinación. A un lado del tablero se mostrarán las bolas con los colores disponibles para realizar la jugada (elegidos previamente).

El número de colores para jugar y el máximo de intentos variarán según el nivel seleccionado. Después de cada jugada, habrá un botón que permitirá verificar cuántos colores se han acertado.

La solución del juego se mantendrá oculta y se mostrará al finalizar la partida, ya sea cuando el usuario haya ganado o cuando se hayan agotado los intentos y haya perdido.


#### Niveles: 
- "Principiante", por defecto: 4 colores posibles y 10 intentos.
- "Intermedio": 8 intentos y 5 colores para elegir. 
- "Avanzado": habrá 6 intentos y 6 colores para combinar.

