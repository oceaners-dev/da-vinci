import React from 'react'

export interface BlockquoteProps {
  author: string
  quote: string
  source?: string
}

const Blockquote: React.FC<BlockquoteProps> = ({ quote, author, source }) => {
  return (
    <blockquote className="text-xl font-semibold leading-tight text-gray-800 border-l-4 border-gray-600 pl-4 my-8">
      {quote}
      <footer className="text-sm font-light mt-2 text-gray-600">
        - {author}
        {source && (
          <span className="ml-2 text-sm font-light text-gray-600">
            ({source})
          </span>
        )}
      </footer>
    </blockquote>
  )
}

export { Blockquote }
