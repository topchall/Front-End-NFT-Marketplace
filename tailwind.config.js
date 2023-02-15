module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      screens: {
        'xsmax': {'max': '425px'},
        'sp348min': '348px',
        'ssmin': '375px',
        'sp405min': '406px',
        'sp365min': '365px',
        'sp385min': '385px',
        'sp400min': '400px',
        'xsmin': '426px',
        'sp460min': '460px',
        'sp576min': '576px',
        'sp640min': '641px',
        'sp635min': { 'min':'636px'},
        'sp746min': '746px',
        'mdmin': '769px' ,
        'sp885min': '885px',
        'sp900min': '900px',
        'sp970min': '970px',
        'lgmin': '1025px',
        'xlmin': '1281px',
        'sp1326min': '1326px',
        'sp1440min': '1440px',
        'semin': '1460px',
        'sp1490min': '1490px',
        '2xlmin': '1540px',
        'sp1600min': '1600px',
        'sp1770min': '1770px',
        'spmin': '2100px',
        'ssmax': {'max': '375px'},
        'smmax': {'max': '640px'},
        'sp746max': { 'max':'745px'},
        'mdmax': {'max': '768px'},
        'lgmax': {'max': '1024px'},
        'xlmax': {'max': '1280px'},
        'xlmax1290': {'max': '1290px'},
        'semax': {'max': '1460px'},
        'sp1490max': {'max': '1490px'},
        '2xlmax': {'max': '1536px'},
        // '2xlmax': {'max': '1536px'},
        'mgmax': {'max':'1920px'},
        'sp2560min': '2560px',
        // ...defaultTheme.screens,
      
      'xsmaxsmmin':{'max':'1024px' , 'min':'641px'} ,
      'xlmaxxsmin' :{'max':'1280px' , 'min':'425px'} ,

      // special one
        'mdminactive': {'max': '635px'},
        'mdminactivemax': '635px',
        'xsmaxsmmingoldypot':{'max':'1024px' , 'min':'640px'} ,
        'lsmaxssmingoldypot':{'max':'640px' , 'min':'500px'} ,
        'arrage1460to2100':{'max':'1460px' , 'min':'2100px'} ,
        'xsmaxgoldy':{'max':'500px' , 'min':'300px'} ,

      //  goldy pets
      'xsmaxpet':{'max':'365px' , 'min':'300px'} ,
      'smmaxpet':{'max':'600px' , 'min':'486px'},
      'smminpet':{'max' :'485px'} ,
      'smmaxpets': {'max': '640px'},
      'ssmaxpet364': {'max': '364px'},

      //  account / setting
      
      'smmaxsetting':{'max':'1024px' , 'min':'600px'} ,
      
      },
    },
    fontFamily:{
      'Geos' : ['Segoe UI'] ,
      'Roboto': ['Roboto', 'sans-serif'] ,
      'Chancery': ['URW Chancery L', 'cursive'] ,
      'sans' : "sans-serif" ,
    },
    zIndex: {
      '3000': '3000',
      '10':'10' ,
      '30':'30' ,
    },
    fontWeight: {
      hairline: 100,
      'extra-light': 100,
      thin: 200,
      light: 300,
      normal: 400,
      medium: 500,
      semibold: 600,
      bold: 700,
      extrabold: 800,
      black: 900,
      'extra-bold': 1000,
    }
  },
  plugins: [],
}