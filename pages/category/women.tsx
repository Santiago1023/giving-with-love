import { NextPage } from 'next'
import ShopLayout from '@/components/layouts/ShopLayout'
import { Typography } from '@mui/material'
import ProductList from '@/components/products/ProductList'
import { useProducts } from '@/hooks'
import FullScreenLoading from '@/components/ui/FullScreenLoading'



const WomenPage: NextPage = () => {

  const {products, isLoading} = useProducts('/products?gender=women');
  return (
    <ShopLayout title={'Giving-with-love-shop - Women'} pageDescription={'Encuentra lo mejor para ellas'}>
      <Typography variant='h1' component='h1'>Mujeres</Typography>
      <Typography variant='h2' sx={{mb:1}}>Productos para ellas</Typography>
      {
        isLoading ? <FullScreenLoading/>
        : <ProductList products={products}/>
      }
    </ShopLayout>
  )
}

export default WomenPage


