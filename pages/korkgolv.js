import React from "react";
import Layout from "../components/layout";
import HeaderTwo from "../components/header/header-two";
import StickyHeader from "../components/header/sticky-header";
import PageHeader from "../components/page-header";
import { Container, Row, Col } from "react-bootstrap";
import blogImg from "../assets/images/blog/kork-golv.webp";
import Footer from "../components/footer";
import Head from "next/head";

const Korkgolv = () => {
  return (
    <Layout pageTitle="Korkgolv">
      <HeaderTwo />
      <StickyHeader />
      <PageHeader title="Korkgolv" crumbTitle="korkgolv" />
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
                        <h3 className="block_title">Korkgolv</h3>
                        <div className="desc section-space--bottom--30">
                          <p>Periderms yttersta vävnadsskikt kallas kork. Den bildas av korkkambiet. I daglig användning avser termen kork materialet från korkekens bark, från vilket korkar huvudsakligen extraheras. Kork extraheras också från barken från det asiatiska korkträdet Amur.</p>
                          <h3 style={{ marginBottom: 30, marginTop: 30 }}>Properties:</h3>
                          <p>Ett korkgolv dämpar fotstegen, isolerar nedåt och ser varmt och mysigt ut. Och det har ett annat plus: Som designgolv kan kork få sitt önskade utseende, från trä till betong.</p>
                          <p style={{ marginBottom: 30, marginTop: 30 }}>Kork är ett material med enastående egenskaper. Den är elastisk, har en mycket bra isolerande effekt och är ogenomtränglig för vatten. Inte konstigt att kork en gång användes som en flaskpropp. Men detta skulle felaktigt begränsa det naturliga materialets möjliga användningsområden. Förutom de tidigare nämnda egenskaperna är det också praktiskt, en 100 procent naturlig, förnybar råvara och med sitt trevliga utseende och känsla är den också perfekt som levande material – till exempel som korkgolv.</p>
                          <p style={{ marginBottom: 30, marginTop: 30 }}>Klassiskt läggs kork som massiva plattor som limmas på underlaget och sedan förseglas. Självhäftande kork finns i olika storlekar, format och nyanser. Färgerna på korkgolv sträcker sig från klassiska, mörka honungstoner till moderna vita och gråtoner. Även utseendet på trä, sten eller betong samt abstrakta mönster är möjliga för ett korkgolv tack vare dagens bearbetnings- och trycktekniker. Tjockleken på korkskiktet på golvet är vanligtvis mellan fyra och sex millimeter. Så här isolerar kork golvet och visar sig vara perfekt för vardagsrummet – speciellt om du har korkparkett eller korkparkett som ett alternativ till korkplattor. De redan förseglade korkplankorna kan antingen limmas på varandra eller klickas i varandra med tunga och spår. På detta sätt kan ett korkgolv också läggas flytande, dvs. det är inte anslutet till undergolvet. Om korkgolvet inte längre trivs eller om ett drag väntar kan det tas bort snabbt.</p>
                          <h3 style={{ marginBottom: 30, marginTop: 30 }}>Hur man installerar korkgolvet?
                            :</h3>
                          <p style={{ marginBottom: 30, marginTop: 30 }}>På samma sätt som laminat eller klicklinoleum kan korkparkett också läggas med lite manuell skicklighet tack vare enkla klicksystem. Det visar sig vara särskilt viktigt att ytan är helt solid, ren och jämn. Detta är det enda sättet att uppnå ett tillfredsställande resultat. Gamla beläggningar som PVC eller mattor ska tas bort helt. Om golvet visar ytterligare ojämnheter som är större än 0,2 mm per meter, måste dessa planas ut.</p>
                          <h3 style={{ marginBottom: 30, marginTop: 30 }}>Typer av korkgolv</h3>
                          <p style={{ marginBottom: 30, marginTop: 30 }}>Det finns i grund och botten tre typer av korkgolvbeläggningar: korkplattor (även kallad korkparkett), korkfärdiga golv (även kallad korkad parkett) och korkmosaik. Den så kallade rullkorken är inte en ytbeläggning, den används som underyta för andra typer av golv eftersom den har en ljudabsorberande effekt, är elastisk och samtidigt stabil.</p>
                          <h4 style={{ marginBottom: 30, marginTop: 30 }}>Korkplattor (korkparkett)</h4>
                          <p style={{ marginBottom: 30, marginTop: 30 }}>Korkplattor består av granulat eller bitar av naturlig kork med ett bindemedel. De är limmade direkt på undergolvet. De finns i en homogen eller fanerad struktur, med olika mönster och i olika färger. Ytorna finns naturliga, olja, vax, genomskinliga eller färgade och förseglade. Panelernas materialtäthet är vanligtvis mellan 420 och 480 kg / m³, särskilt slitstarkt produkter når upp till 550 kg / m³. Brädtjockleken är vanligtvis 4 mm, men brädorna 6 eller 8 mm tjocka finns också.</p>
                          <h4 style={{ marginBottom: 30, marginTop: 30 }}>Korkfärgat golv (korkfabrikat)</h4>
                          <p style={{ marginBottom: 30, marginTop: 30 }}>Prefabricerade korkgolv är prefabricerade element som kan installeras på ett flytande sätt, med en fjäder- och spåranslutning som vanligtvis går runt. De består av ett korkskikt som en yta (gjord av granuler eller bitar med ett bindemedel), en bärplatta och en motspänning, vanligtvis gjord av kork. Dessa prefabricerade element är vanligtvis cirka 12 mm tjocka och finns också i olika utföranden och panelstorlekar.</p>
                          <h4 style={{ marginBottom: 30, marginTop: 30 }}>Korkmosaik</h4>
                          <p style={{ marginBottom: 30, marginTop: 10 }}>Korkmosaik är gjord av cirkulära korkplattor. Lim och injekteringsbruk av permanent elastiskt syntetiskt harts säkerställer att golvytan är tät. Korkmosaik finns i paneler med en bärfilm på toppen som kan skalas av efter limning. Den är fuktbeständig och finns färgad, kalkad, obehandlad eller försluten utan ytterligare behandling. Olika injekteringsbruk kan användas för olika golvkrav, som finns i flera färger. Trombocyternas höjd är vanligtvis 6 mm.</p>
                          <h4 style={{ marginBottom: 30, marginTop: 30 }}>Korkgolv: rengör, underhåll, slipa ner:</h4>
                          <p style={{ marginBottom: 30, marginTop: 30 }}>Kork är ett lättskött golv. Enstaka torkningar och dammsugningar räcker för att hålla korkgolvet rent. Samtidigt säkerställer den som en naturlig produkt med dess antistatiska egenskaper mer renhet i hushållet.</p>
                          <p style={{ marginBottom: 30, marginTop: 10 }}>När du köper korkgolv ska du alltid se till att inga lösningsmedelsbaserade lacker har använts för tätning. Under en tid har det funnits många naturliga vattenbaserade hartser och tätningsvaxer som – till skillnad från många kemiska medel – inte orsakar några obehagliga ångor på det nya korkgolvet. Det mest naturliga sättet att ta hand om och förfina kork- och korkgolv är med naturliga oljor eller vaxer.</p>
                          <p style={{ marginBottom: 30, marginTop: 10 }}>Ett solid korkgolv kan då och då slipas ner och tätas igen med en tätning. Detta ger det intressanta kornet och den varma färgen på det naturliga materialet en ny glans. Var dock försiktig med utskrivna korkgolv, de kan förlora sitt yttre utseende när de slipas.</p>
                          <h4 style={{ marginBottom: 30, marginTop: 30 }}>Fördelar:</h4>
                        
                            <strong>1. </strong>Lätt att ta hand om<br/>
                            <strong>2. </strong>Fotfall och ljudabsorberande<br/>
                            <strong>3. </strong>Antistatisk<br/>
                            <strong>4. </strong>Varm under foten<br/>
                            <strong>5. </strong>Böjlig, flexibel<br/>
                            <strong>6. </strong>Isolerande<br/>
                          
                          <h4 style={{ marginBottom: "10px", marginTop: "30px" }}>Nackdelar:</h4>
                        
                            <strong>1. </strong>Expanderar, så det kan bara läggas med en expansionsfog<br/>
                            <strong>2. </strong>Inte alla korkgolv är lämpliga för golvvärme<br/>
                            <strong>3. </strong>Olämpligt för fuktiga rum som kök eller badrum<br/>
                            <strong>4. </strong>Tunga möbler kan lämna märken<br/>
                            <strong>5. </strong>För mycket solljus kan få det att blekna<br/>
                          
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

export default Korkgolv;
