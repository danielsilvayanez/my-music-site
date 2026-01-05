// Config
// ------------
// Description: The configuration file for the website.

export interface Logo {
	src: string
	alt: string
}

export type Mode = 'auto' | 'light' | 'dark'

export interface Config {
	siteTitle: string
	siteDescription: string
	ogImage: string
	logo: Logo
	siteUrl: string
	noindex: boolean
	mode: Mode
	scrollAnimations: boolean
}

export const configData: Config = {
	siteTitle: 'Daniel Silva Yañez – Musiker & Sänger für Events',
	siteDescription:
		'Professioneller Musiker und Sänger für Firmenfeiern, Kindergeburtstage, Hochzeiten und private Veranstaltungen.',
	ogImage: '/hero/daniel-silva-yañez-musiker-sänger.jpg',
	logo: {
		src: '/logo.svg',
		alt: 'Daniel Silva Yañez Logo'
	},
	siteUrl: 'https://DEINE-DOMAIN.de', // später echte Domain einsetzen
	noindex: false,
	mode: 'auto',
	scrollAnimations: true
}
