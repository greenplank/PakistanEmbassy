import React, { useState } from "react";
import Link from "next/link";
import { Container } from "react-bootstrap";

const AterfarsaljareTextSection = () => {
    return (
        <section className=" text-center pt-120 pb-120">


            <Container>
                <div className="text-center block-title" >
                    <h5>Hitta den återförsäljare av Green Plank naturfiber komposit produkter som ligger närmast dig. Lär dig var du kan köpa Green Plank trall, staket, beklädnads material och de förnödenheter du behöver för att slutföra ditt nya projekt.</h5>
                </div>
                <div>
                <iframe src="https://storage.googleapis.com/greenplankdata1/index.html" width="100%" height="600px" scrolling="no" frameborder="no" allowtransparency="true"></iframe>
                </div>  
            </Container>
        </section>
    );
};

export default AterfarsaljareTextSection;
