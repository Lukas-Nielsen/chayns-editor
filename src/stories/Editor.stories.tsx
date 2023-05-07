import React from "react";
import type { Story } from "@ladle/react";
import { EditorProps } from "../@types/Editor";
import { Editor } from "../components/Editor";

export const EditorStory: Story<EditorProps> = (props) => <Editor {...props} />;

EditorStory.storyName = "Editor";

EditorStory.args = {
	readOnly: false,
	autofocus: false,
	value: "**lorem**",
};

EditorStory.argTypes = {
	language: {
		defaultValue: "de",
		control: {
			type: "select",
			name: "Read Only",
		},
		options: [
			"ar",
			"zh-CN",
			"zh-TW",
			"hr",
			"cs",
			"nl",
			"en",
			"fi",
			"fr",
			"gl",
			"de",
			"it",
			"ja",
			"ko",
			"nb",
			"pl",
			"pt",
			"ru",
			"es",
			"sv",
			"tr",
			"uk",
		],
	},
};
