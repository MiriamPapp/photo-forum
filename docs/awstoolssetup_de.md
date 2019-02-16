---
title: AWS-Programme installieren
---

This page is also available [in English](../awstoolssetup).

# Voraussetzungen

Um die AWS-Programme auf Ihrem Rechner zu installieren, führen Sie bitte zuerst die
Arbeitsschritte in
_"[Einrichten der Installations-Umgebung](../envsetup_de)"_ und in
_"[Python auf Ihrem Rechner installieren](../pythonsetup_de)"_ aus.    
Einen Überblick über die Installations-Phasen erhalten Sie auf der
_"[Startseite](../index_de)"_.

Amazon beschreibt die
[Installation der AWS-Programme](https://docs.aws.amazon.com/de_de/cli/latest/userguide/cli-chap-install.html)
auf seiner Webseite.

# Installation auf MS Windows

2. Starten Sie das Programm _Eingabeaufforderung_ (siehe [Einrichten der Installations-Umgebung](../envsetup_de)).
   Nun geben Sie folgendes Kommando ein (das ist nur eine Zeile!) und starten Sie es mit
   der Enter-Taste:   
   ```Shell
   pip install awscli --upgrade
   ```
   Damit wird das `aws` Kommando innerhalb Ihrer neuen Python-Umgebung installiert.
2. Geben Sie nun das folgende Kommando ein und starten Sie es mit der Enter-Taste:   
 
   ```Shell
   aws --version
   ```
   Dabei darf keine Fehlermeldung auftauchen und es muß die Versionsnummer des
   aws-Programms ausgegeben werden.   


# Installation auf Mac-OS

1. Öffnen Sie ein Terminal-Fenster (siehe [Einrichten der Installations-Umgebung](../envsetup_de)).
   Benutzen Sie das folgende Kommando:  
   ```Shell
   pip3 install awscli --upgrade
   ```
   Dadurch wird das aws-Kommando innerhalb Ihrer neuen Python-Umgebung installiert.
2. Das folgende Kommando:   
   ```Shell
   aws --version
   ```
   wird zur Prüfung der Installation benutzt. Es darf keinen Fehler erzeugen und muß
   die Versionsnummer Ihres aws-Kommandos ausgeben.
   
# Ergebnis

Das Ergebnis der Arbeitsschritte ist eine aws-Programm-Installation, die für folgende
Installationsschritte benutzt werden kann.

Machen Sie nun mit der Seite _"[Voraussetzungen](../prerequisites_de)"_ weiter und
folgen Sie den Anweisungen zur Einrichtung Ihrer AWS-Konten.
