# Dekning Sandefjord

Et interaktivt kart over hvor en håndholdt Meshtastic-node bør høre de faste nodene rundt Sandefjord:
https://jhansen1.github.io/dekning-sandefjord/

Kartet er uoffisielt og beregnet, ikke målt. Bruk det til å velge hvor du går for å prøve, ikke som fasit.

## Bruk

- Trykk i kartet for å se hvilke noder du bør høre der, med signal i dBm og om det er fri sikt.
- «Følg posisjonen min» viser deg selv i kartet mens du går. Posisjonen blir i nettleseren og sendes ingen steder.
- «Signal» viser styrken på sterkeste node, «Antall noder» hvor mange du når. Node-menyen viser én node om gangen.

## Som app

Siden kan installeres. På iPhone: åpne den i Safari, trykk Del-knappen og velg «Legg til på Hjem-skjerm».
Da åpner den i fullskjerm med eget ikon.

Appen virker uten nett. Dekningsdataene og et kart over hele området (ca. 5 MB) lagres på telefonen første gang
du åpner den, og kartfliser du har sett på, blir liggende. Uten nett er kartet litt grovere når du zoomer langt inn.

## Slik er det laget

- Beregnet 21.11.2026 for en node holdt 1,5 m over bakken med liten innebygd antenne (0 dBi). Senderne er regnet
  med 22 dBm, 2 dBi og 1 dB kabeltap, på 869,44 MHz (EU_N_868 / Narrow Fast).
- Tapet er fritt rom pluss én knivsegg over den dominerende hindringen i terrengsnittet, med 4/3 jordradius.
- God dekning er minst −115 dBm og høyst 10 dB tap over hindringen. Usikker dekning er signal som må bøye seg
  mer enn det over en rygg.
- Bare faste noder er med (ROUTER og CLIENT_BASE) som er sett på kanalen NarrowFast.
- Noder som bare er angitt på noen kilometer nær, er regnet fra fem mulige plasser, og dekningen vises der
  flertallet gir den.
- Rutenettet er ca. 39 m. Trær og hus er bare grovt med, siden terrengmodellen har 30 m ruter.

## Kilder

- Bakgrunnskart: © Kartverket (CC BY 4.0), hentet direkte fra Kartverkets flistjeneste.
- Noder: posisjoner, roller og kanal fra [map.868.no](https://map.868.no), kartet til det norske
  Meshtastic-miljøet. Dette prosjektet er ikke en del av map.868.no.
- Terreng: Copernicus DEM GLO-30. Produced using Copernicus WorldDEM-30 © DLR e.V. 2010-2014 and © Airbus Defence
  and Space GmbH 2014-2018 provided under COPERNICUS by the European Union and ESA; all rights reserved.
- Kartbibliotek: [Leaflet](https://leafletjs.com) (BSD-2-Clause).

Meshtastic® er et registrert varemerke for Meshtastic LLC. Dette prosjektet er ikke tilknyttet eller godkjent av
Meshtastic LLC.
