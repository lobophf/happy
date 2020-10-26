const fs = require("fs")
const path = require("path")
const file = path.join(__dirname, "database.sqlite");

if(!fs.existsSync(file)){
	const Database = require('./db');
	const saveOrphanage = require('./saveOrphanage');
	const dummyDatabase = require('./fakedata');

	Database.then(async db => {
		for(var i = 0; i < dummyDatabase.length; i++){
			await saveOrphanage(db, dummyDatabase[i]);
		}
	})
}

