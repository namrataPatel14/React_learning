import React from 'react'
import Persons from './Persons'

function ArrayList() {
  const persons =[ 
    {
        name:'Namrata',
        age:28
    },
    {
        name:'jatin',
        age:28
    }
  ]
  const personList = persons.map(person => <Persons p = {person}/>)
  return (
    <div>{personList}</div>
  )
}

export default ArrayList