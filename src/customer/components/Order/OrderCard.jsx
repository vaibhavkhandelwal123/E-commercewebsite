import { Grid } from '@mui/material'
import React from 'react'
import AdjustIcon from '@mui/icons-material/Adjust'
import { useNavigate } from 'react-router-dom'
const OrderCard = () => {
    const navigate = useNavigate();
  return (
    <div onClick={()=>navigate(`/account/order/${5}`)} className='p-5 shadow-md shadow-black hover:shadow-2xl border'>
        <Grid container spacing={2} sx={{justifyContent:"space-between"}}>
            <Grid item xs={6}>
                <div className='mt-3 flex cursor-pointer'>
                    <img className='w-[5rem] h-[5rem] object-cover object-top' src='https://www.beyoung.in/api/cache/catalog/products/new_checked_shirt_image_9_12_2022/navy_blue_cotton_solid_shirts_for_men_base_19_10_2023_700x933.jpg' alt=''/>
                    <div className='ml-5 space-y-2'>
                        <p className=''>Men Shirt For Men</p>
                        <p className='opacity-50 text-xs font-semibold'>Size: L</p>
                        <p className='opacity-50 text-xs font-semibold'>Color: Blue</p>
                    </div>
                </div>
            </Grid>
            <Grid item xs ={2}>
                <p>₹1999</p>
            </Grid>
            <Grid item xs={4}>
                {true && <div>
                    <p>
                    <AdjustIcon sx={{width:"15px,height:15px"}} className='text-green-600 mr-2 text-sm'/>
                    <span className='font-semibold'>
                        Delivered on March 03
                    </span>
                </p>
                <p className='text-xs'> Your Item Has Been Delivered</p>
                </div> }
                {false && <p>
                    <span>
                        Expected Delivery On Mar 03
                    </span>
                </p>}
            </Grid>
        </Grid>
    </div>
  )
}

export default OrderCard