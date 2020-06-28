import React, { useContext } from 'react'
import { ThemeContext } from '../Context'

export default function UserPage() {
  const ctx = useContext(ThemeContext)
  console.log(ctx);
  return (
    <div>
      <h3 className={ctx.themecolor}>UserPage</h3>
    </div>
  )
}