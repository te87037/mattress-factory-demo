const site = {
  brand: "凱麗企業社",
  brandMark: "凱",
  city: "苗栗、台中",
  serviceArea: "台灣本島配送（不含離島）",
  phone: "037-742-518",
  phoneHref: "037742518",
  address: "358 苗栗縣苑裡鎮山脚里5之1號",
  businessHours: "09:00–17:30",
  heritageYear: "1970",
  mapUrl: "https://www.google.com/maps/search/?api=1&query=358苗栗縣苑裡鎮山脚里5之1號",
};

const products = [
  {
    name: "傳統連結式彈簧床",
    tag: "主打品項",
    description:
      "凱麗企業社目前主打的床墊類別，可先電話預約到工廠試躺，再依實際需求確認規格與報價。",
    features: ["主打品項", "自家工廠製作", "預約試躺"],
  },
  {
    name: "獨立筒床墊",
    tag: "產品類別",
    description:
      "提供獨立筒床墊選擇，實際結構、尺寸、軟硬與價格請於電話或現場諮詢確認。",
    features: ["自家工廠製作", "預約試躺", "本島配送"],
  },
  {
    name: "乳膠床墊",
    tag: "產品類別",
    description:
      "提供乳膠床墊選擇，實際厚度、結構、尺寸與價格請於電話或現場諮詢確認。",
    features: ["自家工廠製作", "預約試躺", "本島配送"],
  },
  {
    name: "客製尺寸床墊",
    tag: "特殊尺寸",
    description:
      "可依床架與空間需求討論特殊尺寸，製作前會先確認尺寸、搬運條件與報價。",
    features: ["特殊尺寸", "自家工廠製作", "本島配送"],
  },
];

const steps = [
  ["01", "電話預約與詢問", "先確認來訪時間、床墊類別、尺寸與主要需求。"],
  ["02", "現場試躺討論", "到苑裡工廠了解產品，依實際展示與需求確認選擇。"],
  ["03", "自家工廠製作", "確認內容後由苑裡自家工廠安排製作。"],
  ["04", "安排本島配送", "依地區與搬運條件，以自家車或貨運安排配送。"],
];

const faqs = [
  [
    "凱麗企業社從 1970 年就成立了嗎？",
    "1970 年代表家族開始製作床墊；目前仍由家族經營。企業社實際設立年份未在網站上另行標示。",
  ],
  [
    "床墊是在苑裡製作嗎？",
    "是，床墊由苗栗苑裡的自家工廠製作，歡迎先電話預約來訪與試躺。",
  ],
  [
    "主要服務哪些客戶？",
    "目前主要服務一般家庭、家具行與批發代工客戶。",
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
          <stop offset="0" stopColor="#f6efe3" />
          <stop offset="1" stopColor="#e3d4bd" />
        </linearGradient>
        <pattern id="stitch" width="28" height="28" patternUnits="userSpaceOnUse">
          <path d="M0 14h28M14 0v28" stroke="#d5c3a8" strokeWidth="1" opacity=".45" />
        </pattern>
      </defs>
      <ellipse cx="344" cy="454" rx="282" ry="36" fill="#0e1c24" opacity=".12" />
      <path d="M73 129 294 49l313 105-224 88z" fill="url(#fabric)" />
      <path d="M73 129 294 49l313 105-224 88z" fill="url(#stitch)" opacity=".75" />
      <path d="M73 129v70l310 111v-68z" fill="#d7c4a8" />
      <path d="M383 242 607 154v72L383 310z" fill="#b8986f" />
      <path d="M82 205 383 314l218-84v44l-218 84L82 248z" fill="#f0b24a" />
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
      <path d="M82 354 383 465l218-84v32l-218 84L82 386z" fill="#19313d" />
      <g fontFamily="Arial, sans-serif" fontSize="17" fill="#19313d" fontWeight="700">
        <text x="35" y="102">表布</text>
        <text x="529" y="211">舒適層</text>
        <text x="500" y="335">支撐核心</text>
        <text x="47" y="417">底層</text>
      </g>
      <g stroke="#19313d" strokeWidth="2">
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
    <svg viewBox="0 0 360 250" aria-hidden="true" className="factory-badge">
      <rect x="22" y="111" width="316" height="111" rx="8" fill="#f5ead8" />
      <path d="m22 111 82-49v49l77-49v49l76-49v49h81" fill="#c7654d" />
      <rect x="54" y="139" width="62" height="83" fill="#19313d" />
      <rect x="145" y="142" width="57" height="39" fill="#f0b24a" />
      <rect x="228" y="142" width="76" height="39" fill="#f0b24a" />
      <path d="M283 27h32v84h-32z" fill="#19313d" />
      <path d="M275 27h48v17h-48z" fill="#c7654d" />
      <circle cx="83" cy="180" r="13" fill="#f0b24a" />
      <path d="M42 221h278" stroke="#19313d" strokeWidth="5" />
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
            <a href="#process">服務流程</a>
            <a href="#delivery">配送服務</a>
            <a href="#contact">聯絡工廠</a>
          </nav>

          <a className="button button-small button-primary" href={`tel:${site.phoneHref}`}>
            電話預約試躺
          </a>
        </div>
      </header>

      <main id="top">
        <section className="hero">
          <div className="container hero-grid">
            <div className="hero-copy">
              <div className="eyebrow"><span />家族經營・苑裡自家工廠</div>
              <h1>
                床墊就該
                <br />
                <em>睡得舒服，買得明白。</em>
              </h1>
              <p className="hero-lead">
                家族自 {site.heritageYear} 年開始製作床墊，目前仍由家族經營，並於苗栗苑裡自家工廠製作。
                提供傳統連結式彈簧床、獨立筒、乳膠與客製尺寸床墊。
              </p>
              <div className="hero-actions">
                <a className="button button-primary" href={`tel:${site.phoneHref}`}>直接問工廠</a>
                <a className="button button-secondary" href="#products">查看床墊品項</a>
              </div>
              <ul className="trust-list" aria-label="服務特色">
                <li>家族經營</li>
                <li>自家工廠製作</li>
                <li>舊床免費回收</li>
                <li>預約試躺</li>
              </ul>
            </div>
            <div className="hero-visual">
              <div className="visual-note note-one">苑裡自家工廠製作</div>
              <MattressCutaway />
              <div className="visual-note note-two">來訪前可先電話預約</div>
            </div>
          </div>
          <div className="hero-bottom-bar">
            <div className="container stats-row">
              <div><strong>家族自 1970 年製床</strong><span>延續至今的家族經營</span></div>
              <div><strong>苑裡自家工廠</strong><span>床墊由自家工廠製作</span></div>
              <div><strong>本島配送</strong><span>不包含離島地區</span></div>
              <div><strong>舊床免費回收</strong><span>配送時可一併安排</span></div>
            </div>
          </div>
        </section>

        <section className="section intro-section" id="factory">
          <div className="container two-column intro-grid">
            <div>
              <p className="section-kicker">FAMILY BUSINESS</p>
              <h2>從家族製床經驗，到苑裡自家工廠。</h2>
            </div>
            <div className="large-copy">
              <p>
                家族自 1970 年開始製作床墊，凱麗企業社目前仍由家族經營，床墊在苗栗縣苑裡鎮的自家工廠製作。
              </p>
              <p>
                主要服務一般家庭、家具行與批發代工客戶；苗栗、台中為主要服務區域，也提供台灣本島配送。
              </p>
            </div>
          </div>
        </section>

        <section className="section products-section" id="products">
          <div className="container">
            <div className="section-heading split-heading">
              <div>
                <p className="section-kicker light">PRODUCT CATEGORIES</p>
                <h2 className="light-text">目前提供的床墊品項。</h2>
              </div>
              <p>產品價格與詳細規格暫不公開，請電話預約試躺或直接向工廠確認。</p>
            </div>

            <div className="product-grid">
              {products.map((product, index) => (
                <article className="product-card" key={product.name}>
                  <div className={`product-visual mattress-${index + 1}`}>
                    <span className="product-tag">{product.tag}</span>
                    <div className="mini-mattress">
                      <span /><span /><span />
                    </div>
                  </div>
                  <div className="product-content">
                    <div className="product-title-row">
                      <h3>{product.name}</h3>
                    </div>
                    <p>{product.description}</p>
                    <ul>
                      {product.features.map((feature) => <li key={feature}>{feature}</li>)}
                    </ul>
                    <div className="product-footer">
                      <a href={`tel:${site.phoneHref}`}>電話詢問這一款 →</a>
                    </div>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="section material-section" id="delivery">
          <div className="container material-grid">
            <div className="material-visual">
              <MattressCutaway />
            </div>
            <div className="material-copy">
              <p className="section-kicker">DELIVERY SERVICE</p>
              <h2>配送與回收條件，先說清楚。</h2>
              <div className="material-list">
                <div><span>01</span><h3>配送範圍</h3><p>配送範圍為台灣本島，目前不包含離島。</p></div>
                <div><span>02</span><h3>配送方式</h3><p>依地區與訂單條件，由自家車或貨運安排配送。</p></div>
                <div><span>03</span><h3>樓層費用</h3><p>二樓及有電梯大樓不加收費用；其他特殊搬運情況請先確認。</p></div>
                <div><span>04</span><h3>舊床回收</h3><p>舊床回收不另外加收費用，可在安排配送時一併告知。</p></div>
              </div>
            </div>
          </div>
        </section>

        <section className="section process-section" id="process">
          <div className="container">
            <div className="section-heading centered">
              <p className="section-kicker">HOW WE WORK</p>
              <h2>從詢問到配送，四個步驟。</h2>
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
          </div>
        </section>

        <section className="section custom-section" id="custom">
          <div className="container custom-grid">
            <div className="factory-card">
              <FactoryBadge />
              <div><strong>苑裡自家工廠製作</strong><span>家庭、家具行與批發代工皆可洽詢</span></div>
            </div>
            <div className="custom-copy">
              <p className="section-kicker light">CUSTOM SIZE</p>
              <h2 className="light-text">特殊尺寸，可直接和工廠討論。</h2>
              <p>
                請提供床架內徑、預計長寬、厚度需求與搬運條件，工廠會先評估製作方式與報價。
              </p>
              <div className="custom-points">
                <span>特殊長寬</span><span>家庭需求</span><span>家具行合作</span><span>批發代工</span>
              </div>
              <a className="button button-on-dark" href={`tel:${site.phoneHref}`}>電話提供尺寸洽詢</a>
            </div>
          </div>
        </section>

        <section className="section faq-section">
          <div className="container faq-grid">
            <div>
              <p className="section-kicker">COMMON QUESTIONS</p>
              <h2>來訪與訂製前，可以先確認。</h2>
              <p className="muted">產品規格、價格、配送與搬運條件，請以電話或現場確認內容為準。</p>
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
            <div>
              <p className="section-kicker light">CONTACT THE FACTORY</p>
              <h2 className="light-text">預約試躺或合作洽詢，直接聯絡工廠。</h2>
              <p>一般家庭、家具行與批發代工需求，皆可先電話說明。</p>
              <div className="contact-actions">
                <a className="button button-accent" href={`tel:${site.phoneHref}`}>電話預約／洽詢</a>
                <a className="button button-outline-light" href={site.mapUrl} target="_blank" rel="noreferrer">查看 Google 地圖</a>
              </div>
            </div>
            <address>
              <div><span>工廠／試躺</span><strong><a href={site.mapUrl} target="_blank" rel="noreferrer">{site.address}</a></strong></div>
              <div><span>主要服務</span><strong>{site.city}；{site.serviceArea}</strong></div>
              <div><span>配送方式</span><strong>依地區使用自家車或貨運</strong></div>
              <div><span>搬運費用</span><strong>二樓及有電梯大樓不加收</strong></div>
              <div><span>舊床回收</span><strong>不另外加收費用</strong></div>
              <div><span>聯絡電話</span><strong><a href={`tel:${site.phoneHref}`}>{site.phone}</a></strong></div>
              <div><span>營業時間</span><strong>{site.businessHours}，接受預約試躺</strong></div>
              <div><span>主要客戶</span><strong>一般家庭、家具行、批發代工</strong></div>
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
        <a href={`tel:${site.phoneHref}`}>電話洽詢</a>
        <a href={site.mapUrl} target="_blank" rel="noreferrer">地圖導航</a>
      </div>
    </>
  );
}
