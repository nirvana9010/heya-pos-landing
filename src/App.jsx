import { useEffect, useRef, useState } from "react";
import {
  Check,
  ChartColumn,
  CircleDollarSign,
  Clock,
  Gift,
  Heart,
  MessageCircle,
  Menu,
  Phone,
  QrCode,
  ShoppingBag,
  Star,
  Tag,
  X,
} from "lucide-react";
import wordmark from "./assets/heya-wordmark.svg";
import salonReception from "./assets/salon-reception.webp";
import "./App.css";

const PHONE_LABEL = "0423 291 930";
const PHONE_LINK = "tel:+61423291930";
const WHATSAPP_LINK = "https://wa.me/61423291930";
// The new-salon setup form (heyapos.com/start redirects here too).
const START_URL = "https://hub.heyapos.com/start";

// The seat price salons are billed (heya-pos apps/api/src/billing/
// seat-pricing.ts: BASE_CENTS, INCLUDED_SEATS, EXTRA_SEAT_CENTS, plus GST).
// Change both together. Owner, 25 Nov 2026.
const BASE_PRICE = 69;
const INCLUDED_STAFF = 4;
const EXTRA_STAFF_PRICE = 10;

// Each claim here was checked against what every salon has today (25 Nov
// 2026). Check again before adding to it.
const REASONS = [
  {
    title: "Help when you need it.",
    text: "Message the Heya team on WhatsApp and get help straight away, Monday to Friday, 9am to 5pm. In English or Vietnamese.",
  },
  {
    title: "Booking texts included.",
    text: "Booking confirmations, 24-hour reminders and changes go out by text at no extra cost. No per-text charges.",
  },
  {
    title: "No commission. Ever.",
    text: "One monthly price. We never take a cut of your bookings, your new clients or your takings.",
  },
  {
    title: "We move you over.",
    text: "Coming from Fresha? We bring your clients, bookings and gift cards across for you.",
  },
];

const FEATURES = [
  {
    icon: <CircleDollarSign aria-hidden="true" size={20} />,
    title: "Online deposits",
    text: "Take a deposit when clients book, so a no-show doesn’t cost you the slot.",
  },
  {
    icon: <Heart aria-hidden="true" size={20} />,
    title: "Loyalty rewards",
    text: "Run a punch card or points. Clients see their rewards when they book online.",
  },
  {
    icon: <Star aria-hidden="true" size={20} />,
    title: "Google reviews",
    addOn: true,
    text: "After a visit, Heya texts your client a link to review you on Google.",
  },
  {
    icon: <QrCode aria-hidden="true" size={20} />,
    title: "Easy check-in",
    text: "Clients scan your QR code when they arrive and appear on your calendar straight away.",
  },
  {
    icon: <Gift aria-hidden="true" size={20} />,
    title: "Gift cards",
    text: "Sell gift cards at the counter or on your booking site. The balance shows at checkout.",
  },
  {
    icon: <Tag aria-hidden="true" size={20} />,
    title: "Promotions",
    text: "Set up happy hours, time-limited discounts and offers for chosen clients.",
  },
  {
    icon: <Clock aria-hidden="true" size={20} />,
    title: "Roster and timesheets",
    text: "Plan the week’s roster, and staff clock in and out on the salon tablet.",
  },
  {
    icon: <ShoppingBag aria-hidden="true" size={20} />,
    title: "Product sales",
    text: "Sell retail products at checkout and see what sold, with cost and margin.",
  },
  {
    icon: <ChartColumn aria-hidden="true" size={20} />,
    title: "Your day in numbers",
    text: "See takings, top services and how each team member is doing. Download it as a spreadsheet.",
  },
];

const INCLUDED = [
  "Your own booking site with your logo",
  "Unlimited booking texts: confirmations, 24-hour reminders and changes",
  "Online deposits",
  "Loyalty, gift cards and promotions",
  "Check-in, roster and timesheets",
  "Reports",
  "Support in English and Vietnamese, Mon–Fri 9am–5pm",
];

function Wordmark() {
  return (
    <img
      className="wordmark"
      src={wordmark}
      alt="Heya"
      width="147"
      height="70"
    />
  );
}

function Header({ onDemo }) {
  const [menuOpen, setMenuOpen] = useState(false);
  const menuButton = useRef(null);

  useEffect(() => {
    if (!menuOpen) return;
    const closeOnEscape = (event) => {
      if (event.key === "Escape") {
        setMenuOpen(false);
        menuButton.current?.focus();
      }
    };
    document.addEventListener("keydown", closeOnEscape);
    return () => document.removeEventListener("keydown", closeOnEscape);
  }, [menuOpen]);

  const close = () => setMenuOpen(false);

  return (
    <header className="site-header wrap">
      <a
        href="#home"
        className="brand-link"
        aria-label="Heya home"
        onClick={close}
      >
        <Wordmark />
      </a>
      <nav
        id="site-navigation"
        className={menuOpen ? "site-navigation is-open" : "site-navigation"}
        aria-label="Main navigation"
      >
        <a href="#why" onClick={close}>
          Why Heya
        </a>
        <a href="#features" onClick={close}>
          Features
        </a>
        <a href="#pricing" onClick={close}>
          Pricing
        </a>
        <a href="#support" onClick={close}>
          Support
        </a>
      </nav>
      <div className="header-actions">
        <button className="salon-link" onClick={onDemo}>
          Book a demo
        </button>
        <a className="button small" href={START_URL}>
          Start free trial
        </a>
        <button
          ref={menuButton}
          className="menu-toggle"
          aria-label={menuOpen ? "Close menu" : "Open menu"}
          aria-controls="site-navigation"
          aria-expanded={menuOpen}
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {menuOpen ? (
            <X aria-hidden="true" size={19} />
          ) : (
            <Menu aria-hidden="true" size={19} />
          )}
          <span>Menu</span>
        </button>
      </div>
    </header>
  );
}

function BookingPreview() {
  return (
    <figure className="booking-visual">
      <div
        className="phone"
        role="img"
        aria-label="Example booking site for The Heya Studio, showing manicure and pedicure services, appointment times and a deposit."
      >
        <div className="phone-camera" />
        <div className="phone-brand">
          <Wordmark />
          <span>The Heya Studio</span>
        </div>
        <h3>
          A little time
          <br />
          for yourself.
        </h3>
        <p>Choose your next appointment.</p>
        <div className="service-row">
          <span>
            Gel manicure<small>45 minutes</small>
          </span>
          <strong>$55</strong>
        </div>
        <div className="service-row">
          <span>
            Spa pedicure<small>60 minutes</small>
          </span>
          <strong>$65</strong>
        </div>
        <div className="phone-date">Saturday, 12 September</div>
        <div className="time-options">
          <span>10:00 am</span>
          <span>11:30 am</span>
          <span>1:00 pm</span>
          <span>2:15 pm</span>
        </div>
        <div className="phone-action">Pay $20 deposit and book</div>
      </div>
      <figcaption>An example of a salon’s booking site.</figcaption>
    </figure>
  );
}

function SupportChat() {
  return (
    <figure className="checkout-visual">
      <div
        className="receipt"
        role="img"
        aria-label="Example WhatsApp conversation: a salon asks how to add a new staff member and the Heya team replies with the steps a minute later."
      >
        <span className="paid">
          <MessageCircle size={14} aria-hidden="true" />
          WhatsApp · Heya support
        </span>
        <div className="chat-bubble salon">
          Hi Heya, how do I add a new staff member?
          <small>10:02 am</small>
        </div>
        <div className="chat-bubble heya">
          Hi! Open the Staff page, add them there and choose their services.
          Want me to walk you through it on a call?
          <small>10:03 am</small>
        </div>
        <div className="chat-bubble salon">
          Cảm ơn nhiều!
          <small>10:04 am</small>
        </div>
      </div>
      <figcaption>An example support chat.</figcaption>
    </figure>
  );
}

function PriceExample() {
  const staff = 6;
  const total = BASE_PRICE + (staff - INCLUDED_STAFF) * EXTRA_STAFF_PRICE;
  return (
    <p className="price-example">
      For example, a salon with {staff} staff pays ${total} + GST a month.
    </p>
  );
}

function App() {
  const demoDialog = useRef(null);
  const openDemo = () => demoDialog.current?.showModal();

  return (
    <>
      <a className="skip-link" href="#main-content">
        Skip to content
      </a>
      <div id="home">
        <Header onDemo={openDemo} />
        <main id="main-content">
          <section className="hero" aria-labelledby="hero-title">
            <div className="hero-text">
              <h1 id="hero-title">More time for the people in your chair.</h1>
              <p className="intro-copy">
                Heya brings your bookings, payments and clients together, so you
                can get back to the work you love.
              </p>
              <div className="actions">
                <a className="button" href={START_URL}>
                  Start free trial
                </a>
                <button className="button secondary" onClick={openDemo}>
                  Book a demo
                </button>
              </div>
              <p className="trial-note">
                14 days free. Help in English and Vietnamese.
              </p>
            </div>
            <div className="hero-photo">
              <img
                src={salonReception}
                alt="A salon owner and client talking at reception"
                width="1536"
                height="1024"
                fetchPriority="high"
              />
              <div className="photo-caption">
                <span className="check">
                  <Check aria-hidden="true" size={18} />
                </span>
                <div>
                  <strong>Next visit, booked.</strong>
                  <small>A good feeling for both of you.</small>
                </div>
              </div>
            </div>
          </section>

          <ul className="benefit-strip" aria-label="Highlights">
            <li>
              <Check aria-hidden="true" size={17} />
              Online booking
            </li>
            <li>
              <Check aria-hidden="true" size={17} />
              Online deposits
            </li>
            <li>
              <Check aria-hidden="true" size={17} />
              Loyalty rewards
            </li>
            <li>
              <Check aria-hidden="true" size={17} />
              Check-in &amp; reports
            </li>
            <li>
              <Check aria-hidden="true" size={17} />
              Support in Tiếng Việt
            </li>
          </ul>

          <section
            className="why-section wrap"
            id="why"
            aria-labelledby="why-title"
          >
            <p className="eyebrow">Why salons choose Heya</p>
            <h2 className="section-heading" id="why-title">
              Good software. People behind it.
            </h2>
            <ul className="reasons">
              {REASONS.map((reason) => (
                <li key={reason.title}>
                  <h3>{reason.title}</h3>
                  <p>{reason.text}</p>
                </li>
              ))}
            </ul>
          </section>

          <section
            className="features-section wrap"
            id="features"
            aria-labelledby="features-title"
          >
            <div className="booking-feature">
              <BookingPreview />
              <div className="feature-copy">
                <p className="eyebrow">Your own booking site</p>
                <h2 className="section-heading" id="features-title">
                  They find a time.
                  <br />
                  You find your flow.
                </h2>
                <p className="section-copy">
                  Every salon gets its own booking site with its logo, name and
                  opening hours. Clients book any time, and Heya texts and
                  emails to confirm and remind them.
                </p>
                <a className="text-link" href="#everyday">
                  See everything Heya does
                </a>
              </div>
            </div>
            <div className="feature-grid-intro" id="everyday">
              <h2 className="section-heading">
                Everything a busy salon needs.
              </h2>
            </div>
            <ul className="feature-grid">
              {FEATURES.map(({ icon, title, text, addOn }) => (
                <li key={title}>
                  <span className="feature-icon">{icon}</span>
                  <h3>
                    {title}
                    {addOn && <span className="add-on">Add-on</span>}
                  </h3>
                  <p>{text}</p>
                </li>
              ))}
            </ul>
          </section>

          <section
            className="pricing-section wrap"
            id="pricing"
            aria-labelledby="pricing-title"
          >
            <p className="eyebrow">Pricing</p>
            <h2 className="section-heading" id="pricing-title">
              One simple price.
            </h2>
            <p className="section-copy">
              Pay for the staff you have. No commission, no quote needed.
            </p>
            <div className="plan is-popular">
              <div className="plan-head">
                <h3>Heya</h3>
                <p className="plan-price">
                  <strong>${BASE_PRICE}</strong>
                  <span>/month + GST</span>
                </p>
                <p className="plan-description">
                  Includes up to {INCLUDED_STAFF} staff. Then $
                  {EXTRA_STAFF_PRICE} + GST a month for each extra staff member.
                </p>
                <PriceExample />
                <a className="button" href={START_URL}>
                  Start 14-day free trial
                </a>
              </div>
              <div className="plan-body">
                <p className="plan-list-title">Everything included:</p>
                <ul className="plan-features">
                  {INCLUDED.map((feature) => (
                    <li key={feature}>
                      <Check aria-hidden="true" size={16} />
                      {feature}
                    </li>
                  ))}
                </ul>
                <p className="plan-extras">
                  Extras: Google review texts, and SMS credits for marketing
                  texts and extra reminders.
                </p>
              </div>
            </div>
          </section>

          <section
            className="support-section wrap"
            id="support"
            aria-labelledby="support-title"
          >
            <div className="support-copy">
              <p className="eyebrow">Support</p>
              <h2 className="section-heading" id="support-title">
                Ask us anything.
                <br />
                In your language.
              </h2>
              <p className="section-copy">
                Your salon gets its own WhatsApp chat with the Heya team.
                Message us Monday to Friday, 9am to 5pm, and we help you
                straight away.
              </p>
              <p className="section-copy vi" lang="vi">
                Chúng tôi hỗ trợ bằng tiếng Việt.
              </p>
              <button className="button secondary" onClick={openDemo}>
                Talk to the Heya team
              </button>
            </div>
            <SupportChat />
          </section>

          <section
            className="demo-section wrap"
            id="demo"
            aria-labelledby="demo-title"
          >
            <h2 id="demo-title">Make a little more room for what you love.</h2>
            <p>
              Try Heya free for 14 days, or talk it through with our team first.
            </p>
            <div className="actions centred">
              <a className="button" href={START_URL}>
                Start free trial
              </a>
              <button className="button secondary" onClick={openDemo}>
                Book a demo
              </button>
            </div>
          </section>
        </main>
        <footer className="site-footer wrap">
          <a href="#home" aria-label="Heya home">
            <Wordmark />
          </a>
          <div className="footer-links">
            <span>Heya POS © {new Date().getFullYear()}</span>
            <a href="#features">Features</a>
            <a href="#pricing">Pricing</a>
            <a href={PHONE_LINK}>Call {PHONE_LABEL}</a>
          </div>
        </footer>
      </div>

      <dialog
        className="demo-dialog"
        ref={demoDialog}
        aria-labelledby="contact-title"
        aria-describedby="contact-description"
      >
        <button
          className="dialog-close"
          aria-label="Close demo enquiry"
          onClick={() => demoDialog.current.close()}
        >
          <X aria-hidden="true" size={22} />
        </button>
        <p className="eyebrow">Meet Heya</p>
        <h2 id="contact-title">A personal look at Heya.</h2>
        <p id="contact-description">
          Call or message Nick to book a demo. He’ll talk through your salon and
          show you how Heya works.
        </p>
        <div className="dialog-actions">
          <a className="button" href={PHONE_LINK}>
            <Phone size={17} aria-hidden="true" />
            <span>
              Call Nick: <span className="nowrap">{PHONE_LABEL}</span>
            </span>
          </a>
          <a
            className="button secondary"
            href={WHATSAPP_LINK}
            target="_blank"
            rel="noopener noreferrer"
          >
            <MessageCircle size={17} aria-hidden="true" />
            Message Nick on WhatsApp
          </a>
        </div>
      </dialog>
    </>
  );
}

export default App;
