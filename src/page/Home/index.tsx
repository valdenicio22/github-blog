import { RegularText } from '../../components/Typography/RegularText'
import { TitleText } from '../../components/Typography/TitleText'
import { PostList } from './components/PostList'
import { Profile } from './components/Profile'

export function Home() {
  return (
    <>
      <Profile />
      <section className="flex flex-col my-[4.5rem]">
        <div className="flex items-center justify-between mb-3">
          <TitleText color="subtitle" size="sm">
            Publicações
          </TitleText>
          <RegularText color="span" size="sm">
            6 publicações
          </RegularText>
        </div>
        <input
          type="text"
          placeholder="Buscar Conteúdo"
          className={`
          w-full py-3 px-4 rounded-md bg-base-input border border-base-border placeholder:text-base-label
          outline-none focus:border-brand-blue`}
        />
        <PostList />
      </section>
    </>
  )
}
