
import Categories from '../components/categories/Categories'
import Navbar from '../components/navbar/Navbar'
import {Beneficios} from '../components/Beneficios/Beneficios'  
import Banner from '../components/banner/Banner'
import FlashSalesSection from '../components/FlashSalesSection/FlashSalesSection'
import JBLCard from '../components/promocionDestacada/JBLCard'


function Home() {
  return (
    <main>
        <Banner/>
        <FlashSalesSection/>
        <Categories />
        <JBLCard/>
        <Beneficios />
    </main>
  )
}

export default Home