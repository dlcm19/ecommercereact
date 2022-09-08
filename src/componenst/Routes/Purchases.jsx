import React, { useEffect, useState } from 'react'

import getElement from '../utilis/getElement'
import axios from 'axios'
import PurchaseCard from '../purchases/PurchaseCard'

const Purchases = () => {

  const [purchases, setPurchases] = useState()

  useEffect(() => {
    const URL = 'https://ecommerce-api-react.herokuapp.com/api/v1/purchases'
    axios.get(URL, getElement())
      .then(res => setPurchases(res.data))
      .catch(err => console.log(err))
  }, [])

  return (
    <div>
      {/* {
        purchases?.map(purchase => (
          <PurchaseCard
            key={purchase.id}
            purchase={purchase}
          />
        ))
      } */}
    </div>
  )
}

export default Purchases
