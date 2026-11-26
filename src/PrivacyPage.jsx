import wordmark from "./assets/heya-wordmark.svg";
import "./App.css";

// Company details from the owner, 26 Nov 2026. Written for the Australian
// Privacy Principles; have it reviewed before publishing. Never name the
// card payment provider.
const COMPANY = "Hida Pos Pty Ltd";
const ABN = "72 655 096 585";
const EMAIL = "admin@heyapos.com";
const UPDATED = "26 November 2026";

function Privacy() {
  return (
    <>
      <header className="site-header wrap">
        <a href="/" className="brand-link" aria-label="Heya home">
          <img
            className="wordmark"
            src={wordmark}
            alt="Heya"
            width="147"
            height="70"
          />
        </a>
        <a className="text-link legal-back" href="/">
          Back to heyapos.com
        </a>
      </header>
      <main className="legal wrap">
        <h1>Privacy policy</h1>
        <p className="legal-updated">Last updated {UPDATED}</p>

        <p>
          This policy explains how {COMPANY} (ABN {ABN}), trading as Heya POS
          (“Heya”, “we”, “us”), handles personal information. We follow the
          Australian Privacy Principles in the <em>Privacy Act 1988</em> (Cth).
        </p>

        <h2>Who this policy covers</h2>
        <ul>
          <li>Salon owners and staff who use Heya.</li>
          <li>
            Clients of those salons, when they book, check in, pay or receive
            messages through Heya.
          </li>
          <li>People who visit this website or contact us.</li>
        </ul>

        <h2>What we collect</h2>
        <ul>
          <li>
            <strong>Salon details:</strong> business name, address, contact
            details, opening hours, services and prices, and billing details.
          </li>
          <li>
            <strong>Staff details:</strong> names, contact details, roster,
            clock-in times and the actions they take in Heya.
          </li>
          <li>
            <strong>Client details:</strong> name, phone number, email, birthday
            if given, bookings, visit history, notes the salon adds, loyalty and
            gift card balances, and payment records.
          </li>
          <li>
            <strong>Card payments:</strong> card payments are handled by our
            payment partner. We do not store full card numbers.
          </li>
          <li>
            <strong>Website and app use:</strong> basic technical information
            such as your device, browser and IP address, used to keep Heya
            working and secure.
          </li>
        </ul>

        <h2>How we collect it</h2>
        <p>
          Mostly from you directly: when a salon signs up or uses Heya, when a
          client books, checks in or pays, or when you call, message or email
          us. Salons may also ask us to move their records across from another
          system.
        </p>

        <h2>Why we use it</h2>
        <ul>
          <li>
            To run Heya: bookings, reminders, checkout, loyalty and reports.
          </li>
          <li>
            To send booking confirmations, reminders and other messages the
            salon has switched on.
          </li>
          <li>To take payments and bill salons for Heya.</li>
          <li>To give support, fix problems and keep Heya secure.</li>
          <li>To improve Heya.</li>
          <li>To meet our legal obligations.</li>
        </ul>
        <p>
          We do not sell personal information. Marketing texts and emails from a
          salon are sent only when that salon chooses to, and every marketing
          message lets you opt out.
        </p>

        <h2>Salons and their clients</h2>
        <p>
          A salon decides what client information it keeps in Heya and how it
          uses it. We store and process that information on the salon’s behalf.
          If you are a salon’s client and want to see, correct or delete your
          details, you can ask the salon or contact us.
        </p>

        <h2>Who we share it with</h2>
        <p>
          We share personal information only as needed to run Heya: with the
          salon you deal with, and with service providers that host our systems,
          send texts and emails, and process payments. They may use it only to
          provide their service to us. We may also disclose information where
          the law requires it.
        </p>
        <p>
          Some of these providers store or process information outside
          Australia, including in the United States. We take reasonable steps to
          make sure they protect it.
        </p>

        <h2>Keeping it safe</h2>
        <p>
          We protect personal information with access controls, staff PINs and
          encrypted connections, and we limit who in our team can see it. We
          keep it only as long as we need it for the reasons above or as the law
          requires, then delete or de-identify it.
        </p>

        <h2>Seeing and correcting your information</h2>
        <p>
          You can ask to see or correct the personal information we hold about
          you. Contact us at <a href={`mailto:${EMAIL}`}>{EMAIL}</a>. We will
          reply within 30 days. If we can’t give you access, we will tell you
          why.
        </p>

        <h2>Complaints</h2>
        <p>
          If you have a concern about your privacy, email{" "}
          <a href={`mailto:${EMAIL}`}>{EMAIL}</a> and we will respond within 30
          days. If you are not satisfied with our answer, you can contact the
          Office of the Australian Information Commissioner at{" "}
          <a href="https://www.oaic.gov.au" rel="noopener noreferrer">
            oaic.gov.au
          </a>
          .
        </p>

        <h2>Contact us</h2>
        <p>
          {COMPANY}, trading as Heya POS
          <br />
          Email: <a href={`mailto:${EMAIL}`}>{EMAIL}</a>
          <br />
          Phone: <a href="tel:+61423291930">0423 291 930</a>
        </p>

        <h2>Changes</h2>
        <p>
          We may update this policy. The latest version is always on this page,
          with the date it last changed.
        </p>
      </main>
      <footer className="site-footer wrap">
        <span className="footer-links">
          Heya POS © {new Date().getFullYear()}. Proudly Australian-owned and
          operated.
        </span>
      </footer>
    </>
  );
}

export default Privacy;
