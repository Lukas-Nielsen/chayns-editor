export interface EditorProps {
	/**
	 * toggle toolbar and the abillity to edit the content
	 */
	readOnly?: boolean;

	/**
	 * value for editor
	 */
	value?: string;

	/**
	 * is called if the editor content changes
	 */
	onChange?: (e: string) => void;

	/**
	 * set the language of the editor ui
	 * @see https://github.com/nhn/tui.editor/blob/master/docs/en/i18n.md
	 */
	language?:
		| "ar"
		| "zh-CN"
		| "zh-TW"
		| "hr"
		| "cs"
		| "nl"
		| "en"
		| "fi"
		| "fr"
		| "gl"
		| "de"
		| "it"
		| "ja"
		| "ko"
		| "nb"
		| "pl"
		| "pt"
		| "ru"
		| "es"
		| "sv"
		| "tr"
		| "uk";

	/**
	 * should the editor autofocus
	 */
	autofocus?: boolean;
}
