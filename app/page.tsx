const site = {
  brand: "凱麗企業社",
  brandMark: "凱",
  city: "苗栗、台中",
  serviceArea: "台灣本島配送（不含離島）",
  phone: "037-742-518",
  phoneHref: "037742518",
  address: "358 苗栗縣苑裡鎮山脚里5之1號",
  businessDays: "週一至週日",
  businessHours: "09:00–17:30",
  lunchBreak: "12:00–13:00 午休",
  holidayNotice: "國定假日休息",
  visitNotice: "建議提前預約，也可直接到訪",
  depositNotice: "依每筆訂單內容確認",
  paymentMethods: "現金、銀行轉帳；其他方式依訂單確認",
  orderChangeNotice: "依需求、製作進度與訂單限制討論",
  heritageYear: "1970",
  mapUrl: "https://www.google.com/maps/search/?api=1&query=358苗栗縣苑裡鎮山脚里5之1號",
};

const advantages = [
  {
    number: "01",
    title: "家族自 1970 年製床",
    description: "1970 年代表家族開始製作床墊，目前仍由家族經營。",
  },
  {
    number: "02",
    title: "苑裡自家工廠",
    description: "床墊由苗栗苑裡的自家工廠製作，可到現場了解與試躺。",
  },
  {
    number: "03",
    title: "台灣本島配送",
    description: "依地區與訂單條件，以自家車或貨運安排；目前不含離島。",
  },
  {
    number: "04",
    title: "舊床免費回收",
    description: "配送時可一併安排舊床回收，不另外加收回收費用。",
  },
];

const products = [
  {
    name: "傳統連結式彈簧床",
    tag: "主打品項",
    description: "凱麗企業社目前主打的床墊類別，可到苑裡工廠試躺，再確認實際規格與報價。",
    features: ["主打品項", "自家工廠製作", "現場試躺"],
  },
  {
    name: "獨立筒床墊",
    tag: "產品類別",
    description: "提供獨立筒床墊選擇，實際結構、尺寸、軟硬與價格以電話或現場說明為準。",
    features: ["規格現場確認", "現場試躺", "本島配送"],
  },
  {
    name: "乳膠床墊",
    tag: "產品類別",
    description: "提供乳膠床墊選擇，實際厚度、結構、尺寸與價格以電話或現場說明為準。",
    features: ["規格現場確認", "現場試躺", "本島配送"],
  },
  {
    name: "客製尺寸床墊",
    tag: "特殊尺寸",
    description: "可依床架與空間需求討論特殊尺寸，製作前先確認尺寸、搬運條件與報價。",
    features: ["特殊尺寸", "自家工廠製作", "本島配送"],
  },
];

const deliveryItems = [
  ["01", "配送範圍", "配送範圍為台灣本島，目前不包含離島。"],
  ["02", "配送方式", "依地區與訂單條件，由自家車或貨運安排配送。"],
  ["03", "樓層費用", "二樓及有電梯大樓不加收費用；其他特殊搬運情況請先確認。"],
  ["04", "舊床回收", "舊床回收不另外加收費用，可在安排配送時一併告知。"],
];

const steps = [
  ["01", "先電話詢問或直接到訪", "可先說明床墊類別、尺寸與需求，也可於營業時間直接到工廠。"],
  ["02", "現場了解與試躺", "建議提前預約，方便確認接待時間；未預約也可於營業時間到訪。"],
  ["03", "確認訂單內容", "確認產品、尺寸、價格、訂金、付款方式與預計排程後再製作。"],
  ["04", "製作與安排配送", "由苑裡自家工廠製作，再依地區以自家車或貨運配送。"],
];

const orderNotes = [
  ["製作時間", "一般與客製床墊交期依款式、規格及工廠排程於下單時確認。"],
  ["訂金", site.depositNotice],
  ["付款方式", site.paymentMethods],
  ["修改或取消", site.orderChangeNotice],
];

const faqs = [
  [
    "凱麗企業社從 1970 年就成立了嗎？",
    "1970 年代表家族開始製作床墊；目前仍由家族經營。企業社實際設立年份未在網站上另行標示。",
  ],
  [
    "試躺一定要提前預約嗎？",
    "不用。建議提前電話預約，方便工廠確認接待時間；營業時間內也可以直接到訪。",
  ],
  [
    "營業時間是什麼時候？",
    "週一至週日 09:00–17:30，12:00–13:00 午休；國定假日休息。",
  ],
  [
    "床墊下單後多久可以完成？",
    "一般與客製尺寸床墊的製作時間目前不在網站公開，請依款式、規格與工廠排程於下單時確認。",
  ],
  [
    "可以做特殊尺寸嗎？",
    "可以。請提供床架內徑、預計尺寸與搬運條件，工廠會先評估再確認製作與報價。",
  ],
  [
    "配送範圍包含離島嗎？",
    "目前配送範圍為台灣本島，不包含離島；依地區以自家車或貨運安排。",
  ],
  [
    "樓層搬運會另外收費嗎？",
    "二樓及有電梯的大樓不加收費用；其他樓層、無電梯或特殊搬運情況，請在配送前先電話確認。",
  ],
  [
    "舊床回收需要另外付費嗎？",
    "舊床回收不另外加收費用，安排配送時可一併確認回收需求。",
  ],
];

function MattressCutaway() {
  return (
    <svg
      viewBox="0 0 680 520"
      role="img"
      aria-label="床墊結構示意圖"
      className="hero-illustration"
    >
      <defs>
        <linearGradient id="fabric" x1="0" x2="1">
          <stop offset="0" stopColor="#f8f1e6" />
          <stop offset="1" stopColor="#dfceb6" />
        </linearGradient>
        <pattern id="stitch" width="28" height="28" patternUnits="userSpaceOnUse">
          <path d="M0 14h28M14 0v28" stroke="#ccb697" strokeWidth="1" opacity=".4" />
        </pattern>
      </defs>
      <ellipse cx="344" cy="454" rx="282" ry="36" fill="#0e1c24" opacity=".12" />
      <path d="M73 129 294 49l313 105-224 88z" fill="url(#fabric)" />
      <path d="M73 129 294 49l313 105-224 88z" fill="url(#stitch)" opacity=".75" />
      <path d="M73 129v70l310 111v-68z" fill="#d5c1a4" />
      <path d="M383 242 607 154v72L383 310z" fill="#ad8962" />
      <path d="M82 205 383 314l218-84v44l-218 84L82 248z" fill="#efb247" />
      <path d="M82 252 383 362l218-84v103l-218 84L82 354z" fill="#f7f1e8" />
      <g fill="none" stroke="#b34735" strokeWidth="8">
        {Array.from({ length: 8 }).map((_, index) => {
          const x = 126 + index * 57;
          return (
            <path
              key={x}
              d={`M${x} 286c-19 11-19 31 0 42s19 31 0 42 19 31 0 42`}
              opacity={0.92}
            />
          );
        })}
      </g>
      <path d="M82 354 383 465l218-84v32l-218 84L82 386z" fill="#18303b" />
      <g fontFamily="Arial, sans-serif" fontSize="17" fill="#18303b" fontWeight="700">
        <text x="35" y="102">表布</text>
        <text x="529" y="211">舒適層</text>
        <text x="500" y="335">支撐核心</text>
        <text x="47" y="417">底層</text>
      </g>
      <g stroke="#18303b" strokeWidth="2">
        <path d="M93 107 190 94" />
        <path d="m520 217-53 25" />
        <path d="m495 340-43 24" />
        <path d="m96 411 79-7" />
      </g>
    </svg>
  );
}

function FactoryBadge() {
  return (
    <svg viewBox="0 0 420 300" aria-hidden="true" className="factory-badge">
      <circle cx="210" cy="150" r="132" fill="#f2dfbd" />
      <path d="M66 133 154 79v54l83-54v54l82-54v54h49v112H66z" fill="#fffaf1" stroke="#18303b" strokeWidth="6" />
      <rect x="101" y="169" width="70" height="76" fill="#18303b" />
      <rect x="202" y="169" width="56" height="42" fill="#efb247" stroke="#18303b" strokeWidth="4" />
      <rect x="284" y="169" width="56" height="42" fill="#efb247" stroke="#18303b" strokeWidth="4" />
      <path d="M315 45h34v88h-34z" fill="#b84936" stroke="#18303b" strokeWidth="5" />
      <path d="M304 45h56v18h-56z" fill="#18303b" />
      <circle cx="136" cy="207" r="14" fill="#efb247" />
    </svg>
  );
}

export default function HomePage() {
  return (
    <>
      <header className="site-header">
        <div className="container nav-shell">
          <a className="brand" href="#top" aria-label={`${site.brand}首頁`}>
            <span className="brand-mark">{site.brandMark}</span>
            <span>
              <strong>{site.brand}</strong>
              <small>FAMILY MATTRESS MAKERS · SINCE {site.heritageYear}</small>
            </span>
          </a>

          <nav className="desktop-nav" aria-label="主要導覽">
            <a href="#products">床墊品項</a>
            <a href="#factory">工廠背景</a>
            <a href="#delivery">配送回收</a>
            <a href="#process">試躺訂購</a>
            <a href="#contact">聯絡資訊</a>
          </nav>

          <a className="button button-small button-primary" href={`tel:${site.phoneHref}`}>
            電話洽詢
          </a>
        </div>
      </header>

      <main id="top">
        <section className="hero">
          <div className="container hero-grid">
            <div className="hero-copy">
              <p className="eyebrow"><span />苗栗苑裡・家族經營・自家工廠</p>
              <h1>
                找床墊，
                <br />
                <em>直接問製作的人。</em>
              </h1>
              <p className="hero-lead">
                家族自 {site.heritageYear} 年開始製作床墊，目前仍由家族經營。
                提供傳統連結式彈簧床、獨立筒、乳膠與客製尺寸床墊，可到苑裡工廠現場試躺。
              </p>
              <div className="hero-actions">
                <a className="button button-primary" href={`tel:${site.phoneHref}`}>撥打 {site.phone}</a>
                <a className="button button-secondary" href={site.mapUrl} target="_blank" rel="noreferrer">查看工廠地圖</a>
              </div>
              <p className="hero-visit-note">
                {site.businessDays} {site.businessHours}・{site.lunchBreak}・{site.holidayNotice}
              </p>
            </div>

            <div className="hero-visual" aria-label="床墊工廠示意圖">
              <div className="hero-visual-card">
                <MattressCutaway />
              </div>
              <div className="visual-note note-one">苑裡自家工廠製作</div>
              <div className="visual-note note-two">建議預約，也可直接到訪</div>
            </div>
          </div>
        </section>

        <section className="advantage-section" aria-label="凱麗企業社四大特色">
          <div className="container advantage-grid">
            {advantages.map((item) => (
              <article className="advantage-card" key={item.number}>
                <span>{item.number}</span>
                <h2>{item.title}</h2>
                <p>{item.description}</p>
              </article>
            ))}
          </div>
        </section>

        <section className="section products-section" id="products">
          <div className="container">
            <div className="section-heading split-heading">
              <div>
                <p className="section-kicker">PRODUCT CATEGORIES</p>
                <h2>先看四種主要床墊品項。</h2>
              </div>
              <p>產品價格與詳細規格暫不公開，可電話詢問或到工廠試躺確認。</p>
            </div>

            <div className="product-grid">
              {products.map((product, index) => (
                <article className={`product-card ${index === 0 ? "featured-product" : ""}`} key={product.name}>
                  <div className={`product-visual mattress-${index + 1}`}>
                    <span className="product-index">0{index + 1}</span>
                    <span className="product-tag">{product.tag}</span>
                    <div className="mini-mattress" aria-hidden="true">
                      <span /><span /><span />
                    </div>
                  </div>
                  <div className="product-content">
                    <h3>{product.name}</h3>
                    <p>{product.description}</p>
                    <ul>
                      {product.features.map((feature) => <li key={feature}>{feature}</li>)}
                    </ul>
                    <a className="product-link" href={`tel:${site.phoneHref}`}>電話詢問這一款 <span>→</span></a>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="section factory-section" id="factory">
          <div className="container factory-grid">
            <div className="factory-visual">
              <FactoryBadge />
              <div className="factory-year">
                <strong>{site.heritageYear}</strong>
                <span>家族開始製作床墊</span>
              </div>
            </div>
            <div className="factory-copy">
              <p className="section-kicker light">FAMILY BUSINESS</p>
              <h2 className="light-text">不是只有賣床，床墊就在苑裡自家工廠製作。</h2>
              <p>
                家族自 1970 年開始製作床墊，凱麗企業社目前仍由家族經營。
                主要服務一般家庭、家具行與批發代工客戶，產品可直接與工廠討論。
              </p>
              <div className="factory-audiences">
                <span>一般家庭</span>
                <span>家具行</span>
                <span>批發代工</span>
              </div>
              <a className="button button-on-dark" href={`tel:${site.phoneHref}`}>直接聯絡工廠</a>
            </div>
          </div>
        </section>

        <section className="section delivery-section" id="delivery">
          <div className="container">
            <div className="section-heading centered-heading">
              <p className="section-kicker">DELIVERY &amp; RECYCLE</p>
              <h2>配送與回收條件，先讓你看清楚。</h2>
              <p>配送細節仍會依地點、樓層與現場搬運條件確認。</p>
            </div>
            <div className="delivery-grid">
              {deliveryItems.map(([number, title, description]) => (
                <article key={number}>
                  <span>{number}</span>
                  <h3>{title}</h3>
                  <p>{description}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="section process-section" id="process">
          <div className="container">
            <div className="section-heading split-heading process-heading">
              <div>
                <p className="section-kicker">VISIT &amp; ORDER</p>
                <h2>從試躺、確認訂單，到配送。</h2>
              </div>
              <p>{site.visitNotice}。產品規格、價格與交期在確認訂單時說明。</p>
            </div>

            <div className="process-grid">
              {steps.map(([number, title, description]) => (
                <article key={number}>
                  <span>{number}</span>
                  <h3>{title}</h3>
                  <p>{description}</p>
                </article>
              ))}
            </div>

            <div className="order-panel">
              <div className="order-panel-heading">
                <p className="section-kicker light">ORDER NOTES</p>
                <h3>下單前需要確認的事項</h3>
              </div>
              <div className="order-note-grid">
                {orderNotes.map(([title, description]) => (
                  <div key={title}>
                    <span>{title}</span>
                    <p>{description}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section className="section faq-section" id="faq">
          <div className="container faq-grid">
            <div className="faq-intro">
              <p className="section-kicker">COMMON QUESTIONS</p>
              <h2>來工廠前，先看常見問題。</h2>
              <p className="muted">未公開的規格、價格、保固與交期，請以電話或現場確認內容為準。</p>
              <a className="text-link" href={`tel:${site.phoneHref}`}>仍有問題？直接撥打 {site.phone} →</a>
            </div>
            <div className="faq-list">
              {faqs.map(([question, answer]) => (
                <details key={question}>
                  <summary>{question}<span>＋</span></summary>
                  <p>{answer}</p>
                </details>
              ))}
            </div>
          </div>
        </section>

        <section className="contact-section" id="contact">
          <div className="container contact-grid">
            <div className="contact-copy">
              <p className="section-kicker light">CONTACT THE FACTORY</p>
              <h2 className="light-text">預約試躺、詢問床墊或合作代工，直接聯絡工廠。</h2>
              <p>{site.visitNotice}。中午休息與國定假日請留意營業資訊。</p>
              <div className="contact-actions">
                <a className="button button-accent" href={`tel:${site.phoneHref}`}>撥打 {site.phone}</a>
                <a className="button button-outline-light" href={site.mapUrl} target="_blank" rel="noreferrer">Google 地圖導航</a>
              </div>
            </div>

            <address className="contact-card">
              <div className="contact-card-primary">
                <span>工廠／試躺地址</span>
                <strong><a href={site.mapUrl} target="_blank" rel="noreferrer">{site.address}</a></strong>
              </div>
              <div><span>營業時間</span><strong>{site.businessDays} {site.businessHours}</strong><small>{site.lunchBreak}・{site.holidayNotice}</small></div>
              <div><span>現場試躺</span><strong>{site.visitNotice}</strong></div>
              <div><span>服務區域</span><strong>{site.city}；{site.serviceArea}</strong></div>
              <div><span>電話</span><strong><a href={`tel:${site.phoneHref}`}>{site.phone}</a></strong></div>
            </address>
          </div>
        </section>
      </main>

      <footer>
        <div className="container footer-row">
          <div className="brand footer-brand">
            <span className="brand-mark">{site.brandMark}</span>
            <span><strong>{site.brand}</strong><small>家族自 {site.heritageYear} 年開始製作床墊</small></span>
          </div>
          <p>© {new Date().getFullYear()} {site.brand} · 苗栗苑裡床墊工廠</p>
        </div>
      </footer>

      <div className="mobile-cta">
        <a href={site.mapUrl} target="_blank" rel="noreferrer">地圖導航</a>
        <a href={`tel:${site.phoneHref}`}>電話洽詢</a>
      </div>
    </>
  );
}
