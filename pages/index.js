const HomePage = ({ title, description, image, url }) => (
  <>

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
