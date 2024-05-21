const Alart = ({message, onClose}) => {
  return (
    <div className='flex items-center justify-between w-3/5 h-20 bg-blue-500 text-white p-4 mt-8'>
        <p className='text-2xl font-normal'>{message}</p>
        <button onClick={onClose} className='text-4xl'>X</button>
    </div>
  )
}

export default Alart