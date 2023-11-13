import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter'
import dark from '../../../codeTheme'
import MarkdownRenderer from 'react-markdown'

export function Markdown({ children }: { children: string }): JSX.Element {
  return (
    <article className='prose prose-invert max-w-none'>
      <MarkdownRenderer
        children={children}
        components={{
          code(props) {
            const { children, className, node, ...rest } = props
            const match = /language-(\w+)/.exec(className || '')
            return match ? (
              <SyntaxHighlighter
                className='rounded'
                {...rest}
                children={String(children).replace(/\n$/, '')}
                style={dark}
                language={match[1]}
                PreTag='div'
              />
            ) : (
              <code {...rest} className={className}>
                {children}
              </code>
            )
          },
        }}
      />{' '}
    </article>
  )
}
