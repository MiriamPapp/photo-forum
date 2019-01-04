---
title: Python auf Ihrem Rechner installieren
---

This page is also available [in English](../pythonsetup).

# Voraussetzungen

Um Python auf Ihrem Rechner zu installieren, führen Sie bitte zuerst die
Arbeitsschritte in
_"[Einrichten der Installations-Umgebung](../envsetup_de)"_ aus.   
Einen Überblick über die Installations-Phasen erhalten Sie auf der
_"[Startseite](../index_de)"_.

# Herunterladen des Python-Installationsprogramms

**Mac-OS Benutzer**: Bitte überspringen Sie diesen Schritt. Für die Installation
werden wir Homebrew benutzen (wird weiter unten erläutert).

Der Ausgangspunkt für die Python-Installation ist die
[Download-Seite auf www.python.org](https://www.python.org/downloads/).

Hier können Sie die richtige Version des Installationsprogramms für Ihr Betriebssystem
auswählen. Außer wenn Sie einen **sehr, sehr alten** Rechner haben sind die
richtigen Versionen die jenigen, deren Name _64bit_ enthält.

Für Windows wählen Sie bitte den *Windows x86-64 executable installer*.
Im Namen des Installationsprogramms ist auch "amd64" enthalten. machen Sie sich deswegen
keine Sorgen, das ist das richtige Installationsprogramm, auch wenn Ihr Rechner mit
einem Intel-Prozessor ausgestattet ist.

**Achtung**: Falls Sie immer noch Windows XP benutzen (was Sie nicht mehr tun sollten!)
ist die letzte unterstützte Python-Version die Version 3.4. Versuchen Sie nicht, eine
neuere Version auf Windows XP zu benutzen.

Das Installationsprogramm ist eine normale *.exe*-Datei, die in Ihrem Download-Ordner
ausgeführt werden kann.

# Installation auf MS Windows

Es gibt ein ganzes Kapitel über die
[Python-Installation](https://docs.python.org/3/using/windows.html) im
*Python Setup and Usage* Ratgeber auf docs.python.org (nur auf Englisch).

Dort werden mehrere verschiedene Wege beschrieben, Python zu installieren.
Hierbei müßten Sie sich für eine Methode entscheiden, ohne eventuell alle notwendigen
Informationen dafür zu haben.  
Deswegen gebe ich Ihnen **eine** konkrete Anleitung. Diese installiert Python in dem Ordner,
der durch die PHOTOFORUM-Umgebungsvariable angegeben wird. Die Installation ist nur
für den aktuell angemeldeten Windows-Benutzer benutzbar.

1. Wenn Sie das Installationsprogramm herunterladen, starten Sie es nicht direkt aus Ihrem
   Browser heraus. Speichern Sie es in Ihrem `Downloads` Ordner.
2. Starten Sie das Programm _Eingabeaufforderung_ (siehe [Einrichten der Installations-Umgebung](../envsetup_de)).
   Geben Sie das folgende Kommando ein und starten Sie es mit der ENTER-Taste (das ist nur eine Zeile!):   
   ```Shell
   %USERPROFILE%\Downloads\python-3.7.2-amd64.exe /passive TargetDir=%PHOTOFORUM%\py CompileAll=1 PrependPath=1 Include_test=0
   ```
   Passen Sie den Dateinamen des Installationsprogramms entsprechend an - eventuell haben
   Sie schon eine andere Version heruntergeladen.   
   Das Kommando installiert Python und setzt die Umgebungsvariable PATH für den aktuellen
   Windows-Benutzer.  
3. Schließen Sie Ihr Fenster der Eingabeaufforderung und öffnen Sie ein neues.
4. Geben Sie nun das folgende Kommando ein und starten Sie es mit der Enter-Taste:   
   ```Shell
   python --version
   ```
   Das Kommando darf keine Fehlerausgabe erzeugen und sollte die gleiche Versionsnummer ausgeben,
   die im Namen des Installationsprogramms angegeben ist.
5. Das nächste Kommando muss auch ohne Fehler ausgeführt werden und die Versionsnummer des
   pip-Kommandos ausgeben (dis ist anders als die Python-version):   
   ```Shell
   pip --version
   ```

# Installation auf Mac-OS

Auf dem Mac werden wir Homebrew für die Python-Installation benutzen. Falls Sie Homebrew
nicht kennen, können Sie sich die [Homepage](https://brew.sh/index_de) ansehen.

1. Öffnen Sie ein Terminal-Fenster (siehe [Einrichten der Installations-Umgebung](../envsetup_de)).
   Benutzen Sie das folgende Kommando:  
   ```Shell
   brew --version
   ```
   Falls die Fehlermeldung `brew: command not found` ausgegeben wird haben Sie noch keine
   Homebrew-Installation. In diesem Fall folgen Sie den Anweisungen in Schritt 2.
   Sollten Sie Homebrew schon installiert haben, wird seine Versionsnummer ausgegeben. In diesem Fall
   machen Sie mit Schritt 3 weiter.
2. Kopieren Sie das auf der Homebrew-Homepage angegebene Installations-Kommando oder kopieren Sie
   das Kommando von hier:   
   ```Shell
   /usr/bin/ruby -e "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/master/install)"
   ```
   Das Kommando erläutert, welche Schritte es durchführt und fragt nach Bestätigungen.
   Bestätigen Sie einfach alle Nachfragen.   
   Wenn die Installation beendet ist, führen Sie bitte Schritt 1 noch einmal zur Kontrolle aus.
3. Python selbst wird jetzt mit dem folgenden Kommando installiert:   
   ```Shell
   brew install python
   ```
   Es kann einie Zeit dauern, bis alle benötigten Bestandteile installiert sind.   
   Bitte ignorieren Sie Meldungen über `keg-only` Pakete - das spielt keine Rolle.
4. Geben Sie das folgende Kommando ein und bestätigen Sie mit der Enter-Taste:   
   ```Shell
   python3 --version
   ```
   Das Kommando muß ohne Fehlermeldung ausgeführt werden - es gibt die Versionsnummer
   Ihrer Python-Installation aus.
5. Auch das nächste Kommando muß ohne Fehlermeldung laufen. Es gibt die Versionsnummer
   des pip-Kommandos aus (dies stimmt nicht mit der Python-Version überein).
   ```Shell
   pip3 --version
   ```

Jetzt haben Sie zwei Python-Installationen auf Ihrem Mac: Python 2.7 (von Apple installiert)
und Ihre neue Installation (Python 3), die durch Homebrew installiert wurde.   
Um die neue Installation zu benutzen müssen Sie die Kommandos python3 und pip3 anstelle der
üblichen Kommandos python ud pip.

# Ergebnis

Das Ergebnis der Arbeitsschritte ist eine Python-Installation, die durch die folgenden
Arbeitsschritte benutzt werden kann.

Machen Sie nun mit der _"[Startseite](../index_de)"_ weiter und folgen Sie den Anweisungen
zur Installation von node.js.
