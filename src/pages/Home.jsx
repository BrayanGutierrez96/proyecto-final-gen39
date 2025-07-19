
import Categories from '../components/categories/Categories'
import Navbar from '../components/navbar/Navbar'
import {Beneficios} from '../components/Beneficios/Beneficios'
import NewArrival from '../components/NewArrival/NewArrival'


function Home() {
  return (
    <main>
        
        <Categories />
        <Beneficios />
        <NewArrival/>
    </main>
  )
}

export default Home