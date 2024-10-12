import { useTask } from '../context/TaskContext'
import { Link } from 'react-router-dom'

import day from 'dayjs'
import utc from 'dayjs/plugin/utc'

day.extend(utc)
function TarjetaTarea({ tarea }) {
  const { eliTarea } = useTask()

  return (
    <div className='bg-zinc-600 w-full max-w-md p-6 rounded-md my-4'>
      <header className='flex flex-col md:flex-row justify-between items-start md:items-center'>
        <h1 className='text-xl md:text-2xl font-semibold mb-2 md:mb-0'>
          {tarea.title}
        </h1>

        <div className='flex flex-col sm:flex-row gap-x-2 gap-y-2 items-center mt-4'>
          <button
            className='bg-red-600 hover:bg-red-800 text-white px-1 py-1 rounded-md w-full sm:w-auto'
            onClick={() => {
              eliTarea(tarea._id)
            }}
          >
            Eliminar
          </button>
          <Link
            className='bg-green-700 hover:bg-green-600 text-white px-1 py-1 rounded-md w-full sm:w-auto'
            to={`/tarea/${tarea._id}`}
          >
            Editar
          </Link>
        </div>
      </header>

      <p className='text-slate-300 mt-2'>{tarea.description}</p>
      <p className='text-sm text-gray-300 mt-1'>
        {day(tarea.date).utc().format('DD/MM/YYYY')}
      </p>
    </div>
  )
}

export default TarjetaTarea
