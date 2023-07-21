import { faGithub } from '@fortawesome/free-brands-svg-icons'
import { faBuilding, faUserGroup } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

export function Profile() {
  return (
    <div className="w-full h-[13.25rem] flex items-center gap-8 bg-base-profile rounded-[10px] pl-10 py-8 pr-8">
      <img
        src="https://s3-alpha-sig.figma.com/img/c460/226f/8a0e7a6ab75fc2eabd9a0a9ae72f8ea0?Expires=1690761600&Signature=GhSAkV9fFQCivlkIShq27pTg9CfjuFYxTVVUFaqpsMPpY1TGuN22YGntTwjXyB3OfvGsUC3zRqv6Q6rNvloPr42e4BkAd6xonnhdnLnN-f~SOlUYatqB22li6~vuiHTeoYqw465QbRBeiY6VIF6C1oNbXWuxVM6KBSCjhQ4dQxSJ6-JfxErlxCs9vP7u3b2QHmu7KCrz-5DrE0EcbLX1kmOq7McrLdLmbyGvbNEu1OoB2-pkbag5MFZRyuSgZrMq3NA7vWzwuc71sy5kdJG51hCg15eP4dZSC-v6Xqjb9LiNDQugjbjqVX39W1mK~luzkje3Lnb8i1nAJN0l3x~5Hw__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4"
        className="w-[9.25rem] h-[9.25rem] rounded-lg"
      />
      <div className="flex flex-col justify-start">
        <h2 className="mb-2">Cameron Williamson</h2>
        <p>
          Tristique volutpat pulvinar vel massa, pellentesque egestas. Eu
          viverra massa quam dignissim aenean malesuada suscipit. Nunc, volutpat
          pulvinar vel mass.
        </p>
        <div className="max-w-[23.5rem] grid grid-cols-3 gap-5 mt-6">
          <div className="flex items-center gap-2">
            <FontAwesomeIcon
              icon={faGithub}
              className="w-[1.125rem] h-[1.125rem] text-base-label"
            />
            <span>cameronwll</span>
          </div>
          <div className="flex items-center gap-2">
            <FontAwesomeIcon
              icon={faBuilding}
              className="w-[1.125rem] h-[1.125rem] text-base-label"
            />
            <span>cameronwll</span>
          </div>
          <div className="flex items-center gap-2">
            <FontAwesomeIcon
              icon={faUserGroup}
              className="w-[1.125rem] h-[1.125rem] text-base-label"
            />
            <span>cameronwll</span>
          </div>
        </div>
      </div>
    </div>
  )
}
