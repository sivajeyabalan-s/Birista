import React, { useState, useRef } from 'react';
import './MenuPage.css';

const menuData = {
  indian_bread: {
    currency: "INR",
    items: [
      { name: "Tandoor Roti (Wheat)", price: 35, description: "Soft whole wheat flatbread freshly baked in a traditional clay tandoor." },
      { name: "Butter Roti", price: 40, description: "Warm tandoor wheat roti generously topped with melted creamy butter." },
      { name: "Plain Naan", price: 45, description: "Fluffy, lightly charred leavened bread baked in a hot tandoor oven." },
      { name: "Plain Kulcha", price: 45, description: "Soft, pillowy leavened flatbread with a light golden tandoor crust." },
      { name: "Butter Naan", price: 50, description: "Classic tandoor naan finished with a generous slather of fresh butter.", img: "/assets/menu/buttern naan.jpg" },
      { name: "Butter Kulcha", price: 50, description: "Tender kulcha brushed with rich butter straight out of the tandoor." },
      { name: "Garlic Naan", price: 50, description: "Soft naan topped with minced garlic and herbs, baked to perfection." },
      { name: "Methi Kulcha", price: 50, description: "Flavorful kulcha infused with fresh fenugreek leaves and mild spices." },
      { name: "Birista House Special Folding Naan", price: 70, description: "Signature layered folding naan — a unique house specialty with rich flavor." },
      { name: "Masala Kulcha", price: 80, description: "Stuffed kulcha packed with spiced filling, golden and crisp outside." }
    ]
  },
  non_veg_appetizers: {
    currency: "USD",
    items: [
      { name: "Chicken 65", price: 14.99, description: "Crispy deep-fried chicken marinated in bold spices and tangy yogurt." },
      { name: "Chilli Chicken", price: 14.99, description: "Indo-Chinese style chicken tossed in fiery chilli and soy sauce." },
      { name: "Chicken Pepper Fry", price: 14.99, description: "Juicy chicken stir-fried with coarsely crushed black pepper and spices.", img: "/assets/menu/chicken pepper fry.jpg" },
      { name: "Chicken Majestic", price: 14.99, description: "Hyderabadi-style crispy chicken tossed with yogurt, peppers, and spices." },
      { name: "Curry Leaf Chicken", price: 14.99, description: "Tender chicken fried with fragrant curry leaves and South Indian spices." },
      { name: "Chicken Manchuria", price: 14.99, description: "Crispy chicken balls in a savory, tangy Indo-Chinese Manchurian gravy." },
      { name: "Chilli Shrimp", price: 15.99, description: "Succulent shrimp tossed in a spicy, garlicky Indo-Chinese chilli sauce." },
      { name: "Shrimp 65", price: 15.99, description: "Deep-fried shrimp marinated in fiery red chilli and aromatic spices." },
      { name: "Apollo Fish", price: 16.99, description: "Crispy fried fish tossed with peppers, curry leaves, and tangy sauce." },
      { name: "Birista Kodi Vepudu", price: 14.99, description: "Birista's signature Andhra-style spicy chicken fry with bold masala." },
      { name: "Guntur Kodi Vepudu", price: 14.99, description: "Fiery Guntur-style chicken fry with hot red chillies and spices." },
      { name: "Shrimp Pepper Fry", price: 15.99, description: "Plump shrimp stir-fried with cracked black pepper and aromatic spices." }
    ]
  },
  veg_appetizers: {
    currency: "USD",
    items: [
      { name: "Veg Manchuria", price: 12.99, description: "Crispy vegetable balls served in a tangy, spicy Indo-Chinese Manchurian sauce." },
      { name: "Gobi 65", price: 12.99, description: "Crispy cauliflower florets deep-fried with spicy chilli and yogurt marinade." },
      { name: "Gobi Majestic", price: 12.99, description: "Fried cauliflower tossed in yogurt, green chilli, and Hyderabadi spices." },
      { name: "Gobi Green Chilli", price: 12.99, description: "Cauliflower florets stir-fried with fresh green chillies and bold spices." },
      { name: "Paneer 65", price: 12.99, description: "Crispy paneer cubes marinated in spicy chilli and aromatic spice blend." },
      { name: "Chilli Paneer", price: 12.99, description: "Soft paneer cubes tossed in spicy Indo-Chinese chilli and pepper sauce.", img: "/assets/menu/chilli paneer.jpg" }
    ]
  },
  biryanis: {
    currency: "USD",
    items: [
      { name: "Chicken Dum Biryani", price: 15.49, description: "Aromatic basmati rice slow-cooked with tender chicken in dum style." },
      { name: "Goat Dum Biryani", price: 17.99, description: "Succulent goat pieces layered with fragrant basmati and slow dum-cooked." },
      { name: "Veg Dum Biryani", price: 12.99, description: "Fragrant basmati rice dum-cooked with seasonal vegetables and whole spices." },
      { name: "Paneer Dum Biryani", price: 13.99, description: "Soft paneer and aromatic basmati slow-cooked together in rich dum style." }
    ]
  },
  family_pack_biryanis: {
    currency: "USD",
    items: [
      { name: "Chicken Family Pack", price: 54.99, description: "Generous family-sized dum chicken biryani, perfect for a group feast." },
      { name: "Goat Family Pack", price: 65.99, description: "Large family portion of slow-cooked, flavorful goat dum biryani." }
    ]
  },
  pulavs: {
    currency: "USD",
    items: [
      { name: "Veg Kheema Pulav", price: 14.99, description: "Spiced vegetable kheema cooked with fragrant basmati rice and herbs." },
      { name: "Egg Pulav", price: 12.99, description: "Fluffy basmati rice cooked with boiled eggs and aromatic whole spices." },
      { name: "Chicken 65 Pulav", price: 16.99, description: "Spicy Chicken 65 tossed with seasoned basmati rice for a bold dish." },
      { name: "Paneer 65 Pulav", price: 14.99, description: "Crispy spiced paneer mixed with fluffy, aromatic basmati pulav rice." },
      { name: "Fry Piece Chicken Pulav", price: 15.99, description: "Golden fried chicken pieces served alongside fragrant, well-spiced pulav." },
      { name: "Gutti Vankaya Pulav", price: 14.99, description: "Andhra-style stuffed baby eggplant cooked with spiced basmati rice." },
      { name: "Goat Pulav", price: 17.99, description: "Tender goat pieces simmered with fragrant basmati in a rich pulav." },
      { name: "Goat Kheema Pulav", price: 17.99, description: "Minced goat kheema cooked with aromatic spices and fluffy basmati rice." },
      { name: "Joint Pulav", price: 16.49, description: "Slow-cooked bone-in goat joints served with spiced aromatic basmati pulav." },
      { name: "Chicken Pulav", price: 15.49, description: "Golden fried chicken pieces served alongside fragrant, well-spiced pulav rice.", img: "/assets/menu/chicken pulav.jpg" }
    ]
  },
  hyderabad_specials: {
    currency: "USD",
    items: [
      { name: "Haleem", price: 15.99, description: "Slow-cooked meat and lentil stew, a rich iconic Hyderabadi delicacy." }
    ]
  },
  ulvacharu_specials: {
    currency: "USD",
    items: [
      { name: "Ulvacharu Fry Piece Chicken Pulav", price: 16.49, description: "Fried chicken pieces in tangy horse gram ulvacharu broth with basmati rice." },
      { name: "Ulvacharu Chicken Pulav", price: 16.99, description: "Tender chicken simmered in earthy horse gram ulvacharu sauce with rice." },
      { name: "Ulvacharu Goat Pulav", price: 17.99, description: "Juicy goat cooked in signature tangy ulvacharu broth served with pulav." },
      { name: "Ulvacharu Goat Kheema Pulav", price: 17.99, description: "Minced goat cooked in rich ulvacharu horse gram gravy with aromatic rice." }
    ]
  },
  gongura_specials: {
    currency: "USD",
    items: [
      { name: "Gongura Fry Piece Chicken Pulav", price: 15.49, description: "Fried chicken pieces cooked in tangy sorrel gongura leaves with pulav." },
      { name: "Gongura Chicken Pulav", price: 15.99, description: "Tender chicken in a tangy, spicy Andhra-style gongura sauce with rice." },
      { name: "Gongura Goat Pulav", price: 17.49, description: "Slow-cooked goat in bold gongura sorrel gravy served with basmati pulav." },
      { name: "Gongura Goat Kheema Pulav", price: 17.99, description: "Spiced minced goat in tangy gongura sauce tossed with fragrant basmati." }
    ]
  },
  boba_tea: {
    currency: "USD",
    items: [
      { name: "Tiger Brown Sugar Milk Tea", price: 5.99, description: "Creamy milk tea with caramel brown sugar syrup and chewy tapioca pearls." },
      { name: "Classic Milk Tea", price: 5.99, description: "Smooth and creamy traditional milk tea with chewy tapioca pearls." },
      { name: "Thai Milk Tea", price: 5.99, description: "Sweet, spiced Thai-style orange milk tea with silky tapioca pearls.", img: "/assets/menu/thai milk tea.jpg" },
      { name: "Taro Milk Tea", price: 5.99, description: "Creamy purple taro-flavored milk tea with soft tapioca boba pearls." },
      { name: "Honeydew Milk", price: 5.99, description: "Light, refreshing honeydew melon-flavored creamy milk with boba pearls." },
      { name: "Dark Roast Coffee", price: 5.99, description: "Bold, rich dark roast coffee blended with creamy milk and boba pearls." },
      { name: "Special Blend Black Tea", price: 5.99, description: "House special blend of robust black tea with smooth creamy milk." },
      { name: "Matcha Tea", price: 5.99, description: "Earthy Japanese matcha blended with creamy milk and chewy boba pearls." },
      { name: "Green Milk Tea", price: 5.99, description: "Refreshing green tea with creamy milk and soft tapioca boba pearls." }
    ]
  },
  lemonade: {
    currency: "USD",
    items: [
      { name: "Ice Cold Lemonade", price: 4.99, description: "Classic freshly squeezed lemonade served ice cold and perfectly tart." },
      { name: "Mango Lemonade", price: 4.99, description: "Zesty lemonade blended with sweet tropical mango for a refreshing twist." },
      { name: "Strawberry Lemonade", price: 4.99, description: "Bright lemonade infused with fresh ripe strawberries, sweet and tangy." },
      { name: "Peach Lemonade", price: 4.99, description: "Refreshing lemonade with the gentle sweetness of ripe juicy peaches." },
      { name: "Passionfruit Lemonade", price: 4.99, description: "Tangy lemonade elevated with exotic tropical passionfruit flavor." },
      { name: "Pineapple Lemonade", price: 4.99, description: "Tropical pineapple blended with tart lemonade for a fruity refresher." },
      { name: "Lychee Lemonade", price: 4.99, description: "Floral, sweet lychee paired with zesty fresh lemonade for a unique taste." }
    ]
  },
  real_cream_bowl: {
    currency: "USD",
    items: [
      { name: "Shahoot Mulberry Malai", price: 5.99, description: "Creamy malai dessert topped with fresh sweet mulberry compote and nuts." },
      { name: "Kaddu Ki Kheer", price: 6.99, description: "Traditional pumpkin kheer slow-cooked in milk with cardamom and nuts." },
      { name: "Blue Berry Malai", price: 7.99, description: "Velvety cream malai bowl topped with fresh tangy blueberry compote." },
      { name: "Khubani-Ka-Metha", price: 7.99, description: "Classic Hyderabadi apricot dessert in sweet syrup with rich cream." },
      { name: "Apricot Delight", price: 8.99, description: "Luxurious apricot-based dessert bowl with cream and a touch of saffron." },
      { name: "Dry Fruit Malai", price: 8.99, description: "Indulgent malai cream loaded with premium mixed dry fruits and nuts." },
      { name: "Shahi Tukda", price: 9.50, description: "Royal Mughlai bread pudding soaked in saffron rabri and topped with nuts." }
    ]
  },
  desserts: {
    currency: "USD",
    items: [
      { name: "Gulab Jamun", price: 4.99, description: "Soft milk-solid dumplings soaked in fragrant rose and cardamom syrup." },
      { name: "Gajar Ka Halwa", price: 4.99, description: "Classic slow-cooked carrot halwa with ghee, milk, sugar, and cardamom." },
      { name: "Dubai Chocolate Bar", price: 7.99, description: "Trendy Dubai-style chocolate bar filled with pistachio and kataifi crunch." }
    ]
  },
  milk_shakes: {
    currency: "USD",
    note: "All shakes come in 16oz",
    items: [
      { name: "Vanilla", price: 6.99, description: "Classic creamy vanilla milkshake made with rich ice cream, smooth and sweet." },
      { name: "Strawberry", price: 6.99, description: "Thick and creamy milkshake blended with fresh sweet strawberry flavor." },
      { name: "Chocolate", price: 6.99, description: "Rich, indulgent chocolate milkshake blended with creamy ice cream." },
      { name: "Oddysey", price: 7.99, description: "A unique house special shake with a mystery blend of indulgent flavors." },
      { name: "Nutella", price: 6.99, description: "Decadent Nutella hazelnut chocolate blended into a rich, creamy shake." },
      { name: "Cream Sickle", price: 7.99, description: "Nostalgic orange-vanilla creamsicle flavor blended into a thick shake." },
      { name: "Banana Shake", price: 6.99, description: "Smooth and naturally sweet fresh banana blended with creamy milk." },
      { name: "Mango Shake", price: 7.99, description: "Thick and luscious milkshake made with sweet Alphonso-style mango pulp." },
      { name: "Chikoo Shake", price: 7.99, description: "Creamy milkshake made from sweet, earthy sapodilla chikoo fruit." },
      { name: "Sitaphal Shake", price: 7.99, description: "Seasonal custard apple shake — naturally sweet, creamy, and aromatic." }
    ]
  }
};

const categories = [
  { key: 'all', label: 'All' },
  { key: 'indian_bread', label: 'Roti' },
  { key: 'non_veg_appetizers', label: 'Appetizers' },
  { key: 'veg_appetizers', label: 'Appetizers (Veg)' },
  { key: 'biryanis', label: 'Biryanis' },
  { key: 'family_pack_biryanis', label: 'Family Pack' },
  { key: 'pulavs', label: 'Pulavs' },
  { key: 'hyderabad_specials', label: 'Hyd Specials' },
  { key: 'ulvacharu_specials', label: 'Ulvacharu' },
  { key: 'gongura_specials', label: 'Gongura' },
  { key: 'boba_tea', label: 'Boba Tea' },
  { key: 'lemonade', label: 'Lemonade' },
  { key: 'real_cream_bowl', label: 'Cream Bowl' },
  { key: 'desserts', label: 'Desserts' },
  { key: 'milk_shakes', label: 'Shakes' },
];

const vegCategories = ['veg_appetizers', 'indian_bread', 'pulavs'];
const allergyText = "Please be advised that food prepared here may contain these ingredients: Milk, Eggs, Fish, Crustacean Shellfish, Tree Nuts, Peanuts, Wheat, Soybeans, Sesame";

const MenuPage = () => {
  const [activeCategory, setActiveCategory] = useState('all');
  const [searchQuery, setSearchQuery] = useState('');
  const [showAvailableOnly, setShowAvailableOnly] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const tabsRef = useRef(null);

  const catLabel = categories.find(c => c.key === activeCategory)?.label || activeCategory;

  // Build items list — if "all", flatten every category
  const currentItems = activeCategory === 'all'
    ? Object.entries(menuData).flatMap(([key, cat]) =>
        cat.items.map(item => ({ ...item, _catKey: key, _currency: cat.currency }))
      )
    : menuData[activeCategory].items.map(item => ({
        ...item, _catKey: activeCategory, _currency: menuData[activeCategory].currency
      }));

  const filteredItems = currentItems.filter(item =>
    item.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
    item.description.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const scrollTabs = (dir) => {
    if (tabsRef.current) tabsRef.current.scrollBy({ left: dir * 200, behavior: 'smooth' });
  };

  const isVeg = (catKey) => vegCategories.includes(catKey) || catKey === 'lemonade' || catKey === 'boba_tea' || catKey === 'milk_shakes' || catKey === 'desserts' || catKey === 'real_cream_bowl';

  const formatPrice = (price, currency) => currency === 'INR' ? `₹${price}` : `$${Number(price).toFixed(2)}`;

  const navLinks = ['Home', 'About Us', 'Menu', 'Events', 'Services', 'Gallery', 'Contact Us'];

  return (
    <div className="mp">
      {/* Navbar */}
      <nav className="mp-nav">
        <a href="/" className="mp-logo">
          <span className="mp-logo-main">BIRISTA</span>
          <span className="mp-logo-sub">HOUSE</span>
        </a>
        <div className="mp-nav-links">
          {navLinks.map(l => (
            <a key={l} href={l === 'Home' ? '/' : l === 'Menu' ? '/menu' : '#'} className={l === 'Menu' ? 'active' : ''}>{l}</a>
          ))}
        </div>
        <button className="mp-nav-cta">Order Online</button>
        <button className={`mp-hamburger ${mobileMenuOpen ? 'open' : ''}`} onClick={() => setMobileMenuOpen(!mobileMenuOpen)} aria-label="Toggle Menu">
          <span /><span /><span />
        </button>
      </nav>

      {/* Mobile Drawer */}
      {mobileMenuOpen && <div className="mp-backdrop" onClick={() => setMobileMenuOpen(false)} />}
      <div className={`mp-drawer ${mobileMenuOpen ? 'open' : ''}`}>
        {navLinks.map(l => (
          <a key={l} href={l === 'Home' ? '/' : l === 'Menu' ? '/menu' : '#'} onClick={() => setMobileMenuOpen(false)}>{l}</a>
        ))}
        <button className="mp-nav-cta" style={{ width: '100%' }}>Order Online</button>
      </div>

      {/* Hero */}
      <section className="mp-hero">
        <div className="mp-hero-welcome">Welcome to</div>
        <h1 className="mp-hero-title">Birista House</h1>
        <p className="mp-hero-sub">
          Experience the authentic taste of tradition with our rich, aromatic biryanis, sizzling kebabs, and handcrafted delicacies. Made with passion, served with warmth.
        </p>
        <div className="mp-hero-btns">
          <button className="mp-hero-btn mp-hero-btn--outline">→ Dive Into a World of Flavours</button>
          <span className="mp-hero-btn mp-hero-btn--chip">NO.1 South Indian Restaurant</span>
        </div>

      </section>

      {/* Menu Section */}
      <section className="mp-menu" id="menu-section">
        <div className="mp-menu-label">Menu</div>

        {/* Search + Toggles */}
        <div className="mp-search-row">
          <div className="mp-search">
            <span className="mp-search-icon"><svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="11" cy="11" r="8"/><line x1="21" y1="21" x2="16.65" y2="16.65"/></svg></span>
            <input type="text" placeholder="Search Menu" value={searchQuery} onChange={e => setSearchQuery(e.target.value)} />
          </div>
          <div className="mp-toggles">
            <button className={`mp-toggle ${showAvailableOnly ? 'active' : ''}`} onClick={() => setShowAvailableOnly(!showAvailableOnly)}>Available Now</button>
            <button className={`mp-toggle ${!showAvailableOnly ? 'active' : ''}`} onClick={() => setShowAvailableOnly(false)}>All Items</button>
          </div>
        </div>

        {/* Desktop Tabs */}
        <div className="mp-tabs-wrap">
          <button className="mp-tab-arrow mp-tab-arrow--left" onClick={() => scrollTabs(-1)}>&#8249;</button>
          <div className="mp-tabs" ref={tabsRef}>
            {categories.map(cat => {
              const count = cat.key === 'all'
                ? Object.values(menuData).reduce((s, c) => s + c.items.length, 0)
                : menuData[cat.key]?.items.length || 0;
              return (
                <button key={cat.key} className={`mp-tab ${activeCategory === cat.key ? 'active' : ''}`} onClick={() => setActiveCategory(cat.key)}>
                  {cat.label}
                  <span className="mp-tab-count">{count}</span>
                </button>
              );
            })}
          </div>
          <button className="mp-tab-arrow mp-tab-arrow--right" onClick={() => scrollTabs(1)}>&#8250;</button>
        </div>

        {/* Mobile Dropdown */}
        <select className="mp-cat-select" value={activeCategory} onChange={e => setActiveCategory(e.target.value)}>
          {categories.map(cat => (
            <option key={cat.key} value={cat.key}>{cat.label}</option>
          ))}
        </select>

        {/* Section Title */}
        <h2 className="mp-section-title">{catLabel}</h2>
        <div className="mp-section-ornament" />

        {activeCategory !== 'all' && menuData[activeCategory]?.note && <p className="mp-note">{menuData[activeCategory].note}</p>}

        {/* Items Grid */}
        <div className="mp-grid">
          {filteredItems.length === 0 ? (
            <div className="mp-empty">
              <div className="mp-empty-icon">—</div>
              <div className="mp-empty-text">No items found for "{searchQuery}"</div>
            </div>
          ) : (
            filteredItems.map(item => {
              const itemCatKey = item._catKey || activeCategory;
              const catIsVeg = isVeg(itemCatKey);
              const itemCatLabel = categories.find(c => c.key === itemCatKey)?.label || itemCatKey;
              const rating = (3.8 + Math.random() * 1.2).toFixed(1);
              return (
                <div className="mp-card" key={`${itemCatKey}-${item.name}`}>
                  {/* Top: tags + heart */}
                  <div className="mp-card-top">
                    <div className="mp-card-tags">
                      <span className="mp-tag mp-tag--new">New</span>
                      <span className="mp-tag mp-tag--spice">{itemCatLabel}</span>
                    </div>
                    <button className="mp-card-heart" aria-label="Favourite">
                      <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78L12 21.23l8.84-8.84a5.5 5.5 0 0 0 0-7.78z"/></svg>
                    </button>
                  </div>

                  {/* Image (if exists) */}
                  {item.img && (
                    <div className="mp-card-img" style={{ backgroundImage: `url(${item.img})` }} />
                  )}

                  {/* Name + line */}
                  <div className="mp-card-name-row">
                    <div className="mp-card-name">{item.name}</div>
                    <div className="mp-card-name-line" />
                  </div>

                  {/* Rating */}
                  <div className="mp-card-rating"><span>★</span> {rating}</div>

                  {/* Description */}
                  <div className="mp-card-desc">{item.description}</div>

                  {/* Bottom: icons + price */}
                  <div className="mp-card-bottom">
                    <div className="mp-card-icons">
                      <span className={`mp-card-icon ${catIsVeg ? 'mp-card-icon--veg' : 'mp-card-icon--nonveg'}`}>
                        <svg width="12" height="12" viewBox="0 0 24 24" fill="currentColor"><circle cx="12" cy="12" r="5"/></svg>
                      </span>
                      <span className="mp-card-icon">
                        <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><line x1="4" y1="6" x2="20" y2="6"/><line x1="4" y1="12" x2="20" y2="12"/><line x1="4" y1="18" x2="14" y2="18"/></svg>
                      </span>
                      <span className="mp-card-icon">
                        <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/><polyline points="14 2 14 8 20 8"/><line x1="16" y1="13" x2="8" y2="13"/><line x1="16" y1="17" x2="8" y2="17"/></svg>
                      </span>
                    </div>
                    <span className="mp-card-price">{formatPrice(item.price, item._currency)}</span>
                  </div>
                </div>
              );
            })
          )}
        </div>
      </section>

      {/* Allergy Notice */}
      <div className="mp-allergy">
        <span className="mp-allergy-icon"><svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#c9a84c" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M10.29 3.86L1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0z"/><line x1="12" y1="9" x2="12" y2="13"/><line x1="12" y1="17" x2="12.01" y2="17"/></svg></span>
        <p className="mp-allergy-text">{allergyText}</p>
      </div>

      {/* Catering */}
      <div className="mp-catering">
        <div className="mp-catering-line" />
        <div className="mp-catering-text">Accepting Catering Orders</div>
      </div>

      {/* Footer */}
      <footer className="mp-footer">
        <div className="mp-footer-grid">
          <div>
            <div className="mp-footer-logo">
              <span className="mp-logo-main">BIRISTA</span>
              <span className="mp-logo-sub">HOUSE</span>
            </div>
            <div className="mp-footer-socials">
              <a href="#" aria-label="Instagram"><svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2.2c3.2 0 3.6 0 4.8.1 1.2.1 1.8.3 2.2.4.6.2 1 .5 1.4.9.4.4.7.8.9 1.4.2.4.4 1 .4 2.2.1 1.2.1 1.6.1 4.8s0 3.6-.1 4.8c0 1.2-.2 1.8-.4 2.2-.2.6-.5 1-.9 1.4-.4.4-.8.7-1.4.9-.4.2-1 .4-2.2.4-1.2.1-1.6.1-4.8.1s-3.6 0-4.8-.1c-1.2 0-1.8-.2-2.2-.4-.6-.2-1-.5-1.4-.9-.4-.4-.7-.8-.9-1.4-.2-.4-.4-1-.4-2.2C2.2 15.6 2.2 15.2 2.2 12s0-3.6.1-4.8c0-1.2.2-1.8.4-2.2.2-.6.5-1 .9-1.4.4-.4.8-.7 1.4-.9.4-.2 1-.4 2.2-.4C8.4 2.2 8.8 2.2 12 2.2zm0 1.8a8 8 0 1 0 0 16 8 8 0 0 0 0-16zm0 3a5 5 0 1 1 0 10 5 5 0 0 1 0-10zm5.2-.7a1.2 1.2 0 1 1 0 2.4 1.2 1.2 0 0 1 0-2.4z"/></svg></a>
              <a href="#" aria-label="Facebook"><svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M13 22v-8h3l1-4h-4V7.5c0-1 .5-2 2-2h2V2h-3.5C11 2 10 3.5 10 5.5V10H7v4h3v8h3z"/></svg></a>
            </div>
          </div>
          <div>
            <h4>Quick Links</h4>
            <ul>
              <li>Home</li><li>About Us</li><li>Menu</li><li>Services</li><li>Gallery</li>
            </ul>
          </div>
          <div>
            <h4>Opening Hours</h4>
            <div className="mp-footer-hours">
              Mon–Sat<br/>12:00 PM – 04:00 PM<br/>06:00 PM – 23:00<br/><br/>Sunday<br/>11:00 – 23:00
            </div>
          </div>
          <div>
            <h4>Get In Touch</h4>
            <div className="mp-footer-contact">
              321 W Hickory St Ste 100,<br/>Denton, TX 76201<br/>+1 (940) 243-2257<br/>info@biristahouse.com
            </div>
          </div>
        </div>
        <div className="mp-footer-bottom">
          <span>© 2026 Birista House</span>
          <a href="#">Privacy Policy</a>
          <a href="#">Terms</a>
          <a href="#">Refund Policy</a>
        </div>
      </footer>
    </div>
  );
};

export default MenuPage;
