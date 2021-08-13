const HomePage = ({ title, description, image }) => 
(<div>title: {title} / {description} / {image}</div>)

export async function getServerSideProps({ query }) {
  const { image = "", title = "", description = "" } = query
  console.log(query)
  return {
    props: {
      title,
      description,
      image,
    },
  }
}

export default HomePage
