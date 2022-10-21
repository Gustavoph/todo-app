import logo from './assets/logo.svg'
import plusIcon from './assets/plus-icon.svg'
import clipboard from './assets/clipboard.svg'
import { useState } from 'react'
import { TaskCard } from './components/TaskCard'

function App() {
  const [tasks, setTasks] = useState([
    {
      id: '1',
      title: 'Arrumar casa',
      done: false,
    },
  ])

  return (
    <div>
      <header className="bg-gray-700 w-full h-52 flex items-center justify-center">
        <img src={logo} alt="Logo" />
      </header>

      <div className="h-full w-full flex items-center justify-center px-2">
        <section className="w-full max-w-[736px] -mt-7">
          <form action="#" className="flex space-x-2">
            <input
              type="text"
              className="flex-1 outline-none rounded-lg bg-gray-500 border border-gray-700 text-gray-100 focus:border-purple-dark p-4 placeholder:text-gray-300"
              placeholder="Adicione uma nova tarefa"
            />
            <button className="w-24 h-14 bg-blue-dark text-gray-100 font-bold text-sm rounded-lg flex items-center justify-center transition transition-300 gap-2 hover:bg-blue">
              Criar <img src={plusIcon} alt="plus icon" />
            </button>
          </form>

          <div className="mt-16 w-full">
            <header className="flex justify-between mb-6">
              <h2 className="text-blue font-bold text-base flex items-center gap-2">
                Tarefas criadas{' '}
                <span className="inline-block text-center rounded-lg bg-gray-400 text-xs text-gray-100 w-6 h-[19px]">
                  {tasks.length}
                </span>
              </h2>

              <h2 className="text-purple font-bold text-base flex items-center gap-2">
                Concluídas{' '}
                <span className="inline-block py-[2px] px-2 text-center rounded-lg bg-gray-400 text-xs text-gray-100 min-w-6 h-[19px]">
                  0 de 1
                </span>
              </h2>
            </header>

            {tasks.length > 0 ? (
              tasks.map(({ id, title, done }) => (
                <TaskCard key={id} id={id} title={title} done={done} />
              ))
            ) : (
              <section className="w-full rounded-lg border-t border-t-gray-400">
                <div className="py-16 px-6 flex flex-col justify-center items-center">
                  <img src={clipboard} alt="clipboard image" className="mb-4" />
                  <p className="text-base text-gray-300 font-bold">
                    Você ainda não tem tarefas cadastradas <br />
                    <span className="font-normal">
                      Crie tarefas e organize seus itens a fazer
                    </span>
                  </p>
                </div>
              </section>
            )}
          </div>
        </section>
      </div>
    </div>
  )
}

export default App
