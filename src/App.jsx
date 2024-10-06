import { Fragment } from 'react'
import './App.css'
import BookCont from './components/BookCont'
import Form from './components/Form'
import Header from './components/Header'
import Wrapper from './components/Wrapper'

function App() {

  return (
      <Fragment>
        <Header/>
        <Form/>
          <Wrapper>
            <BookCont/>
          </Wrapper>
      </Fragment>      
  )
}

export default App


// flex justify-between items-center mt-16