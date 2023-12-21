import './list.css';

export const List = ({opacity, setContent}) => {
    return( 
    
    <>

        <ul className='flex items-center gap-4 my-6 mb-4'>
            <li>
               <button onClick={() => setContent("Positive content")} className={`font-bold text-sm opacity-${opacity.pos} transition`}>POSITIVE</button>
            </li> 
            <li>
               <button onClick={() => setContent("Negative content")} className={`font-bold text-sm opacity-${opacity.neg} transition`}>NEGATIVE</button>
            </li>  
            <li>
               <button onClick={() => setContent("Neutral content")} className={`font-bold text-sm opacity-${opacity.neut} transition`}>NEUTRAL</button>
            </li>    
        </ul>   
    
    </>
    
    )
}