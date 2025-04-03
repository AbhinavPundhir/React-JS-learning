import React, { useState, useCallback, useEffect } from 'react'
import './App.css'

//useCallback(fn, dependencies) is a hook in React that lets u cache the function definition between re-renders.

function App() {
  const [length, setLength] = useState(8)
  const [numberAllowed, setNumber] = useState(false)
  const [stringAllowed, setString] = useState(false)
  const [password, setPassword] = useState("")

  let passwordGenerator = useCallback(() => {
      let pass = ""
      let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz"
      
      if(numberAllowed) str += '01234565789'
      if(stringAllowed) str += '@!{}[]?/<>$%^&*()#~'

      for(let i=1; i<=length; i++){
        let pos = Math.floor(Math.random()*str.length + 1)
        pass += str.charAt(pos)
      }

      setPassword(pass)

  }, [length, numberAllowed, stringAllowed])

  useEffect(() => {
    passwordGenerator()
  }, [length, numberAllowed, stringAllowed])

  return (
    <>
      <div className="w-full max-w-md mx-auto shadow-md rounded-lg px-4 py-3 my-8 bg-gray-800 text-orange-500">
        <h1 className='text-white text-center my-3'>Password generator</h1>
        <div className="flex shadow rounded-lg overflow-hidden mb-4">
            <input
                type="text"
                value={password}
                className="outline-none w-full py-1 px-3"
                placeholder="Password"
                readOnly
            />
            <button
            className='outline-none bg-blue-700 text-black px-3 py-0.5 shrink-0'
            >copy</button>     
        </div>
        <div className='flex text-sm gap-x-2'>
          <div className='flex items-center gap-x-1'>
            <input 
            type="range"
            min={6}
            max={100}
            value={length}
            className='cursor-pointer'
            onChange={(e) => {setLength(e.target.value)}}
              />
              <label>Length: {length}</label>
          </div>
          <div className="flex items-center gap-x-1">
            <input
                type="checkbox"
                defaultChecked={numberAllowed}
                id="numberInput"
                onChange={() => {
                    setNumber((prev) => !prev);
                }}
            />
            <label htmlFor="numberInput">Numbers</label>
          </div>
          <div className="flex items-center gap-x-1">
              <input
                  type="checkbox"
                  defaultChecked={stringAllowed}
                  id="characterInput"
                  onChange={() => {
                      setString((prev) => !prev )
                  }}
              />
              <label htmlFor="characterInput">Characters</label>
          </div>
        </div>
      </div>    
    </>
  )
}

export default App
