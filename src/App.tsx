import ArchProject from './components/ArchProject'
import Banner from './components/Banner'
import Cover from './components/Cover'
import Footer from './components/Footer'
import NavBar from './components/NavBar'
import WebDevProject from './components/WebDevProject'

function App() {

  return (
    <div className='flex flex-col bg-bgday100 text-grey400 h-screen'>
    {/* <div className='bg-bgday100 text-grey400 w-screen'> */}
        <NavBar />

        <Cover />
        {/* <Banner /> */}
        {/* <WebDevProject /> */}

        {/* <ArchProject /> */}
        {/* <Footer /> */}

    {/* </div> */}
    </div>
  )
}

export default App
