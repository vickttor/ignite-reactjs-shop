import { globalCss } from ".";

export const globalStyles = globalCss({
  '*': {
    margin: 0,
    padding: 0,
  },

  body: {
    background:'$gray900',
    color: "$gray100",
    '-webkit-font-smoothing': 'antialiased',
  },
})