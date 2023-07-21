import coverImg from '../../assets/cover.svg'

export function Header() {
  return (
    <header
      className={`w-full h-[18.5rem] flex items-center justify-center bg-[url('${coverImg}')] bg-no-repeat bg-center bg-cover`}
    />
  )
}
