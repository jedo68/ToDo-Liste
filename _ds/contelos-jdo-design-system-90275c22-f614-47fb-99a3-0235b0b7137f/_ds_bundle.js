/* @ds-bundle: {"format":4,"namespace":"ContelosDesignSystem_90275c","components":[{"name":"Logo","sourcePath":"components/brand/Logo.jsx"},{"name":"PartnerBadge","sourcePath":"components/brand/PartnerBadge.jsx"},{"name":"Rule","sourcePath":"components/brand/Rule.jsx"},{"name":"BulletList","sourcePath":"components/core/BulletList.jsx"},{"name":"Button","sourcePath":"components/core/Button.jsx"},{"name":"Card","sourcePath":"components/core/Card.jsx"},{"name":"ContactBar","sourcePath":"components/core/ContactBar.jsx"},{"name":"KpiStat","sourcePath":"components/core/KpiStat.jsx"},{"name":"StatCard","sourcePath":"components/core/StatCard.jsx"},{"name":"Slide","sourcePath":"components/slides/Slide.jsx"},{"name":"SlideHeader","sourcePath":"components/slides/SlideHeader.jsx"}],"sourceHashes":{"components/brand/Logo.jsx":"cb6e9cf6e777","components/brand/PartnerBadge.jsx":"9cefbb57e4dc","components/brand/Rule.jsx":"0e8019fffde8","components/core/BulletList.jsx":"11ebe4586a7c","components/core/Button.jsx":"eadbc88d671e","components/core/Card.jsx":"2a72dfb9ca3b","components/core/ContactBar.jsx":"42599aec9150","components/core/KpiStat.jsx":"f52ca16aab45","components/core/StatCard.jsx":"904ffac6c86b","components/slides/Slide.jsx":"5b10e0c71558","components/slides/SlideHeader.jsx":"6ec6ed2e6024"},"inlinedExternals":[],"unexposedExports":[]} */

(() => {

const __ds_ns = (window.ContelosDesignSystem_90275c = window.ContelosDesignSystem_90275c || {});

const __ds_scope = {};

(__ds_ns.__errors = __ds_ns.__errors || []);

// components/brand/Logo.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function Logo({
  variant = 'full',
  height = 40,
  src,
  style,
  ...rest
}) {
  const file = variant === 'png' ? 'logo-contelos.png' : 'logo-contelos.svg';
  return /*#__PURE__*/React.createElement("img", _extends({
    src: src || 'assets/' + file,
    alt: "Contelos — powered by Engineers",
    style: {
      height,
      width: 'auto',
      display: 'block',
      ...style
    }
  }, rest));
}
Object.assign(__ds_scope, { Logo });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/brand/Logo.jsx", error: String((e && e.message) || e) }); }

// components/brand/PartnerBadge.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function PartnerBadge({
  height = 28,
  src,
  style,
  ...rest
}) {
  return /*#__PURE__*/React.createElement("img", _extends({
    src: src || 'assets/autodesk-gold-partner.png',
    alt: "Autodesk Gold Partner",
    style: {
      height,
      width: 'auto',
      display: 'block',
      ...style
    }
  }, rest));
}
Object.assign(__ds_scope, { PartnerBadge });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/brand/PartnerBadge.jsx", error: String((e && e.message) || e) }); }

// components/brand/Rule.jsx
try { (() => {
function Rule({
  tone = 'red',
  height,
  width = '100%',
  style
}) {
  const color = tone === 'red' ? 'var(--accent-rule)' : 'var(--border-hairline)';
  const h = height ?? (tone === 'red' ? 'var(--rule-height)' : 'var(--rule-height-thin)');
  return /*#__PURE__*/React.createElement("div", {
    style: {
      width,
      height: h,
      background: color,
      flexShrink: 0,
      ...style
    }
  });
}
Object.assign(__ds_scope, { Rule });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/brand/Rule.jsx", error: String((e && e.message) || e) }); }

// components/core/BulletList.jsx
try { (() => {
const glyphs = ['●', '○', '■'];
function BulletList({
  items = [],
  level = 0,
  size = 'var(--text-base)',
  style
}) {
  return /*#__PURE__*/React.createElement("ul", {
    style: {
      listStyle: 'none',
      margin: 0,
      padding: 0,
      display: 'flex',
      flexDirection: 'column',
      gap: 'var(--space-3)',
      ...style
    }
  }, items.map((it, i) => {
    const nested = it && typeof it === 'object' && it.children;
    return /*#__PURE__*/React.createElement("li", {
      key: i,
      style: {
        display: 'flex',
        gap: 'var(--space-3)',
        fontFamily: 'var(--font-body)',
        fontSize: size,
        color: 'var(--text-body)',
        lineHeight: 'var(--leading-body)'
      }
    }, /*#__PURE__*/React.createElement("span", {
      "aria-hidden": "true",
      style: {
        color: 'var(--text-body)',
        fontSize: '0.7em',
        lineHeight: 1.9,
        flexShrink: 0
      }
    }, glyphs[Math.min(level, 2)]), /*#__PURE__*/React.createElement("span", null, nested ? it.text : it, nested ? /*#__PURE__*/React.createElement(BulletList, {
      items: it.children,
      level: level + 1,
      size: size,
      style: {
        marginTop: 'var(--space-3)'
      }
    }) : null));
  }));
}
Object.assign(__ds_scope, { BulletList });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/BulletList.jsx", error: String((e && e.message) || e) }); }

// components/core/Button.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
const base = {
  fontFamily: 'var(--font-body)',
  fontSize: 'var(--text-base)',
  fontWeight: 'var(--weight-medium)',
  lineHeight: 1,
  border: '1px solid transparent',
  borderRadius: 'var(--radius-none)',
  cursor: 'pointer',
  transition: 'var(--transition-ui)',
  display: 'inline-flex',
  alignItems: 'center',
  gap: 'var(--space-2)'
};
const sizes = {
  sm: {
    padding: '8px 14px',
    fontSize: '14px'
  },
  md: {
    padding: '11px 20px'
  },
  lg: {
    padding: '14px 26px',
    fontSize: '19px'
  }
};
const tones = {
  primary: {
    background: 'var(--action-primary)',
    color: 'var(--text-inverse)',
    borderColor: 'var(--action-primary)'
  },
  secondary: {
    background: 'var(--white)',
    color: 'var(--action-primary)',
    borderColor: 'var(--action-primary)'
  },
  danger: {
    background: 'var(--action-danger)',
    color: 'var(--text-inverse)',
    borderColor: 'var(--action-danger)'
  },
  ghost: {
    background: 'transparent',
    color: 'var(--action-primary)',
    borderColor: 'transparent'
  }
};
const hovers = {
  primary: {
    background: 'var(--action-primary-hover)',
    borderColor: 'var(--action-primary-hover)'
  },
  secondary: {
    background: 'var(--surface-card)'
  },
  danger: {
    background: 'var(--action-danger-hover)',
    borderColor: 'var(--action-danger-hover)'
  },
  ghost: {
    background: 'var(--surface-card)'
  }
};
function Button({
  variant = 'primary',
  size = 'md',
  disabled = false,
  children,
  style,
  ...rest
}) {
  const [hover, setHover] = React.useState(false);
  return /*#__PURE__*/React.createElement("button", _extends({
    disabled: disabled,
    onMouseEnter: () => setHover(true),
    onMouseLeave: () => setHover(false),
    style: {
      ...base,
      ...sizes[size],
      ...tones[variant],
      ...(hover && !disabled ? hovers[variant] : null),
      ...(disabled ? {
        opacity: 0.4,
        cursor: 'not-allowed'
      } : null),
      ...style
    }
  }, rest), children);
}
Object.assign(__ds_scope, { Button });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Button.jsx", error: String((e && e.message) || e) }); }

// components/core/Card.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function Card({
  tone = 'tint',
  padding = 'var(--space-6)',
  children,
  style,
  ...rest
}) {
  const tones = {
    tint: {
      background: 'var(--surface-card)',
      border: 'var(--border-card)'
    },
    plain: {
      background: 'var(--white)',
      border: 'var(--border-card)'
    },
    neutral: {
      background: 'var(--surface-neutral)',
      border: '1px solid transparent'
    }
  };
  return /*#__PURE__*/React.createElement("div", _extends({
    style: {
      borderRadius: 'var(--radius-none)',
      boxShadow: 'var(--shadow-none)',
      padding,
      ...tones[tone],
      ...style
    }
  }, rest), children);
}
Object.assign(__ds_scope, { Card });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Card.jsx", error: String((e && e.message) || e) }); }

// components/core/ContactBar.jsx
try { (() => {
const DEFAULT = ['Robert-Bosch-Str. 16', '30989 Gehrden', 'Tel: +49 5108 9294 0', 'info@contelos.de', 'www.contelos.de'];
function ContactBar({
  items = DEFAULT,
  width = '100%',
  style
}) {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      width,
      ...style
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      height: 'var(--rule-height-thin)',
      background: 'var(--border-hairline)'
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 6,
      fontFamily: 'var(--font-body)',
      fontSize: 'var(--text-xs)',
      color: 'var(--grey-800)',
      lineHeight: 1,
      whiteSpace: 'nowrap'
    }
  }, items.join('  |  ')));
}
Object.assign(__ds_scope, { ContactBar });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/ContactBar.jsx", error: String((e && e.message) || e) }); }

// components/core/KpiStat.jsx
try { (() => {
function KpiStat({
  figure,
  title,
  body,
  style
}) {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 'var(--space-6)',
      alignItems: 'flex-start',
      ...style
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-display)',
      fontSize: 'var(--text-stat)',
      lineHeight: 0.85,
      color: 'var(--accent-stat)',
      letterSpacing: 'var(--tracking-tight)',
      flexShrink: 0
    }
  }, figure), /*#__PURE__*/React.createElement("div", {
    style: {
      paddingTop: 8
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-display)',
      fontSize: 'var(--text-md)',
      color: 'var(--text-body)',
      marginBottom: 6
    }
  }, title), /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-body)',
      fontSize: 'var(--text-base)',
      color: 'var(--text-muted)',
      lineHeight: 'var(--leading-body)'
    }
  }, body)));
}
Object.assign(__ds_scope, { KpiStat });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/KpiStat.jsx", error: String((e && e.message) || e) }); }

// components/core/StatCard.jsx
try { (() => {
function StatCard({
  value,
  label,
  width = 199,
  style
}) {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      width,
      height: 109,
      background: 'var(--surface-card)',
      border: 'var(--border-card)',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      gap: 6,
      ...style
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-display)',
      fontSize: 'var(--text-lg)',
      lineHeight: 1,
      color: 'var(--text-title)'
    }
  }, value), /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-body)',
      fontSize: 'var(--text-xs)',
      lineHeight: 1,
      color: 'var(--text-muted)'
    }
  }, label));
}
Object.assign(__ds_scope, { StatCard });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/StatCard.jsx", error: String((e && e.message) || e) }); }

// components/slides/Slide.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function Slide({
  background = 'var(--surface-page)',
  image,
  children,
  style,
  ...rest
}) {
  return /*#__PURE__*/React.createElement("div", _extends({
    style: {
      width: 1280,
      height: 720,
      position: 'relative',
      overflow: 'hidden',
      background,
      backgroundImage: image ? 'url(' + image + ')' : undefined,
      backgroundSize: 'cover',
      backgroundPosition: 'center',
      fontFamily: 'var(--font-body)',
      color: 'var(--text-body)',
      ...style
    }
  }, rest), children);
}
Object.assign(__ds_scope, { Slide });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/slides/Slide.jsx", error: String((e && e.message) || e) }); }

// components/slides/SlideHeader.jsx
try { (() => {
function SlideHeader({
  title,
  logo,
  style
}) {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      left: 38,
      top: 22,
      width: 1142,
      ...style
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'flex-start',
      justifyContent: 'space-between',
      gap: 24
    }
  }, /*#__PURE__*/React.createElement("h2", {
    style: {
      fontFamily: 'var(--font-display)',
      fontSize: 'var(--text-display)',
      lineHeight: 'var(--leading-snug)',
      color: 'var(--text-heading)',
      fontWeight: 'var(--weight-regular)',
      margin: 0,
      maxWidth: 940
    }
  }, title), logo ? /*#__PURE__*/React.createElement("img", {
    src: logo,
    alt: "Contelos",
    style: {
      height: 26,
      width: 'auto',
      marginTop: 4
    }
  }) : null), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      left: 0,
      top: 78,
      width: 1142,
      height: 'var(--rule-height)',
      background: 'var(--accent-rule)'
    }
  }));
}
Object.assign(__ds_scope, { SlideHeader });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/slides/SlideHeader.jsx", error: String((e && e.message) || e) }); }

__ds_ns.Logo = __ds_scope.Logo;

__ds_ns.PartnerBadge = __ds_scope.PartnerBadge;

__ds_ns.Rule = __ds_scope.Rule;

__ds_ns.BulletList = __ds_scope.BulletList;

__ds_ns.Button = __ds_scope.Button;

__ds_ns.Card = __ds_scope.Card;

__ds_ns.ContactBar = __ds_scope.ContactBar;

__ds_ns.KpiStat = __ds_scope.KpiStat;

__ds_ns.StatCard = __ds_scope.StatCard;

__ds_ns.Slide = __ds_scope.Slide;

__ds_ns.SlideHeader = __ds_scope.SlideHeader;

})();
