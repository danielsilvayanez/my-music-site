// Config
// ------------
// Description: The configuration file for the website.

export interface Config {
	siteTitle: string
	siteDescription: string
	ogImage: string
	siteUrl: string
	noindex: boolean
}

export const configData: Config = {
	siteTitle: 'Daniel Silva Yañez – Sänger & Entertainer für Events',
	siteDescription:
		'Sänger & Entertainer für private Feiern, Firmenveranstaltungen, Bars, Restaurants und Weihnachtsfeiern – deutschlandweit buchbar.',
	ogImage: '/og-daniel.jpg',
	siteUrl: 'https://danielsilvayanez.vercel.app',
	noindex: false
}
