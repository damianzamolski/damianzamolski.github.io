import { useEffect } from 'react'

import highlightJs from 'highlight.js/lib/core'
import javascript from 'highlight.js/lib/languages/javascript'
import 'highlight.js/styles/atom-one-light.css'

highlightJs.registerLanguage('javascript', javascript)

interface CodeProps {
  value: string
}

const Code = ({ value }: CodeProps) => {
  useEffect(() => {
    highlightJs.highlightAll()
  }, [])

  return (
    <pre>
      <code>{value}</code>
    </pre>
  )
}
export default Code
