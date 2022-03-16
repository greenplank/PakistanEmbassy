import React from "react";
import Link from "next/link";

const NavLinks = ({ extraClassName }) => {
  const handleDropdownStatus = (e) => {
    let clickedItem = e.currentTarget.parentNode;
    clickedItem.querySelector(".dropdown-list").classList.toggle("show");
  };
  return (
    <ul className={`main-menu__list ${extraClassName}`}>
      <li>
        <Link href="/">
          <a>HOME</a>
        </Link>
      </li>
      <li className="dropdown">
        <Link href="#">
          <>
            <a>ABOUT PAKISTAN</a>
            <button
              aria-label="dropdown toggler"
              onClick={handleDropdownStatus}
            >
              <i className="fa fa-angle-down"></i>
            </button>
          </>
        </Link>
        <ul className="dropdown-list">
          <li>
            <Link href="/basic-facts/">
              <a>Basic Facts</a>
            </Link>
          </li>
          <li>
            <Link href="/about-pakistan/">
              <a>History</a>
            </Link>
          </li>
          <li>
            <Link href="/visit-pakistan">
              <a>Visit Pakistan</a>
            </Link>
          </li>
          <li>
            <Link href="/study-in-pakistan">
              <a>Study in Pakistan</a>
            </Link>
          </li>
        </ul>
      </li>
      <li className="dropdown">
        <Link href="#">
          <>
            <a>MISSION</a>
            <button
              aria-label="dropdown toggler"
              onClick={handleDropdownStatus}
            >
              <i className="fa fa-angle-down"></i>
            </button>
          </>
        </Link>
        <ul className="dropdown-list">
          <li>
            <Link href="/our_mission">
              <a>Our Mission</a>
            </Link>
          </li>
          <li>
            <Link href="/ambassador">
              <a>Ambassador</a>
            </Link>
          </li>
          <li>
            <Link href="/previous_ambassdors">
              <a>Previous Ambassadors </a>
            </Link>
          </li>
          <li>
            <Link href="/holiday-days">
              <a>Holidays</a>
            </Link>
          </li>
        </ul>
      </li>
      <li className="dropdown">
        <Link href="#">
          <>
            <a>BILATERAL RELATIONS</a>
            <button
              aria-label="dropdown toggler"
              onClick={handleDropdownStatus}
            >
              <i className="fa fa-angle-down"></i>
            </button>
          </>
        </Link>
        <ul className="dropdown-list">
          <li>
            <Link href="/diplomatic_relations">
              <a>Diplomatic Relations</a>
            </Link>
          </li>
          <li>
            <Link href="/economic_relations">
              <a>Economic Relations</a>
            </Link>
          </li>
          <li>
            <Link href="/pakistani_diaspora">
              <a>Pakistani Diaspora in Sweden and Finland </a>
            </Link>
          </li>
        </ul>
      </li>

      <li className="dropdown">
        <Link href="#">
          <>
            <a>CONSULAR SERVICES</a>
            <button
              aria-label="dropdown toggler"
              onClick={handleDropdownStatus}
            >
              <i className="fa fa-angle-down"></i>
            </button>
          </>
        </Link>
        <ul className="dropdown-list">
          <li>
            <Link href="/book-appointment">
              <a>Book an appointment</a>
            </Link>
          </li>
          <li>
            <Link href="/passport-application">
              <a>Application for passport</a>
            </Link>
          </li>
          <li>
            <Link href="/nicop-cnic-poc">
              <a>Application for NADRA</a>
            </Link>
          </li>
          <li>
            <Link href="/e-Visa">
              <a>E-Visa Service</a>
            </Link>
          </li>

          <li>
            <Link href="/attestation">
              <a>Attestation of Documents</a>
            </Link>
          </li>
          <li>
            <Link href="/registration-of-newborn">
              <a>Registration of Birth</a>
            </Link>
          </li>
          <li>
            <Link href="/letter-of-administration-succession-certificate-by-nadra">
              <a>Succession Certificate</a>
            </Link>
          </li>
          <li>
            <Link href="/grievance-commissioner-cell-for-overseas-pakistanis">
              <a>Grievance commissioner cell for overseas Pakistanis </a>
            </Link>
          </li>
          <li>
            <Link href="/PMDU">
              <a>PMDU</a>
            </Link>
          </li>
          <li>
            <Link href="/faqs">
              <a>FAQ</a>
            </Link>
          </li>
          <li>
            <Link href="/medical-tourism-initiative">
              <a>Medical tourism initiative</a>
            </Link>
          </li>
          <li>
            <Link href="/police-character-certificate-verification">
              <a>Police character certificate verifications</a>
            </Link>
          </li>

          <li>
            <Link href="/federal-tax-ombudsman-facilitation-desks-at-international-airports-and-customs-border-stations">
              <a>Tax ombudsman </a>
            </Link>
          </li>
          <li>
            <Link href="/renunciation">
              <a>Renunciation</a>
            </Link>
          </li>
        </ul>
      </li>

      <li className="dropdown">
        <Link href="#">
          <>
            <a>BUSINESS AND INVESTMENT RELATIONS</a>
            <button
              aria-label="dropdown toggler"
              onClick={handleDropdownStatus}
            >
              <i className="fa fa-angle-down"></i>
            </button>
          </>
        </Link>
        <ul className="dropdown-list">
          <li>
            <Link href="/commercial-section">
              <a>Commercial Section</a>
            </Link>
          </li>
          <li>
            <Link href="/trade-statistics">
              <a>Invest in Pakistan</a>
            </Link>
          </li>
          <li>
            <Link href="/export-import-rules-sweden">
              <a>Import and Export Process</a>
            </Link>
          </li>

          <li>
            <Link href="/helpful-organizations-in-sweden">
              <a>Commercial and Economic Links</a>
            </Link>
          </li>
          <li>
            <Link href="/vehicle-gift-undertaking">
              <a>Vehicle Gift Undertaking</a>
            </Link>
          </li>
          <li>
            <Link href="/roshan-digital-account">
              <a>Roshan Digital Account</a>
            </Link>
          </li>
          <li style={{ fontSize: "4rem" }}>
            <Link href="/faq">
              <a>FAQ</a>
            </Link>
          </li>
        </ul>
      </li>
      <li>
        <Link href="/urdu-language">
          <a>URDU LANGUAGE TEACHING RESOURCES</a>
        </Link>
      </li>
      <li>
        <Link href="/Tourism">
          <a>TOURISM</a>
        </Link>
      </li>
      <li>
        <Link href="/events">
          <a>MEDIA EVENTS</a>
        </Link>
      </li>
      <li>
        <Link href="/ImportantWebsites">
          <a>Important Websites</a>
        </Link>
      </li>
      <li>
        <Link href="/contact-us">
          <a>CONTACT US</a>
        </Link>
      </li>
    </ul>
  );
};

export default NavLinks;
