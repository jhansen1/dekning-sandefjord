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

- Beregnet 21.11.2026 for en node holdt 1,5 m over bakken med 0 dBi antenne. Senderne er regnet
  med 22 dBm, 2 dBi og 1 dB kabeltap, på 869,44 MHz (EU_N_868 / Narrow Fast).
- Dette er den tredje utgaven. Den første var for raus: et sted den kalte godt, ga ikke mottak. Den andre var
  trolig for streng. Denne ligger mellom dem:
  - God dekning er minst −105,5 dBm: 6 dB over det svakeste en node leser (SNR −7,5 dB) når støygulvet er
    −104 dBm, som er målt på noden kartet er laget for. Usikker dekning er de siste 6 dB ned til −111,5 dBm.
  - Alle signaler er trukket ned 7 dB i forhold til fritt rom. Det er det LinkSim (ITM) legger på over en
    38 km lang strekning med fri sikt der samme node har et målt mottak.
  - Terrengtapet er regnet over opptil tre rygger (Deygout, ITU-R P.526), ikke bare den største, med 4/3 jordradius.
  - Skog og bebyggelse de siste 200 m inn mot mottakeren demper signalet: 50 m skog gir 4 dB, 200 m gir 10 dB.
    Formen er fra ITU-R P.833, tallene er anslag.
  - Noder som bare er angitt på noen kilometer nær, er regnet fra fem mulige plasser, og dekningen vises der
    flertallet gir den.
- «Steder å prøve» er høyder ved offentlig bilvei (OpenStreetMap) der beregningen gir god dekning.
- Bare faste noder er med (ROUTER og CLIENT_BASE) som er sett på kanalen NarrowFast.
- Rutenettet er ca. 39 m.
- Nodene sender sjelden. Bli stående 15–20 minutter på et sted før du gir det opp.

## Kilder

- Bakgrunnskart: © Kartverket (CC BY 4.0), hentet direkte fra Kartverkets flistjeneste.
- Noder: posisjoner, roller og kanal fra [map.868.no](https://map.868.no), kartet til det norske
  Meshtastic-miljøet. Dette prosjektet er ikke en del av map.868.no.
- Arealdekke (skog, bebyggelse, vann): © ESA WorldCover project 2021 / Contains modified Copernicus Sentinel
  data (2021) processed by ESA WorldCover consortium (CC BY 4.0).
- Terreng: Copernicus DEM GLO-30. Produced using Copernicus WorldDEM-30 © DLR e.V. 2010-2014 and © Airbus Defence
  and Space GmbH 2014-2018 provided under COPERNICUS by the European Union and ESA; all rights reserved.
- Veier: © OpenStreetMap-bidragsytere (ODbL).
- Kartbibliotek: [Leaflet](https://leafletjs.com) (BSD-2-Clause).

Meshtastic® er et registrert varemerke for Meshtastic LLC. Dette prosjektet er ikke tilknyttet eller godkjent av
Meshtastic LLC.
