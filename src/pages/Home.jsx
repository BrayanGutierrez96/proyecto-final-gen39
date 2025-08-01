
import Categories from '../components/categories/Categories'
import Navbar from '../components/navbar/Navbar'
import {Beneficios} from '../components/Beneficios/Beneficios'  
import Banner from '../components/banner/Banner'
import FlashSalesSection from '../components/FlashSalesSection/FlashSalesSection'
import JBLCard from '../components/promocionDestacada/JBLCard'
import SideBar from '../components/sidebar/SideBar'


function Home() {
  return (
<main className="text-xs">
      <section className="grid grid-cols-4 ">
        <SideBar />
        <Banner />
      </section>
        <FlashSalesSection/>
        <Categories />
        <JBLCard/>
        <Beneficios />
    </main>
  )
}

export default Home