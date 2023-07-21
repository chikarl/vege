import React from 'react'
import { GiCompass, GiDiamondHard, GiStabbedNote } from 'react-icons/gi'
export const links = [
  {
    id: 1,
    text: 'home',
    url: '/',
  },
  {
    id: 2,
    text: 'about',
    url: '/about',
  },
  {
    id: 3,
    text: 'products',
    url: '/products',
  },
]

export const services = [
  {
    id: 1,
    icon: <GiCompass />,
    title: 'mission',
    text: 'To source a range of quality fruits and vegetables from different farmers and deliver them fresh to customers across .',
  },
  {
    id: 2,
    icon: <GiDiamondHard />,
    title: 'vision',
    text: 'To be the most trusted and preferred fruit and vegetable trading business Our vision calls us to earn trust and create value for our key farmers, By enabling their fruits and vegetables reach from their farms to different consumers Wholesalers By ensuring they receive fruits and vegetables fresh, every day, every time Consumers: By satiating their taste preferences through a gamut of fruit and vegetable offerings',
  },
  {
    id: 3,
    icon: <GiStabbedNote />,
    title: 'history',
    text: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptates, ea. Perferendis corrupti reiciendis nesciunt rerum velit autem unde numquam nisi',
  },
]

export const products_url = 'https://vege-api.netlify.app/api/products'

export const single_product_url = `https://vege-api.netlify.app/api/singleproduct?id=`
