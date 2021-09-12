import { useEffect } from 'react'
import highlightJs from 'highlight.js'
import javascript from 'highlight.js/lib/languages/javascript'
import 'highlight.js/styles/atom-one-light.css'

highlightJs.registerLanguage('javascript', javascript)

interface Props {
  value: string
}

const Code = ({ value }: Props) => {
  useEffect(() => {
    highlightJs.initHighlighting(), []
  })
  return (
    <pre>
      <code className='js'>{value}</code>
    </pre>
  )
}
export default Code
