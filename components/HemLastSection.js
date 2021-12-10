import React, { useState } from "react";
import Link from "next/link";
import { Container } from "react-bootstrap";
import bgImage from "../assets/images/backgrounds/5-1-1024x273.webp";
import heart from "../assets/images/shapes/192-by-192.png";

const HemLastSection = () => {
    return (
        <section className=" text-center pt-10 pb-20">


            <Container>
                <div className="text-center block-title" >
                    <h3 className="block title" style={{ marginBottom: "1em" }}>
                        <img src={heart} width="15" alt="" />
                        Green Plank komposittrall jämfört med trä
                    </h3>
                    <h4>
                        När man jämför Komposit vs Trä är hållbarhet en av de största skillnaderna. Sedan 1980 har träplastkomposit, även känt som WPC, träalternativ eller naturfibrer komposit (NFC) snabbt blivit det snabbast växande terrassmaterialet för bostäder och kommersiellt bruk.
                        Många husägare väljer trädäck eftersom det är bekant, lättillgängligt och prisvärt. Samtidigt orsakar trästycksproblem som splinter, röta och högt underhåll många huvudvärk.
                    </h4>
                    <h5>Även om träplattor i komposit är lättare att underhålla, oroar vissa husägare att kompositer inte ser lika bra ut som trä. Green Plank har dock utvecklat kompositer som efterliknar det rika, naturliga utseendet på trä utan besväret med att underhålla ett trädäck.
                        Green Plank kompositplattor är ett miljövänligt träalternativ som kombinerar återvunnen plast och trä / ris skalfibrer. Green Plank komposittrall är lätt tillgänglig i de flesta stora byggvaruaffärer i hela Europa.</h5>
                </div>
            </Container>
        </section>
    );
};

export default HemLastSection;
