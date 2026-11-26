import { createElement, useEffect, useRef, useState } from "react";
import {
  Check,
  CircleDollarSign,
  Clock,
  Gift,
  Heart,
  KeyRound,
  MessageCircle,
  Menu,
  Phone,
  ShoppingBag,
  Star,
  Tag,
  UserRound,
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

// Claims on this page were checked against what every salon has today, or
// approved by the owner (25-26 Nov 2026: setup in 24 hours, checkout in
// 30 seconds, staff trained in 30 minutes, no credit card for the trial).
// "Zero double bookings" was dropped on 26 Nov: staff can drop a booking onto
// a busy stylist, and the calendar marks it "Check". Never name the card
// payment provider.
const TRUST = [
  "Australian-owned",
  "No setup fees",
  "Free data migration",
  "Set up in 24 hours",
  "Support in Tiếng Việt",
];

const REASONS = [
  {
    title: "Help in your language.",
    text: "Message us on WhatsApp, Mon–Fri 9am–5pm, in English or Vietnamese.",
  },
  {
    title: "One price, no surprises.",
    text: "Booking texts included. No commission, no setup fees.",
  },
  {
    title: "Running in a day.",
    text: "We move your data for free. Staff learn Heya in 30 minutes.",
  },
];

const icon = (component) =>
  createElement(component, { "aria-hidden": "true", size: 20 });

const FEATURES = [
  {
    icon: icon(CircleDollarSign),
    title: "Online deposits",
    text: "Take a deposit when clients book, so a no-show doesn’t cost you the slot.",
  },
  {
    icon: icon(Heart),
    title: "Loyalty rewards",
    text: "Run a punch card or points. Clients see their rewards when they book online.",
  },
  {
    icon: icon(Gift),
    title: "Gift cards",
    text: "Sell gift cards at the counter or on your booking site. The balance shows at checkout.",
  },
  {
    icon: icon(UserRound),
    title: "Client history",
    text: "Every visit, note and reward in one place, so you remember the details.",
  },
  {
    icon: icon(Clock),
    title: "Roster and timesheets",
    text: "Plan the week’s roster, and staff clock in and out on the salon tablet.",
  },
  {
    icon: icon(KeyRound),
    title: "Staff PINs",
    text: "Every staff member has their own PIN. See who did what, and protect refunds and discounts.",
  },
];

const ADD_ONS = [
  {
    icon: icon(Star),
    title: "Google reviews",
    text: "After a visit, Heya texts your client a link to review you on Google.",
  },
  {
    icon: icon(Tag),
    title: "Promotions",
    text: "Set up happy hours, time-limited discounts and offers for chosen clients.",
  },
  {
    icon: icon(ShoppingBag),
    title: "Product sales",
    text: "Sell retail products at checkout and see what sold, with cost and margin.",
  },
];

const INCLUDED = [
  "Your own booking site with your logo",
  "Unlimited booking texts: confirmations, 24-hour reminders and changes",
  "Calendar and checkout, with card payments built in",
  "Online deposits",
  "Loyalty and gift cards",
  "Check-in, roster, timesheets and staff PINs",
  "Reports",
  "Free data migration and setup",
  "Support in English and Vietnamese, Mon–Fri 9am–5pm",
];

const START_POINTS = [
  "No credit card required",
  "Set up in under 24 hours",
  "Free data migration",
  "No setup fees",
];

function FeatureList({ items }) {
  return (
    <ul className="feature-grid">
      {items.map(({ icon, title, text }, index) => (
        <li
          key={title}
          data-reveal
          style={{ "--delay": `${(index % 3) * 90}ms` }}
        >
          <span className="feature-icon">{icon}</span>
          <h3>{title}</h3>
          <p>{text}</p>
        </li>
      ))}
    </ul>
  );
}

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

/** Fades sections in as they scroll into view (none with reduced motion). */
function useReveal() {
  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    if (!("IntersectionObserver" in window)) return;
    document.documentElement.classList.add("can-reveal");
    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (!entry.isIntersecting) continue;
          entry.target.classList.add("is-visible");
          observer.unobserve(entry.target);
        }
      },
      { rootMargin: "0px 0px -10% 0px" },
    );
    document
      .querySelectorAll("[data-reveal]")
      .forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);
}

/**
 * A short looping product clip from the Heya demo salon. The video exists
 * only while the clip is near the screen (a browser decodes only a few
 * videos at once); otherwise its last frame shows as a picture. With reduced
 * motion it never plays by itself and offers a play control instead.
 */
function Clip({ name, label, phone = false, width, height }) {
  const box = useRef(null);
  const [near, setNear] = useState(false);
  const [still, setStill] = useState(false);

  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      setStill(true);
      return;
    }
    if (!("IntersectionObserver" in window)) {
      setNear(true);
      return;
    }
    const observer = new IntersectionObserver(
      ([entry]) => setNear(entry.isIntersecting),
      { rootMargin: "120px 0px" },
    );
    observer.observe(box.current);
    return () => observer.disconnect();
  }, []);

  const size = width
    ? { width, height }
    : { width: phone ? 780 : 1280, height: phone ? 1560 : 800 };
  const poster = `/clips/${name}-poster.jpg`;

  return (
    <div ref={box} className="clip-box">
      {near || still ? (
        <video
          className="clip"
          {...size}
          muted
          loop
          playsInline
          autoPlay={!still}
          controls={still}
          preload={still ? "none" : "auto"}
          poster={poster}
          aria-label={label}
        >
          <source src={`/clips/${name}.mp4`} type="video/mp4" />
          <source src={`/clips/${name}.webm`} type="video/webm" />
          <img src={`/clips/${name}.gif`} alt={label} />
        </video>
      ) : (
        <img className="clip" {...size} src={poster} alt={label} />
      )}
    </div>
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

function Showcase({ id, eyebrow, title, text, clip, phone, flip, children }) {
  return (
    <div
      className={flip ? "showcase is-flipped" : "showcase"}
      id={id}
      data-reveal
    >
      <figure className={phone ? "showcase-media is-phone" : "showcase-media"}>
        <div
          className={
            phone
              ? "device phone-device"
              : clip.width
                ? "device is-compact"
                : "device"
          }
        >
          <Clip
            name={clip.name}
            label={clip.label}
            phone={phone}
            width={clip.width}
            height={clip.height}
          />
        </div>
        <figcaption>{clip.caption}</figcaption>
      </figure>
      <div className="feature-copy">
        <p className="eyebrow">{eyebrow}</p>
        <h2 className="section-heading">{title}</h2>
        <p className="section-copy">{text}</p>
        {children}
      </div>
    </div>
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
        <div className="chat-bubble salon" data-reveal>
          Hi Heya, how do I add a new staff member?
          <small>10:02 am</small>
        </div>
        <div className="chat-bubble heya" data-reveal>
          Hi! Open the Staff page, add them there and choose their services.
          Want me to walk you through it on a call?
          <small>10:03 am</small>
        </div>
        <div className="chat-bubble salon" data-reveal>
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
  useReveal();

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
              <p className="trial-note">14 days free. No credit card needed.</p>
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

          <ul className="benefit-strip" aria-label="Why salons trust Heya">
            {TRUST.map((item) => (
              <li key={item}>
                <Check aria-hidden="true" size={17} />
                {item}
              </li>
            ))}
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
              {REASONS.map((reason, index) => (
                <li
                  key={reason.title}
                  data-reveal
                  style={{ "--delay": `${(index % 3) * 90}ms` }}
                >
                  <h3>{reason.title}</h3>
                  <p>{reason.text}</p>
                </li>
              ))}
            </ul>
          </section>

          <section
            className="features-section wrap"
            id="features"
            aria-label="Features"
          >
            <Showcase
              eyebrow="Your own booking site"
              title="They find a time. You find your flow."
              text="Every salon gets its own booking site with its logo, name and opening hours. Clients book any time on their phone, with no app to download, and Heya texts and emails to confirm and remind them."
              phone
              clip={{
                name: "booking",
                label:
                  "A client books online: picks a service, a stylist and a time, and the booking is confirmed.",
                caption: "Booking online at our demo salon.",
              }}
            />
            <Showcase
              id="calendar"
              eyebrow="Calendar"
              title="A calendar that keeps up."
              text="Changes show on every screen in the salon by themselves. Two clients at once? Heya marks the clash, and one drag moves a booking to a free stylist."
              flip
              clip={{
                name: "calendar",
                label:
                  "Two bookings clash, and one is dragged to a free stylist.",
                caption: "Fixing a clash in our demo salon.",
              }}
            />
            <Showcase
              id="checkout"
              eyebrow="Checkout"
              title="Checkout in under 30 seconds."
              text="Cash, card or split the bill. Card terminal payments are built in. Already have a terminal? Ask us if you can keep it. Your takings add up by themselves at the end of the day."
              clip={{
                name: "checkout",
                label:
                  "A $65 visit paid $20 in cash and $45 by card, then Payment Successful.",
                width: 960,
                height: 942,
                caption: "Checkout in our demo salon.",
              }}
            />

            <div className="clip-pair">
              <article data-reveal>
                <div className="device">
                  <Clip
                    name="checkin"
                    label="A client checks in by QR code on their phone, and their card appears in a stylist's column on the salon calendar."
                  />
                </div>
                <h3>An easy check-in.</h3>
                <p>
                  Clients scan your QR code when they arrive, and their card
                  appears on your calendar straight away.
                </p>
              </article>
              <article data-reveal style={{ "--delay": "90ms" }}>
                <div className="device">
                  <Clip
                    name="reports"
                    label="The Reports page: today's takings and the staff leaderboard."
                  />
                </div>
                <h3>Your day in numbers.</h3>
                <p>
                  See takings, top services and how each team member is doing.
                  Download it as a spreadsheet.
                </p>
              </article>
            </div>

            <div className="feature-grid-intro" id="everyday">
              <h2 className="section-heading">
                Everything a busy salon needs.
              </h2>
            </div>
            <FeatureList items={FEATURES} />
            <div className="add-ons" data-reveal>
              <h3 className="add-ons-title">Add-ons</h3>
              <p className="add-ons-copy">Switch them on when you need them.</p>
              <FeatureList items={ADD_ONS} />
            </div>
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
              Pay for the staff you have. No commission, no setup fees, no quote
              needed.
            </p>
            <div className="plan" data-reveal>
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
                <p className="price-example">No credit card needed.</p>
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
                  Add-ons: Google reviews, promotions and product sales. SMS
                  credits for marketing texts and extra reminders.
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
            data-reveal
          >
            <h2 id="demo-title">Make a little more room for what you love.</h2>
            <p>
              Try Heya free for 14 days, or talk it through with our team first.
            </p>
            <ul className="start-points">
              {START_POINTS.map((point) => (
                <li key={point}>
                  <Check aria-hidden="true" size={16} />
                  {point}
                </li>
              ))}
            </ul>
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
            <span>
              Heya POS © {new Date().getFullYear()}. Proudly Australian-owned
              and operated.
            </span>
            <a href="#features">Features</a>
            <a href="#pricing">Pricing</a>
            <a href="/privacy">Privacy</a>
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
