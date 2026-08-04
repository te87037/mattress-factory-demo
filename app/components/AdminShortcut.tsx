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
        <span className="admin-shortcut-icon" aria-hidden="true">⚙</span>
        <span className="admin-shortcut-label-full">網站後台</span>
        <span className="admin-shortcut-label-short">後台</span>
      </a>

      <style>{`
        .admin-shortcut {
          position: fixed;
          z-index: 45;
          top: 16px;
          right: max(148px, calc((100vw - 1180px) / 2 + 148px));
          display: inline-flex;
          align-items: center;
          justify-content: center;
          gap: 6px;
          min-height: 44px;
          padding: 0 13px;
          border: 1px solid rgba(24, 48, 59, .28);
          border-radius: 8px;
          background: rgba(255, 253, 248, .94);
          color: #4f5759;
          backdrop-filter: blur(14px);
          font-size: 12px;
          font-weight: 900;
          line-height: 1;
          white-space: nowrap;
          transition: transform .18s ease, background .18s ease, color .18s ease, border-color .18s ease;
        }

        .admin-shortcut:hover,
        .admin-shortcut:focus-visible {
          transform: translateY(-1px);
          border-color: #18303b;
          background: #18303b;
          color: #fff;
          outline: none;
        }

        .admin-shortcut-icon {
          font-size: 14px;
          line-height: 1;
        }

        .admin-shortcut-label-short {
          display: none;
        }

        @media (max-width: 1040px) {
          .admin-shortcut {
            right: 142px;
          }
        }

        @media (max-width: 640px) {
          .admin-shortcut {
            top: 14px;
            right: 12px;
            min-height: 38px;
            padding: 0 10px;
            font-size: 11px;
          }

          .admin-shortcut-label-full {
            display: none;
          }

          .admin-shortcut-label-short {
            display: inline;
          }
        }
      `}</style>
    </>
  );
}
