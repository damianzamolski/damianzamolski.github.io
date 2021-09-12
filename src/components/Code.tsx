interface CodeProps {
  value: string
}

const Code = ({ value }: CodeProps) => (
  <pre>
    <code>{value}</code>
  </pre>
)

export default Code
