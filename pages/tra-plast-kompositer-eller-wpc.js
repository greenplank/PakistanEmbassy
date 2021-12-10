import React from "react";
import Layout from "../components/layout";
import HeaderTwo from "../components/header/header-two";
import StickyHeader from "../components/header/sticky-header";
import PageHeader from "../components/page-header";
import { Container, Row, Col } from "react-bootstrap";
import blogImg from "../assets/images/blog/Trä--plast-kompositer.webp";
import Footer from "../components/footer";
import Head from "next/head";

const traPlast = () => {
  return (
    <Layout pageTitle="tra-plast-kompositer-eller-wpc">
      <HeaderTwo />
      <StickyHeader />
      <PageHeader title="Tra-plast-kompositer-eller-wpc" crumbTitle="tra-plast-kompositer" />
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
                                <h2 className="title">Trä -plast kompositer eller WPC</h2>
                                <div className="mb-30">
                                    <p>Träplastkompositer eller WPC – termen används vanligtvis för att beteckna material eller produkter gjorda av en eller flera naturliga fibrer eller mjöl och en polymer eller en blandning av polymerer. Naturfibrer och mjöl kommer från olika källor (t.ex. trä, risskal, hampa, sisal, jute, kenaf, kokosnöt, lin, mandel, bambu, gräs) och alla typer av polymerer (jungfru eller återvunnen) kan användas men för närvarande kan de vanligaste är polyvinylklorid (PVC), polypropen (PP) och högdensitetspolyeten (HDPE).</p>
                                    <p className="mb-30 mt-30">Trä-plastkompositer eller WPC blir populärare som ett säkert, miljövänligt och långvarigt material för användning i utomhusdäck, uteplatser, broar, beklädnader, parkbänkar, staket, räcken etc. Det finns också en växande marknad för potential inomhusbruk som dörrkarmar, dekor och möbler. Idag finns kompositprodukter överallt från nationalparker till din granns bakgård.</p>
                                    <p className="mb-30 mt-30">Trä-plastkompositer erbjuder ett brett spektrum av fördelar jämfört med alternativ som impregnerat trä och naturligt hållbart ceder eller redwood: väderbeständighet, lång livslängd och kräver mycket lågt underhåll. Kompositprodukter spelar också en roll för att utveckla en mer hållbar framtid: många WPC-produkter använder återvunnen plast och trä som råmaterial i tillverkningsprocessen.</p>
                                    <p className="mb-30 mt-30">Även om tekniken inte är ny, växer intresset för de nya designmöjligheterna som denna kombination av material erbjuder.</p>
                                    
                                    
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

export default traPlast;
