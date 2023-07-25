import { faGithub } from '@fortawesome/free-brands-svg-icons'
import {
  faArrowUpRightFromSquare,
  faCalendar,
  faChevronLeft,
  faComment,
} from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { useNavigate } from 'react-router-dom'
import { ExternalLink } from '../../../components/ExternalLink'
import { InfoWithIcon } from '../../../components/InfoWithIcon'
import { Spinner } from '../../../components/Spinner'
import { TitleText } from '../../../components/Typography/TitleText'
import { relativeDateFormatter } from '../../../utils/formatter'
import { PostData } from '../../Home'

interface PostHeaderProps {
  post: PostData
  isLoading: boolean
}

export function PostHeader({ post, isLoading }: PostHeaderProps) {
  const navigate = useNavigate()
  const formattedDate = relativeDateFormatter(post?.created_at)
  return (
    <div className="base-profile-container flex flex-col">
      {isLoading ? (
        <div className="w-full flex items-center justify-center">
          <Spinner />
        </div>
      ) : (
        <>
          <header className="flex items-center justify-between">
            <ExternalLink
              text="Voltar"
              icon={<FontAwesomeIcon icon={faChevronLeft} />}
              leftIcon
              onClick={() => navigate(-1)}
            />
            <ExternalLink
              text="Ver no Github"
              icon={<FontAwesomeIcon icon={faArrowUpRightFromSquare} />}
              href={post.html_url}
            />
          </header>
          <TitleText color="subtitle" className="mt-5 mb-2">
            {post.title}
          </TitleText>
          <div className="flex items-center gap-3">
            <InfoWithIcon
              info={post.user.login}
              icon={<FontAwesomeIcon icon={faGithub} />}
            />
            <InfoWithIcon
              info={formattedDate}
              icon={<FontAwesomeIcon icon={faCalendar} />}
            />
            <InfoWithIcon
              info={`${post.comments} comentarios`}
              icon={<FontAwesomeIcon icon={faComment} />}
            />
          </div>
        </>
      )}
    </div>
  )
}
