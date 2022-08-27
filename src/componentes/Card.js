import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faPlane} from '@fortawesome/free-solid-svg-icons';

const Card = (props) => {
  return (
    <div>{props.details.map((value, index)=>(
    <div class="inline-block p-9 max-w-lg" key={index}>
    <div class="w-64 cursor-pointer rounded-2xl shadow hover:shadow-2xl hover:scale-104 transition-all duration-200 ease-in-out">
      <div class="relative flex items-start overflow-hidden rounded-t-2xl">
        <img src= {value.img}
      alt="vuelos" />
  
        <div class="absolute -bottom-3.5 right-5 inline-flex space-x-3 rounded-2xl bg-white p-2 shadow-md  text-sky-400">
          <FontAwesomeIcon icon={faPlane} />
          <span class="ml-1 text-md font-semibold capitalize">vuelo</span>
        </div>
      </div>
  
      <div class="mt-2 p-3 mb-12">
        <h2 class="text-zinc-600 font-sans font-medium text-2xl capitalize">{value.titulo}</h2>
        <p class="mt-1 text-md text-zinc-600 font-sans font-medium capitalize">{value.desde}</p>
    </div>
      <div class="flex p-3 text-zinc-600 font-sans border-t">
          <p>
            <span class="text-sm font-medium">precio por persona <br /></span>
            <span class="text-2xl font-medium capitalize">{value.precio}<br /></span>
        <span class="text-xs ">incluye impuestos, tasas y cargos</span>
      </p>
      </div>
    </div>
      </div>
      ))}
      </div>
  )
}

export default Card;