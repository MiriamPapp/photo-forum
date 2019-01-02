---
title: Einrichten der Installations-Umgebung
---

This page is also available [in English](../envsetup).

Um die Installation aller benötigten Komponenten möglichst einfach und nachvollziehbar
zu gestalten, gebe ich genaue Anweisungen wie Sie vorgehen sollen.   
Der erste Schritt ist die Einrichtung der Umgebung für die Installation der weiteren
Komponenten. Alle folgenden Schritte bauen auf diesem ersten Schritt auf.  
Die Installation wird in Ihrem _Heimatverzeichnis_ vorgenommen, wobei alle
Installationsschritte eine gesetzte Umgebungsvariable mit dem Namen `PHOTOFORUM`
voraussetzen. Der Wert dieser Variablen ist der Verzeichnisname unter dem alle 
Programmkomponenten installiert werden.

# Einrichtung in Microsoft Windows

1. Öffnen Sie das Programm "Eingabeaufforderung".  Auf Windows 7 klicken Sie dazu auf den
   *Start*-Knopf und geben `cmd` in das Suchfeld ein, danach drücken Sie die Enter-Taste.  
   Auf Windows 8 und Windows 10 sollte ein Suchfeld für Cortana zu sehen sein, wo Sie
   ebenfalls einfach `cmd` eingeben und danach die Enter-Taste drücken.   
   Das Windows-System sollte daraufhin einige (oder eins) Suchergebnisse anzeigen, wobei
   eines davon entweder den Begriff `cmd.exe` oder aber auch das Wort `Eingabeaufforderung`
   enthält.  Klicken Sie auf den entsprechenden Eintrag in den Suchergebnissen und drücken
   Sie erneut die Enter-Taste. Danach sollte sich ein schwarzes Fenster öffnen, das etwas
   ähnliches wie `C:\Users\Tim` anzeigt, wobei Tim Ihr Benutzername auf Ihrem Windows-System
   wäre:   
   ![Windows shell](../img/Cmd_in_Windows_8.png)
2. Sollte Ihnen das Fenster zu klein sein benutzen Sie das `mode` Kommando um eine neue
   Fenstergröße einzustellen:   
   `mode 140,5000`   
   Dieses Kommando würde die Breite des Fensters auf 140 Zeichen setzen und den Puffer für
   das Zurückblättern in der Kommando-Historie auf 5000 Zeilen. Danach sollten Sie die Höhe des
   Fensters mit der Maus einstellen - meistens überschreitet das Fenster nach diesem Kommando
   den Bildschirmrand.
3. Geben Sie nun das folgende Kommando ein und drücken Sie danach die Enter-Taste:  
   `SystemPropertiesAdvanced`  
   Dadurch wird das folgende Fenster geöffnet:   
   ![Erweiterte Systemeinstellungen](../img/SystemPropertiesAdvanced_de.jpg)
4. Klicken Sie auf `Umgebungsvariablen...` (rechts unten).  
   Dadurch wird das folgende nächste Fenster angezeigt:   
   ![Environment Variablen](../img/winpath_de.jpg)
5. Im oberen Feld können Sie Umgebungsvariablen anlegen, die nur für den gerade am
   Windows-System angemeldeten Benutzer gültig sind. Andere Benutzer werden dadurch nicht
   beeinflußt. Die Variablen, die hier eingestellt werden, sind auch nach einem Neustart
   Ihres Windows-Systems vorhanden.   
   Klicken Sie auf "Neu" in der oberen Reihe der Knöpfe. Das öffnet den nächsten Dialog,
   in dem Sie den Namen und den Werte für eine neue Umgebungsvariable eingeben können:   
   ![Variable](../img/variable_de.jpg)
6. Geben Sie `PHOTOFORUM` im Feld _Name der Variablen_ ein.  
   Danach geben Sie `%USERPROFILE%\PhotoForum` in das Feld _Wert der Variablen_ ein und
   klicken auf OK.   

7. **Starten Sie Ihren Rechner neu!**   

8. Nachdem Ihr Rechner wieder läuft, starten Sie erneut eine Eingabeaufforderung (siehe
   Schritt 1). Geben Sie dann das folgende Kommando ein und drücken danach die Enter-Taste:   
   ```Batchfile
   echo %PHOTOFORUM%
   ```
   Dieses Kommando muß einen VErzeichnis-Pfad ausgeben, z.B. `C:\Users\Tim\PhotoForum`.
   Wenn entweder nichts oder aber `%PHOTOFORUM%` ausgegeben wird, dann haben Sie irgendwo einen
   Fehler gemaht und müssen von vorn beginnen.   

9. Geben Sie das folgende Kommando ein und drücken danach die Enter-Taste:   
   ```Batchfile
   mkdir %PHOTOFORUM%
   ```
10. Wenn Sie danach das folgende Kommando ausführen, solllte keinerlei Fehler ausgegeben werden:  
   ```Batchfile
   cd %PHOTOFORUM%
   ```

# Einrichtung in Mac-OS (oder Linux/Unix)

1. Öffnen Sie ein Terminal-Fenster. Das geht entweder über den Programme-Ordner oder über die
   eingebaute Suche (SpotLight). Der Start eines Programms über die Suchfunktion ist in der
   Regel am schnellsten, deswegen beschreibe ich diese Möglichkeit.   
   Halten Sie die Command-Taste (⌘) gedrückt und drücken Sie zusätzlich die Leertaste. Damit
   wird das Eingabefeld der Suche geöffnet.   
   Nun geben Sie die ersten Buchstaben des Programm-Namens (in diesem Fall `terminal`) ein -
   `ter` sollte ausreichen, um das Terminal-Programm zu finden. Wenn das gesuchte Programm
   ausgewählt ist, drücken Sie einfach die Enter-Taste.   
   Auf Linux und anderen Unix- oder Unix-ähnlichen Betriebssystemen hängt es stark von Ihrer
   Umgebung ab, wie Sie ein Terminal-Programm starten können. Bitte lassen Sie es sich im Notfall
   von jemandem zeigen.
   
2. Auf Mac-OS  sollte der gestartete KOmmando-Interpreter die `Bourne again shell`(bash) sein.
   Auf Linux ist das meistens auch der Fall. Sollten Sie einen anderen KOmmandointerpreter benutzen,
   müssen Sie alle Installationsschritte dementsprechend anpassen.   
   Um zu prüfen, ob Sie die bash ausführen, geben Sie bitte das folgende Kommando ein:  
   ```Shell
   env | grep ^SHELL=
   ```
   Das sollte etwas ähnliches wie `SHELL=/bin/bash`  oder `SHELL=/usr/bin/bash`  oder auch
   `SHELL=/usr/local/bin/bash` ausgeben. Wichtig ist, daß das letzte Wort der Ausgabe
   `bash` lautet.  
   
3. Geben Sie jetzt folgende Kommandos nacheinander ein:  
    ```Shell
    cd
    echo "export PHOTOFORUM=${HOME}/PhotoForum" >> .bash_profile
    ```   
    
4. Schließen Sie ihr Terminal-Fenster und öffnen Sie ein neues (siehe Schritt 1). Geben Sie
   das folgende Kommando ein:   
   ```Shell
   env | grep PHOTOFORUM
   ```
   Das sollte eine Ausgabe wie `PHOTOFORUM=/Users/Tim/PhotoForum` erzeugen, wobei Tim durch
   ihren Benutzernamen ersetzt ist. Auf Unix oder Linux erhalten Sie vermutlich eine Ausgabe
   der folgenden Art: `PHOTOFORUM=/home/Tim/PhotoForum`.   
   
5. Geben Sie jetzt nacheinander die beiden folgenden Befehle ein:  
   ```Shell
   mkdir ${PHOTOFORUM}
   cd ${PHOTOFORUM}
   ```
   Dabei dürfen keine Fehlermeldungen ausgegeben werden.   
   Das Kommando `pwd` sollte jetzt `/Users/Tim/PhotoForum` oder
   `/home/Tim/PhotoForum` ausgeben.


# Ergebnis

Das Ergebnis dieser Arbeitsschritte ist eine definierte Umgebungsvariable und das
angelegte Verzeichnis, in dem alle folgenden Komponenten installiert werden.

Nun können Sie wieder zur _"[Startseite](../index_de)"_ wechseln und mit der Anleitung
zur Installation von Python weitermachen.
