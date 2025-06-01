'use client';

import { MDXEditor, headingsPlugin, listsPlugin, quotePlugin, thematicBreakPlugin, linkPlugin, imagePlugin, tablePlugin, codeBlockPlugin, toolbarPlugin, markdownShortcutPlugin } from '@mdxeditor/editor';
import '@mdxeditor/editor/style.css';
import {
  UndoRedo,
  BoldItalicUnderlineToggles,
  BlockTypeSelect,
  CreateLink,
  InsertImage,
  InsertTable,
  InsertThematicBreak,
  ListsToggle,
  CodeToggle
} from '@mdxeditor/editor';


interface RichTextEditorProps {
  markdown: string;
  onChange: (markdown: string) => void;
  className?: string;
}

export default function RichTextEditor({ markdown, onChange, className = '' }: RichTextEditorProps) {
  return (
    <div className={`w-full ${className}`}>
      <MDXEditor
        markdown={markdown}
        onChange={onChange}
        plugins={[
          headingsPlugin(),
          listsPlugin(),
          quotePlugin(),
          thematicBreakPlugin(),
          markdownShortcutPlugin(),
          linkPlugin(),
          imagePlugin(),
          tablePlugin(),
          codeBlockPlugin(),
          toolbarPlugin({
            toolbarContents: () => (
              <div className="flex flex-wrap gap-2 p-2 bg-slate-800 border-b border-slate-700">
                <UndoRedo />
                <BoldItalicUnderlineToggles />
                <BlockTypeSelect />
                <CreateLink />
                <InsertImage />
                <InsertTable />
                <InsertThematicBreak />
                <ListsToggle />
                <CodeToggle />
              </div>
            ),
          }),
        ]}
        contentEditableClassName="prose prose-invert max-w-none min-h-[200px] p-4 border rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-500 bg-slate-900 text-white"
      />
    </div>
  );
}