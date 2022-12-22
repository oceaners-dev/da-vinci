import React from 'react'

export interface BlockquoteProps {
  author: string
  classNames?: {
    footer?: string
    source?: string
    wrapper?: string
  }
  quote: string
  source?: string
}

// TODO: add box mode (with image)

const Blockquote: React.FC<BlockquoteProps> = ({
  classNames = {
    footer: '',
    source: '',
    wrapper: '',
  },
  quote,
  author,
  source,
}) => {
  return (
    <blockquote
      data-tag="wrapper"
      className={
        'text-xl font-semibold leading-tight text-gray-800 border-l-4 border-gray-600 pl-4 my-8 h-fit w-fit ' +
        classNames.wrapper
      }
    >
      {quote}
      <footer
        data-tag="footer"
        className={'text-sm font-light mt-2 text-gray-600 ' + classNames.footer}
      >
        - {author}
        {source && (
          <span
            data-tag="source"
            className={
              'ml-2 text-sm font-light text-gray-600 ' + classNames.source
            }
          >
            ({source})
          </span>
        )}
      </footer>
    </blockquote>
  )
}

export { Blockquote }
