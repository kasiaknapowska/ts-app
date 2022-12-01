import React from 'react'

type Props = {}

export default function Form({}: Props) {
  return (
   <div className='form_container'>
   <h1>Formularz rejestracyjny</h1>
    <form>
          <label>
              Login:
              <input />
            </label>
    </form>
   </div>
  )
}