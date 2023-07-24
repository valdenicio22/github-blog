import { faGithub } from '@fortawesome/free-brands-svg-icons'
import {
  faArrowUpRightFromSquare,
  faBuilding,
  faUserGroup,
} from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { NavLink } from 'react-router-dom'
import { InfoWithIcon } from '../InfoWithIcon'
import { TitleText } from '../Typography/TitleText'

export function Profile() {
  return (
    <div
      className={`
      w-full h-[13.25rem] flex items-center gap-8 bg-base-profile
      rounded-[10px] pl-10 py-8 pr-8 -mt-[5.5rem] shadow-[0_2px_28px_0px_rgba(0,0,0,0.2)]
      `}
    >
      <img
        src="https://github.com/valdenicio22.png"
        alt="Profile picture"
        className="w-[9.25rem] h-[9.25rem] rounded-md object-cover"
      />
      <div className="flex flex-col">
        <div className="flex items-center justify-between">
          <TitleText>Cameron Williamson</TitleText>
          <NavLink
            to="https://github.com/valdenicio22"
            className={`flex items-center text-brand-blue text-text-sm
          font-bold gap-2 self-start uppercase`}
          >
            <span className="pt-[2.2px]">Github</span>
            <FontAwesomeIcon
              icon={faArrowUpRightFromSquare}
              className="h-[0.75rem] w-[0.75rem]"
            />
          </NavLink>
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
