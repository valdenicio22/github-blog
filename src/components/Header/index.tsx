import coverImg from '../../assets/cover.svg'

export function Header() {
  return (
    <header>
      <img src={coverImg} alt="cover" className="w-full" />
    </header>
  )
}
