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
import { TitleText } from '../../../components/Typography/TitleText'

export function PostHeader() {
  const navigate = useNavigate()
  return (
    <div className="base-profile-container flex flex-col">
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
        />
      </header>
      <TitleText color="subtitle" className="mt-5 mb-2">
        JavaScript data types and data structures
      </TitleText>
      <div className="flex items-center gap-3">
        <InfoWithIcon
          info="cameronwll"
          icon={<FontAwesomeIcon icon={faGithub} />}
        />
        <InfoWithIcon
          info="Há 1 dia"
          icon={<FontAwesomeIcon icon={faCalendar} />}
        />
        <InfoWithIcon
          info="5 comentários"
          icon={<FontAwesomeIcon icon={faComment} />}
        />
      </div>
    </div>
  )
}
