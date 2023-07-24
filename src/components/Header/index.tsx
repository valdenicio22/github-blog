import logoImg from '../../assets/logo.svg'

export function Header() {
  return (
    <header
      className={`w-full h-[18.5rem] bg-[url('/src/assets/cover.svg')] bg-no-repeat bg-center bg-cover flex items-center justify-center`}
    >
      <img src={logoImg} alt="cover" className="mb-12" />
    </header>
  )
}
