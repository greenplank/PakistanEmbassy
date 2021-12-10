import React, { useEffect, useRef } from "react";
// import pdf from "../assets/pdfs/Datablad-Smart-Decking.pdf"

export default function() {
  const containerRef = useRef(null);

  useEffect(() => {
    let instance, PSPDFKit;
    (async function() {
      PSPDFKit = await import("pspdfkit");
      instance = await PSPDFKit.load({
        container: containerRef.current,
        document: "/Broschyr-SV.pdf",
        baseUrl: `${window.location.protocol}//${window.location.host}/`
      });
    })();

    return () => PSPDFKit && PSPDFKit.unload(containerRef.current);
  }, []);

  return <div ref={containerRef} style={{ height: "100vh"}}/>
  
}