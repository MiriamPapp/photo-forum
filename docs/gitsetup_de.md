---
title: Git auf Ihrem Rechner installieren
---
This page is also available [in English](../gitsetup).

# Voraussetzungen

Um git auf Ihrem Rechner zu installieren, führen Sie bitte zuerst die
Arbeitsschritte in
_"[Einrichten der Installations-Umgebung](../envsetup_de)"_ aus.   
Einen Überblick über die Installations-Phasen erhalten Sie auf der
_"[Startseite](../index_de)"_.


# Installation auf MS Windows

1. Öffnen Sie die [git download Seite](https://git-scm.com/downloads). Dort sehen Sie auf der
   rechten Seite einen Monitor, in dem sich eine Schaltfläche zum Download von git befindet.
   Klicken Sie auf diese Schaltfläche. Ihr Download startet automatisch. Bitte speichern Sie das
   git-Installationsprogramm in Ihrem `Downloads`-Verzeichnis.
2. Starten Sie das Programm _Eingabeaufforderung_ (siehe [Einrichten der Installations-Umgebung](../envsetup_de)).
   Nun geben Sie folgendes Kommando ein (das ist nur eine Zeile!) und starten Sie es mit
   der Enter-Taste:   
   ```Shell
   %USERPROFILE%\Downloads\Git-2.20.1-64-bit.exe /SILENT /DIR=%PHOTOFORUM%\git
   ```
   Ersetzen Sie den Namen des Installations-Programms mit dem Namen des heruntergeladenen
   Installationsprogramms.
3. Schließen Sie das Fenster der Eingabeaufforderung und öffnen Sie ein neues.
4. Geben Sie das folgende Kommando ein und bestätigen Sie es mit der Enter-Taste:   
   ```Shell
   git --version
   ```
   Dabei darf keine Fehlermeldung auftauchen und es muss die Versionsnummer des
   git-Programms ausgegeben werden. Diese sollte der Nummer aus dem Namen des
   Installationsprogramms entsprechen.

# Installation auf Mac-OS

Auf dem Mac werden wir Homebrew für die git-Installation benutzen. Sie haben Homebrew schon
bei der [Python-Installation](../pythonsetup_de) verwendet.

1. Öffnen Sie ein Terminal-Fenster (siehe [Einrichten der Installations-Umgebung](../envsetup_de)).
   Benutzen Sie das folgende Kommando:  
   ```Shell
   brew install git
   ```
   Dadurch wird git unterhalb des Verzeichnisses /usr/local installiert.
3. Das folgende Kommando:   
   ```Shell
   git --version
   ```
   wird zur Prüfung der Installation benutzt. Es darf keinen Fehler erzeugen und muß
   die Versionsnummer Ihrer git-Installation ausgeben.

# Ergebnis

Das Ergebnis der Arbeitsschritte ist eine git-Installation, die durch die folgenden
Arbeitsschritte benutzt werden kann.

Machen Sie nun mit der Seite _"[Voraussetzungen](../prerequisites_de)"_ weiter und
folgen Sie den Anweisungen zur Installation der AWS-Programme.