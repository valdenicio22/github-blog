import { useCallback, useEffect, useState } from 'react'
import { Spinner } from '../../components/Spinner'
import { api } from '../../service/api'
import { InputSearch } from './components/InputSearch'
import { Post } from './components/Post'
import { Profile } from './components/Profile'

const username = import.meta.env.VITE_GITHUB_USERNAME
const repoName = import.meta.env.VITE_GITHUB_REPONAME

export interface PostData {
  created_at: string
  title: string
  body: string
  number: number
  html_url: string
  comments: number
  user: {
    login: string
  }
}

export function Home() {
  const [posts, setPosts] = useState<PostData[]>([])
  const [loading, setLoading] = useState(true)

  const getPosts = useCallback(async (query = '') => {
    try {
      setLoading(true)
      const response = await api.get(
        `/search/issues?q=${query}%20repo:${username}/${repoName}`,
      )
      console.log('items', response.data.items)
      setPosts(response.data.items)
    } catch (error) {
      console.log(error)
    } finally {
      setLoading(false)
    }
  }, [])

  useEffect(() => {
    const timer = setTimeout(() => {
      getPosts()
    }, 500)

    return () => clearTimeout(timer)
  }, [getPosts])

  return (
    <>
      <Profile />
      <section className="flex flex-col my-[4.5rem]">
        <InputSearch publicationAmount={posts.length} getPosts={getPosts} />
        {loading ? (
          <div className="mt-12 flex items-center justify-center">
            <Spinner />
          </div>
        ) : (
          <div className="grid grid-cols-2 gap-8 mt-12">
            {posts.map((post) => (
              <Post key={post.number} post={post} />
            ))}
          </div>
        )}
      </section>
    </>
  )
}
