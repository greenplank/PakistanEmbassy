import React from "react";
import Layout from "../components/layout";
import HeaderTwo from "../components/header/header-two";
import StickyHeader from "../components/header/sticky-header";
import PageHeader from "../components/page-header";
import Grid from "@material-ui/core/Grid";
import VideoCard2 from "../components/header/videoCard2";
import { Container, Row, Col } from "react-bootstrap";
import BrandCarousel from "../components/brand-carousel";
import Footer from "../components/footer";
import Head from "next/head";

const Rengoring = () => {
  return (
    <>
      <Head>
        <title>Rengöring</title>
        <meta name="title" content="Trall rengöring - Hur man rengör ett trätrall ordentligt?" />
        <meta name="description" content="Låt ditt trall se ut som nytt med underhåll under hela året. Regelbunden underhåll säkerställer att den är beboelig och säker." />
      </Head>
      <Layout pageTitle="Rengoring">
        <HeaderTwo />
        <PageHeader title="Rengoring" crumbTitle="Rengoring" />
        <StickyHeader />
        <VideoCard2 />
        <section className="about-one pt-40 pb-40">
          <Container>
            <Row style={{ marginBottom: "4em" }}>
              <Col lg={12}>
                <h2 className="title mt-60">Naturlig vittring och färgförskjutning</h2>
                <div className="desc mb-30">
                  <p>Under de första månaderna efter installationen kommer Green Plank®-kompositprodukter att naturligt skifta färg när det börjar vädras till en något ljusare nyans än den ursprungliga färgen som köpts. Liksom fint trägolv kommer de flesta färgförändringar att ske under de första tre till sex månaderna. Efter detta skede kommer Green Plank®-kompositprodukter att vittra naturligt och vackert. Inkonsekvent eller ojämn exponering för sol och element gör att däcket kan vittra ojämnt. Även om detta tillstånd är tillfälligt kan du förhindra ojämn exponering genom att inte täcka däcket med mattor eller möbler under de första veckorna.</p>


                  <Grid container spacing={3}>
                    <Grid item xs={12} sm={4}>
                      <blockquote className="blockquote mt-30 mb-30">
                        <h3 className="mt-30 mb-30 text-center">Smuts eller skräp</h3>
                        <p className="text-center">Rengör terrassen för att avlägsna smuts eller skräp med varmt tvålvatten och en mjuk borste. Använd vanlig flytande tvål / tvättmedel som används i alla hushåll</p>
                      </blockquote>
                    </Grid>
                    <Grid item xs={12} sm={4}>
                      <blockquote className="blockquote mt-30 mb-30">
                        <h3 className="mt-30 mb-30 text-center">Mögel</h3>
                        <p className="text-center">Om skräp som pollen och smuts får stanna kvar på däcksytan kan mögel äta av biofilmen. Använd en slang och varmt tvålvatten med en mjuk borste för att ta bort mat källan och mögel.</p>
                      </blockquote>
                    </Grid>
                    <Grid item xs={12} sm={4}>
                      <blockquote className="blockquote mt-30 mb-30">
                        <h3 className="mt-30 mb-30 text-center">Is och snö</h3>
                        <p className="text-center">Kalciumklorid eller bergsalt, som finns i många hemcentra, smälter is vid trall. Skölj av när det är möjligt. Använd inte metallskyfflor och skarpa verktyg: de kan skada terrassytan.</p>
                      </blockquote>
                    </Grid>
                  </Grid>

                  <h2 className="title mt-60">Vatten (garvsyra) Fläckar</h2>

                  <p>Garvsyrefläckar förekommer naturligt i alla träslag och migrerar ibland till ytan i kompositplattor där ytfibrer utsätts för sol och vatten. Garvsyrefläckar kan förekomma under eller strax efter installationen. Garvsyrefläckar försvinner med tiden. Beroende på säsong kan det ta flera veckor till flera månader. När Garvsyrefläckarna försvinner när väderprocessen är klar visas de inte igen. För att påskynda borttagningen av Garvsyra, använd varmt tvålvatten eller annat kommersiellt rengöringsmedel för komposittrall och en mjuk borste. Om du använder en kommersiell rengöring av komposittrall, följ tillverkarens anvisningar.</p>


                  <Grid container spacing={3}>
                    <Grid item xs={12} sm={4}>
                      <blockquote className="blockquote mt-30 mb-30">
                        <h3 className="mt-30 mb-30 text-center">Krita</h3>
                        <p className="text-center">Alla färgade krita linjer kan bli permanenta. Att skrubba området med varmt tvålvatten och en mjuk borste kan lossna en del av kritan. Du behöver inga skadliga kemikalier.</p>
                      </blockquote>
                    </Grid>
                    <Grid item xs={12} sm={4}>
                      <blockquote className="blockquote mt-30 mb-30">
                        <h3 className="mt-30 mb-30 text-center">Olja / fett / matfläckar</h3>
                        <p className="text-center">Allt matspill bör tas bort så snart som möjligt. För att ta bort, skölj med en slang och använd varmt tvålvatten och en mjuk borste för att ta bort spill från ytan. Skölj med varmt vatten.</p>
                      </blockquote>
                    </Grid>
                    <Grid item xs={12} sm={4}>
                      <blockquote className="blockquote mt-30 mb-30">
                        <h3 className="mt-30 mb-30 text-center">Bläck</h3>
                        <p className="text-center">Bläck kan vara permanent. Skurning med varmt tvålvatten kan emellertid lätta fläcken. Skölj noggrant. Använd ALDRIG klorbaserat rengöringsmedel.</p>
                      </blockquote>
                    </Grid>
                  </Grid>


                  <h2 className="mt-30 mb-30">ALLMÄN
                  </h2>
                  <p className="mt-30 mb-30">Diagrammen och instruktionerna i denna installationsguide är endast avsedda att illustrera och är inte avsedda eller underförstådda att ersätta en licensierad professionell. All konstruktion eller användning av Green Plank®-produkter måste vara i enlighet med alla lokala zon- och / eller byggregler. Konsumenten tar på sig alla risker och ansvar som är förknippade med konstruktion, underhåll och användning av produkten.</p>
                  <h2 className="mt-30 mb-30">Upphovsrätt
                  </h2>
                  <p className="mt-30 mb-30">Texten, bilderna och illustrationerna som används här är egenskaper för Green Plank AB. Reproduktion helt eller delvis i någon form eller medium utan uttryckligt skriftligt tillstånd är strängt förbjudet.</p>

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

export default Rengoring;
