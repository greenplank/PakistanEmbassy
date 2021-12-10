import React from "react";
import Layout from "../components/layout";
import HeaderTwo from "../components/header/header-two";
import StickyHeader from "../components/header/sticky-header";
import PageHeader from "../components/page-header";
import { Container, Row, Col } from "react-bootstrap";
import blogImg from "../assets/images/blog/Sammansatta.webp";
import Footer from "../components/footer";
import Head from "next/head";

const sammansatta = () => {
  return (
    <Layout pageTitle="sammansatta-traplankor">
      <HeaderTwo />
      <StickyHeader />
      <PageHeader title="sammansatta-traplankor" crumbTitle="sammansatta-traplankor" />
      <section className="blog-details pt-120 pb-40">
        <Container>
          <Row>
            <Col md={12} lg={12}>
              <div>
                <div className="row">
                  <div className="blog-details col-12">
                    <div className="blog-inner">
                      <div className="media"><div className="image"><img src={blogImg} alt="" /></div></div>
                      <div className="content">
                        <h2 className="title">Sammansatta träplankor</h2>
                        <div className="mb-30">
                          <p>Sammansatta träplankor är starka och hållbara jämfört med vanliga träplankor, och de håller också längre. Om du har ett kompositdäck betyder det att plankorna består av flera återvunna eller syntetiska material, vanligtvis plast (akryl) och polymerer. Dessa material kan kombineras för att skapa den design och det utseende du vill ha för ditt däck.</p>
                          <h3 style={{ marginBottom: 30, marginTop: 30 }}>Metod för användning</h3>
                          <p style={{ marginBottom: 30, marginTop: 30 }}>Det finns många sätt på vilket kompositplankor kan användas för att göra ditt däck. Ett sätt är att använda självblockerande klipp. Självblockerande klämmor är rostfria skruvar som kan hålla brädorna på plats, oavsett vilken typ av väder de stöter på. På grund av detta behöver du inte stå ut med ruttna eller lösa brädor som om du inte använde självblockerande klämmor.</p>
                          <p style={{ marginBottom: 30, marginTop: 30 }}>En annan metod för att tillverka kompositplankor är genom användning av tryckbindning. Tryckbindning görs genom att värma plastmaterialet och sedan hamra det i en platta. Plasten smälter och smälter samman med träet och skapar ett starkt band mellan de två. Många tillverkare rekommenderar att man använder högtrycksluft som limningsmetod. Högtrycksluft hjälper till att binda samman brädorna mer effektivt, men nackdelen med denna metod är att mer värme genereras under processen.</p>
                          <h3 style={{ marginBottom: 30, marginTop: 30 }}>Funktioner</h3>
                          <p style={{ marginBottom: 30, marginTop: 30 }}>Många husägare föredrar kompositplankor eftersom de är starkare än vanliga lövträd. En anledning till att kompositplankor är mer hållbara än vanligt lövträ är att de har fler lager. Det ger tillverkare av kompositplankor större variation när det gäller att skapa olika densiteter. Det är fördelaktigt eftersom olika densiteter tål bättre olika klimat. Om du bor i ett område som genomgår extrema klimat, såsom kraftig nederbörd eller extremt heta temperaturer, bör din kompositplattor kunna klara dessa förhållanden.</p>
                          <h3 style={{ marginBottom: 30, marginTop: 30 }}>Hur man installerar?</h3>
                          <p style={{ marginBottom: 30, marginTop: 30 }}>Om du vill installera kompositplankor på egen hand behöver du rätt verktyg. Vissa människor väljer att anställa någon för att installera denna typ av golv, men du kan göra det om du är bekväm att göra det själv. Du bör ha skruvmejslar, ett måttband och någon typ av penna för att skriva på plankorna för att få exakta mått. Du kommer också att behöva några naglar, nipplar, en såg och andra verktyg, beroende på hur omfattande projektet kommer att bli. Se bara till att du får prisuppgifter från flera leverantörer innan du väljer den bästa leverantören för dig.</p>
                          <h3 style={{ marginBottom: 30, marginTop: 30 }}>Jämförelse</h3>
                          <p style={{ marginBottom: 30, marginTop: 10 }}>När du har fått prisuppgifter bör du jämföra dem mot trägolv. Du kommer att upptäcka att kompositplattor utomhus har ungefär en halv tum tjock produkt. Lövträd kan å andra sidan vara tre eller fyra tum tjocka. Dessutom är kompositplattor utomhus färdiga med kemikalier som förhindrar solljus från att sippra in i plankorna. Lövträd måste vara förseglade eller målade. Det kan vara lite dyrare än förfärdiga plankor.</p>
                          <p style={{ marginBottom: 30, marginTop: 10 }}>När du har bestämt dig för din leverantör och pris måste du komma igång. Det första du ska göra är att välja färg och stil. Dessa är lätta att bestämma eftersom du går med något som du förhoppningsvis kommer att använda i flera år. Det finns många färger att välja mellan, och din leverantör ska hjälpa dig att göra dessa val. Om du inte vet vad du ska få, finns det kompositplankor i nästan vilken färg du än kan tänka dig, från rödved till svart.</p>
                          <h3 style={{ marginBottom: 30, marginTop: 30 }}>Slutsats</h3>
                          <p style={{ marginBottom: 30, marginTop: 10 }}>När du har valt din färg och stil bör du kontakta oss. Vi rekommenderar att du konsulterar lokala statliga eller stadstjänstemän. De har ofta regler och förordningar relaterade till installation av däck, gångvägar, verandor och andra platser med träytor. Ofta kräver dessa regler specifika tillstånd och inspektioner innan byggandet kan börja. Att konsultera dina lokala tjänstemän är inte bara säkert, men det kan också spara mycket pengar genom att få de däck du vill bli godkända.</p>

                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-12 section-space--top--60">
                    {/* <BlogComment/> */}
                  </div>
                </div>
              </div>
            </Col>
          </Row>
        </Container>
      </section>
      <Footer />
    </Layout>
  );
};

export default sammansatta;
