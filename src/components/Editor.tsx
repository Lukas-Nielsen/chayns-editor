import React, { createRef, useState } from "react";
import {
	Editor as ToastEditor,
	Viewer as ToastViewer,
} from "@toast-ui/react-editor";

// languages
import "@toast-ui/editor/dist/i18n/ar";
import "@toast-ui/editor/dist/i18n/zh-cn";
import "@toast-ui/editor/dist/i18n/zh-tw";
import "@toast-ui/editor/dist/i18n/hr-hr";
import "@toast-ui/editor/dist/i18n/cs-cz";
import "@toast-ui/editor/dist/i18n/nl-nl";
import "@toast-ui/editor/dist/i18n/en-us";
import "@toast-ui/editor/dist/i18n/fi-fi";
import "@toast-ui/editor/dist/i18n/fr-fr";
import "@toast-ui/editor/dist/i18n/gl-es";
import "@toast-ui/editor/dist/i18n/de-de";
import "@toast-ui/editor/dist/i18n/it-it";
import "@toast-ui/editor/dist/i18n/ja-jp";
import "@toast-ui/editor/dist/i18n/ko-kr";
import "@toast-ui/editor/dist/i18n/nb-no";
import "@toast-ui/editor/dist/i18n/pl-pl";
import "@toast-ui/editor/dist/i18n/pt-br";
import "@toast-ui/editor/dist/i18n/ru-ru";
import "@toast-ui/editor/dist/i18n/es-es";
import "@toast-ui/editor/dist/i18n/sv-se";
import "@toast-ui/editor/dist/i18n/tr-tr";
import "@toast-ui/editor/dist/i18n/uk-ua";

import { EditorProps } from "../@types/Editor";

// styles
import "@toast-ui/editor/dist/toastui-editor.css";
import "../css/editor.css";

export const Editor = ({ ...props }: EditorProps) => {
	const editorRef = createRef<ToastEditor>();
	const [value, setValue] = useState(props.value);

	if (props.readOnly) {
		return <ToastViewer initialValue={value} usageStatistics={false} />;
	}
	return (
		<>
			<ToastEditor
				ref={editorRef}
				language={props.language || "de"}
				placeholder="Hier Text eingeben..."
				hideModeSwitch
				usageStatistics={false}
				initialEditType="wysiwyg"
				initialValue={value}
				useCommandShortcut
				onChange={() => {
					const temp = editorRef.current?.getInstance().getMarkdown();
					setValue(temp);
					if (props.onChange && temp) props.onChange(temp);
				}}
				toolbarItems={[
					["heading", "bold", "italic", "strike"],
					["hr", "quote"],
					["ul", "ol"],
					["table", "image", "link"],
				]}
				autofocus={props.autofocus}
			/>
		</>
	);
};
