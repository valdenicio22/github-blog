import { useCallback, useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { Spinner } from '../../components/Spinner'
import { api } from '../../service/api'
import { PostData } from '../Home'
import { PostContent } from './PostContent'
import { PostHeader } from './PostHeader'

const username = import.meta.env.VITE_GITHUB_USERNAME
const repoName = import.meta.env.VITE_GITHUB_REPONAME

export function PostDetails() {
  const [post, setPost] = useState<PostData>({} as PostData)
  const [loading, setLoading] = useState(true)

  const { id } = useParams()

  const getPost = useCallback(async () => {
    try {
      setLoading(true)
      const response = await api.get(
        `repos/${username}/${repoName}/issues/${id}`,
      )
      console.log(response.data)
      setPost(response.data)
    } catch (error) {
      console.log(error)
    } finally {
      setLoading(false)
    }
  }, [id])

  useEffect(() => {
    getPost()
  }, [getPost])

  return (
    <>
      <PostHeader post={post} isLoading={loading} />
      {loading ? (
        <div className="w-full flex items-center justify-center">
          <Spinner />
        </div>
      ) : (
        <PostContent postContent={post.body} />
      )}
    </>
  )
}
