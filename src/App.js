import { useEffect, useState, useRef } from 'react'
import './App.css'
import Tile from './Tile'
import { generateDataObject } from './utils'

export default function App () {
  const [count, setCount] = useState(3)
  const [data, setData] = useState([])
  const inputref = useRef(null)

  useEffect(() => {
    let arr = []
    for (let i = 0; i < count; i++) {
      arr.push(generateDataObject(i))
    }
    setData(arr)
  }, [count])

  return (
    <div className='App'>
      <h1 className='heading'>Related articles</h1>
      <h2 className='subtitle'>Start editing to see some magic happen!</h2>
      <div className='tiles-layout' data-testid="tiles-container" >
        {data?.length > 0 ? (
          data.map((i,index) => <Tile data={i} key={i+index} />)
        ) : (
          <div className='no-data' data-testid="emptyMsg">Enter An Integer to display tiles</div>
        )}
      </div>
      <div className='bottom-box'>
        <button
          data-testid='btn'
          className='card-btn'
          onClick={() => setCount(inputref.current.value)}
        >
          Read more
        </button>
        
        <input
          type='number'
          data-testid='count'
          placeholder={'enter count'}
          ref={inputref}
        />
      </div>
    </div>
  )
}
