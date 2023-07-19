import React, { useState, useRef } from 'react'
import styled from 'styled-components'
import { PageHero, StripeCheckout } from '../components'
import emailjs from '@emailjs/browser'
// extra imports
import { useCartContext } from '../context/cart_context'
import { Link } from 'react-router-dom'
import { formatPrice } from '../utils/helpers'
import { useAuth } from '../utils/AuthContext'
import { useNavigate } from 'react-router-dom'
const CheckoutPage = () => {
  const { cart, total_amount, shipping_fee, clearCart } = useCartContext()
  const form = useRef()
  const navigate = useNavigate()
  const [succeeded, setSucceeded] = useState(false)

  const testing = {
    products: `${cart.map((item) => {
      return (
        <p>
          {item.name} ---- {item.amount} X {item.price}
        </p>
      )
    })}`,
  }
  console.log(testing)
  const sendEmail = (e) => {
    e.preventDefault()
    const templateParams = {
      name: `${form.current.name.value}`,
      email: `${form.current.email.value}`,
      number: `${form.current.number.value}`,
      location: `${form.current.location.value}`,
      products: `${cart.map((item) => {
        return (
          <p>
            {item.name} ---- {item.amount} X {item.price}
          </p>
        )
      })}`,
      shipping_fee: `${shipping_fee}`,
      price: `${formatPrice(total_amount + shipping_fee)}`,
    }
    console.log(templateParams)
    emailjs
      .send(
        'service_5c7hxks',
        'template_d6kvlha',
        templateParams,
        'oXXRRoypADOU6-lSv'
      )
      .then(
        (result) => {
          console.log(result.text)

          setSucceeded(true)
          setTimeout(() => {
            clearCart()
            navigate('/')
          }, 10000)
        },
        (error) => {
          console.log(error.text)
        }
      )
  }
  const user__name = useAuth().user.name
  if (cart.length < 1) {
    return (
      <Wrapper className='page-100'>
        <div className='empty'>
          <h2>Your cart is empty</h2>
          <Link to='/products' className='btn'>
            fill it
          </Link>
        </div>
      </Wrapper>
    )
  }
  return (
    <main>
      <PageHero title='checkout' />
      <Wrapper className='page'>
        <div className='container'>
          {succeeded ? (
            <article>
              <h4>Thank you</h4>
              <h4>Your Email has been received successful!</h4>
              <h4>Redirecting to home page shortly</h4>
            </article>
          ) : (
            <div className='content'>
              <form ref={form} onSubmit={sendEmail} className='flex-row'>
                <div className='contact__form'>
                  <h4>Hello, {user__name}</h4>
                  <p>
                    Please fill out the Contact form below for shipping and
                    payment
                  </p>
                  <div className='form-field-wrapper'>
                    <label>Name:</label>
                    <input
                      required
                      type='text'
                      name='name'
                      placeholder='Enter name...'
                    />
                  </div>

                  <div className='form-field-wrapper'>
                    <label>Email:</label>
                    <input
                      required
                      type='email'
                      name='email'
                      placeholder='Enter email...'
                    />
                  </div>

                  <div className='form-field-wrapper'>
                    <label>Number:</label>
                    <input
                      type='tel'
                      name='number'
                      placeholder='+237 677 000 111'
                    />
                  </div>

                  <div className='form-field-wrapper'>
                    <label>Address:</label>
                    <input type='text' name='location' placeholder='Bili' />
                  </div>

                  <div className='form-field-wrapper'>
                    <input type='submit' value='Contact' className='btn' />
                  </div>
                </div>
                <div className='order'>
                  <h5>Your Order</h5>
                  <p>
                    {cart.map((item) => {
                      return (
                        <span key={item.id}>
                          {item.name} x {item.amount}
                          <br />
                        </span>
                      )
                    })}
                  </p>
                  <hr />
                  <h5>Shipping Fee</h5>
                  <p>{formatPrice(shipping_fee)}</p>
                  <hr />
                  <h5>Total</h5>
                  <h4> {formatPrice(total_amount + shipping_fee)}</h4>
                </div>
              </form>
            </div>
          )}
        </div>
      </Wrapper>
    </main>
  )
}
const Wrapper = styled.div`
  .empty {
    text-align: center;
    h2 {
      margin-bottom: 1rem;
      text-transform: none;
    }
  }
  article {
    display: flex;
    flex-direction: column;
    justify-content: center;
    width: 100%;
    align-items: center;
    height: 50vh;
  }
  .content {
    margin: 30px 0;
  }
  .flex-row {
    display: flex;
    flex-direction: row;
    /* height: 60vh; */
    justify-content: center;
    width: 100%;
    gap: 20px;
    align-items: center;
  }

  .contact__form {
    width: 500px;
  }
  .order {
    width: 400px;
    border: 1px solid var(--clr-grey-8);
    padding: 1.5rem 3rem;
    border-radius: var(--radius);
  }
  .order h5 {
    padding: 10px 0;
    margin: 0;
  }
  @media (max-width: 1024px) {
    .order {
      width: 250px;
    }
    .contact__form {
      width: 50%;
    }
  }
  @media (max-width: 800px) {
    .flex-row {
      flex-direction: column;
      align-items: start;
      width: 100%;
      height: 100%;
    }
    .order {
      width: 400px;
    }
    .contact__form {
      width: 100%;
    }
  }
  @media (max-width: 500px) {
    .order {
      width: 100%;
    }
  }
`
export default CheckoutPage
