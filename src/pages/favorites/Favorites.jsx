import {whatchs} from '../../data/Rahmatullo'

const Favorites = () => {
  return (
    <main className='grid grid-cols-3 grid-rows-2 w-500 h-full p-1.5 gap-100'>
        {whatchs.map((item,index) => {
          {
            return <div key={index} className='flex flex-col items-center w-350'>
              <img className='w-50' src={item.imgOne}/>
              <p>{item.name}</p>
              <b>{item.price}</b>
              <p>{item.coment}</p>
            </div>
          }
        })}
    </main>
  )
}

export default Favorites
