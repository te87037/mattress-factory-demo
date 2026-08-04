export function AdminShortcut() {
  return (
    <>
      <a
        className="admin-shortcut"
        href="studio/"
        target="_blank"
        rel="noreferrer"
        aria-label="開啟網站內容後台"
        title="網站後台"
      >
        <span aria-hidden="true">⚙</span>
        <span className="sr-only">網站後台</span>
      </a>

      <style>{`
        .admin-shortcut {
          position: fixed;
          z-index: 25;
          left: 8px;
          bottom: 8px;
          width: 28px;
          height: 28px;
          display: grid;
          place-items: center;
          border: 0;
          border-radius: 50%;
          background: transparent;
          color: #18303b;
          opacity: .2;
          font-size: 14px;
          line-height: 1;
          transition: opacity .18s ease, background .18s ease, transform .18s ease;
        }

        .admin-shortcut:hover,
        .admin-shortcut:focus-visible {
          opacity: .9;
          background: rgba(255, 253, 248, .94);
          transform: scale(1.05);
          outline: 1px solid rgba(24, 48, 59, .22);
          outline-offset: 1px;
        }

        .admin-shortcut::after {
          content: "網站後台";
          position: absolute;
          left: 34px;
          bottom: 2px;
          width: max-content;
          padding: 5px 8px;
          border-radius: 5px;
          background: #18303b;
          color: #fff;
          font-size: 11px;
          font-weight: 800;
          opacity: 0;
          pointer-events: none;
          transform: translateX(-4px);
          transition: opacity .18s ease, transform .18s ease;
        }

        .admin-shortcut:hover::after,
        .admin-shortcut:focus-visible::after {
          opacity: 1;
          transform: translateX(0);
        }

        .sr-only {
          position: absolute;
          width: 1px;
          height: 1px;
          padding: 0;
          margin: -1px;
          overflow: hidden;
          clip: rect(0, 0, 0, 0);
          white-space: nowrap;
          border: 0;
        }

        @media (max-width: 640px) {
          .admin-shortcut {
            left: 6px;
            bottom: 70px;
            width: 24px;
            height: 24px;
            font-size: 12px;
            opacity: .16;
          }

          .admin-shortcut::after {
            display: none;
          }
        }
      `}</style>
    </>
  );
}
