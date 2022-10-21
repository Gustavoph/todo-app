import logo from './assets/logo.svg'
import plusIcon from './assets/plus-icon.svg'
import clipboard from './assets/clipboard.svg'
import clsx from 'clsx'
import { useState } from 'react'
import { Trash, Check } from 'phosphor-react'

function App() {
  const [done, setDone] = useState(false)
  const [tasks, setTasks] = useState([
    {
      id: 1,
      title: 'Arrumar casa',
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
                  0
                </span>
              </h2>

              <h2 className="text-purple font-bold text-base flex items-center gap-2">
                Concluídas{' '}
                <span className="inline-block text-center rounded-lg bg-gray-400 text-xs text-gray-100 w-6 h-[19px]">
                  0
                </span>
              </h2>
            </header>

            {tasks.length < 0 ? (
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
            ) : (
              <section className="w-full p-4 text-gray-100 text-sm rounded-lg bg-gray-500 border-gray-400 flex justify-around">
                <div className="w-6 h-6 flex items-center justify-center">
                  <button
                    onClick={() => setDone(!done)}
                    className={clsx(
                      'w-[17.45px] h-[17.45px] flex items-center justify-center rounded-full border-2 border-blue hover:border-blue-dark hover:bg-blue-dark hover:bg-opacity-20 transition transition-200',
                      {
                        'bg-purple-dark border-none': done,
                      },
                    )}
                  >
                    {done && <Check />}
                  </button>
                </div>

                <p className={clsx('w-5/6', { 'line-through': done })}>
                  Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                  Ipsam minima vel mollitia officiis sint eveniet exercitationem
                  delectus, provident alias tempore.
                </p>

                <button className="w-6 h-6 transition text-gray-300 hover:text-danger transition-300 flex items-center rounded justify-center hover:bg-gray-400">
                  <Trash className="w-[17px] h-[17px]" />
                </button>
              </section>
            )}
          </div>
        </section>
      </div>
    </div>
  )
}

export default App
