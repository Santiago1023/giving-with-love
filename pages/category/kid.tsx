import { NextPage } from 'next'
import ShopLayout from '@/components/layouts/ShopLayout'
import { Typography } from '@mui/material'
import ProductList from '@/components/products/ProductList'
import { useProducts } from '@/hooks'
import FullScreenLoading from '@/components/ui/FullScreenLoading'



const KidPage: NextPage = () => {

  const {products, isLoading} = useProducts('/products?gender=kid');
  return (
    <ShopLayout title={'Giving-with-love-shop - Kids'} pageDescription={'Encuentra lo mejor para niños'}>
      <Typography variant='h1' component='h1'>Niños</Typography>
      <Typography variant='h2' sx={{mb:1}}>Productos para niños</Typography>
      {
        isLoading ? <FullScreenLoading/>
        : <ProductList products={products}/>
      }
    </ShopLayout>
  )
}

export default KidPage


