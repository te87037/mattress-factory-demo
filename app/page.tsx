const site = {
  brand: "厚眠床墊工廠",
  city: "新北市",
  phone: "02-0000-0000",
  lineUrl: "https://line.me/R/ti/p/@your-line-id",
  address: "新北市（請換成實際地址）",
};

const products = [
  {
    name: "日常好睡款",
    tag: "最多家庭選擇",
    firmness: "適中 6／10",
    price: "雙人尺寸 NT$18,800 起",
    description:
      "獨立筒搭配高密度舒適層，支撐明確、不會過硬，適合仰睡與側睡交替。",
    features: ["蜂巢式獨立筒", "高密度泡棉", "透氣針織布"],
  },
  {
    name: "硬挺支撐款",
    tag: "偏硬睡感",
    firmness: "偏硬 8／10",
    price: "雙人尺寸 NT$19,800 起",
    description:
      "降低深陷感並加強腰臀承托，適合喜歡硬挺感、體型較壯或容易翻身的人。",
    features: ["加強型獨立筒", "高支撐泡棉", "四周護邊"],
  },
  {
    name: "柔感減壓款",
    tag: "側睡友善",
    firmness: "偏軟 4／10",
    price: "雙人尺寸 NT$22,800 起",
    description:
      "肩臀能適度下沉，減少側睡壓迫感，同時保留穩定支撐，不是整張軟趴趴。",
    features: ["減壓舒適層", "分區獨立筒", "親膚涼感表布"],
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
            <span className="brand-mark">厚</span>
            <span>
              <strong>{site.brand}</strong>
              <small>FACTORY DIRECT</small>
            </span>
          </a>

          <nav className="desktop-nav" aria-label="主要導覽">
            <a href="#products">床墊款式</a>
            <a href="#materials">材料說明</a>
            <a href="#process">製作流程</a>
            <a href="#custom">尺寸客製</a>
            <a href="#contact">聯絡工廠</a>
          </nav>

          <a className="button button-small button-primary" href={site.lineUrl}>
            LINE 詢問
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
                從彈簧、泡棉到表布，我們把床墊裡面有什麼、為什麼這樣搭配，清楚告訴你。
                不包裝話術，不一直推高價款，先找到適合你的支撐。
              </p>
              <div className="hero-actions">
                <a className="button button-primary" href={site.lineUrl}>直接問工廠</a>
                <a className="button button-secondary" href="#products">先看床墊款式</a>
              </div>
              <ul className="trust-list" aria-label="服務特色">
                <li>價格公開</li>
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
              <div><strong>工廠直營</strong><span>少一層轉手，多一分透明</span></div>
              <div><strong>現場試躺</strong><span>不靠三分鐘的第一印象</span></div>
              <div><strong>依需求客製</strong><span>標準與特殊尺寸都能討論</span></div>
              <div><strong>售後有人處理</strong><span>不是出貨後就找不到人</span></div>
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
                真正的工廠直營，是你問床墊裡面放什麼，我們回答得出來；你說睡起來哪裡不舒服，
                我們知道該從哪一層調整。
              </p>
              <p>
                我們把通路成本省下來，但不把該有的材料、品檢與售後省掉。價格可以實在，規格也要講明白。
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
              <p>以下為 demo 售價與規格，正式網站可連接 CMS，由工廠自行更新。</p>
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
                      <a href={site.lineUrl}>詢問這一款 →</a>
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
              <a className="button button-on-dark" href={site.lineUrl}>傳尺寸給工廠評估</a>
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
                <a className="button button-accent" href={site.lineUrl}>加入 LINE 詢問</a>
                <a className="button button-outline-light" href={`tel:${site.phone}`}>直接打電話</a>
              </div>
            </div>
            <address>
              <div><span>展示／工廠</span><strong>{site.address}</strong></div>
              <div><span>服務地區</span><strong>{site.city}，其他地區可詢問配送</strong></div>
              <div><span>聯絡電話</span><strong>{site.phone}</strong></div>
              <div><span>營業方式</span><strong>建議預約，避免現場無人接待</strong></div>
            </address>
          </div>
        </section>
      </main>

      <footer>
        <div className="container footer-row">
          <div className="brand footer-brand">
            <span className="brand-mark">厚</span>
            <span><strong>{site.brand}</strong><small>睡得舒服，買得明白。</small></span>
          </div>
          <p>© {new Date().getFullYear()} {site.brand} · Next.js Demo</p>
        </div>
      </footer>

      <div className="mobile-cta">
        <a href={`tel:${site.phone}`}>電話</a>
        <a href={site.lineUrl}>LINE 問工廠</a>
      </div>
    </>
  );
}
