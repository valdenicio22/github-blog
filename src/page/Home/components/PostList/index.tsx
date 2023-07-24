import { Post } from '../Post'

export function PostList() {
  return (
    <div className="grid grid-cols-2 gap-8 mt-12">
      <Post />
      <Post />
      <Post />
      <Post />
      <Post />
    </div>
  )
}
