import CartList from "@/components/cart/CartList"
import OrderSummary from "@/components/cart/OrderSummary"
import ShopLayout from "@/components/layouts/ShopLayout"
import { Box, Button, Card, CardContent, Divider, Grid, Link, Typography } from "@mui/material"
import NextLink from 'next/link';

const SummaryPage = () => {
  return (
    <ShopLayout title='Resumen de orden' pageDescription={'Resumen de la orden'}>
        <Typography variant='h1' component='h1'>Resumen de la orden</Typography>
        <Grid container>
            <Grid item xs={12} sm={7}>
                <CartList/>
            </Grid>
            <Grid item xs={12} sm={5}>
                <Card className="summary-card">
                    <CardContent>
                        <Typography variant="h2">Resumen (3 productos)</Typography>
                        <Divider sx={{ my:1 }}/>

                        <Box display='flex' justifyContent='space-between'>
                            <Typography variant="subtitle1">Dirección de entrega</Typography>
                            <NextLink href='/checkout/address' legacyBehavior>
                                <Link underline="always">
                                    Editar
                                </Link>
                            </NextLink>
                        </Box>

                        <Typography>Santiago Bedoya</Typography>
                        <Typography>323 Algun lugar</Typography>
                        <Typography>Stittsville, HYA 235</Typography>
                        <Typography>Canadá</Typography>
                        <Typography>+1 23123123</Typography>
                        
                        <Divider sx={{ my:1 }}/>
                        <Box display='flex' justifyContent='end'>
                            <NextLink href='/cart' legacyBehavior>
                                <Link underline="always">
                                    Editar
                                </Link>
                            </NextLink>
                        </Box>

                        <OrderSummary/>
                        <Box sx={{ mt: 3 }}>
                            <Button color="secondary" className="circular-btn" fullWidth>
                                Confirmar orden
                            </Button>
                        </Box>
                    </CardContent>
                </Card>
            </Grid>
        </Grid>
    </ShopLayout>
    )
}

export default SummaryPage