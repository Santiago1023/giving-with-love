import { NextPage } from 'next'
import ShopLayout from '@/components/layouts/ShopLayout'
import { Typography } from '@mui/material'
import { initialData } from '@/database/products'
import ProductList from '@/components/products/ProductList'


const Home: NextPage = () => {
  return (
    <ShopLayout title={'Giving-with-love-shop - Home'} pageDescription={'Encuentra lo mejor para regalar'}>
      <Typography variant='h1' component='h1'>Tienda</Typography>
      <Typography variant='h2' sx={{mb:1}}>Todos los productos</Typography>

      <ProductList products={ initialData.products as any}/>
    </ShopLayout>
  )
}

export default Home


