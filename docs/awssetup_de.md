---
title: Einrichtung eines AWS-Kontos
---

This page is also available [in English](../awssetup).

# Einrichten des Stammbenutzer-Kontos

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

AWS verlangt während der Konto-Einrichtung die Angabe eines Zahlungsmittels. Lassen Sie sich
davon nicht abschrecken - Sie können bei AWS Limits setzen und Alarme für die Kosten
einrichten und das Photo-Forum wird sehr wenig Kosten produzieren.  
Normalerweise werden Sie im ersten Jahr bei AWS gar nichts bezahlen und auch danach
gibt es für die genutzten Dienste Freikontingente, so dass die Kosten sehr niedrig bleiben.  

For security reasons we will use
[IAM](https://docs.aws.amazon.com/IAM/latest/UserGuide/introduction.html)
users for the real work - these are
users within your root account which can get different rights.

If you are interested in AWS account security please
have a look at the
[IAM best practices document](https://docs.aws.amazon.com/IAM/latest/UserGuide/best-practices.html)
in the AWS documentation.

# Create your administrative IAM user

