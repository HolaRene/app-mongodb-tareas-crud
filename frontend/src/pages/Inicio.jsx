function PerfilPage() {
  return (
    <div className='bg-zinc-800 h-[calc(100vh-100px)] flex flex-col justify-center items-center'>
      <div className='text-center'>
        <h1 className='text-white text-3xl mb-4'>
          ¡Bienvenido a nuestra Aplicación Web!
        </h1>
        <p className='text-gray-400 mb-4'>
          Esta es una aplicación web Fullstack que te permite registrarte,
          guardar y eliminar tus tareas de manera sencilla.
        </p>
        <p className='text-gray-400 mb-4'>
          Utilizamos Node.js como Backend y MongoDB como base de datos NoSQL,
          junto con React como frontend.
        </p>
        <p className='text-gray-400'>
          Además, podrás gestionar tus tareas usando JSON Web Tokens y cookies
          para una experiencia segura.
        </p>
        <a
          href='https://github.com/HolaRene/app-mongodb-tareas-crud' // Cambia esto por el enlace a tu repositorio
          className='mt-4 text-blue-400 underline'
          target='_blank'
          rel='noopener noreferrer'
        >
          Ver el proyecto en GitHub
        </a>
      </div>
    </div>
  )
}

export default PerfilPage
