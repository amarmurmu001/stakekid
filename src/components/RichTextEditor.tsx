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
          linkPlugin(),
          imagePlugin(),
          tablePlugin(),
          codeBlockPlugin()
        ]}
        contentEditableClassName="prose max-w-none min-h-[200px] p-4 border rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-500"
      />
    </div>
  );
}