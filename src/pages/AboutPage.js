import React from 'react'
import styled from 'styled-components'
import { PageHero } from '../components'
import aboutImg from '../assets/img-3.png'

const AboutPage = () => {
  return (
    <main>
      <PageHero title='about' />
      <Wrapper className='page section section-center'>
        <img src={aboutImg} alt='About Img' />
        <article>
          <div className='title'>
            <h2>Our story</h2>
            <div className='underline'></div>
          </div>
          <p>
          Officially established in 2023
           Keeping our roots intact, we represent the same passion for quality, service and values
            that we were built on. 
We have a vast distribution network comprising of highly dedicated professionals coupled with
 strong logistics support, establishing a nationwide reach. Our scale of operation ensures that 
 the fruits we supply ends up in millions of fruit bowls across the country.
          </p>
        </article>
      </Wrapper>
    </main>
  )
}

const Wrapper = styled.section`
  display: grid;
  gap: 4rem;
  img {
    width: 100%;
    display: block;
    border-radius: var(--radius);
    height: 500px;
    object-fit: cover;
  }
  p {
    line-height: 2;
    max-width: 45em;
    margin: 0 auto;
    margin-top: 2rem;
    color: var(--clr-grey-5);
  }
  .title {
    text-align: left;
  }
  .underline {
    margin-left: 0;
  }
  @media (min-width: 992px) {
    grid-template-columns: 1fr 1fr;
  }
`
export default AboutPage
