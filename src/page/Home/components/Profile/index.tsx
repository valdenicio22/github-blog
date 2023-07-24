import { faGithub } from '@fortawesome/free-brands-svg-icons'
import {
  faArrowUpRightFromSquare,
  faBuilding,
  faUserGroup,
} from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { ExternalLink } from '../../../../components/ExternalLink'
import { InfoWithIcon } from '../../../../components/InfoWithIcon'
import { TitleText } from '../../../../components/Typography/TitleText'

export function Profile() {
  return (
    <div className={`base-profile-container flex items-center gap-8`}>
      <img
        src="https://github.com/valdenicio22.png"
        alt="Profile picture"
        className="w-[9.25rem] h-[9.25rem] rounded-md object-cover"
      />
      <div className="flex flex-col">
        <div className="flex items-center justify-between">
          <TitleText>Cameron Williamson</TitleText>
          <ExternalLink
            text="Github"
            icon={<FontAwesomeIcon icon={faArrowUpRightFromSquare} />}
            href="https://github.com/valdenicio22"
            target="_blank"
          />
        </div>
        <p>
          Tristique volutpat pulvinar vel massa, pellentesque egestas. Eu
          viverra massa quam dignissim aenean malesuada suscipit. Nunc, volutpat
          pulvinar vel mass.
        </p>
        <div className="flex aling-center gap-5 flex-wrap mt-9">
          <InfoWithIcon
            icon={<FontAwesomeIcon icon={faGithub} />}
            info={'cameronwll'}
          />
          <InfoWithIcon
            icon={<FontAwesomeIcon icon={faBuilding} />}
            info={'Rocketseat'}
          />
          <InfoWithIcon
            icon={<FontAwesomeIcon icon={faUserGroup} />}
            info={'seguidores'}
          />
        </div>
      </div>
    </div>
  )
}
