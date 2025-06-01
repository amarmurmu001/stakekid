'use client';

import { MDXEditor } from '@mdxeditor/editor';
import '@mdxeditor/editor/style.css';
import { headingsPlugin } from '@mdxeditor/editor/plugins/headings';
import { listsPlugin } from '@mdxeditor/editor/plugins/lists';
import { quotePlugin } from '@mdxeditor/editor/plugins/quote';
import { thematicBreakPlugin } from '@mdxeditor/editor/plugins/thematic-break';
import { linkPlugin } from '@mdxeditor/editor/plugins/link';
import { imagePlugin } from '@mdxeditor/editor/plugins/image';
import { tablePlugin } from '@mdxeditor/editor/plugins/table';
import { codeBlockPlugin } from '@mdxeditor/editor/plugins/code-block';
import { toolbarPlugin } from '@mdxeditor/editor/plugins/toolbar';
import { markdownShortcutPlugin } from '@mdxeditor/editor/plugins/markdown-shortcut';
import { UndoRedo } from '@mdxeditor/editor/plugins/toolbar/components/UndoRedo';
import { BoldItalicUnderlineToggles } from '@mdxeditor/editor/plugins/toolbar/components/BoldItalicUnderlineToggles';
import { BlockTypeSelect } from '@mdxeditor/editor/plugins/toolbar/components/BlockTypeSelect';
import { CreateLink } from '@mdxeditor/editor/plugins/toolbar/components/CreateLink';
import { InsertImage } from '@mdxeditor/editor/plugins/toolbar/components/InsertImage';
import { InsertTable } from '@mdxeditor/editor/plugins/toolbar/components/InsertTable';
import { InsertThematicBreak } from '@mdxeditor/editor/plugins/toolbar/components/InsertThematicBreak';
import { ListsToggle } from '@mdxeditor/editor/plugins/toolbar/components/ListsToggle';
import { CodeToggle } from '@mdxeditor/editor/plugins/toolbar/components/CodeToggle';

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
        contentEditableClassName="prose prose-invert max-w-none min-h-[200px] p-4 border rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-500 bg-slate-900 text-slate-100"
      />
    </div>
  );
}