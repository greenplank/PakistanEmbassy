import React, { useContext } from "react";
import { Accordion, Container, Row, Col, Card } from "react-bootstrap";
import { useAccordionToggle } from "react-bootstrap/AccordionToggle";
import AccordionContext from "react-bootstrap/AccordionContext";
import heart from "../assets/images/shapes/heart-2-1.png";
import heart1 from "../assets/images/shapes/about-count-heart-1-1.png";
import faqImage from "../assets/images/resources/faq-box-1-1.jpg";

const ContextAwareToggle = ({ children, eventKey, callback }) => {
  const currentEventKey = useContext(AccordionContext);

  const decoratedOnClick = useAccordionToggle(
    eventKey,
    () => callback && callback(eventKey)
  );

  const isCurrentEventKey = currentEventKey === eventKey;

  return (
    <h2
      className="para-title"
      style={{ color: `${isCurrentEventKey ? "var(--thm-secondary)" : ""}` }}
    >
      <span onClick={decoratedOnClick}>
        <i
          style={{
            color: `${isCurrentEventKey ? "var(--thm-secondary)" : ""}`
          }}
          className={`far ${isCurrentEventKey ? "fa-minus" : "fa-plus"}`}
        ></i>
        {children}
      </span>
    </h2>
  );
};
const FaqOne = () => {
  return (
    <section className="faq-one pt-120">
      <Container>
        <Row>
          <Col lg={12}>
            <div className="faq-one__content">
              {/* <div className="block-title">
                <h3>
                  Charity for the people you care about.
                </h3>
              </div> */}

              <Accordion
                as="ul"
                id="accordion"
                defaultActiveKey="0"
                className="list-unstyled"
              >
                <Card as="li">
                  <ContextAwareToggle eventKey="0">
                  Kan jag använda ”Normalt” Trä för reglar?
                  </ContextAwareToggle>
                  <Accordion.Collapse eventKey="0">
                    <p>
                      Ja, det går att använda impregnerat trä som reglar för Komposittrall. Vi rekommenderar att man även andänder sig av ett membran mellan reglarna och plankorna.
                    </p>
                  </Accordion.Collapse>
                </Card>
                <Card as="li">
                  <ContextAwareToggle eventKey="1">
                  Vad är fördelarna med komposit över trä?
                  </ContextAwareToggle>
                  <Accordion.Collapse eventKey="1">
                    <p>
                    Komposit kräver i stort sett inget underhåll. Billigare än många exotiska Hårdträ (T.ex Bankrai) Väderresistant, Miljövänligt med upp till 90% återanvändt material.
                    </p>
                  </Accordion.Collapse>
                </Card>
                <Card as="li">
                  <ContextAwareToggle eventKey="2">
                  Är det svårt att installera med dolda clips?
                  </ContextAwareToggle>
                  <Accordion.Collapse eventKey="2">
                    <p>
                    Sålänge som ni följer installeringsmanualen eller anlitar en snickare som har erfarenhet så går det snabbt och lätt.
                    </p>
                  </Accordion.Collapse>
                </Card>
                <Card as="li">
                  <ContextAwareToggle eventKey="3">
                  Jag har hört att komposit rör sig i olika väder, Vad menas med detta?
                  </ContextAwareToggle>
                  <Accordion.Collapse eventKey="3">
                    <p>
                    Komposit expanderar och drar ihop sig precis som naturligt trä. Olika kompositprodukter expanderar och drar ihop sig olika mycket beroende på sammansättningen. Men oftast så påverkar detta mer massiva variationer mer än ihåliga.
                    </p>
                  </Accordion.Collapse>
                </Card>
                <Card as="li">
                  <ContextAwareToggle eventKey="4">
                  Bleknar komposit något?
                  </ContextAwareToggle>
                  <Accordion.Collapse eventKey="4">
                    <p>
                    Ja, Komposit kan blekna lite beroende på hur mycket exponering det finns för sol. ”Capped” varianter bleknar dock minimals i jämnförelse med icke ”Capped” komposit.
                    </p>
                  </Accordion.Collapse>
                </Card>
                <Card as="li">
                  <ContextAwareToggle eventKey="5">
                  Vad är skillnaden mellan ihåliga och massiva profiler?
                  </ContextAwareToggle>
                  <Accordion.Collapse eventKey="5">
                    <p>
                    Solida profiler är lättare att tillverka och väger ca 25-35% mer än ihåliga profiler.Ihåliga plankor kan vara den bästa ersättningen för alla gamla trädäck om dina reglar är i gott skick och ihålig komposit är det bästa valet på grund av lättare vikt än massiv.Massiva brädor kan expandera eller kontrahera mer beroende på temperatur än ihåliga brädor.I resultatet kommer en massiv profil att  kunna tappa klipps och vridning kan inträffa.Ihåliga brädor behöver ändlock på ändarna för att täcka hålen medan massiva skivor inte behöver sådana.Ihåliga brädor fungerar bra både i extremt väder och vått område. Om du följer Green Plank installationshandbok.Ihåliga profiler kan ha lättare för att spricka eller gå isönder om tunga föremål tappas på det.Massiva brädor ser mer ut som trä medan ihåliga skivor har yta som trä men på grund av hålen ser de ut mer som konstruerade plankor.Massiva brädor tros vara starkare än ihåliga skivor, men i vissa fall inte. Green Planks ihåliga plankor har bågstruktur som ger mer styrka i profil.Ihåliga brädor kan du enkelt dra ledningar eller annat igenom.
                    </p>
                  </Accordion.Collapse>
                </Card>
                <Card as="li">
                  <ContextAwareToggle eventKey="6">
                  Vilken typ av verktyg eller skruvar använder jag för komposit?
                  </ContextAwareToggle>
                  <Accordion.Collapse eventKey="6">
                    <p>
                    Du kan använda vanliga verktyg avsett för trä och vanliga träskruvar för utomhusbruk.
                    </p>
                  </Accordion.Collapse>
                </Card>
                <Card as="li">
                  <ContextAwareToggle eventKey="7">
                  Blir komposit varmare än trä under solen?
                  </ContextAwareToggle>
                  <Accordion.Collapse eventKey="7">
                    <p>
                    Ja, komposit blir varmare jämfört med trä på grund av plasten inuti. Olika tillverkare har olika förhållanden mellan plastanvändning i kompositionen. Mer plast betyder varmare under solen. Ljusa färger är mindre varma än de mörkare färgerna.
                    </p>
                  </Accordion.Collapse>
                </Card>
                <Card as="li">
                  <ContextAwareToggle eventKey="8">
                  Vad är skillnaden mellan ”Capped” och non-”capped”?
                  </ContextAwareToggle>
                  <Accordion.Collapse eventKey="8">
                    <p>
                    Capped” däck har minimal blekning på grund av det skyddande plasthöljet.På grund av det skyddande plasthöljet är det lättare att rengöra från smuts, olja, kaffe eller vinfläckar.Dock om det skyddande plastskyddet är skadad på grund av skarpa föremål kan den inte repareras.”Capped”  däck har mer ”Plastigt” utseende.”Capped” blir varmare på grund av den skyddande plastfilmen under solen.”Capped” är mindre halkbeständigt än icke ”Capped” däck.Icke ”Capped” däck bleknar mer under de första månaderna och blir sedan stabil.På icke ”Capped” däck så måste olja, kaffe eller vinfläckar rengöras direkt. Om det inte tas bort omedelbart kan fläckar uppstå.För att ta bort fläckar kan sandpapper användas.På icke- ”Capped” däck kan repor slipas med sandpapper avsett för Trä.Icke- ”Capped”  däck är mer halkbeständig än täckt däck.Däck som inte är avslutade är mindre varma än däck.
                    </p>
                  </Accordion.Collapse>
                </Card>
                <Card as="li">
                  <ContextAwareToggle eventKey="9">
                  Sparar jag verkligen pengar på att använda komposit över impregnerat trä?
                  </ContextAwareToggle>
                  <Accordion.Collapse eventKey="9">
                    <p>
                    Green Planks produkter kan komma att kosta mer i materialkostnad jämfört med tryckimpregnerat trä men det sparar man in över tid tack vare att Green Planks komposit inte behöver mer underhåll än vanlig rengöring för att hålla sig vackert.
                    </p>
                  </Accordion.Collapse>
                </Card>
                <Card as="li">
                  <ContextAwareToggle eventKey="10">
                  Sparar Green Plank-kompositprodukter verkligen pengar på lång sikt?
                  </ContextAwareToggle>
                  <Accordion.Collapse eventKey="10">
                    <p>
                    Ja, initialkostnaden för våra kompositprodukter kan vara marginellt högre än tryckbehandlat trä men billigare än lövträ. Och inom några år kommer din komposittrall, klädsel eller stängsel att återfå skillnaden. Detta beror på att kompositprodukter av Green Plank naturfibrer kräver minimal ansträngning för att hålla dem snygga, vilket innebär att underhållskostnaderna är låga. Eftersom kostnaden för behandlingar och arbetskraft för traditionella träplattor, beklädnad eller stängsel ökar är våra kompositprodukter det perfekta kostnadseffektiva alternativet.
                    </p>
                  </Accordion.Collapse>
                </Card>
                <Card as="li">
                  <ContextAwareToggle eventKey="11">
                  Är träplastkompositprodukter av grönt plank miljövänligt?
                  </ContextAwareToggle>
                  <Accordion.Collapse eventKey="11">
                    <p>
                    Ja. Green Plank är det ledande varumärket av miljövänligt träplastkomposit / naturfiberkompositplattor, räcken, stängsel och beklädnadssystem som är utformade för att maximera din upplevelse utomhus. Alla ingredienser vi använder återanvänds. Green Plank naturfibrer kompositprodukter kombinerar plastens hållbarhet och styrkan hos trä / ris skalfibrer för att producera en överlägsen byggprodukt.Green Plank WPC / NFC-produkter kommer inte att splittras, förvrängas eller blekna som träet gör, det minskar dramatiskt den slösaktiga cykeln för reparation och utbyte och eliminerar frekvent applicering av miljöskadlig färg, tätningsmedel och fläckar.Grönplank träkomposit eller naturfibrer, kompositprodukter tillverkas med återvunna trä / risskalfibrer som annars skulle gå till deponier. Dessutom har Green Plank möjlighet att omfamna skrotprodukten tillbaka till tillverkningsprocessen.Green Plank återvinner vatten under tillverkningsprocessen.Till skillnad från trä är Green Plank träkompositkomposit / naturfiberkompositprodukter ett engångsköp för de flesta husägare.Grönplank träkompositer / naturfibrer komposit kräver inte målning, färgning eller försegling.
                    </p>
                  </Accordion.Collapse>
                </Card>
                <Card as="li">
                  <ContextAwareToggle eventKey="12">
                  Är Green Plank kompositprodukter UV-skyddade?
                  </ContextAwareToggle>
                  <Accordion.Collapse eventKey="12">
                    <p>
                    Green Plank naturfiberkompositprodukter innehåller UV-inhiberade pigmentsystem som minskar blekning. Men det kan blekna med tiden i starkt solljus. Normalt blir kompositprodukter ljusare i färgton när de bleknar.
                    </p>
                  </Accordion.Collapse>
                </Card>
                <Card as="li">
                  <ContextAwareToggle eventKey="13">
                  Kan Green Plank naturfibrer komposittrallskivor användas för att bygga en brygga?
                  </ContextAwareToggle>
                  <Accordion.Collapse eventKey="13">
                    <p>
                    Ja, Green Plank MARINE ™ komposittrall kan användas som brygga, bryggor, utkikspunkter, fritidsområden, promenader, strandpromenader, småbåtshamnar och andra kommersiella eller tunga projekt, men det kan inte användas för några strukturella stödmedlemmar, och det borde inte sänkas ned kontinuerligt i vatten. För information om kommersiella applikationer, kontakta Green Plank.För information om sammansatta strukturella stödprodukter, vänligen kontakta Green Plank.
                    </p>
                  </Accordion.Collapse>
                </Card>
                <Card as="li">
                  <ContextAwareToggle eventKey="14">
                  Kan jag fästa Green Plank komposittrall över ett befintligt däck, balkong eller veranda?
                  </ContextAwareToggle>
                  <Accordion.Collapse eventKey="14">
                    <p>
                    Komposittrall är avsedd att installeras direkt på strukturbjälkarna. Fäst INTE våra komposittrallplankor på toppen av gamla befintliga däck plankor eller balkong- och verandagolv.
                    </p>
                  </Accordion.Collapse>
                </Card>
                <Card as="li">
                  <ContextAwareToggle eventKey="15">
                  Kan jag använda högtryckstvätt för att rengöra mitt kompositdäck?
                  </ContextAwareToggle>
                  <Accordion.Collapse eventKey="15">
                    <p>
                    Hushålls högtryckstvättar med sprutmunstycke kan användas för att avlägsna fläckar, mark i smuts eller mögel men riskerar att spraya tvålpartiklar på andra ytor. Om du väljer att använda en högtryckstvätt, vänligen håll minst 30 cm avstånd mellan kraftstrålen och däcksbrädans yta.
                    </p>
                  </Accordion.Collapse>
                </Card>
                <Card as="li">
                  <ContextAwareToggle eventKey="16">
                  Kan Green Plank naturfibrer komposittrall användas runt pooler och spa?
                  </ContextAwareToggle>
                  <Accordion.Collapse eventKey="16">
                    <p>
                    Absolut. Green Plank naturfibrer komposittrallskivor absorberar inte vatten och har använts i stor utsträckning nära pooler, spa och i marina miljöer runt om i världen.
                    </p>
                  </Accordion.Collapse>
                </Card>
                <Card as="li">
                  <ContextAwareToggle eventKey="17">
                  Fläckar, bleknar eller kliar det lätt på Green Planks-kompositdäck?
                  </ContextAwareToggle>
                  <Accordion.Collapse eventKey="17">
                    <p>
                    Låt oss ordna dessa frågor. Först innehåller Green Plank komposittrall trä, antingen sågspån eller slipat trä eller risskalfibrer. Det materialet kan absorbera vätskor som olja, och resultatet kan bli en fläck. Till och med topp märken på terrassen kan fläcka om olja, färg, juice eller andra vätskor inte snabbt rensas upp.komposittrall bleknar vanligtvis något, om alls, under den första säsongen. Därefter blir färgen stabil. Även om Green Plank arbetar ständigt för att förbättra UV-skyddet i sina produkter för att minska eller eliminera blekning.Slutligen kommer komposittrall att repas om tunga föremål som möbler dras över den oförsiktigt. Även skarpa husdjursklor och sand kan orsaka repor precis som träplattor. Reporna är emellertid vanligtvis ytliga och med tiden blandas de. För att förhindra repor, plocka upp däck möbler när du flyttar dem och använd kvast till löst smuts från terrassen regelbundet för att förhindra nötning i komposittrall.Ett annat sätt att hindra möbler från att skada ditt komposittrallgolv är att investera i skydds koppar, mattor eller dynor. När du väl har köpt dem, se till att du placerar dem under alla bord och stol ben som kommer i kontakt med ditt däckgolv. Introduktionen av dessa skyddande koppar, mattor eller dynor hindrar din inredning från direktkontakt med ditt däck och hjälper till att hindra dina möbler från att skada ditt däckgolv.Några av våra kunder har använt litet / medelstort sandpapper för att behandla mindre repor eller skurmärken. Om fläckarna har satt på plankor kanske du också vill använda ett fint sandpapper och slipa lätt följt av en trådborste för att korna om terrassen. Följ alltid plankans träkornfinish. Det slipade området kommer att väder tillbaka i cirka 8-10 veckor men kan mycket beroende på plats och specifik applikation.
                    </p>
                  </Accordion.Collapse>
                </Card>
                <Card as="li">
                  <ContextAwareToggle eventKey="18">
                  Behöver däck tillstånd för bygg eller bygglov?
                  </ContextAwareToggle>
                  <Accordion.Collapse eventKey="18">
                    <p>
                    I de flesta samhällen krävs byggnadstillstånd för att bygga ett däck. Huvudskälet är att säkerställa säkerheten för alla som använder strukturen. Det har funnits många olyckliga fall där däck, trappor eller räcken som byggts med dålig design eller material har kollapsat och orsakat skada eller död. Oftast erhölls inte nödvändigt däcktillstånd i sådana fall. När ett bygglov för däck inte erhålls och något går fel utsätts husägaren för civilrättsliga och straffrättsliga påföljder. Det är vettigt att få bygglov från den lokala byggnadsavdelningen så att däcket kan inspekteras för att skydda dig och andra.
                    </p>
                  </Accordion.Collapse>
                </Card>
                <Card as="li">
                  <ContextAwareToggle eventKey="19">
                  Behöver Green Plank naturfibrer kompositbrädor, trim, plankor eller balkar förborrning?
                  </ContextAwareToggle>
                  <Accordion.Collapse eventKey="19">
                    <p>
                    Det är nödvändigt att förborra och försänka innan du skruvar in lister, balkar och trallbrädor (med konventionell installation).
                    </p>
                  </Accordion.Collapse>
                </Card>
                <Card as="li">
                  <ContextAwareToggle eventKey="20">
                  Behöver jag specialverktyg för att installera Green Plank komposittrall?
                  </ContextAwareToggle>
                  <Accordion.Collapse eventKey="20">
                    <p>
                    Green Plank kompositprodukter kan skäras, borras och fästas med konventionella verktyg. För din säkerhet, kom ihåg att använda skyddsglasögon och skyddskläder.
                    </p>
                  </Accordion.Collapse>
                </Card>
                <Card as="li">
                  <ContextAwareToggle eventKey="21">
                  Ruttnar Green Plank naturfibrer komposittrall?
                  </ContextAwareToggle>
                  <Accordion.Collapse eventKey="21">
                    <p>
                    Komposittrall såsom Green Plank trall är mycket motståndskraftig mot ruttning på grund av plastinnehållet. Initial kostnad är mer för komposittrall, men det kräver mindre underhåll och kommer att ge dig fler års service, i de flesta fall.
                    </p>
                  </Accordion.Collapse>
                </Card>
                <Card as="li">
                  <ContextAwareToggle eventKey="22">
                  Har avskärmning en bra avkastning på investeringen (ROI)? 
                  </ContextAwareToggle>
                  <Accordion.Collapse eventKey="22">
                    <p>
                    Green Plank-kompositdäck ökar ditt hemvärde och är därför en bra investering, särskilt när däcket är snyggt utformat för att smälta in i hemmets arkitektur och det är korrekt byggt för säkerhet och prestanda.Statistik från fastighetsmäklare visar att däck tillför mervärde till huset, och upp till 80 procent av kostnaden för ett däck kan återvinnas vid försäljning, om däcket är väl underhållet. Kort sagt, däck har bra avkastning.
                    </p>
                  </Accordion.Collapse>
                </Card>
                <Card as="li">
                  <ContextAwareToggle eventKey="23">
                  Blir Green Plank komposittrall varm på sommaren?
                  </ContextAwareToggle>
                  <Accordion.Collapse eventKey="23">
                    <p>
                    Allt material blir varmt vid UV strålning på varma sommardagar. Gröna plankkompositer värms upp i samma takt som naturligt trä. dvs. varmare än gräs, men inte lika varmt som stenläggning, metall eller betong.
                    </p>
                  </Accordion.Collapse>
                </Card>
                <Card as="li">
                  <ContextAwareToggle eventKey="24">
                  Hur gör kompositbrädor rörelser?
                  </ContextAwareToggle>
                  <Accordion.Collapse eventKey="24">
                    <p>
                    Trä- eller komposittrallskivor, alla rör sig, men i olika riktningar och av olika skäl. Kompositdäck utvidgas mer i längd, medan träplattor expanderar över sin bredd. komposittrall rör sig mest på grund av värme, medan träplattor rör sig när dess fuktinnehåll förändras. Båda typerna av rörelse är naturfunktioner och övervinns inte lätt.Komposittrall, beklädnad eller stängselplattor ändrar storlek med temperaturen, krymper när temperaturen sjunker och expanderar när den ökar. Förändringen sker i en enhetlig takt som inte beror på riktning, förutom att den märks mer över längden helt enkelt för att brädorna är längre än de är breda. Vid kallt väder tenderar geringsfogar i komposit att springa. Vid varmt väder kan trycket från expanderande brädor dra åt geringsfogarna eller kila dem öppna.Trä agerar annorlunda. När dess fuktinnehåll förändras expanderar eller krymper trä över brädans bredd. Detta gör att geringsfogen öppnas vid tån (snittets spetsiga ände) eller hälen (snittets inte så spetsiga ände). Vilken del av geringsfogen som öppnas är direkt relaterad till brädans fuktinnehåll när de installeras. Ett vått bräde torkar ut och får hälen att öppna sig. Ett torrt bräde expanderar när det tar på sig fukt, vilket får tån att öppna sig.
                    </p>
                  </Accordion.Collapse>
                </Card>
                
              </Accordion>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default FaqOne;
