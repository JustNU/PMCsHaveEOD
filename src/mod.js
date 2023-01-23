"use strict";

class Mod {
	postDBLoad(container) {
		// constants
		const logger = container.resolve("WinstonLogger");
		const database = container.resolve("DatabaseServer").getTables();
		
		// wow so much lines
		database.bots.base.Info.MemberCategory = 2;
	}
}

	
module.exports = { mod: new Mod() }