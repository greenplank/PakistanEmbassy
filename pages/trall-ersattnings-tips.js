import React from "react";
import Layout from "../components/layout";
import HeaderTwo from "../components/header/header-two";
import StickyHeader from "../components/header/sticky-header";
import PageHeader from "../components/page-header";
import { Container, Row, Col } from "react-bootstrap";
import blogImg from "../assets/images/blog/Trall-Ersättnings.webp";
import Footer from "../components/footer";
import Head from "next/head";

const trallersattnings = () => {
  return (
    <Layout pageTitle="trall-ersattnings-tips">
      <HeaderTwo />
      <StickyHeader />
      <PageHeader title="trall-ersattnings-tips" crumbTitle="trall-ersattnings-tips" />
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
                                <h2 className="title">Trall Ersättnings Tips</h2>
                                <div className="mb-30">
                                    <p>Funderar du på att byta ut ditt däck eller installera ett nytt däck? Gör inte ett köp förrän du tittar på Green Plank® kompositplattor med lågt underhåll. Förr i tiden var det enda valet när du byggde ett däck att gå med tryckbehandlat trä. Även om detta var ett framsteg i förhållande till obehandlat trä, var det fortfarande mycket arbete och underhåll involverat i dessa typer av däck, och de hade fortfarande en relativt kort livslängd. Idag, med framstegen inom sammansatta byggmaterial på marknaden, har husägare några intressanta alternativ när de väljer rätt däckmaterial. Att känna till kostnaderna i förväg kan också hjälpa dig att fatta rätt beslut när det gäller att välja trallmaterial och vem du ska anställa för att göra jobbet.</p>
                                    <p className="mb-30 mt-30">Det finns många anledningar till att välja Green Plank® kompositplattor med lågt underhåll än traditionellt trä. Nedan listas några av de bästa anledningarna till att välja detta revolutionerande byggmaterial.</p>
                                    <h3 className="mb-30 mt-30">Däck med lågt underhåll</h3>
                                    <p className="mb-30 mt-30">Till skillnad från traditionellt trä, motstår Green Plank® lågt underhållsplattor sol- och vattenskador. Vad detta betyder är att ditt däck kommer att behålla sin färg och form i flera år utan att behöva regelbundet underhåll från dig. Ingen slipning, färgning, oljning eller behandling behövs, vilket sparar mycket tid och pengar under hela ditt däck. Eftersom Green Plank® kompositplattor med låg underhållsvinkel inte vrids eller ruttnar behöver du aldrig byta ut skadade brädor. Efter ett år med ett Green Plank®-kompositdäck med lågt underhåll undrar du varför du inte bytte ut ditt gamla däck tidigare!</p>
                                    <h3 className="mb-30 mt-30">Hållbart däck</h3>
                                    <p className="mb-30 mt-30">Green Plank tillverkar ett sådant hållbart trallmaterial att vi erbjuder en begränsad 15-årig bostadsgaranti vid varje köp. Green Plank® kompositprodukter med lågt underhåll är verkligen tillverkade för att klara tidens test. Pigmenten som används för att färga Green Plank® är UV-beständiga, vilket innebär att de bleknar mycket långsammare än traditionella fläckar på trä, så ditt däck kommer att fortsätta att se vackert ut i många år.</p>
                                    <h3 className="mb-30 mt-30">Barfota däck</h3>
                                    <p className="mb-30 mt-30">Green Plank®-plattor med lågt underhåll uppfyller de internationella standarderna för halkfria ytor. Materialet splittras inte, så du behöver inte oroa dig för att få smärtsamma splinter i dina händer och bara fötter. Vissa av Green Plank®-kompositprodukter med lågt underhåll är till och med brandbeständiga, vilket kan vara en ovärderlig funktion i händelse av en liten eld som startas av en grill eller eldstad.</p>
                                    <h3 className="mb-30 mt-30">Öka värdet på ditt hem</h3>
                                    <p className="mb-30 mt-10">Om du utformar ditt däck rätt kan du inte bara öka din livskvalitet utan också öka ditt hems värde genom att lägga till ett Green Plank®-kompositdäck med lågt underhåll. Om du bygger ett icke-rektangulärt däck och arbetar för att göra utrymmet till en förlängning av ditt vardagsrum kan ditt däck ge en avkastning på 80-100% på din investering när du säljer ditt hem.</p> 
                                    <h3 className="mb-30 mt-30">Miljövänligt däck</h3>
                                    <p className="mb-30 mt-10">Inga träd klipps någonsin för att skapa Green Plank® kompositprodukter med lågt underhåll Istället är kompositen tillverkad av trämjöl som återvunnits från träbearbetningsindustrin, återvunnen och återvunnen plast och tillsatser med extruderingssystemet. Dessa material går annars oanvända på deponier. Att använda hållbara material och gröna tillverkningsprocesser är en policy som berör allt Green Plank gör.</p>
                                    <p className="mb-30 mt-10"><strong>Tips:</strong> Inspektera bjälkarna och stolparna på den gamla däckramen med avseende på röta och andra skador. Kontrollera avståndet mellan centrum och mitt mellan golvbjälken. Green Plank® kompositdäckbrädor med lågt underhåll kräver att bjälkarna måste vara maximalt 40 cm c / c för bostadsdäck. För kommersiella däck skulle det vara 25 cm eller mindre i mitten.</p>
                                    
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

export default trallersattnings;
