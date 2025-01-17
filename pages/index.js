export default function Home() {
  return null
}

export async function getStaticProps() {
  return {
    redirect: {
      destination: '/introduction',
      permanent: true,
    },
  }
}
