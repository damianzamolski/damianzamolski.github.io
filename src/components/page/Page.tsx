import PageHead from './PageHead.tsx'

const Page = ({ children, title }) => (
  <>
    <PageHead title={title} />
    <div>{children}</div>
  </>
)

export default Page
