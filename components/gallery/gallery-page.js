import React from "react";
import GalleryCard from "./gallery-card";
import BlockTitle from "../block-title";
import galleryImage1 from "../../assets/images/gallery/smartCap/1.webp";
import galleryImage2 from "../../assets/images/gallery/smartCap/2.webp";
import galleryImage3 from "../../assets/images/gallery/smartCap/3.webp";
import galleryImage4 from "../../assets/images/gallery/smartCap/4.webp";
import galleryImage5 from "../../assets/images/gallery/smartCap/5.webp";
import galleryImage6 from "../../assets/images/gallery/smartCap/6.webp";

import galleryImage7 from "../../assets/images/gallery/smartClassic/1.webp";
import galleryImage8 from "../../assets/images/gallery/smartClassic/2.webp";
import galleryImage9 from "../../assets/images/gallery/smartClassic/3.webp";

import galleryImage10 from "../../assets/images/gallery/PrimeCap/1.webp";
import galleryImage11 from "../../assets/images/gallery/PrimeCap/2.webp";
import galleryImage12 from "../../assets/images/gallery/PrimeCap/3.webp";

import galleryImage13 from "../../assets/images/gallery/Novofence/1.webp";
import galleryImage14 from "../../assets/images/gallery/Novofence/2.webp";
import galleryImage15 from "../../assets/images/gallery/Novofence/3.webp";
import galleryImage16 from "../../assets/images/gallery/Novofence/4.webp";
import galleryImage17 from "../../assets/images/gallery/Novofence/5.webp";
import galleryImage18 from "../../assets/images/gallery/Novofence/6.webp";
import galleryImage19 from "../../assets/images/gallery/Novofence/7.webp";
import galleryImage20 from "../../assets/images/gallery/Novofence/8.webp";
import galleryImage21 from "../../assets/images/gallery/Novofence/9.webp";
import galleryImage22 from "../../assets/images/gallery/Novofence/10.webp";
import galleryImage23 from "../../assets/images/gallery/Novofence/11.webp";
import galleryImage24 from "../../assets/images/gallery/Novofence/12.webp";

import galleryImage25 from "../../assets/images/gallery/Novoclad/1.webp";
import galleryImage26 from "../../assets/images/gallery/Novoclad/2.webp";
import galleryImage27 from "../../assets/images/gallery/Novoclad/3.webp";

import galleryImage28 from "../../assets/images/gallery/Naturplank/1.webp";
import galleryImage29 from "../../assets/images/gallery/Naturplank/2.webp";
import galleryImage30 from "../../assets/images/gallery/Naturplank/3.webp";
import galleryImage31 from "../../assets/images/gallery/Naturplank/4.webp";

import galleryImage32 from "../../assets/images/gallery/MarineJumbo/1.webp";
import galleryImage33 from "../../assets/images/gallery/MarineJumbo/2.webp";
import galleryImage34 from "../../assets/images/gallery/MarineJumbo/3.webp";

import galleryImage35 from "../../assets/images/gallery/MarineCap/1.webp";
import galleryImage36 from "../../assets/images/gallery/MarineCap/2.webp";
import galleryImage37 from "../../assets/images/gallery/MarineCap/3.webp";

import galleryImage38 from "../../assets/images/gallery/Marine40/1.webp";
import galleryImage39 from "../../assets/images/gallery/Marine40/2.webp";
import galleryImage40 from "../../assets/images/gallery/Marine40/3.webp";
import galleryImage41 from "../../assets/images/gallery/Marine40/4.webp";
import galleryImage42 from "../../assets/images/gallery/Marine40/5.webp";
import galleryImage43 from "../../assets/images/gallery/Marine40/6.webp";

import galleryImage44 from "../../assets/images/gallery/EverDeck/2.webp";
import galleryImage45 from "../../assets/images/gallery/EverDeck/3.webp";
import galleryImage46 from "../../assets/images/gallery/EverDeck/4.webp";
import galleryImage47 from "../../assets/images/gallery/EverDeck/5.webp";
import galleryImage48 from "../../assets/images/gallery/EverDeck/6.webp";
import galleryImage49 from "../../assets/images/gallery/EverDeck/7.webp";

import galleryImage50 from "../../assets/images/gallery/kompositeBalcony/1.webp";
import galleryImage51 from "../../assets/images/gallery/kompositeBalcony/2.webp";
import galleryImage52 from "../../assets/images/gallery/kompositeBalcony/3.webp";

import galleryImage53 from "../../assets/images/gallery/ClassicJumbo/1.webp";
import galleryImage54 from "../../assets/images/gallery/ClassicJumbo/2.webp";
import galleryImage55 from "../../assets/images/gallery/ClassicJumbo/3.webp";
import galleryImage56 from "../../assets/images/gallery/ClassicJumbo/4.webp";
import galleryImage57 from "../../assets/images/gallery/ClassicJumbo/5.webp";
import galleryImage58 from "../../assets/images/gallery/ClassicJumbo/6.webp";

import galleryImage59 from "../../assets/images/gallery/ClassicKompositrall/1.webp";
import galleryImage60 from "../../assets/images/gallery/ClassicKompositrall/2.webp";
import galleryImage61 from "../../assets/images/gallery/ClassicKompositrall/3.webp";
import galleryImage62 from "../../assets/images/gallery/ClassicKompositrall/4.webp";
import galleryImage63 from "../../assets/images/gallery/ClassicKompositrall/5.webp";
import galleryImage64 from "../../assets/images/gallery/ClassicKompositrall/6.png";

const GalleryPage = () => {
  return (
    <section className="gallery-page pt-120 pb-120">
      <div className="container">
        <BlockTitle
          title={`Smart Cap komposittrall`}
        />
        <div className="gallery-3-col">
          <GalleryCard image={galleryImage1} />
          <GalleryCard image={galleryImage2} />
          <GalleryCard image={galleryImage3} />
          <GalleryCard image={galleryImage4} />
          <GalleryCard image={galleryImage5} />
          <GalleryCard image={galleryImage6} />
        </div>
      </div>
      <div className="container mt-80">
        <BlockTitle
          title={`Smart Classic komposittrall`}
        />
        <div className="gallery-3-col">
          <GalleryCard image={galleryImage7} />
          <GalleryCard image={galleryImage8} />
          <GalleryCard image={galleryImage9} />
        </div>
      </div>
      <div className="container mt-80">
        <BlockTitle
          title={`Primacap Komposit Fasadbeklädnad`}
        />
        <div className="gallery-3-col">
          <GalleryCard image={galleryImage10} />
          <GalleryCard image={galleryImage11} />
          <GalleryCard image={galleryImage12} />
        </div>
      </div>
      <div className="container mt-80">
        <BlockTitle
          title={`Novofence Komposit Staket System`}
        />
        <div className="gallery-3-col">
          <GalleryCard image={galleryImage13} />
          <GalleryCard image={galleryImage14} />
          <GalleryCard image={galleryImage15} />
          <GalleryCard image={galleryImage16} />
          <GalleryCard image={galleryImage17} />
          <GalleryCard image={galleryImage18} />
          <GalleryCard image={galleryImage19} />
          <GalleryCard image={galleryImage20} />
          <GalleryCard image={galleryImage21} />
          <GalleryCard image={galleryImage22} />
          <GalleryCard image={galleryImage23} />
          <GalleryCard image={galleryImage24} />
        </div>
      </div>
      <div className="container mt-80">
        <BlockTitle
          title={`Novoclad Komposit Fasadbeklädnad`}
        />
        <div className="gallery-3-col">
          <GalleryCard image={galleryImage25} />
          <GalleryCard image={galleryImage26} />
          <GalleryCard image={galleryImage27} />
        </div>
      </div>
      <div className="container mt-80">
        <BlockTitle
          title={`Naturplank Solid Komposit Styrelser`}
        />
        <div className="gallery-3-col">
          <GalleryCard image={galleryImage28} />
          <GalleryCard image={galleryImage29} />
          <GalleryCard image={galleryImage30} />
          <GalleryCard image={galleryImage31} />
        </div>
      </div>
      <div className="container mt-80">
        <BlockTitle
          title={`MarineJumbo Solid komposittrall`}
        />
        <div className="gallery-3-col">
          <GalleryCard image={galleryImage32} />
          <GalleryCard image={galleryImage33} />
          <GalleryCard image={galleryImage34} />
        </div>
      </div>
      <div className="container mt-80">
        <BlockTitle
          title={`Marine Cap Solid komposittrall`}
        />
        <div className="gallery-3-col">
          <GalleryCard image={galleryImage35} />
          <GalleryCard image={galleryImage36} />
          <GalleryCard image={galleryImage37} />
        </div>
      </div>
      <div className="container mt-80">
        <BlockTitle
          title={`Marine40 Solid komposittrall`}
        />
        <div className="gallery-3-col">
          <GalleryCard image={galleryImage38} />
          <GalleryCard image={galleryImage39} />
          <GalleryCard image={galleryImage40} />
          <GalleryCard image={galleryImage41} />
          <GalleryCard image={galleryImage42} />
          <GalleryCard image={galleryImage43} />
        </div>
      </div>
      <div className="container mt-80">
        <BlockTitle
          title={`EverComposite Däck komposittrall`}
        />
        <div className="gallery-3-col">
          <GalleryCard image={galleryImage44} />
          <GalleryCard image={galleryImage45} />
          <GalleryCard image={galleryImage46} />
          <GalleryCard image={galleryImage47} />
          <GalleryCard image={galleryImage48} />
          <GalleryCard image={galleryImage49} />
        </div>
      </div>
      <div className="container mt-80">
        <BlockTitle
          title={`Komposit balkongplattor`}
        />
        <div className="gallery-3-col">
          <GalleryCard image={galleryImage50} />
          <GalleryCard image={galleryImage51} />
          <GalleryCard image={galleryImage52} />
        </div>
      </div>
      <div className="container mt-80">
        <BlockTitle
          title={`Classic Jumbo komposittrall`}
        />
        <div className="gallery-3-col">
          <GalleryCard image={galleryImage53} />
          <GalleryCard image={galleryImage54} />
          <GalleryCard image={galleryImage55} />
          <GalleryCard image={galleryImage56} />
          <GalleryCard image={galleryImage57} />
          <GalleryCard image={galleryImage58} />
        </div>
      </div>
      <div className="container mt-80">
        <BlockTitle
          title={`Classic komposittrall`}
        />
        <div className="gallery-3-col">
          <GalleryCard image={galleryImage59} />
          <GalleryCard image={galleryImage60} />
          <GalleryCard image={galleryImage61} />
          <GalleryCard image={galleryImage62} />
          <GalleryCard image={galleryImage63} />
          <GalleryCard image={galleryImage64} />
        </div>
      </div>
    </section>
  );
};

export default GalleryPage;
