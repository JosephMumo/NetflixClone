import React from 'react'
import CollapBox from './CollapBox'
import { data } from '../data'

function CollapsibleComponent() {
  return (
    <>
        {data.map(item => {
            return <CollapBox
            key={item.key}
            {...item}
            />
        })}
    </>
  )
}

export default CollapsibleComponent