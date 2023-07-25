import { ReactMarkdown } from 'react-markdown/lib/react-markdown'
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter'
import { dracula } from 'react-syntax-highlighter/dist/cjs/styles/prism'

interface PostContentProps {
  postContent: string
}

export function PostContent({ postContent }: PostContentProps) {
  return (
    <section className="p-10 flex flex-col postDetails">
      <ReactMarkdown
        components={{
          code({ inline, className, children, ...props }) {
            const match = /language-(\w+)/.exec(className || '')
            return !inline && match ? (
              <SyntaxHighlighter
                // eslint-disable-next-line @typescript-eslint/no-explicit-any
                style={dracula as any}
                language={match[1]}
                PreTag="div"
                {...props}
              >
                {String(children).replace(/\n$/, '')}
              </SyntaxHighlighter>
            ) : (
              <code className={className} {...props}>
                {children}
              </code>
            )
          },
        }}
      >
        {postContent}
      </ReactMarkdown>
    </section>
  )
}
