import Head from 'next/head';

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
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
        <meta name="description" content="You're favourite local chocolate store selling the best chocolates in Edmonton"/>
        <meta name="keywords" content="chocolate, Edmonton, best chocolate, macaron, truffles"/>
        <title>ChocolateStore</title>
      </Head>
      <PageTitle tagline="Our limited edition chocolates." title="ChocolateStore"/>
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