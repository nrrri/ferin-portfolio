import Banner from './components/Banner'
import Cover from './components/Cover'
import NavBar from './components/NavBar'
import WebDevProject from './components/WebDevProject'

function App() {

  return (
    <div className='flex flex-col bg-bgday100 text-grey400 h-full pb-12'>
        <NavBar />

        <Cover />
        <Banner text='My Project '/>
        <WebDevProject />

    </div>
  )
}

export default App
