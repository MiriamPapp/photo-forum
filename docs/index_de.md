---
lang: de
title: Wie Sie ein Photo-Forum erstellen
subtitle: '2018-12-24'
---
This page is also available [in English](../index).

**Achtung**: Dieses Projekt ist noch in einem sehr frühen Entwicklungsstadium. Es gibt noch
 keine benutzbaren Funktionen.

# Überblick

[Photo-Forum](https://github.com/fte378/photo-forum)
ist eine Sammlung von Anleitungen, Konfigurationsdateien und Programmen,
die es jedem ermöglichen, sehr preiswert ein Forum für die Online-Kommunikation einzurichten,
wobei man sich komplett von den Anforderungen und Einschränkungen sonstiger Forum-Dienstleister
befreit.

Photo-Forum ist dafür gemacht, auf Diensten der Amazon Web Services (AWS) eingesetzt zu werden.
Dabei werden nur preiswerte Dienste benutzt und alle benutzten Dienste arbeiten serverlos - das
heißt, es ist kein spezieller Server dafür bereitzustellen. Auf diese Weise bezahlt der
Forumbetreiber nur anhand des aktuellen Ressourcenverbrauchs, wobei viele der benutzten
Dienste Freikontingente haben, die die Benutzung noch preiswerter machen.

# Voraussetzungen

Wenn Sie ein Photo-Forum betreiben wollen, müssen Sie einige Voraussetzungen erfüllen. Für alle
notwendigen Arbeitsschritte gibt es hier eine Beschreibung.  
Die Benutzer eines Photo-Forums müssen nichts installieren - sie benutzen für den Zugriff
einfach ihren Internet-Browser auf ihrem Endgerät (PC, Tablet, SmartPhone).

1. **Rechner**  
  Das ist ernst gemeint - Sie brauchen einen Rechner. Ein Tablet oder Smartphone reicht
  nicht aus. 
  Im Prinzip ist jeder Rechner benutzbar - egal ob er unter MS-Windows, Mac-OS, Linux oder
  irgendeinem Unix-Betriebssystem läuft.
2. **Installations-Umgebung**  
  Um alle Installationsschritte einfacher und nachvollziehbarer zu machen, werde ich
  konkrete Anweisungen für jeden Arbeitsschritt geben.    
  Die Software wird nur für ihren aktuellen Systembenutzer installiert und alle Komponenten
  werden unterhalb eines einzigen Ordners in ihrem _Heimat-Ordner_ gespeichert.
  Bitte folgen Sie als erstes den Anweisungen in _"[Einrichten der Installations-Umgebung](../envsetup_de)"_.
3. **Python**  
  Etliche der hier benutzten Programme sind in der
  [Programmiersprache Python](https://www.python.org/) verfaßt. Deswegen
  benötigen Sie einen installierten Python-Interpreter, der für nahazu jedes Betriebssystem zur
  Verfügung steht. Bitte benutzen Sie möglichst die aktuellste Python-Version.  
  Auch wenn Ihr Betriebssystem schon Python enthält (zum Beispiel Mac-OS), empfiehlt es sich
  eine private Kopie von Python zu installieren, um nicht das Betriebssystem durch den Austausch
  von irgendwelchen Python-Komponenten zu stören.  
  Um Python auf Ihrem Rechner zu installieren folgen Sie den Anweisungen in
  _"[Python auf Ihrem Rechner installieren](../pythonsetup_de)"_.
4. **git**  
  [git](https://git-scm.com)
  ist ein modernes dezentralisiertes Programmcode-Verwaltungssystem. Sie werden es benutzen,
  um alle Dateien für die Installation des Forums bereitzustellen und um diese aktuell zu halten.  
  Um git auf Ihrem Rechner zu installieren folgen Sie den Anweisungen in
  _"[Git auf Ihrem Rechner installieren](../gitsetup_de)"_.
5. **AWS-Konto**  
  Da Sie das Forum bei AWS laufen lassen werden, benötigen Sie dort ein Konto.  
  AWS verlangt während der Konto-Einrichtung die Angabe eines Zahlungsmittels. Lassen Sie sich
  davon nicht abschrecken - Sie können bei AWS Limits setzen und Alarme für die Kosten
  einrichten und das Photo-Forum wird sehr wenig Kosten produzieren.  
  Normalerweise werden Sie im ersten Jahr bei AWS gar nichts bezahlen und auch danach
  gibt es für die genutzten Dienste Freikontingente, so dass die Kosten sehr niedrig bleiben.  
  Um ein AWS-Konto einzurichten folgen Sie den Anweisungen in
  _"[Einrichtung eines AWS-Kontos"](../awssetup_de)_.
