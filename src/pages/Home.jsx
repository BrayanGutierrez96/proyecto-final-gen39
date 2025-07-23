
import Categories from '../components/categories/Categories'
import Navbar from '../components/navbar/Navbar'
import {Beneficios} from '../components/Beneficios/Beneficios'  
import Banner from '../components/banner/Banner'


function Home() {
  return (
    <main>
        <Banner/>
        <Categories />
        <Beneficios />
    </main>
  )
}

export default Home