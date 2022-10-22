import logo from '../../assets/logo.svg'

export function Header() {
  return (
    <header className="bg-gray-700 w-full h-52 flex items-center justify-center">
      <img src={logo} alt="Logo" />
    </header>
  )
}
