# Projekt M226B & M120

## Framework

Wir haben uns bei der Umsetzung dieses Projektes dazu entschieden, etwas neues aus zu probieren. Deswegen haben wir uns für [fresh](https://fresh.deno.dev) ein neues Webframework entschieden. Dieses ist ein Typescript/Javascript Framework, welches mit preact .tsx Files auf dem Server zu HTML rendert, und einzelne Teile, welche auf dem Client veränderbar sein müssen "hydriert" und dem Client zum Rendern überlast (Mehr dazu [hier](https://fresh.deno.dev/docs/getting-started/adding-interactivity)). 

## MV*

Für die Umsetzung zwei haben wir uns erneut über MV* Patterns informiert, wie wir das im ÜK bereits einmal gemacht hatten. Als Tutorial diente uns das [MVVM Tutorial von tutorialspoint](https://www.tutorialspoint.com/mvvm/mvvm_introduction.htm) und das [Tutorial zu MVC vom ZK](https://m307.ict-bz.ch/tag-1/05-mvc/res). Das Tutorial von tutorialspoint fanden wir sehr lehrreich und können es nur weiter empfehlen. Wir entschieden uns gegen ein Beispielprojekt und setzten uns lieber sofort an unsere Applikation.

Nachdem wir uns diese Tutorials einverleibt hatten, mussten wir schauen, welches dieser Patterns am besten zu [fresh](https://fresh.deno.dev) passte. 
Wir kamen zum Schluss, dass das MVVM Pattern wohl das passendste ist. 
Jetzt ist natürlich die Frage, wo man dies wiederfindet....

## MVVM in unserem Projekt

### Model

Das Model ist nur dafür zuständig, das die Daten zu speichern und wider zur Verfügung zu stellen. Alles, was mit dem Model zu tun hat, kann man im Ordner data finden.

### ViewModel 

Das ViewModel ist die Verbindung zwischen Model und View, es enthält auch sämtliche Businesslogik. In unserem Projekt kann man dies in jedem File im Ordern routes oberhalb der ``export default function`` finden, speziell markant kann das ViewModel an den [handlers](https://fresh.deno.dev/docs/getting-started/custom-handlers) welche für die Erstellung neuer Timer zuständig sind erkannt werden 

### View

Die View ist nur dafür zuständig, Daten anzuzeigen. Sie befindet sich in jedem .tsx fille, innerhalb der ``export default function``. Das rendering wir von übernommen [preact](https://preactjs.com/).

## Ausführen

Einfach die exe starten :)
https://github.com/RoeHH/M346B/releases/download/v1/M346B.exe