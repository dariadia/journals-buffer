const HomePage = ({ title, description, image, url }) => (
  <>
    <Head>
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <meta httpEquiv="Content-Type" content="text/html; charset=utf-8" />
      <title>{title}</title>
      <meta name="description" content={description} />
      <meta property="og:description" content={description} />
      <meta name="twitter:description" content={description} />
      <meta name="og:image" property="og:image" content={image} />
      <meta name="twitter:image" content={image} />
      <meta property="og:title" content={title} />
      <meta property="og:type" content="website" />
      <meta property="og:site_name" content="Bookmate Journal" />
      <meta property="og:url" content={url} />
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:site" content="Bookmate Journal" />
      <meta name="twitter:creator" content="Bookmate Journal" />
      <meta name="twitter:title" content={title} />
      <link rel="canonical" href={url} />
    </Head>
    <div>Грузим!</div>
  </>
)

export async function getServerSideProps({ query }) {
  const { image = "https://a.bmstatic.com/iu/250/190/BMJ_Share@2x-abac5241a7c9b6529ed11348ce216519.jpg", title = "Journal", description = "Journal", url = "Journal" } = query
  return {
    props: {
      title,
      description,
      image,
      url,
    },
  }
}

export default HomePage
