/**
 * The chat messages log tab
 * @type {SidebarTab}
 */
declare class ChatLog extends SidebarTab {

	/**
	 * A reference to the Messages collection that the chat log displays
	 * @type {Messages}
	 */
	get collection(): Messages;

	/**
	 * Render a batch of additional messages, prepending them to the top of the log
	 * @param {number} size     The batch size to include
	 * @return {Promise}
	 */
	_renderBatch(size: number): Promise<any>;

	/**
	 * Delete all message HTML from the log
	 */
	deleteAll(): void;

	/**
	 * Delete a single message from the chat log
	 * @param {string} messageId    The ChatMessage entity to remove from the log
	 * @param {boolean} [deleteAll] Is this part of a flush operation to delete all messages?
	 */
	deleteMessage(messageId: string, options: {deleteAll: boolean}): void;

	/**
	 * Trigger a notification that alerts the user visually and audibly that a new chat log message has been posted
	 */
	notify(message: ChatMessage): void;

	/**
	 * Parse a chat string to identify the chat command (if any) which was used
	 * @param {string} message    The message to match
	 * @return {string[]}         The identified command and regex match
	 */
	static parse(message: string): [string, RegExpMatchArray];

	/**
	 * Post a single chat message to the log
	 * @param {ChatMessage} message   A ChatMessage entity instance to post to the log
	 * @param {boolean} [notify]      Trigger a notification which shows the log as having a new unread message
	 * @return {Promise}              A Promise which resolves once the message is posted
	 */
	postOne(message: ChatMessage, notify: boolean): Promise<HTMLElement>;

	/**
	 * Scroll the chat log to the bottom
	 */
	scrollBottom(): void;

	/**
	 * Update the content of a previously posted message after its data has been replaced
	 * @param {ChatMessage} message   The ChatMessage instance to update
	 * @param {boolean} notify        Trigger a notification which shows the log as having a new unread message
	 */
	updateMessage(message: ChatMessage, notify: boolean): void;

	/**
	 * Update the timestamps on messages
	 */
	updateTimestamps(): void;

	/**
	 * Activate event listeners triggered within the ChatLog application
	 * @param html {jQuery|HTMLElement}
	 */
	activateListeners(html: JQuery | HTMLElement): void;

	/**
	 * Prepare the data object of chat message data depending on the type of message being posted
	 * @param {string} message      The original string of the message content
	 * @return {Promise.<Object>}   A Promise resolving to the prepared chat data object
	 * @private
	 */
	processMessage(message: ChatMessage): Promise<object>;

}
