const withMT = require("@material-tailwind/react/utils/withMT");
 
module.exports = withMT({
  content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  theme: {
    extend: {},
    colors:{
      primary:'#43211F',
      secondary:'#CD7F32',
      tertiary:'#EED192',
      pinkish:'#F3D0D2',
    },
  },
  plugins: [],
});