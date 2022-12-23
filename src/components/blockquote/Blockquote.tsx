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
        'text-dv-h3 font-semibold leading-tight text-dv-text-01 border-l-4 border-dv-border-base pl-4 my-8 h-fit w-fit ' +
        classNames.wrapper
      }
    >
      {quote}
      <footer
        data-tag="footer"
        className={
          'text-dv-regular font-light mt-2 text-dv-text-02 ' + classNames.footer
        }
      >
        - {author}
        {source && (
          <span
            data-tag="source"
            className={
              'ml-2 text-dv-regular font-light text-dv-text-02 ' +
              classNames.source
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
