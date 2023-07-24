import { Link } from 'react-router-dom'
import { PostData } from '../..'
import { RegularText } from '../../../../components/Typography/RegularText'
import { TitleText } from '../../../../components/Typography/TitleText'
import { relativeDateFormatter } from '../../../../utils/formatter'

interface PostProps {
  post: PostData
}

export function Post({ post }: PostProps) {
  const formattedDate = relativeDateFormatter(post.created_at)
  return (
    <Link
      to={`/postDetails/${post.number}`}
      className="flex flex-col gap-5 w-[26rem] h-[16.25rem] p-8 rounded-[10px] bg-base-post border-2 border-base-post hover:border-base-label"
    >
      <div className="flex items-start justify-between gap-4">
        <TitleText size="md" as="h3" className="flex-1 line-clamp-2">
          {post.title}
        </TitleText>
        <RegularText color="span" size="sm" className="pt-2 max-w-max">
          {formattedDate}
        </RegularText>
      </div>
      <RegularText className="line-clamp-4 text-ellipsis">
        {post.body}
      </RegularText>
    </Link>
  )
}
