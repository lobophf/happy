const Database = require('./db');
const saveOrphanage = require('./saveOrphanage');

Database.then(async db => {
	await saveOrphanage(db, {
		lat: "-27.222633",
		lng: "-49.6555874",
		name: "Lar dos Meninos",
		about: "Presta assistência a crianças de 06 a 15 anos que se encontrem em situação de risco e/ou vulnerabilidade social.",
		whatsapp: "31 9999 9999",
		images: [
			"https://images.unsplash.com/photo-1592676720632-e0f4741e1f46?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9",
			"https://images.unsplash.com/flagged/photo-1576028246561-d6e04a34adbf?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=1080&fit=max&ixid=eyJhcHBfaWQiOjF9",
			"https://images.unsplash.com/photo-1503454537195-1dcabb73ffb9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9",
			"https://images.unsplash.com/photo-1507036066871-b7e8032b3dea?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9",
			"https://images.unsplash.com/photo-1562346631-89773e8cd3cb?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9",
			"https://images.unsplash.com/photo-1597695435079-8544505c3a60?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9",
		].toString(),
		instructions: "Venha se sentir a vontade e traga muito amor e atenção para dar.",
		opening_hours: "Horário de visita das 6h as 18h",
		open_on_weekends: "0"
		}
	);
		const orphanage = await db.all('SELECT * FROM orphanages WHERE id = "1"');
})
