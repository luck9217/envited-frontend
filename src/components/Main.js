

import React from 'react'
import { ClickEvent } from './ClickEvent'
import ExampleEvent from './ExampleEvent'
import { Head } from './Head'

export const Main = () => {
  return (
    <div className="container-fluid">
        <Head/>
        <ExampleEvent/>
        <ClickEvent/>
    </div>
  )
}
