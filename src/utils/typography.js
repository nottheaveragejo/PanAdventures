import Typography from 'typography'
import stAnnesTheme from 'typography-theme-st-annes'

// const typography = new Typography(stAnnesTheme)
// export const { scale, rhythm, options } = typography

const typography = new Typography({
  baseFontSize: "18px",
  baseLineHeight: 1.666,
  headerFontFamily: [
    "Avenir Next",
    "Helvetica Neue",
    "Segoe UI",
    "Helvetica",
    "Arial",
    "sans-serif",
  ],
  bodyFontFamily: ["Georgia", "serif"],

},
  +stAnnesTheme
)
export default typography
