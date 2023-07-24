import { faGithub } from '@fortawesome/free-brands-svg-icons'
import {
  faArrowUpRightFromSquare,
  faBuilding,
  faUserGroup,
} from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { useCallback, useEffect, useState } from 'react'
import { ExternalLink } from '../../../../components/ExternalLink'
import { InfoWithIcon } from '../../../../components/InfoWithIcon'
import { Spinner } from '../../../../components/Spinner'
import { TitleText } from '../../../../components/Typography/TitleText'
import { api } from '../../../../service/api'

const username = 'valdenicio22'

type UserProfile = {
  login: string
  bio: string | null
  followers: number
  html_url: string
  company?: string
  name: string
  avatar_url: string
}

export function Profile() {
  const [user, setUser] = useState<UserProfile>({} as UserProfile)
  const [loading, setLoading] = useState(true)

  const getProfileData = useCallback(async () => {
    try {
      setLoading(true)
      const response = await api.get(`users/${username}`)
      setUser(response.data)
    } catch (error) {
      console.log(error)
    } finally {
      setLoading(false)
    }
  }, [])

  useEffect(() => {
    const timer = setTimeout(() => getProfileData(), 500)

    return () => clearTimeout(timer)
  }, [getProfileData])

  return (
    <div
      className={`base-profile-container flex items-center gap-8 min-h-[13.25rem]`}
    >
      {loading ? (
        <div className="w-full flex items-center justify-center">
          <Spinner />
        </div>
      ) : (
        <>
          <img
            src={user.avatar_url}
            alt={user.login}
            className="w-[9.25rem] h-[9.25rem] rounded-md object-cover"
          />
          <div className="w-full flex flex-col">
            <div className="w-full flex items-center justify-between">
              <TitleText>{user.name}</TitleText>
              <ExternalLink
                text="Github"
                icon={<FontAwesomeIcon icon={faArrowUpRightFromSquare} />}
                href={user.html_url}
                target="_blank"
              />
            </div>
            <p>{user.bio}</p>
            <div className="flex aling-center gap-5 flex-wrap mt-9">
              <InfoWithIcon
                icon={<FontAwesomeIcon icon={faGithub} />}
                info={user.login}
              />
              {user.company ? (
                <InfoWithIcon
                  icon={<FontAwesomeIcon icon={faBuilding} />}
                  info={user.company}
                />
              ) : (
                <InfoWithIcon
                  icon={<FontAwesomeIcon icon={faBuilding} />}
                  info={'Student'}
                />
              )}
              <InfoWithIcon
                icon={<FontAwesomeIcon icon={faUserGroup} />}
                info={`${user.followers} followers`}
              />
            </div>
          </div>
        </>
      )}
    </div>
  )
}
