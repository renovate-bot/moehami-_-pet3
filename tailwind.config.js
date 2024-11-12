/** @type {import('tailwindcss').Config} */
module.exports = {
    darkMode: ['class'],
    content: [
  './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
 ],
  theme: {
  	fontFamily: {
  		primary: 'Josefin Sans'
  	},
  	container: {
  		padding: {
  			DEFAULT: '1rem',
  			lg: '0'
  		}
  	},
  	screens: {
  		sm: '640px',
  		md: '768px',
  		lg: '1024px',
  		xl: '1110px'
  	},
  	extend: {
  		colors: {
  			primary: {
  				DEFAULT: 'hsl(var(--primary))',
  				hover: '#021f2C',
  				foreground: 'hsl(var(--primary-foreground))'
  			},
  			cream: '#ebe3cc',
  			teal: '#189cab',
  			orange: {
  				DEFAULT: '#ed5c01',
  				hover: '#e45a03'
  			},
  			yellow: '#fbbd08',
  			background: 'hsl(var(--background))',
  			foreground: 'hsl(var(--foreground))',
  			card: {
  				DEFAULT: 'hsl(var(--card))',
  				foreground: 'hsl(var(--card-foreground))'
  			},
  			popover: {
  				DEFAULT: 'hsl(var(--popover))',
  				foreground: 'hsl(var(--popover-foreground))'
  			},
  			secondary: {
  				DEFAULT: 'hsl(var(--secondary))',
  				foreground: 'hsl(var(--secondary-foreground))'
  			},
  			muted: {
  				DEFAULT: 'hsl(var(--muted))',
  				foreground: 'hsl(var(--muted-foreground))'
  			},
  			accent: {
  				DEFAULT: 'hsl(var(--accent))',
  				foreground: 'hsl(var(--accent-foreground))'
  			},
  			destructive: {
  				DEFAULT: 'hsl(var(--destructive))',
  				foreground: 'hsl(var(--destructive-foreground))'
  			},
  			border: 'hsl(var(--border))',
  			input: 'hsl(var(--input))',
  			ring: 'hsl(var(--ring))',
  			chart: {
  				'1': 'hsl(var(--chart-1))',
  				'2': 'hsl(var(--chart-2))',
  				'3': 'hsl(var(--chart-3))',
  				'4': 'hsl(var(--chart-4))',
  				'5': 'hsl(var(--chart-5))'
  			}
  		},
  		backgroundImage: {
  			hero: 'url('/img/hero/hero-bg.png')',
  			tiger: 'url('/img/tiger.png')',
  			pets: 'url('/img/pets/pets-bg.png')',
  			services: 'url('/img/services/bg.png')',
  			adoption: 'url('/img/adoption/bg.png')',
  			newsletterYellow: 'url('/img/newsletter/bg-yellow.svg')',
  			newsletterOrange: 'url('/img/newsletter/bg-orange.svg')',
  			footer: 'url('/img/footer/bg.svg')'
  		},
  		borderRadius: {
  			lg: 'var(--radius)',
  			md: 'calc(var(--radius) - 2px)',
  			sm: 'calc(var(--radius) - 4px)'
  		}
  	}
  },
  plugins: [require("tailwindcss-animate")],
};
