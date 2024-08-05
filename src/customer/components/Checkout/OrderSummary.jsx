import React from 'react'
import AddressCard from '../AddressCard/AddressCard'
import { Button } from '@mui/material'
import CartItem from '../Cart/CartItem.jsx'

const OrderSummary = () => {
  return (
    <div>
      <div className='p-5 shadow-lg rounded-s-md border'>
        <AddressCard/>
      </div>
      <div>
        <div className='lg:grid grid-cols-3 relative'>
            <div className='col-span-2'>
            {[1,1,1,1].map((item)=><CartItem/>)}
            </div>
            <div className='px-5 sticky top-0 h-[100vh] mt-5 lg:my-0'>
            <div className='border'>
                <p className='uppercase font-bold opacity-60 pb-4'>Price details</p>
                <hr/>

                <div className='space-x-3 font-semibold mb-10'>
                    <div className='flex justify-between pt-3 text-black'>
                        <span>Price</span>
                        <span >₹4697</span>
                    </div>
                    <div className='flex justify-between pt-3 text-black'>
                        <span>Discount</span>
                        <span  className='text-green-600'>₹3419</span>
                    </div>
                    <div className='flex justify-between pt-3 text-black'>
                        <span>Delivery Charge</span>
                        <span className='text-green-600'>Free </span>
                    </div>
                    <div className='flex justify-between pt-3 text-black'>
                        <span>Total Amount</span>
                        <span className='text-green-600'>₹1278</span>
                    </div>
                </div>

            <Button color="secondary" variant="contained" className='w-full mt-5' sx={{px:"2rem",py:".7rem",bgcolor:"#9155fd"}}>CheckOut</Button>

            </div>

        </div>
        </div>
    </div>

    </div>
  )
}

export default OrderSummary