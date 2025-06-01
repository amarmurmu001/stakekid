'use client';

import SimpleMDE from "react-simplemde-editor";
import "easymde/dist/easymde.min.css";

interface RichTextEditorProps {
  markdown: string;
  onChange: (markdown: string) => void;
  className?: string;
}

export default function RichTextEditor({ markdown, onChange, className = '' }: RichTextEditorProps) {
  return (
    <div className={`w-full ${className}`}>
      <SimpleMDE
        value={markdown}
        onChange={onChange}
        options={{
          spellChecker: false,
          toolbar: [
            "bold", "italic", "strikethrough", "|", "heading", "|", "quote", "code", "table", "horizontal-rule", "|", "unordered-list", "ordered-list", "|", "link", "image", "|", "undo", "redo"
          ],
          status: false, // Disable status bar
          promptURLs: true, // Enable prompting for image/link URLs
          sideBySideFullscreen: false, // Disable side by side and fullscreen
        }}
      />
    </div>
  );
}