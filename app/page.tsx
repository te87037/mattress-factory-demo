const site = {
  brand: "凱麗企業社",
  brandMark: "凱",
  city: "苗栗、台中",
  serviceArea: "全台配送",
  phone: "037-742-518",
  phoneHref: "037742518",
  address: "358 苗栗縣苑裡鎮山脚里5之1號",
  businessHours: "09:00–17:30",
  foundedYear: "1970",
  mapUrl: "https://www.google.com/maps/search/?api=1&query=358苗栗縣苑裡鎮山脚里5之1號",
};
const products = [
  {
    name: "傳統連結式彈簧床",
    tag: "主打款",
    firmness: "整體支撐",
    price: "起價請來電洽詢",
    description:
      "凱麗企業社的主打床款，採傳統連結式彈簧結構，睡感穩定、支撐明確，適合偏好扎實承托感的家庭。",
    features: ["連結式彈簧", "扎實支撐", "可預約試躺"],
  },
  {
    name: "獨立筒床墊",
    tag: "降低翻身干擾",
    firmness: "多種睡感",
    price: "起價請來電洽詢",
    description:
      "每顆彈簧各自受力，能降低同床翻身時的牽動感；實際軟硬度與舒適層可依需求現場比較。",
    features: ["獨立筒結構", "減少相互干擾", "軟硬可諮詢"],
  },
  {
    name: "乳膠床墊",
    tag: "彈性貼合",
    firmness: "依規格選擇",
    price: "起價請來電洽詢",
    description:
      "提供乳膠材質床墊選擇，著重彈性與貼合感；厚度、結構與適合的睡感可於預約試躺時確認。",
    features: ["乳膠材質", "彈性貼合", "規格可諮詢"],
  },
  {
    name: "客製尺寸床墊",
    tag: "特殊尺寸",
    firmness: "依需求製作",
    price: "起價請來電洽詢",
    description:
      "適用於特殊床架、和室、上下舖、民宿與其他非標準空間，提供尺寸、厚度及搬運條件評估。",
    features: ["特殊長寬", "厚度可討論", "全台配送評估"],
  },
];

const steps = [
  ["01", "了解你的睡法", "先問身形、睡姿、床伴與既有床墊問題，不先推最貴的。"],
  ["02", "挑結構與軟硬", "現場比較不同支撐與舒適層，找出真正適合的睡感。"],
  ["03", "工廠排程製作", "確認尺寸後進入製作，材料、厚度與交期都寫清楚。"],
  ["04", "品檢配送到家", "完成平整度、外觀與尺寸檢查，再安排配送與舊床處理。"],
];

const faqs = [
  [
    "工廠直營真的比較便宜嗎？",
    "我們省下多層經銷與展示成本，但不靠偷料壓低價格。每款床墊會說明主要結構、材料與價格，讓你知道錢花在哪裡。",
  ],
  [
    "床墊越硬越護腰嗎？",
    "不一定。太硬可能讓肩臀無法下沉、腰部懸空；太軟則可能讓骨盆下陷。正確做法是依身形與睡姿選擇支撐。",
  ],
  [
    "可以做特殊尺寸嗎？",
    "可以。提供床架內徑、預計厚度與現場照片，我們會評估製作、搬運與使用是否合適。",
  ],
  [
    "能不能處理舊床墊？",
    "可依配送地區、樓層與電梯條件協助安排；實際費用會在下單前說明，不到現場才臨時加價。",
  ],
];

function MattressCutaway() {
  return (
    <svg
      viewBox="0 0 680 520"
      role="img"
      aria-label="床墊分層結構示意圖"
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
        <text x="35" y="102">親膚表布</text>
        <text x="529" y="211">舒適層</text>
        <text x="515" y="335">獨立筒</text>
        <text x="47" y="417">穩固底層</text>
      </g>
      <g stroke="#19313d" strokeWidth="2">
        <path d="M121 107 190 94" />
        <path d="m520 217-53 25" />
        <path d="m510 340-58 24" />
        <path d="m130 411 45-7" />
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
              <small>EST. {site.foundedYear} · FACTORY DIRECT</small>
            </span>
          </a>

          <nav className="desktop-nav" aria-label="主要導覽">
            <a href="#products">床墊款式</a>
            <a href="#materials">材料說明</a>
            <a href="#process">製作流程</a>
            <a href="#custom">尺寸客製</a>
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
              <div className="eyebrow"><span />工廠自己做，規格直接說</div>
              <h1>
                床墊就該
                <br />
                <em>睡得舒服，買得明白。</em>
              </h1>
              <p className="hero-lead">
                凱麗企業社自 1970 年在苗栗苑裡製作床墊，提供傳統連結式彈簧床、獨立筒、乳膠與客製尺寸床墊。
                可先預約試躺，再依睡感、尺寸與預算選擇。
              </p>
              <div className="hero-actions">
                <a className="button button-primary" href={`tel:${site.phoneHref}`}>直接問工廠</a>
                <a className="button button-secondary" href="#products">先看床墊款式</a>
              </div>
              <ul className="trust-list" aria-label="服務特色">
                <li>起價透明</li>
                <li>材料說明</li>
                <li>尺寸客製</li>
                <li>預約試躺</li>
              </ul>
            </div>
            <div className="hero-visual">
              <div className="visual-note note-one">每層材料都說清楚</div>
              <MattressCutaway />
              <div className="visual-note note-two">軟硬度現場比較</div>
            </div>
          </div>
          <div className="hero-bottom-bar">
            <div className="container stats-row">
              <div><strong>1970 年創立</strong><span>在苗栗苑裡長期製作床墊</span></div>
              <div><strong>預約試躺</strong><span>09:00–17:30，來訪前先電話確認</span></div>
              <div><strong>尺寸客製</strong><span>標準與特殊尺寸都能討論</span></div>
              <div><strong>全台配送</strong><span>可一併評估舊床回收</span></div>
            </div>
          </div>
        </section>

        <section className="section intro-section">
          <div className="container two-column intro-grid">
            <div>
              <p className="section-kicker">WHY FACTORY DIRECT</p>
              <h2>工廠直營，不是只賣便宜。</h2>
            </div>
            <div className="large-copy">
              <p>
                凱麗企業社創立於 1970 年，工廠位於苗栗縣苑裡鎮。從傳統連結式彈簧床到獨立筒、
                乳膠與特殊尺寸，都能直接與工廠討論。
              </p>
              <p>
                我們主要服務苗栗、台中，並提供全台配送與舊床回收評估。看得到工廠、找得到人，規格與費用在製作前說清楚。
              </p>
            </div>
          </div>
        </section>

        <section className="section products-section" id="products">
          <div className="container">
            <div className="section-heading split-heading">
              <div>
                <p className="section-kicker light">POPULAR MODELS</p>
                <h2 className="light-text">先從你喜歡的睡感開始。</h2>
              </div>
              <p>提供四大類床墊選擇；各款起價與詳細規格會依下一階段資料陸續補齊。</p>
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
                      <span>{product.firmness}</span>
                    </div>
                    <p>{product.description}</p>
                    <ul>
                      {product.features.map((feature) => <li key={feature}>{feature}</li>)}
                    </ul>
                    <div className="product-footer">
                      <strong>{product.price}</strong>
                      <a href={`tel:${site.phoneHref}`}>電話詢問這一款 →</a>
                    </div>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="section material-section" id="materials">
          <div className="container material-grid">
            <div className="material-visual">
              <MattressCutaway />
            </div>
            <div className="material-copy">
              <p className="section-kicker">MATERIALS IN PLAIN WORDS</p>
              <h2>不只寫「高級材料」，直接告訴你作用。</h2>
              <div className="material-list">
                <div><span>01</span><h3>表布</h3><p>接觸皮膚的第一層，重點是觸感、透氣與清潔維護，不是花紋越多越高級。</p></div>
                <div><span>02</span><h3>舒適層</h3><p>決定包覆與壓力分散。泡棉密度、厚度與搭配方式，比一個響亮名稱更重要。</p></div>
                <div><span>03</span><h3>支撐核心</h3><p>獨立筒線徑、圈數、排列與分區會影響承托及干擾，不是顆數越多就一定越好。</p></div>
                <div><span>04</span><h3>床沿與底層</h3><p>影響坐床邊、上下床與長期形變。該加強的位置，我們不做成看不見就省略。</p></div>
              </div>
            </div>
          </div>
        </section>

        <section className="section process-section" id="process">
          <div className="container">
            <div className="section-heading centered">
              <p className="section-kicker">HOW WE WORK</p>
              <h2>從詢問到送到家，四個步驟說清楚。</h2>
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
              <div><strong>自家工廠排程製作</strong><span>尺寸與結構都能直接討論</span></div>
            </div>
            <div className="custom-copy">
              <p className="section-kicker light">CUSTOM SIZE</p>
              <h2 className="light-text">床架不是標準尺寸？先別急著將就。</h2>
              <p>
                掀床、上下舖、和室、露營車、民宿與特殊床架，都可以提供內徑與照片評估。
                我們會先確認尺寸公差、搬運路線與使用需求，再報價製作。
              </p>
              <div className="custom-points">
                <span>特殊長寬</span><span>厚度調整</span><span>軟硬調整</span><span>商用批量</span>
              </div>
              <a className="button button-on-dark" href={`tel:${site.phoneHref}`}>電話提供尺寸評估</a>
            </div>
          </div>
        </section>

        <section className="section faq-section">
          <div className="container faq-grid">
            <div>
              <p className="section-kicker">COMMON QUESTIONS</p>
              <h2>買床前，先把疑問問完。</h2>
              <p className="muted">沒有不好意思問的問題。規格、運費、樓層、保固都應該在下單前說明。</p>
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
              <h2 className="light-text">不用先決定買哪張，先說你現在睡哪裡不舒服。</h2>
              <p>告訴我們身高體重、主要睡姿、尺寸與預算，工廠會先幫你縮小範圍。</p>
              <div className="contact-actions">
                <a className="button button-accent" href={`tel:${site.phoneHref}`}>電話預約試躺</a>
                <a className="button button-outline-light" href={site.mapUrl} target="_blank" rel="noreferrer">查看 Google 地圖</a>
              </div>
            </div>
            <address>
              <div><span>工廠／試躺</span><strong><a href={site.mapUrl} target="_blank" rel="noreferrer">{site.address}</a></strong></div>
              <div><span>主要服務</span><strong>{site.city}；{site.serviceArea}</strong></div>
              <div><span>聯絡電話</span><strong><a href={`tel:${site.phoneHref}`}>{site.phone}</a></strong></div>
              <div><span>營業時間</span><strong>{site.businessHours}，接受預約試躺</strong></div>
            </address>
          </div>
        </section>
      </main>

      <footer>
        <div className="container footer-row">
          <div className="brand footer-brand">
            <span className="brand-mark">{site.brandMark}</span>
            <span><strong>{site.brand}</strong><small>苗栗苑裡床墊工廠 · 創立於 {site.foundedYear}</small></span>
          </div>
          <p>© {new Date().getFullYear()} {site.brand} · 苗栗苑裡床墊工廠</p>
        </div>
      </footer>

      <div className="mobile-cta">
        <a href={`tel:${site.phoneHref}`}>電話預約</a>
        <a href={site.mapUrl} target="_blank" rel="noreferrer">地圖導航</a>
      </div>
    </>
  );
}
