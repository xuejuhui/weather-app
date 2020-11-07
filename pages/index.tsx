import Link from 'next/link'
import Layout from '../components/Layout'
import Weather from '../components/Weather'


const IndexPage = () => (
  <Layout title="Home | Next.js + TypeScript Example">

    <h1>Hello Next.js 👋</h1>
    <Weather/>
    <p>
      <Link href="/about">
        <a>About</a>
      </Link>
    </p>
  </Layout>
)

export default IndexPage
