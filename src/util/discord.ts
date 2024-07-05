class DiscordUser {
	/**
	 * Constructs a new DiscordUser object with the given username and ID.
	 *
	 * @param {string} username - The username of the user.
	 * @param {string} id - The ID of the user.
	 */
	constructor(
		public username: string,
		public id: string
	) {}
}

export let user = new DiscordUser('asmodeus123', '210711035181531137');
