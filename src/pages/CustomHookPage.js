import React, { useState, useEffect } from 'react'

export default function HookComponent() {
  const [count, setCount] = useState(0)

  useEffect(() => {
    // 只需要在count发生改变时执行就可以
    document.title = `点击了${count}次`
    console.log('count effect');
  }, [count])

  return (
    <div>
      <h3>CustomHookComponent</h3>
      <p>{count}</p>
      <p>{useClock().toLocaleTimeString()}</p>
      <button onClick={() => setCount(count + 1)}>add</button>
    </div>
  )
}  

// 自定义hook，必须以use开头
function useClock() {
  const [date, setDate] = useState(new Date())
  useEffect(() => {
    console.log('date effect');
    // 只需要在didMount时候执行就可以
    const timer = setInterval(() => {
      setDate(new Date())
    }, 1000);
    return () => {
      clearInterval(timer)
    }
  }, [])
  return date
}