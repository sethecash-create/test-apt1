export default function Logo({ showSubtitle = false }: { showSubtitle?: boolean }) {
  return (
    <div style={{ display: 'inline-flex', flexDirection: 'column', lineHeight: 1 }}>
      <div style={{ display: 'flex', alignItems: 'center' }}>
        {/* Triangle icon — "A" of wordmark overlaps the right side of it */}
        <svg width="52" height="48" viewBox="0 0 52 48" fill="none" xmlns="http://www.w3.org/2000/svg" style={{ flexShrink: 0 }}>
          <defs>
            <pattern
              id="diag-stripes"
              x="0" y="0"
              width="7" height="7"
              patternUnits="userSpaceOnUse"
              patternTransform="rotate(45)"
            >
              <line x1="0" y1="0" x2="0" y2="7" stroke="#45c97a" strokeWidth="3.5" />
            </pattern>
            <clipPath id="tri-mask">
              <polygon points="26,1 51,47 1,47" />
            </clipPath>
          </defs>
          <rect x="0" y="0" width="52" height="48" fill="url(#diag-stripes)" clipPath="url(#tri-mask)" />
        </svg>

        {/* Wordmark shifted left so the "A" sits over the triangle's right edge */}
        <div style={{ marginLeft: '-16px', display: 'flex', alignItems: 'baseline' }}>
          <span
            style={{
              fontFamily: "'Poppins', system-ui, sans-serif",
              fontWeight: 800,
              fontSize: '28px',
              color: '#152e3e',
              letterSpacing: '-0.3px',
            }}
          >
            Aptia
          </span>
          <span
            style={{
              fontFamily: "'Poppins', system-ui, sans-serif",
              fontWeight: 800,
              fontSize: '28px',
              color: '#45c97a',
              letterSpacing: '-0.3px',
            }}
          >
            365
          </span>
        </div>
      </div>

      {showSubtitle && (
        <span
          style={{
            fontFamily: "'Poppins', system-ui, sans-serif",
            fontWeight: 600,
            fontSize: '8.5px',
            letterSpacing: '0.2em',
            color: '#6b7280',
            textTransform: 'uppercase',
            marginTop: '2px',
            paddingLeft: '2px',
          }}
        >
          Coding School
        </span>
      )}
    </div>
  );
}
