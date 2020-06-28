import React, { useState, useMemo } from 'react'

export default function UseMemoPage(params) {
  const [count, setCount] = useState(0)
  const [value, setValue] = useState("")

  // 当前的计算只和count有关
  /* const expensive = () => {
    // input改变的时候，也会打印"compute", 而input与expnesive 无联系
    console.log('compute');
    let sum = 0
    for (let i = 0; i < count; i++) {
      sum += i
    }
    return sum
  } */

  const expensive = useMemo(() => {
    // input改变的时候，使用useMemo后，不会再打印 'computed'
    console.log('compute');
    let sum = 0
    for (let i = 0; i < count; i++) {
      sum += i
    }
    return sum
  }, [count])

  return (
    <div>
      <h3>UseMemoPage</h3>
      <p>count: {count}</p>
      {/* <p>expensive: {expensive()}</p> */}
      {/* useMemo 返回的是函数执行的结果 */}
      <p>expensive: {expensive}</p>
      <button onClick={() => setCount(count + 1)}>add</button>
      <input value={value} onChange={event => setValue(event.target.value)} />
    </div>
  )
}
