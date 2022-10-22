import clsx from 'clsx'
import { Check, Trash } from 'phosphor-react'

interface TaskCardProps {
  id: string
  title: string
  done: boolean
  onUpdateDone: (id: string) => void
  onDeleteTask: (id: string) => void
}

export function TaskCard({
  id,
  title,
  done,
  onUpdateDone,
  onDeleteTask,
}: TaskCardProps) {
  return (
    <section className="w-full mb-3 space-x-3 p-4 text-gray-100 text-sm rounded-lg bg-gray-500 border-gray-400 flex justify-around">
      <div className="w-6 h-6 flex items-center justify-center">
        <button
          onClick={() => onUpdateDone(id)}
          className={clsx(
            'w-[17px] h-[17px] flex items-center justify-center rounded-full border-2 border-blue hover:border-blue-dark hover:bg-blue-dark hover:bg-opacity-20 transition transition-200',
            {
              'bg-purple-dark border-none': done,
            },
          )}
        >
          {done && <Check />}
        </button>
      </div>

      <p className={clsx('flex-1', { 'line-through': done })}>{title}</p>

      <button
        onClick={() => onDeleteTask(id)}
        className="w-6 h-6 transition text-gray-300 hover:text-danger transition-300 flex items-center rounded justify-center hover:bg-gray-400"
      >
        <Trash className="w-[17px] h-[17px]" />
      </button>
    </section>
  )
}
