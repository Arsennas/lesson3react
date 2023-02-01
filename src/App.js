import React, { useEffect, useState } from 'react';
import './App.css';

const App = () => {
  // const [name, setName] = useState('Asan')
  // const [age, setAge] = useState(32);
  // const [counter, setCounter] = useState(1)
  // const [isActive, setIsActive] = useState(1)
  // const[index, setIndex] = useState(0)
  const[index, setIndex] = useState(0)
  
  useEffect(() => {
    setInterval(() => {
      setIndex(index => index === 3 ? 0 : index + 1)
    }, 1000)
  //   setName('Uson')
  //   setAge(33)
  //   // setInterval(() => {
  //   // setCounter(counter => counter === 15 ? 1 : counter + 1)
  //   // }, 1000)
  }, []) 
  // const plus = () => {
  //   console.log('+')
  //   setCounter(counter + 1)
  // }
  // const min = () => {
  //   console.log('-')
  //   setCounter(counter => counter === 1 ? 1 : counter -1)
  // }
  // const toggleClick = () => {
  // setIsActive(!isActive)
  // }
  // let [img] = useState([
  //   'https://static01.nyt.com/images/2019/05/20/arts/20got-looseends/a451dc6a4897429badc6e8d6a94abf27-superJumbo.jpg',
  //   'https://showmax.akamaized.net/i/d19722ee-8121-40bf-8bc1-d854f03d8b85/format=webp/q=70/850x',
  //   'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQnfStsd8FgtZoglJMUgCWPzdf6wLRb8lD3MsNztxmVj57lqJ8xN4klY0GNzRqJve5D4UM&usqp=CAU',
  //   'https://upload.wikimedia.org/wikipedia/en/thumb/1/1d/Game_of_Thrones_Season_3.jpg/220px-Game_of_Thrones_Season_3.jpg'
  // ])
  // const left = () => setIndex(index => index === 0 ? 3 : index - 1)

  // const right = () => setIndex(index => index === 3 ? 0 : index + 1)
  let color = () => {
    if(index === 0){
      return
    }else if(index === 1){
      return 'red'
    }else if(index === 2){
      return 'yellow'
    }else if(index === 3){
      return 'green'
    }
  }
  return (
    <div className='App'>
      {/* <h1>{name}</h1>
      <span>{age}</span>
      <br />
      <button onClick={plus}>+</button>
      <span>{counter}</span>
      <button onClick={min}>-</button>
      <button onClick={toggleClick}>{isActive ? 'show' : 'hidden'}</button>
      <img style={{display: isActive ? 'none' : 'block'}} width={250} src='https://upload.wikimedia.org/wikipedia/en/thumb/4/47/FC_Barcelona_%28crest%29.svg/1200px-FC_Barcelona_%28crest%29.svg.png' alt=''/>
    <button onClick={() => {
      setName('Uson')
    } }>Asan</button> */}
    
      {/* <h1>{index}</h1>
    <button onClick={left}>left</button>
    <img src={img[index]} alt='' />
    <button onClick={right}>right</button>
    <div className='listImg'>
    {
      img.map((elem,i) => {
        return <img
        onClick={() => setIndex(i)}
        style={{border : index === i ?  '2px solid black' : null}}
        key={i} src={elem}/>
      })
    } */}
    {/* </div> */}
    <h1>{index}</h1>
    <h1 style={{display : index === 0 ? 'block' : 'none'}}>0%</h1>
    <h1 style={{display : index === 1 ? 'block' : 'none'}}>30%</h1>
    <h1 style={{display : index === 2 ? 'block' : 'none'}}>70%</h1>
    <h1 style={{display : index === 3 ? 'block' : 'none'}}>100%</h1>
      <div className='color'>
        <div style={{backgroundColor: color()}} className={`${index > 0 ? 'item' : null}`}></div>
        <div style={{backgroundColor : color()}} className={`${index > 1 ? 'item' : null}`}></div>
        <div style={{backgroundColor : color()}} className={`${index > 2 ? 'item' : null}`}></div>
      </div>
    </div>
  );
};
export default App;