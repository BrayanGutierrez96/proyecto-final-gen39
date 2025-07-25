import Categories from '../components/categories/Categories'
import Navbar from '../components/navbar/Navbar'
import { Beneficios } from '../components/Beneficios/Beneficios'  
import Banner from '../components/banner/Banner'
import JBLCard from '../components/promocionDestacada/JBLCard'  // Componente correcto

function Home() {
  return (
    <main>
        <Banner/>
        <Categories />
        <Beneficios />
        <JBLCard />  {/* Componente se renderiza aquí */}
    </main>
  )
}

export default Home
