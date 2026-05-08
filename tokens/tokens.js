/**
 * Blacklist Alliance — Design Tokens (ESM)
 * Mirrors tokens.json as named exports for JS/TS consumers.
 * Import what you need: import { color, spacing } from './tokens/tokens.js'
 * Full reference: https://github.com/Plura-AI/blacklist-design-system
 */

export const color = {
  brand: {
    red:       '#A50100',
    redHover:  '#8A0100',
    redPress:  '#6E0100',
    redTint:   '#FBE5E5',
    black:     '#000000',
    white:     '#FFFFFF',
  },
  gray: {
    0:   '#FFFFFF',
    5:   '#F7F7F7',
    10:  '#EFEFEF',
    20:  '#E0E0E0',
    30:  '#C9C9C9',
    40:  '#A8A8A8',
    50:  '#8C8C8C',
    60:  '#6F6F6F',
    70:  '#525252',
    80:  '#393939',
    90:  '#1F1F1F',
    100: '#000000',
  },
  semantic: {
    success:    '#117A3D',
    successBg:  '#E5F4EC',
    warning:    '#B36B00',
    warningBg:  '#FFF3DD',
    danger:     '#A50100',
    dangerBg:   '#FBE5E5',
    info:       '#0F4C8A',
    infoBg:     '#E5EEF7',
  },
  surface: {
    canvas:  '#F7F7F7',
    panel:   '#FFFFFF',
    sunken:  '#EFEFEF',
    inverse: '#000000',
  },
  foreground: {
    primary:     '#000000',
    secondary:   '#525252',
    tertiary:    '#8C8C8C',
    placeholder: '#A8A8A8',
    onRed:       '#FFFFFF',
    onBlack:     '#FFFFFF',
  },
  border: {
    default: '#E0E0E0',
    hover:   '#C9C9C9',
    onDark:  '#393939',
  },
};

export const typography = {
  family: {
    sans: '"General Sans", ui-sans-serif, system-ui, -apple-system, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif',
    mono: 'ui-monospace, SFMono-Regular, Menlo, Consolas, "Liberation Mono", monospace',
  },
  weight: {
    extralight: 200,
    light:      300,
    regular:    400,
    medium:     500,
    semibold:   600,
    bold:       700,
  },
  size: {
    12: '0.75rem',
    14: '0.875rem',
    16: '1rem',
    18: '1.125rem',
    20: '1.25rem',
    24: '1.5rem',
    28: '1.75rem',
    32: '2rem',
    40: '2.5rem',
    56: '3.5rem',
    72: '4.5rem',
    96: '6rem',
  },
  lineHeight: {
    tight: 0.95,
    snug:  1.1,
    base:  1.5,
    loose: 1.7,
  },
  letterSpacing: {
    tight:  '-0.02em',
    snug:   '-0.01em',
    base:   '0em',
    wide:   '0.06em',
    wider:  '0.12em',
  },
};

export const spacing = {
  0:  '0',
  1:  '4px',
  2:  '8px',
  3:  '12px',
  4:  '16px',
  5:  '20px',
  6:  '24px',
  7:  '32px',
  8:  '40px',
  9:  '48px',
  10: '64px',
  11: '80px',
  12: '96px',
  13: '128px',
  14: '160px',
};

/** All radii resolve to 0. Square corners everywhere — no exceptions. */
export const radius = {
  0:    '0px',
  1:    '0px',
  2:    '0px',
  3:    '0px',
  4:    '0px',
  pill: '0px',
};

export const shadow = {
  0:     'none',
  1:     '0 1px 2px rgba(0,0,0,0.06), 0 1px 1px rgba(0,0,0,0.04)',
  2:     '0 4px 12px rgba(0,0,0,0.08), 0 1px 2px rgba(0,0,0,0.04)',
  3:     '0 12px 32px rgba(0,0,0,0.12), 0 2px 4px rgba(0,0,0,0.06)',
  4:     '0 24px 60px rgba(0,0,0,0.18)',
  focus: '0 0 0 3px rgba(165, 1, 0, 0.28)',
};

export const motion = {
  easing: {
    out:   'cubic-bezier(0.2, 0.7, 0.2, 1)',
    in:    'cubic-bezier(0.5, 0, 0.75, 0)',
    inOut: 'cubic-bezier(0.65, 0, 0.35, 1)',
  },
  duration: {
    1: '120ms',
    2: '180ms',
    3: '280ms',
    4: '480ms',
  },
};

export const layout = {
  container: {
    sm: '640px',
    md: '960px',
    lg: '1200px',
    xl: '1440px',
  },
  grid: {
    columns: 12,
    gutter:  '24px',
  },
};

export const brand = {
  riskBar: { width: '56px', height: '4px', color: '#A50100' },
  icons: {
    set:    'Lucide',
    size:   '24px',
    stroke: '2px',
    color:  'currentColor',
    cdn:    'https://unpkg.com/lucide@latest',
  },
  logo: {
    onWhite: 'assets/blacklist-logo-on-white.svg',
    onBlack: 'assets/blacklist-logo-on-black.svg',
    favicon: 'assets/blacklist-favicon.svg',
  },
};

/** Convenience: all tokens in one default export */
export default { color, typography, spacing, radius, shadow, motion, layout, brand };
