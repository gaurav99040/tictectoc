import React,{useState,useEffect} from 'react'
import Bound from './Bound'
const initialState=["","","","","","","","",""]

function Squre() {
    const [state, setstate] = useState(initialState);
    const [setx,setvalue ] = useState(false);

    const onclick=(i)=>{
        let string=Array.from(state);
        string[i]=setx?"x":"o";
        setstate(string);
        setvalue(!setx)
    }
    const blanck=()=>{
        setstate(initialState)
    }
    useEffect(() => {
        const winner=calculateWinner()
        if(winner){
            alert(`winner is ${winner}`);
            blanck();
        }
    }, [state])

    function calculateWinner() {
        const lines = [
          [0, 1, 2],
          [3, 4, 5],
          [6, 7, 8],
          [0, 3, 6],
          [1, 4, 7],
          [2, 5, 8],
          [0, 4, 8],
          [2, 4, 6],
        ];
        for (let i = 0; i < lines.length; i++) {
          const [a, b, c] = lines[i];
          if (state[a] && state[a] === state[b] && state[a] === state[c]) {
            return state[a];
          }
        }
        return null;
      }
    return (
        <>
            <div className='center'>
                <div className="all">
                    <div className="title">Tic Tec Toc</div>
                    <div className="coll">
                            <Bound className='squre' state={state[0]} onClick={()=>{onclick(0)}} />
                            <Bound state={state[1]} onClick={()=>{onclick(1)}} className='squre'/>
                            <Bound state={state[2]} onClick={()=>{onclick(2)}} className='squre'/>
                        </div>
                        <div className="coll">
                            <Bound state={state[3]} onClick={()=>{onclick(3)}} className='squre'/>
                            <Bound state={state[4]} onClick={()=>{onclick(4)}} className='squre'/>
                            <Bound state={state[5]} onClick={()=>{onclick(5)}} className='squre'/>
                        </div>
                        <div className="coll">
                            <Bound state={state[6]} onClick={()=>{onclick(6)}} className='squre'/>
                            <Bound state={state[7]} onClick={()=>{onclick(7)}} className='squre'/>
                            <Bound state={state[8]} onClick={()=>{onclick(8)}} className='squre'/>
                        </div>
                        <div className='clear'>
                        <button onClick={()=>{blanck()}} className='button'>clear all</button>
                        </div>
                    </div>
            </div>
        </>
    )
}

export default Squre
