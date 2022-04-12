import ProductCard from '../components/ProductCard/ProductCard'
import PageTitle from "../components/PageTitle/PageTitle";


// view all panel....
export default function Home(props) {

  const products = props.products;

  return(
    <>
      <PageTitle tagline="product specials" title="ChocolateStore"/>
      <main>
        { products.map(product => <ProductCard key={product.uid} product={product}/>)}
      </main>
    </>
  )

  /************************************************************************** */

  // const [users, setUsers] = useState(null)
  //  useEffect(()=>{
  //    // connecting to firebase API
  //    // ref(db, '/prod')
  //    // await get(ref)
  //    async function getUserData(){
  //       const res = await fetch('https://jsonplaceholder.typicode.com/users') 
  //       const userData = await res.json();
  //       console.log(userData)
  //        setUsers(userData)
  //    }

  //    getUserData()

  //  }, [])
  
  //    if(users){
  //      return (
  //          users.map(user => <Product key={user.id} user={user}/>)
  //      )
  //    }


  //    return null
}
 

export async function getStaticProps() {
  const res = await fetch('https://storefront-79639-default-rtdb.firebaseio.com/products.json')
  const productData = await res.json();
  const products = Object.values(productData)

  return {
    props:{
      products
    }
  }

}