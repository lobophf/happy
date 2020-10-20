const Database = require('./db');

Database.then(async db => {
	await db.run(`
		INSERT INTO orphanages (
			lat,
			lgn,
			name,
			about,
			whatsapp,
			images,
			instructions,
			opening_hours,
			open_on_weekeends 
		) VALUES (
			"-27.222633",
			"-49.6455874",
			"Lar das meninas",
			"Presta assistência a crianças de 06 a 15 anos que se encontrem em situação de risco e/ou vulnerabilidade social.",
			"99999999",
			"https://images.unsplash.com/photo-1592676720632-e0f4741e1f46?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9",
			"Venha se sentir a vontade e traga muito amor e atenção para dar.",
			"Horário de visita das 6h as 18h",
			"1"
		); 
	`)
	const orphanage = await db.all('SELECT * FROM orphanages WHERE id = "3"');
	console.log(orphanage);
})
