import './App.css'
import ArchProject from './components/ArchProject'
import Banner from './components/Banner'
import Cover from './components/Cover'
import Footer from './components/Footer'
import NavBar from './components/NavBar'
import WebDevProject from './components/WebDevProject'

function App() {

  return (
    <div className='bg-bgday100 text-grey400 max-w-4k'>
    <NavBar />

    <Cover />
    <Banner />
    <WebDevProject />
    {/* <Banner /> */}
    {/* <ArchProject /> */}
    {/* <Footer /> */}
      
    </div>
  )
}

export default App
