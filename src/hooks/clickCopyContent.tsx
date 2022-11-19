import React,{useState} from 'react'

export function ClipboardCopy({ copyText }:{copyText: string}) {
  const [isCopied, setIsCopied] = useState(false)

  async function copyTextToClipboard(text:string) {
    if ('clipboard' in navigator) {
      return await navigator.clipboard.writeText(text)
    }
  }
  const handleCopyClick= () => {
    copyTextToClipboard(copyText)
      .then(() => {
        setIsCopied(true)
        setTimeout(() => {
          setIsCopied(false)
        }, 1500)
      })
      .catch((err) => {
        console.log(err)
      })
  }

  return (
    <button className="ml-3 text-ui-3xl" onClick={handleCopyClick}>
      <div
        className={
          (isCopied ? 'text-success' : '') +
          ' flex transform flex-row items-center transition hover:-translate-y-1 motion-reduce:transition-none motion-reduce:hover:transform-none'
        }
      >
        <Copy24Filled />
        {isCopied && <span className="text-lg">Copied !</span>}
      </div>
    </button>
  )
}



function Copy24Filled() {
  return (
    <svg width="1em" height="1em" viewBox="0 0 24 24">
      <path
        fill="currentColor"
        d="M13 6.75V2H8.75A2.25 2.25 0 0 0 6.5 4.25v13a2.25 2.25 0 0 0 2.25 2.25h9A2.25 2.25 0 0 0 20 17.25V9h-4.75A2.25 2.25 0 0 1 13 6.75Zm1.5 0V2.5l5 5h-4.25a.75.75 0 0 1-.75-.75ZM5.503 4.627A2.251 2.251 0 0 0 4 6.75v10.504a4.75 4.75 0 0 0 4.75 4.75h6.494a2.25 2.25 0 0 0 2.122-1.5H8.75a3.25 3.25 0 0 1-3.25-3.25l.003-12.627Z"
      />
    </svg>
  )
}
