import { v4 as uuid } from 'uuid'
import { ChangeEvent, FormEvent, useEffect, useState } from 'react'

import { TaskCard } from '../TaskCard'
import { EmptyMessage } from '../EmptyMessage'
import plusIcon from '../../assets/plus-icon.svg'
import { setLocalStorage, getLocalStorage } from '../../utils/use-localstorage'

type Task = {
  id: string
  title: string
  done: boolean
}

export function Tasks() {
  const [tasks, setTasks] = useState<Task[]>([])
  const [taskTitle, setTaskTitle] = useState('')

  useEffect(() => {
    const storageTasks = getLocalStorage('@todo-task')
    setTasks(storageTasks || [])
  }, [])

  function handleCreateTask(event: FormEvent<HTMLFormElement>) {
    event.preventDefault()
    const newTask = {
      id: uuid(),
      title: taskTitle,
      done: false,
    }
    const tasksUpdated = [...tasks, newTask]
    setTaskTitle('')
    setTasks(tasksUpdated)
    setLocalStorage('@todo-task', tasksUpdated)
  }

  function handleUpdateDone(id: string) {
    const tasksCopy = [...tasks]
    const task = tasksCopy.findIndex((task) => task.id === id)
    if (task !== -1) {
      tasksCopy[task].done = !tasksCopy[task].done
      setTasks(tasksCopy)
      setLocalStorage('@todo-task', tasksCopy)
    }
  }

  function handleDeleteTask(id: string) {
    const tasksCopy = [...tasks]
    const task = tasksCopy.findIndex((task) => task.id === id)
    if (task !== -1) {
      tasksCopy.splice(task, 1)
      setTasks(tasksCopy)
      setLocalStorage('@todo-task', tasksCopy)
    }
  }

  function handleTaskTitle(event: ChangeEvent<HTMLInputElement>) {
    setTaskTitle(event.target.value)
  }

  const totalTasks = tasks.length
  const totalTasksDone = tasks.reduce((taskCounter, task) => {
    if (task.done) return (taskCounter += 1)
    return taskCounter
  }, 0)

  return (
    <section className="w-full max-w-[736px] -mt-7">
      <form action="#" className="flex space-x-2" onSubmit={handleCreateTask}>
        <input
          type="text"
          value={taskTitle}
          onChange={handleTaskTitle}
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
              {totalTasks}
            </span>
          </h2>

          <h2 className="text-purple font-bold text-base flex items-center gap-2">
            Concluídas{' '}
            <span className="inline-block py-[2px] px-2 text-center rounded-lg bg-gray-400 text-xs text-gray-100 min-w-6 h-[19px]">
              {totalTasksDone} de {totalTasks}
            </span>
          </h2>
        </header>

        {tasks.length > 0 ? (
          tasks.map(({ id, title, done }) => (
            <TaskCard
              id={id}
              key={id}
              done={done}
              title={title}
              onUpdateDone={handleUpdateDone}
              onDeleteTask={handleDeleteTask}
            />
          ))
        ) : (
          <EmptyMessage />
        )}
      </div>
    </section>
  )
}
