---
title: Einrichtung eines AWS-Kontos
---

This page is also available [in English](../awssetup).

# Einrichten des Stammbenutzer-Kontos

**Zunächst eine Warnung:** Diese Dokumentation richtet sich an Benutzer mit
durchschnittlichen Computerkenntnissen. Deswegen werden komplexere (und sicherere)
AWS-Funktionen wie MFA oder kontenüberschreitender Zugriff nicht verwendet.   
Das heißt auch, daß Sie das hier eingerichtete Konto **NICHT** für andere
Zwecke benutzen sollten. Falls Sie weitere AWS-Dienste einsetzen wollen,
richten Sie bitte mit einer weiteren E-Mail-Adresse ein neues AWS-Konto ein.   
Falls Sie schon ein AWS-Konto besitzen, richten Sie bitte für das Photo-Forum
ein neues Konto ein.

Öffnen Sie zunächst die [AWS Startseite](https://aws.amazon.com/de/free/). Falls Sie nie
ein AWS-Konto angelegt haben, sieht die Seite etwa so aus:

![Amazon Konto einrichten](../img/Amazon-Free-Tier_de.jpg)

Um ein neues AWS-Konto zu erstellen, klicken Sie auf `Kostenloses Konto erstellen`.
Die Einrichtung eines Kontos ist relativ einfach - Amazon
[beschreibt den ganzen Prozeß](https://aws.amazon.com/premiumsupport/knowledge-center/create-and-activate-aws-account/)
in seiner Wissensdatenbank. Die Seite ist leider auf Englisch - eine deutsche Übersetzung liegt leider nicht vor.   
Aber wie schon gesagt, ist der Prozess recht einfach und selbsterklärend.   
Die Einrichtung eines Kontos ist auch
[direkt über diese Seite](https://portal.aws.amazon.com/billing/signup#/start) möglich.

Bei der Eingabe Ihrer Telefonnummer achten Sie bitte darauf die Nummer **ohne** die führende Null einzugeben.
Sie stellen das Land ein, wodurch automatisch die Länderkennung +49 eingestellt wird und dann
die Telefonnumer mit Vorwahl - ohne die erste Null.

AWS verlangt während der Konto-Einrichtung die Angabe eines Zahlungsmittels. Lassen Sie sich
davon nicht abschrecken - Sie können bei AWS Limits setzen und Alarme für die Kosten
einrichten und das Photo-Forum wird sehr wenig Kosten produzieren.  
Normalerweise werden Sie im ersten Jahr bei AWS gar nichts bezahlen und auch danach
gibt es für die genutzten Dienste Freikontingente, so dass die Kosten sehr niedrig bleiben.

Sobald Sie das AWS Stammbenutzer-Konto eingerichtet haben, können Sie sich über
die AWS-Konsole an- und abmelden. Denken Sie daran, Ihre Zugangsdaten so zu sichern, daß sie sie jederzeit
wiederfinden und daß sie nicht verlorengehen.

# IAM Benutzer

Aus Sicherheitsgründen werden wir
[IAM](https://docs.aws.amazon.com/de_de/IAM/latest/UserGuide/introduction.html)-Benutzer
für die Benutzung des Photo-Forums einsetzen. IAM-Benutzer sind Benutzer-Konten *innerhalb*
Ihres AWS-Kontos die mit verschiedenen Rechten ausgestattet werden können.  Wir werden
zum Beispiel Administrations-Benutzer, Moderatoren und normale Forumsbenutzer einrichten.  
Noch einmal - diese IAM-Benutzer sind keine AWS-Konten - stellen Sie sich diese eher
als Benutzer eines Sub-Systems innerhalb Ihres AWS-Kontos vor.

Falls Sie weitergehendes Interesse an AWS Kontensicherheit haben, schauen Sie sich einmal
das Dokument
[Bewährte Methoden für IAM](https://docs.aws.amazon.com/de_de/IAM/latest/UserGuide/best-practices.html)
in der AWS Dokumentation an.

# IAM: Anlegen des Administrators

Please note ...