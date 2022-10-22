import { Tasks } from './components/Tasks'
import { Header } from './components/Header'

export function App() {
  return (
    <div>
      <Header />
      <div className="h-full w-full flex items-center justify-center px-2">
        <Tasks />
      </div>
    </div>
  )
}
