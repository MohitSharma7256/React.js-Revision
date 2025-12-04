import React from 'react'
import AnonymousFunction from './pages/AnonymousFunction'
import FatArrow from './pages/FatArrow'
import ExportImportExample from './pages/exportimport/ExportExample'
import ImportExample from './pages/exportimport/ImportExample'
import ShowingData from './pages/ArrayofObjects/ShowingData'
import State from './pages/State/State'
import CallbackFunction from './pages/State/CallbackFunction'
import MultipleStateVariable from './pages/State/MultipleStateVariable'
import Task from './pages/State/Task'
import Parent from './pages/Props/Parent'
import Parent1 from './pages/Props/parent1'
import Parent2 from './pages/Props/lifting(send-data-child-to-parent)/Parent2'
import InputExample from './pages/input/InputExample'
import Appex from './pages/ReactRouterDom/Appex'
import DataFetcher from './pages/UseEffect/DataFetcher'
import UseEffectExample from './pages/UseEffect/UseEffectExample'
import EffectEveryRender from './pages/UseEffect/EffectEveryRender '
import EffectOnlyOnce from './pages/UseEffect/EffectOnlyOnce'
import EffectWithDependencies from './pages/UseEffect/EffectWithDependencies'

const App = () => {
  return (
    <>
      <div className='bg-zinc-700 h-screen text-amber-400'>
        {/* <AnonymousFunction /> */}
        {/* <FatArrow /> */}

        {/* data bhejna exporting or importing ke jariye */}
        {/* <ExportImportExample /> */}
        {/* <ImportExample /> */}

        {/* Array of objects example   array object data ko show karna */}
        {/* <ShowingData /> */}

        {/* State example */}
        {/* <State /> */}

        {/* <CallbackFunction /> */}

        {/* <MultipleStateVariable /> */}

        {/* <Task /> */}

        {/* sending data from parent to child component through props */}
        {/* <Parent /> */}
        {/* <Parent1 /> */}

        {/* receiving data from child to parent through lifting state up */}
        {/* <Parent2 /> */}


        {/* input form */}
        {/* <InputExample /> */}


        {/* react router example */}
        {/* <Appex /> */}


        {/* useeffect */}
        {/* <DataFetcher /> */}
        <UseEffectExample />

        {/* <EffectEveryRender /> */}

        {/* <EffectOnlyOnce /> */}

        {/* <EffectWithDependencies /> */}

      </div>
    </>
  )
}

export default App   
