import React, { PureComponent, useState, useCallback } from 'react'

export default function UseCallbackPage(params) {
  const [count, setCount] = useState(0)
  const [value, setValue] = useState("")

  const addClick = useCallback(() => {
    // input改变的时候，使用useCallback后，不会再打印 'computed'
    let sum = 0
    for (let i = 0; i < count; i++) {
      sum += i
    }
    console.log(sum);
    return sum
  }, [count])

  return (
    <div>
      <h3>UseCallbackPage</h3>
      <p>count: {count}</p>
      <button onClick={() => setCount(count + 1)}>add</button>
      <input value={value} onChange={event => setValue(event.target.value)} />
      <Child addClick={addClick} />
    </div>
  )
}

class Child extends PureComponent {
  render() {
    console.log('child render');
    const {addClick} = this.props
    return (
      <div>
        <p>Child</p>
        <button onClick={addClick}>Child add</button>
      </div>
    )
  }
}