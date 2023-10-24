import { NextPage } from 'next'
import ShopLayout from '@/components/layouts/ShopLayout'
import { Typography } from '@mui/material'
import ProductList from '@/components/products/ProductList'
import { useProducts } from '@/hooks'
import FullScreenLoading from '@/components/ui/FullScreenLoading'



const MenPage: NextPage = () => {

  const {products, isLoading} = useProducts('/products?gender=men');
  return (
    <ShopLayout title={'Giving-with-love-shop - Men'} pageDescription={'Encuentra lo mejor para ellos'}>
      <Typography variant='h1' component='h1'>Hombres</Typography>
      <Typography variant='h2' sx={{mb:1}}>Productos para ellos</Typography>
      {
        isLoading ? <FullScreenLoading/>
        : <ProductList products={products}/>
      }
    </ShopLayout>
  )
}

export default MenPage


