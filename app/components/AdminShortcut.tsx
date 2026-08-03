export function AdminShortcut() {
  return (
    <>
      <a
        className="admin-shortcut"
        href="studio/"
        target="_blank"
        rel="noreferrer"
        aria-label="開啟網站內容後台"
        title="開啟網站內容後台"
      >
        <span aria-hidden="true">↗</span>
        網站後台
      </a>

      <style>{`
        .admin-shortcut {
          position: fixed;
          z-index: 45;
          right: 18px;
          bottom: 18px;
          display: inline-flex;
          align-items: center;
          gap: 7px;
          min-height: 42px;
          padding: 0 15px;
          border: 2px solid #18303b;
          border-radius: 8px;
          background: #fffdf8;
          color: #18303b;
          box-shadow: 4px 4px 0 #efb247;
          font-size: 13px;
          font-weight: 900;
          line-height: 1;
          transition: transform .18s ease, background .18s ease, color .18s ease;
        }

        .admin-shortcut:hover,
        .admin-shortcut:focus-visible {
          transform: translateY(-2px);
          background: #18303b;
          color: #fff;
          outline: none;
        }

        .admin-shortcut span {
          font-size: 16px;
        }

        @media (max-width: 640px) {
          .admin-shortcut {
            right: 10px;
            bottom: 82px;
            min-height: 38px;
            padding: 0 12px;
            font-size: 12px;
            box-shadow: 3px 3px 0 #efb247;
          }
        }
      `}</style>
    </>
  );
}
