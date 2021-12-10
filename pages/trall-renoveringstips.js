import React from "react";
import Layout from "../components/layout";
import HeaderTwo from "../components/header/header-two";
import StickyHeader from "../components/header/sticky-header";
import PageHeader from "../components/page-header";
import { Container, Row, Col } from "react-bootstrap";
import blogImg from "../assets/images/blog/Trall-renoverings-tips.webp";
import Footer from "../components/footer";
import Head from "next/head";

const trallrenoveringstips = () => {
  return (
    <Layout pageTitle="trall-renoveringstips">
      <HeaderTwo />
      <StickyHeader />
      <PageHeader title="Trall-renoveringstips" crumbTitle="trall-renoveringstips" />
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
                                <h2 className="title">Däck renoveringstips</h2>
                                <div className="mb-30">
                                    <p>När ditt vanliga trädäck spricker, rullar sig och helt enkelt blir löst, är det dags att bygga om ditt tralldäck. Olja och måla är en populär renoveringsmetod på trädäck, men varför stanna där? Ersätt ditt vanliga trädäck med väderresistent, miljövänligt och låg-underhålls Green Plank® däck istället. Det är kanske bara nödvändigt att ta bort ditt gamla trädäck och ersätta med Green Plank® low-maintenance komposittrall boards. </p>
                                    <p>När du renoverar ditt däck är det kanske det viktigaste att veta; arbetar du med det du har?</p>
                                    <h3 className="mb-30 mt-30">Gör du det själv eller använder du en entreprenör?</h3>
                                    <p className="mb-30 mt-30">Är du händig med hammaren och du överväger att installera ditt egna däck? Gör-det-själv däck byggande kan vara en givande och utmanande erfarenhet. Men det kan också eskalera snabbt och bli din värsta mardröm. Även om du har erfarenhet sedan tidigare att bygga däck, så är där flera anledningar till att detta jobb är till för proffsen. Ställ dig dessa frågor: yourself:</p>
                                    <h4 className="mb-30 mt-30">Har du tiden?</h4>
                                    <p className="mb-30 mt-30">En stor inverkan är just tiden. Den kan förstöra din dröm att bygga ett vackert tralldäck, framförallt om du jobbar 7 till 16 och bara kan jobba på din dröm på helgerna. Ibland är det svårt att hitta tiden även på helgen. En entreprenör eller byggare kommer inte bara få jobbet klart snabbt, utan du kommer veta exakt när ditt däck är klart, då de jobbar efter ett tidschema.</p>
                                    <h4 className="mb-30 mt-30">Har du verktygen?</h4>
                                    <p className="mb-30 mt-30">Bara för att du har en hammare och en såg betyder inte det att du är snickare. Spikpistoler, skruvdragare, skottkärror, grävare till stolparna och alla grundläggande verktyg, de är ett måste att ha när man bygger däck. Om du planerar att köpa verktyg till att bygga ditt däck, är det bättre du istället anställer ett proffs som redan har dessa verktyg för att få klart jobbet.</p>
                                    <h4 className="mb-30 mt-30">Har du försäkringen?</h4>
                                    <p className="mb-30 mt-30">En professionell snickare har försäkringarna de behöver ifall ett problem skulle dyka upp. Om material är skadade eller blir stulen under konstruktionen så är byggarens riskförsäkring det enda sättet att ta igen förlusterna. Dessutom, om någon skulle bli skadad under tiden bygget sker (snickaren, du eller någon i din familj) så har arbetarna en kompensation för att täcka skadorna och/eller olyckan. Detta frigör dig från alla ekonomiska åtaganden.</p>
                                    <h3 className="mb-30 mt-30">Material</h3>
                                    <p className="mb-30 mt-30">De svåraste beslutet att göra när man bygger ett däck är vilket material man ska använda sig utav. De skiljer sig väldigt mycket mellan de olika, det finns en enorm variation att välja mellan och även priser och kvalitén skiljer sig. Om du vill ha miljövänligt samt familjevänligt, dvs det är ingen fara för barnen att springa omkring på – då är Green Plank® lrätt val!</p>
                                    <h3 className="mb-30 mt-30">Tralldäcks checklista:</h3>
                                   
                                       <strong>1. </strong>Använd dolda fästsystem istället för skruvar där “huvudet” syns och man kan skada sig på<br/>
                                       <strong>2. </strong>Alla skruvar, bultar och spikar måste vara utav rostfritt stål eller vara galvaniserad<br/>
                                       <strong>3. </strong>Försäkra dig om att ditt däck är starkt nog att hålla för dina besök, räkna på att varje fullvuxen person väger 70-100 kg.<br/>
                                       <strong>4. </strong>Se till så att ditt räcke görs enligt den nuvarande byggstandarden<br/>
                                       <strong>5. </strong>Leave a 3mm – 5mm gap between the decking boards<br/>
                                       <strong>6. </strong>Lämna 3-5 mm mellanrum mellan däckbrädorna.<br/>
                                    
                                    <p className="mb-30 mt-30"><strong>Tips:</strong>Pilotborra varje skruvhål, eftersom gamla balkar är torra och hårda. Om du inte använder ett pilothål kan däckskruvar skjuvas av i det härdade träet.</p>
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

export default trallrenoveringstips;
