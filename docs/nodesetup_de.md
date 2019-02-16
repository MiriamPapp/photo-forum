---
title: node.js auf Ihrem Rechner installieren
---

This page is also available [in English](../nodesetup).

# Installation auf MS Windows

1. Öffnen Sie in Ihrem Internet-Browser die [node.js Download-Seite](https://nodejs.org/de/).
   Hier sehen Sie zwei grüne Schaltflächen - eine für die LTS-Version (Support über
   eine lange Zeit) und die aktuelle Version.   
   Bitte benutzen Sie die LTS-Version. Klicken Sie einfach auf die grüne Schaltfläche
   und speichern Sie das Installationsprogramm in Ihrem Downloads-Ordner.
2. Öffnen Sie mit dem Windows Explorer ihren Downloads-Ordner und öffnen Sie das
   heruntergeladene Installationsprogramm mit einem Doppelklick. Der Name des
   Installationsprogramms sieht so ähnlich aus wie `node-v10.15.0-x64.msi`.
3. Während der Installation müssen Sie die Lizenzbedingungen akzeptieren.
4. Behalten Sie beim Installieren alle vorgegebenen Einstellungen bei - ändern Sie nichts!
5. Starten Sie das Programm _Eingabeaufforderung_ (siehe [Einrichten der Installations-Umgebung](../envsetup_de)).
   Nun geben Sie folgendes Kommando ein und starten Sie es mit
   der Enter-Taste:   
   ```Shell
   node --version
   ```
   Dabei darf keine Fehlermeldung auftauchen und es muß die Versionsnummer des
   node-Programms ausgegeben werden.   
   Geben Sie jetzt das folgende Kommando ein und starten Sie es mit der Enter-Taste:   
   ```Shell
   npm --version
   ```
   Auch dieses Kommando muß ohne Fehler funktionieren und die Versionsnummer des
   Node Packet Managers ausgeben.
6. Installieren Sie nun in Ihrer globalen Umgebung den Typescript-Compiler. Dazu benutzen Sie folgendes Kommando:   
   ```Shell
   npm install -g typescript
   ```
   Wenn alles geklappt hat, gibt das folgende Kommando die Version des Typescript-Compilers aus - diese muß höher als 3.2 sein:  
   ```Shell
   tsc -v
   ```
7. Installieren Sie ebenso die Angular-CLI;
   ```Shell
   npm install -g @angular/cli
   ```
   Wenn alles geklappt hat, gibt das folgende Kommando die Version der Angular-CLI aus:  
   ```Shell
   ng version
   ```


# Installation auf Mac-OS

Auf dem Mac werden wir Homebrew für die node-Installation benutzen. Sie haben Homebrew schon
bei der [Python-Installation](../pythonsetup_de) verwendet.

1. Öffnen Sie ein Terminal-Fenster (siehe [Einrichten der Installations-Umgebung](../envsetup_de)).
   Benutzen Sie das folgende Kommando:  
   ```Shell
   brew install nodejs
   ```
   Dadurch wird node unterhalb des Verzeichnisses /usr/local installiert.
2. Das folgende Kommando:   
   ```Shell
   node --version
   ```
   wird zur Prüfung der Installation benutzt. Es darf keinen Fehler erzeugen und muß
   die Versionsnummer Ihrer node-Installation ausgeben.   
3. Auch das folgende Kommando muß ohne Fehler laufen und die Versionsnummer des
   Node Packet Managers ausgeben:   
   ```Shell
   npm --version
   ```
4. Installieren Sie nun in Ihrer globalen Umgebung den Typescript-Compiler. Dazu benutzen Sie folgendes Kommando:   
   ```Shell
   npm install -g typescript
   ```
   Wenn alles geklappt hat, gibt das folgende Kommando die Version des Typescript-Compilers aus - diese muß höher als 3.2 sein:  
   ```Shell
   tsc -v
   ```
5. Installieren Sie ebenso die Angular-CLI;
   ```Shell
   npm install -g @angular/cli
   ```
   Wenn alles geklappt hat, gibt das folgende Kommando die Version der Angular-CLI aus:  
   ```Shell
   ng version
   ```

# Ergebnis

Das Ergebnis der Arbeitsschritte ist eine node-Installation, die durch Sie für notwendige
Administrationsarbeiten benutzt werden kann. Ebenso stehen Ihnen die Angular-Umgebung und
der Typescript-Compiler zur Verfügung.

Machen Sie nun mit der Seite _"[Voraussetzungen](../prerequisites_de)"_ weiter und folgen
Sie den Anweisungen zur git-Installation.