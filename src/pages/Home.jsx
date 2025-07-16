
import Categories from '../components/categories/Categories'
import Navbar from '../components/navbar/Navbar'


function Home() {
  return (
    <main>
        <Navbar />
        <h1>Home</h1>
        <Categories/>
        {/* <Logo /> */}
    </main>
  )
}

export default Home