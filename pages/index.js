import ProductCard from '../components/ProductCard/ProductCard'
import PageTitle from "../components/PageTitle/PageTitle";

import { loadStripe } from '@stripe/stripe-js';


// view all panel....
export default function Home(props) {

  const products = props.products;

  // console.log(process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY)
  // console.log(process.env.STRIPE_SECRET_KEY)

  const stripePromise = loadStripe(process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY)

  return(
    <>
      <PageTitle tagline="product specials" title="ChocolateStore"/>
      <main>
        { products.map(product => <ProductCard key={product.uid} product={product}/>)}
      </main>
    </>
  )

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