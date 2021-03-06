---
lang: de
title: Wie Sie ein Photo-Forum erstellen
subtitle: '2018-12-24'
---
This page is also available [in English](../index).

**Achtung**: Dieses Projekt ist noch in einem sehr frühen Entwicklungsstadium. Es gibt noch
 keine benutzbaren Funktionen.   
 Falls Sie helfen wollen: Im Moment können Sie die Installationsanleitungen hier auf der Webseite
 testen.   
Falls Sie dann Anmerkungen oder Korrekturen haben, können Sie diese an
 die E-Mail-Adresse [photo.forum.project@gmail.com](mailto:photo.forum.project@gmail.com) schicken.

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

**Bitte** befolgen Sie die Installationsanweisungen **exakt**! Lassen Sie keine Punkte aus, machen
Sie nichts anders - falls doch, wird das eventuell eine frustrierende Erfahrung und es erzeugt
unnötigen Support-Aufwand.

# Voraussetzungen

Wenn Sie ein Photo-Forum betreiben wollen, müssen Sie einige Voraussetzungen erfüllen. Für alle
notwendigen Arbeitsschritte gibt es hier eine Beschreibung.  
Die Benutzer eines Photo-Forums müssen nichts installieren - sie benutzen für den Zugriff
einfach ihren Internet-Browser auf ihrem Endgerät (PC, Tablet, SmartPhone).  
Sollten Sie die hier installierten Komponenten wieder loswerden wollen, befolgen Sie
die Anweisungen zur [Deinstallation](../uninstall).

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
  benötigen Sie einen installierten Python-Interpreter, der für nahezu jedes Betriebssystem zur
  Verfügung steht. Bitte benutzen Sie möglichst die aktuellste Python-Version.  
  Auch wenn Ihr Betriebssystem schon Python enthält (zum Beispiel Mac-OS), empfiehlt es sich
  eine private Kopie von Python zu installieren, um nicht das Betriebssystem durch den Austausch
  von irgendwelchen Python-Komponenten zu stören.  
  Um Python auf Ihrem Rechner zu installieren folgen Sie den Anweisungen in
  _"[Python auf Ihrem Rechner installieren](../pythonsetup_de)"_.
4. **node.js und npm**   
  [node.js](https://nodejs.org/de/) ist eine Laufzeitumgebung für JavaScript. Sie werden
  es für die Ausführung von Verwaltungsprogrammen einsetzen. node.js beinhaltet ebenfalls
  den Paketmanager `npm` für die Verwaltung von Javaskript-Programmpaketen.  Um node.js
  auf Ihrem Rechner zu installieren folgen Sie den Anweisungen in
  _"[node.js auf Ihrem Rechner installieren](../nodesetup_de)"_.
4. **git**  
  [git](https://git-scm.com)
  ist ein modernes dezentralisiertes Programmcode-Verwaltungssystem. Sie werden es brauchen,
  um alle Dateien für die Installation des Forums bereitzustellen und um diese aktuell zu halten.  
  Um git auf Ihrem Rechner zu installieren folgen Sie den Anweisungen in
  _"[Git auf Ihrem Rechner installieren](../gitsetup_de)"_.
5. **AWS tools**  
  AWS wird über das AWS Kommandozeilen-Werkzeug bedient. Um die benötigten Programme zu installieren
   folgen Sie den Anweisungen in
  _"[AWS-Programme installieren](../awstoolssetup_de)"_.
6. **AWS-Konto**  
  Um ein AWS-Konto einzurichten folgen Sie den Anweisungen in
  _"[Einrichtung eines AWS-Kontos"](../awssetup_de)_.
