import React from "react";
import Layout from "../components/layout";
import HeaderTwo from "../components/header/header-two";
import StickyHeader from "../components/header/sticky-header";
import PageHeader from "../components/page-header";
import { Container, Row, Col } from "react-bootstrap";
import BrandCarousel from "../components/brand-carousel";
import Footer from "../components/footer";
import Head from "next/head";

const Karriar = () => {
  return (
    <>
      <Head>
        <title>Karriär</title>
        <meta name="title" content="Karriär - GreenPlank.se" />
        <meta name="description" content="Green Plank är Sveriges ledande leverantör av miljövänliga byggmaterial. Sedan starten 2004 har företaget skapat ett rykte om att erbjuda högkvalitativa byggvaror till lägsta möjliga prissättning." />
      </Head>
      <Layout pageTitle="Karriar">
        <HeaderTwo />
        <PageHeader title="Karriar" crumbTitle="Karriar" />
        <StickyHeader />
        <section className="about-one pt-120 pb-40">
          <Container>
            <Row style={{ marginBottom: "4em" }}>
              <Col lg={12}>
                <h2>Bygg din karriär med hållbara produkter</h2>
                <div className="mb-30">
                  <h3 className="mb-30 mt-30">Våra värderingar
                  </h3>
                  <p>Våra värderingar är grunden för vårt företag. Vi tror att de främjar och vårdar korrekt affärsuppförande och därför måste vara en integrerad del av alla som bildar företaget. Vi tror att våra värderingar är en väsentlig del av vår företags existens och därför måste följas under alla omständigheter. Vi tror att dessa kärnvärden: integritet, ärlighet, respekt för andra och önskan om ständig förbättring utgör grunden för både personlig och företagens framgång. Tillsammans utgör dessa värderingar den anställdes väsentliga karaktär och genomsyrar all verksamhet i vårt företag. I processen med att växa i dessa värden förbättrar de anställda inte bara företaget, de utvidgar sin egen lycka.</p>
                  <h3 className="mb-30 mt-30">Vårt folk</h3>
                  <p className="mb-30 mt-30">De människor som arbetar på Green Plank vill ha mer än bara ett jobb – de bygger karriärer. Våra medarbetare är en mångfaldig grupp som kommer från olika branscher, men de har flera gemensamma egenskaper: de är ljusa, energiska, motiverade individer som utmärker sig inom sina områden.</p>
                  <h3 className="mb-30 mt-30">Vår kultur
                  </h3>
                  <p className="mb-30 mt-30">Samarbete och teamdeltagande kännetecknar andan i Green Plank. Vår kultur möjliggör beslut, förväntar verkställande och stöder anställda för att agera i våra intressenters bästa. Våra team trivs med öppen och ärlig kommunikation och flexibilitet.</p>
                  <h3 className="mb-30 mt-30">Vår utmaning</h3>
                  <p className="mb-30 mt-30">Att vara marknadsledande, möta kundernas efterfrågan på kostnadseffektiva hållbara produkter och hålla sig före våra konkurrenter är bara några av de utmaningar vi står inför på Green Plank.</p>
                  <h2 className="mb-30 mt-30">Försäljningskonsult</h2>
                  <p className="mb-30 mt-30">Green Plank är Europas ledande leverantör av miljövänliga byggnadsmaterial. Sedan starten 2004 har företaget etablerat sig ett rykte för att erbjuda byggnadsmaterial av högsta kvalitet till lägsta möjliga prissättning.
                    Green Plank söker försäljningskonsult i alla europeiska länder.</p>
                  <h3 className="mb-30 mt-30">Vad vinner du på det?</h3>
                  <p className="mb-30 mt-30">Du kommer att ha möjlighet att representera Green Plank i branschen och sälja en mycket ansedd produkt samtidigt som du tjänar ett attraktivt lönepaket + Transportbidrag + Commission. Din intjäningspotential ökar från år till år när du etablerar dig på denna dynamiska marknadsplats.</p>
                  <h3 className="mb-30 mt-30">Vad du kommer att göra</h3>
                  <p className="mb-30 mt-30">När du arbetar som försäljningskonsult använder du dina kontakter inom byggnads-, konsult-, teknik- och arkitekturområden för att utnyttja försäljningen av miljövänliga grönplankdäck, räcke, stängsel, beklädnad, golv etc. Din tekniska bakgrund kombinerad med en stark kunskap om bygg- och anläggningsindustrin hjälper dig att utmärka dig i denna roll. Du kommer att ha förmågan att skapa långvariga affärsrelationer samt utveckla nya affärer med nya konton.</p>
                  <h4 className="mb-30 mt-30">För att ansöka om denna roll måste du ha:</h4>

                  <strong>1. </strong>Ett beprövat rekord i försäljningssucces inom bygg- och anläggningsindustrin<br />
                  <strong>2. </strong>Mycket utvecklad förhållande och förmåga att utveckla relationer.<br />
                  <strong>3. </strong>Förmåga att samverka med alla byggnadsnivåer.<br />

                  <h4 className="mb-30 mt-30">Du kommer att bli högt ansedd om du också har:</h4>

                  <strong>1. </strong>Befintliga kontakter i byggnad / arkitekturutrymme.<br />
                  <strong>2. </strong>Erfarenhet av inomhus / utedörrgolv, däck, stängsel speciellt WPC.
                  <br />

                  <p className="mb-30 mt-30">Allt du behöver göra för att ansöka om denna enastående roll är att skicka ditt CV till  . Skicka ditt CV ASAP eftersom vi kommer att se sökande från det ögonblick som denna annons visas. Om du vill veta mer om denna unika möjlighet eller liknande försäljningsroller, kan du ringa oss för en konfidentiell chatt på +46 (0) 761 734 777.</p>
                  <p>
                    Skicka CV till:  info@GreenPlank.eu</p>
                  <p>
                    Green Plank kan avslöja information som du har gett oss om vi har en god tro på att sådant avslöjande är nödvändig för (1) att följa lagen eller den rättsliga process som serveras på Green Plank; eller (2) skydda och försvara Green Planks rättigheter eller egendom.</p>
                  <p>
                    Vi tackar alla sökande för deras intresse för vårt företag. Men endast de kortlistade kommer att kontaktas för en intervju. Vi kommer att hänvisa till denna databas igen när andra anställningsmöjligheter uppstår inom Green Plank.</p>


                </div>
              </Col>
            </Row>
          </Container>
        </section>
        <BrandCarousel />
        <Footer />
      </Layout>
    </>
  );
};

export default Karriar;
