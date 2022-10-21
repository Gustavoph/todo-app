import { useState } from 'react'

import clsx from 'clsx'
import { Check, Trash } from 'phosphor-react'

interface TaskCardProps {
  id: string
  title: string
  done: boolean
}

export function TaskCard({ id, title, done }: TaskCardProps) {
  const [isDone, setIsDone] = useState(done)

  return (
    <section className="w-full mb-3 space-x-3 p-4 text-gray-100 text-sm rounded-lg bg-gray-500 border-gray-400 flex justify-around">
      <div className="w-6 h-6 flex items-center justify-center">
        <button
          onClick={() => setIsDone(!isDone)}
          className={clsx(
            'w-[17px] h-[17px] flex items-center justify-center rounded-full border-2 border-blue hover:border-blue-dark hover:bg-blue-dark hover:bg-opacity-20 transition transition-200',
            {
              'bg-purple-dark border-none': isDone,
            },
          )}
        >
          {isDone && <Check />}
        </button>
      </div>

      <p className={clsx('flex-1', { 'line-through': isDone })}>{title}</p>

      <button className="w-6 h-6 transition text-gray-300 hover:text-danger transition-300 flex items-center rounded justify-center hover:bg-gray-400">
        <Trash className="w-[17px] h-[17px]" />
      </button>
    </section>
  )
}
