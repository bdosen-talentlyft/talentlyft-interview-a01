# TalentLyft Angualr Interview

Cilj zadatka je testirati osnovna znanja Angular framework-a, odnosno baratanje Angular komponentama, routing-om, formama, validacijom, pozivanjem servisa itd.

Zadatak simulira scenarij, u kojem je potrebno dovršiti određene funkcionalnosti.

# Zadatak

Aplikacija u zadatku je minijaturna verzija telefonskog imenika. Početni ekran aplikacije je tablica sa popisom kontakata, a drugi ekran skuži za uređivanje (ili kreiranje novog) kontakta. Potrebno je implementirati funkcionalnosti za paginaciju, dodavanje, uređivanje i brisanje kandidata.

U ovom zadatku koristi se vanjska biblioteka Angular Material sa predefiniranim komponentama za korisničko sučelje. Dopušteno je importanje komponenti po potrebi. 

U projektu se nalazi klasa `ContactsService` koju je potrebno koristiti za sve operacije, od dohvaćanja određene stranice kontakata, traženja kontakata, spremanje novih i uređenih kontakata, te brisanje kontakata. `ContactsService` klasa simulira API, te ima određeni vremenski delay (zato su metode async). Postoji određena šansa da bilo koja od metoda "throwa exception", zato je potrebno uzeti u obzir da sve greške budu uhvaćene i adekvatno prikazane korisniku.

Kako bi zadatak bio do kraja ispunjen potrebno je implementirati slijedeće funkcionalnosti:

## 01 - Paginacija na glavnom ekranu

Potrebno je implemetirati paginator sa standardnim fukcionalnostima. Mogućnost da se korisnik može prebacivati sa stranice na stranicu (1, 2, 3, 4...). Poželjno je napraviti i funckionalnost da korisnik može birati koliko kontakata vidi na stranici (po default-u je 20).

## 02 - Loading na glavnom ekranu

Dodati prikaz neke vrste "loadera" dok aplikacija čeka da se podaci dohvate iz servisa.

## 03 - Dodavanje novog i uređivanje postojećeg kontakta

Za dodavanje novog i uređivanje postojećeg kontakta se koristi ista komponenta (`EditContactComponent`)! Potrebno je povezati te dvije akcije sa tom komponentom.

Klikom na "+" se navigira na dodavanje novog kontakta, dok klikom na ikonu olovke u tablici, navigira se na uređivanje kontakta.
Prilikom dodavanja/uređivanja kontakta potrebno je dovršiti formu čiji elementi su već definirani u HTML-u.

Kod uređivanja kontakta, poželjno je prikazati "loader" dok se podaci o kontaktu dohvaćaju sa servisa.

Također, potrebno je paziti i na validacije polja:
* First name (obavezno)
* Last name (obavezno)
* Email (nije obavezno, ali ako je upisan email, mora biti ispravan)
* Address (nije obavezno)
* Phone number (nije obavezno, ali ako je upisan broj može se sastojati samo od slijedećih znakova: brojevi 0-9, znak plus "+" i razmak " ")

Klikom na "cancel" korisnika se vraća na popis kontakata.

Klikom na "save", okida se validacija, te ako su polja validna, pohranjuju se podaci u servis. Poželjno je da prikažete "loader" dok se podaci spremaju. 

## Brisanje kontakta

U popisu kontakata, klikom na ikonu kante za smeće, treba prikazati poruku kojom se pita korisnika je li siguran da želi obrisati odabranog kontakta. U slučaju pozitivnog odgovora potrebno je obrisati kontakt iz popisa (i sa servisa).

# Ostalo

Redoslijed rješavanja funkcionalnosti nije bitan. Dozvoljeno je koristiti se dokumentacijom za Angular (https://angular.io/), Angular Material (https://material.angular.io/), te bilo koje druge izvore. Za bilo kakva dodatna pitanja, potrebno je obratiti se u obliku odgovora na email na kojem ste zadatak dobili.

Što više riješite, to bolje.

# Slanje rješenja

Rješenje zadatka poslati u .zip formatu (bez node_modules foldera) kao odgovor na email na kojem ste zadatak dobili.

Sretno sa rješavanjem! :)