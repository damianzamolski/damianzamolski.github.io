import { ReactNode } from 'react'
import PageHead from './PageHead'

interface PageProps {
  children: ReactNode
  title: string
}

const Page = ({ children, title }) => (
  <>
    <PageHead title={title} />
    <div>{children}</div>
  </>
)

export default Page
