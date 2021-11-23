import React, { useEffect, useState } from "react";
import './App.css'
import SearchForm from "./SearchForm";

const App = () => {
  const [articles, setArticles] = useState([])
  const [term, setTerm] = useState('everything')
  const [isLoading, setIsLoading] = useState(true)
  useEffect(() => {
    const fetchArticles = async () => {
      try {
        const res = await fetch(`http://localhost:8080/search/${term}`)
        const articles = await res.json()
        setArticles(articles.articles)
        console.log(articles.articles)
        setIsLoading(false)
      }
      catch (error) {
        console.error(error)
      }
    }

    fetchArticles()
  }, [term])

  return (
    <>
      <div className="showcase">
        <div className="overlay px-5">
          <h1 className="text-3xl font-bold text-white text-center mb-2 capitalize">Viewing articles about {term}</h1>
          <SearchForm searchText={(text) => setTerm(text)} />
        </div>
      </div>

      {isLoading ? (
        <h1 className="text-ceter mt-20 text-4xl">Loading...</h1>
      ) : (
        <section className="grid grid-cols-1 gap-10 px-6 pt-5 pb-20">
          {articles.map((article) => {
            const { title, author, content, description, url } = article

            return (
              <article key={title} className="bg-white py-10 px-5 rounded-lg lg:w-9/12 lg:mx-auto">
                <h2 className="font-bold text-2xl pt-1 mb-1 lg:text-4x1">{title}</h2>
                <h1 className="font-bold mb-7" >By: {author}</h1>
                <p>{description}</p>
                <p>{content}</p>
                <a href={url} target="_blank" className="underline">Web Resource</a>
              </article>
            )
          })}
        </section>
      )
      }
    </>
  )
}
export default App;
