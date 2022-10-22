import clipboard from '../../assets/clipboard.svg'

export function EmptyMessage() {
  return (
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
  )
}
