export const size = {
  mobileS: '380px',
  mobileM: '420px',
  mobileL: '600px',
  tablet: '900px',
  laptop: '1050px',
  laptopL: '1440px',
} as const;

export const device = {
  mobileS: `(max-width: ${size.mobileS})`,
  mobileM: `(max-width: ${size.mobileM})`,
  mobileL: `(max-width: ${size.mobileL})`,
  tablet: `(max-width: ${size.tablet})`,
  laptop: `(max-width: ${size.laptop})`,
  laptopL: `(max-width: ${size.laptopL})`,
} as const;
