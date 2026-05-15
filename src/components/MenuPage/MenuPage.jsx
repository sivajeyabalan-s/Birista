import React, { useState, useMemo, useRef } from "react";
import Navbar from "../Navbar/Navbar";
import Footer from "../Footer/Footer";
import menuData from "../../data/menu.json";
import "./MenuPage.css";

const SPICE_LEVEL = {
  indian_bread: "low",
  boba_tea: "low",
  lemonade: "low",
  real_cream_bowl: "low",
  desserts: "low",
  milk_shakes: "low",
  veg_appetizers: "mid",
  pulavs: "mid",
  biryanis: "mid",
  family_pack_biryanis: "mid",
  non_veg_appetizers: "high",
  hyderabad_specials: "high",
  ulvacharu_specials: "high",
  gongura_specials: "high",
};

const TABS = [
  { id: "all", label: "Today's Exclusive", keys: null },
  {
    id: "appetizers",
    label: "Appetizers",
    keys: ["non_veg_appetizers", "veg_appetizers"],
  },
  {
    id: "biryanis",
    label: "Biryanis",
    keys: ["biryanis", "family_pack_biryanis"],
  },
  { id: "pulavs", label: "Pulavs", keys: ["pulavs"] },
  {
    id: "specials",
    label: "Specials",
    keys: ["hyderabad_specials", "ulvacharu_specials", "gongura_specials"],
  },
  { id: "breads", label: "Breads", keys: ["indian_bread"] },
  { id: "desserts", label: "Desserts", keys: ["desserts", "real_cream_bowl"] },
  {
    id: "drinks",
    label: "Drinks",
    keys: ["boba_tea", "lemonade", "milk_shakes"],
  },
];

const SECTION_NAMES = {
  non_veg_appetizers: "Non-Veg Appetizers",
  veg_appetizers: "Veg Appetizers",
  biryanis: "Biryanis",
  family_pack_biryanis: "Family Pack Biryanis",
  pulavs: "Pulavs",
  hyderabad_specials: "Hyderabad Specials",
  ulvacharu_specials: "Ulvacharu Specials",
  gongura_specials: "Gongura Specials",
  indian_bread: "Indian Breads",
  boba_tea: "Boba Tea",
  lemonade: "Lemonade",
  real_cream_bowl: "Real Cream Bowl",
  desserts: "Desserts",
  milk_shakes: "Milk Shakes",
};

const FEATURED_KEYS = [
  "biryanis",
  "non_veg_appetizers",
  "pulavs",
  "ulvacharu_specials",
  "gongura_specials",
  "desserts",
  "boba_tea",
];

function getTabCount(tab, menu) {
  if (tab.id === "all") {
    return FEATURED_KEYS.reduce(
      (sum, key) => sum + Math.min(2, menu[key]?.items?.length || 0),
      0,
    );
  }
  return (tab.keys || []).reduce(
    (sum, key) => sum + (menu[key]?.items?.length || 0),
    0,
  );
}

const SPICE_LABEL = { low: "Low Spice", mid: "Mid Spice", high: "Very Spicy" };

function MenuCard({ item, categoryKey }) {
  const [liked, setLiked] = useState(false);
  const [cartPop, setCartPop] = useState(false);
  const spice = item.spice || SPICE_LEVEL[categoryKey] || "mid";
  const currency = menuData.menu[categoryKey]?.currency === "INR" ? "₹" : "$";

  const handleCart = () => {
    setCartPop(true);
    setTimeout(() => setCartPop(false), 320);
  };

  return (
    <article className="mp-card">
      <div className="mp-card-head">
        <div className="mp-tags">
          <span className={`mp-tag spice-${spice}`}>
            <span className="mp-tag-dot" />
            {SPICE_LABEL[spice]}
          </span>
        </div>
        <button
          className={`mp-heart ${liked ? "on" : ""}`}
          onClick={() => setLiked((p) => !p)}
          aria-label="Save"
        >
          {liked ? (
            <svg viewBox="0 0 24 24" fill="currentColor">
              <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" />
            </svg>
          ) : (
            <svg
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
            >
              <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" />
            </svg>
          )}
        </button>
      </div>

      <div className="mp-card-mid">
        <div className="mp-card-title-row">
          <span className="mp-card-title">{item.name}</span>
          <span className="mp-title-line" />
        </div>
        <p className="mp-desc">{item.description}</p>
      </div>

      <div className="mp-card-foot">
        <div className="mp-actions">
          <button
            className={`mp-icon-btn primary ${cartPop ? "pop" : ""}`}
            onClick={handleCart}
            aria-label="Add to cart"
          >
            <svg
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
            >
              <circle cx="9" cy="21" r="1" />
              <circle cx="20" cy="21" r="1" />
              <path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6" />
            </svg>
          </button>
          <button className="mp-icon-btn" aria-label="Customize">
            <svg
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
            >
              <line x1="4" y1="6" x2="20" y2="6" />
              <line x1="4" y1="12" x2="20" y2="12" />
              <line x1="4" y1="18" x2="20" y2="18" />
              <circle cx="9" cy="6" r="2.2" fill="currentColor" stroke="none" />
              <circle
                cx="15"
                cy="12"
                r="2.2"
                fill="currentColor"
                stroke="none"
              />
              <circle
                cx="9"
                cy="18"
                r="2.2"
                fill="currentColor"
                stroke="none"
              />
            </svg>
          </button>
          <button className="mp-icon-btn" aria-label="Note">
            <svg
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
            >
              <path d="M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7" />
              <path d="M18.5 2.5a2.121 2.121 0 0 1 3 3L12 15l-4 1 1-4 9.5-9.5z" />
            </svg>
          </button>
        </div>
        <div className="mp-price">
          {currency} {item.price.toFixed(2)}
        </div>
      </div>
    </article>
  );
}

function MenuSection({ sectionKey, items }) {
  return (
    <div className="mp-section">
      <div className="mp-section-title-block">
        <h2 className="mp-section-title">{SECTION_NAMES[sectionKey]}</h2>
        <div className="mp-section-divider" />
      </div>
      <div className="mp-grid">
        {items.map((item, i) => (
          <MenuCard key={i} item={item} categoryKey={sectionKey} />
        ))}
      </div>
    </div>
  );
}

export default function MenuPage() {
  const [activeTab, setActiveTab] = useState("all");
  const [search, setSearch] = useState("");
  const [availableOnly, setAvailableOnly] = useState(false);
  const catsRef = useRef(null);
  const menu = menuData.menu;

  const sections = useMemo(() => {
    const keysToShow =
      activeTab === "all"
        ? FEATURED_KEYS
        : (TABS.find((t) => t.id === activeTab)?.keys ?? []);

    return keysToShow
      .map((key) => {
        if (!menu[key]) return null;
        const q = search.trim().toLowerCase();
        let items =
          activeTab === "all" ? menu[key].items.slice(0, 2) : menu[key].items;

        if (q) {
          items = items.filter(
            (it) =>
              it.name.toLowerCase().includes(q) ||
              it.description.toLowerCase().includes(q),
          );
        }
        return items.length ? { key, items } : null;
      })
      .filter(Boolean);
  }, [activeTab, search]);

  return (
    <div className="menu-page">
      {/* ── Hero ── */}
      <section className="mp-hero">
        <Navbar />
        <div className="mp-hero-content">
          <h1 className="mp-hero-title">
            <span className="mp-hero-welcome">Welcome to</span>
            <span className="mp-hero-brand">Birista House</span>
          </h1>
          <p className="mp-hero-sub">
            Experience the authentic taste of tradition with our rich, aromatic
            biryanis, sizzling kebabs, and handcrafted delicacies. Made with
            passion, served with warmth.
          </p>
        </div>
        <div className="mp-label-pill mp-label-left">
          <span className="mp-pill-dot" />
          <span>Dive into a World of Flavours</span>
        </div>
        <div className="mp-label-pill mp-label-right">
          <span className="mp-pill-dot" />
          <span>NO.1 South Indian Restaurant</span>
        </div>
      </section>

      {/* ── Search + filter ── */}
      <div className="mp-filter-row">
        <label className="mp-search-box">
          <svg
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
          >
            <circle cx="11" cy="11" r="8" />
            <path d="m21 21-4.35-4.35" />
          </svg>
          <input
            type="text"
            placeholder="Search Menu"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
          {search && (
            <button className="mp-clear" onClick={() => setSearch("")}>
              ×
            </button>
          )}
        </label>
        <div className="mp-seg">
          <button
            className={`mp-seg-btn ${availableOnly ? "on" : ""}`}
            onClick={() => setAvailableOnly(true)}
          >
            Available Now
          </button>
          <button
            className={`mp-seg-btn ${!availableOnly ? "on" : ""}`}
            onClick={() => setAvailableOnly(false)}
          >
            All Items
          </button>
        </div>
      </div>

      {/* ── Category carousel ── */}
      <div className="mp-cats-wrap">
        <div className="mp-cats" ref={catsRef}>
          {TABS.map((tab) => {
            const count = getTabCount(tab, menu);
            return (
              <button
                key={tab.id}
                className={`mp-cat ${activeTab === tab.id ? "on" : ""}`}
                onClick={() => {
                  setActiveTab(tab.id);
                  setSearch("");
                }}
              >
                {tab.label}
                <span className="mp-cat-count">{count}</span>
              </button>
            );
          })}
        </div>
        <button
          className="mp-cat-arrow"
          aria-label="Scroll categories"
          onClick={() =>
            catsRef.current?.scrollBy({ left: 300, behavior: "smooth" })
          }
        >
          <svg
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2.5"
          >
            <path d="M9 18l6-6-6-6" />
          </svg>
        </button>
      </div>

      {/* ── Menu sections ── */}
      <main className="mp-body">
        {sections.length === 0 ? (
          <div className="mp-empty">
            <svg
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.5"
            >
              <circle cx="11" cy="11" r="8" />
              <path d="m21 21-4.35-4.35" />
            </svg>
            <p>No items found{search ? ` for "${search}"` : ""}.</p>
          </div>
        ) : (
          sections.map(({ key, items }) => (
            <MenuSection key={key} sectionKey={key} items={items} />
          ))
        )}
      </main>

      {/* ── Allergy notice ── */}
      {menuData.food_allergy_notice && (
        <div className="mp-allergy">
          <svg
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
          >
            <circle cx="12" cy="12" r="10" />
            <line x1="12" y1="8" x2="12" y2="12" />
            <line x1="12" y1="16" x2="12.01" y2="16" />
          </svg>
          <p>{menuData.food_allergy_notice}</p>
        </div>
      )}

      <Footer />
    </div>
  );
}
