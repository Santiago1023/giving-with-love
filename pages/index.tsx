import { NextPage } from 'next'
import ShopLayout from '@/components/layouts/ShopLayout'
import { Typography } from '@mui/material'
import ProductList from '@/components/products/ProductList'
import { useProducts } from '@/hooks'
import FullScreenLoading from '@/components/ui/FullScreenLoading'



const HomePage: NextPage = () => {

  const {products, isLoading} = useProducts('/products');
  return (
    <ShopLayout title={'Giving-with-love-shop - Home'} pageDescription={'Encuentra lo mejor para regalar'}>
      <Typography variant='h1' component='h1'>Tienda</Typography>
      <Typography variant='h2' sx={{mb:1}}>Todos los productos</Typography>
      {
        isLoading ? <FullScreenLoading/>
        : <ProductList products={products}/>
      }
    </ShopLayout>
  )
}

export default HomePage


