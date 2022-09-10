import { server } from '../config'
import styles from '../styles/Layout.module.css'
import ArticleList from '../components/ArticleList'

export default function Home({ articles }) {
  return (
    <div>
      <ArticleList articles={articles} />
    </div>
  )
}

// fetch the data from the back end
export const getStaticProps = async () => {
  const res = await fetch(`${server}/api/articles`,{
    method: "GET",
    headers: {
        // update with your user-agent
        "User-Agent":
            "Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/84.0.4147.89 Safari/537.36",
        Accept: "application/json; charset=UTF-8",
    }})
  const articles = await res.json()

  return {
    props: {
      articles
    }
  }
}