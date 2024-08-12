import Title from './components/Title'
import Button from './components/Button'
import ButtonsContainer from './components/ButtonsContainer'

import useToast from './hooks/useToast'

import { Toaster } from 'react-hot-toast'

import GlobalStyle from './styles/global'

function App() {
  const { toastSuccess, toastPromise, toastError } = useToast()

  const handleToastSuccess = () => toastSuccess('Success message')

  const handleToastError = () => toastError('Error message')

  const handleToastPromise = () => {
    const myPromise = new Promise((resolve, reject) => {
      setTimeout(() => {
        if (Math.random() < 0.5) {
          resolve('foo')
        } else {
          reject('fox')
        }
      }, 1000)
    })

    toastPromise(myPromise, 'Loading...', 'Success on promise', 'Error on promise')
  }

  return (
    <>
      <section className='container'>
        <div className='content'>
          <Title title='Hook - react-hot-toast' />

          <ButtonsContainer>
            <Button type='success' text='Success' onClick={handleToastSuccess} />
            <Button type='error' text='Error' onClick={handleToastError} />
            <Button type='promise' text='Promise' onClick={handleToastPromise} />
          </ButtonsContainer>
        </div>
      </section>

      <Toaster position='bottom-right' />
      <GlobalStyle />
    </>
  )
}

export default App
