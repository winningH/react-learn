import React from 'react';
import styles from './index.module.css'
import logo from '../logo.png'

function formatUser(user) {
  return user.name + "-" + user.age
}

export default function TestComponent() {
  const name = "react";
  const obj = {
    name: 'zhangsan',
    age: 20
  }

  const arr = [0, 1, 2];

  return (
    <div>
      <div>hello, {name}</div>
      <div>{formatUser(obj)}</div>
      <ul>
        {arr.map(item => (
          <li key={item}>{item}</li>
        ))}
      </ul>

      <div className={styles.content}>
        <img
          src={logo} alt=''
          className={styles.logo}
        // style={{width: '50px'}}
        />
      </div>
    </div>
  )
}
