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
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Architecto
            temporibus veniam, iure blanditiis tempore quibusdam repudiandae
            quod itaque velit adipisci quis suscipit eos excepturi deserunt illo
            expedita voluptatem dolorum? Odit provident dolore possimus ab nemo
            atque debitis voluptatem recusandae, molestiae dignissimos optio
            accusantium quis animi blanditiis voluptatibus accusamus rerum
            voluptas.
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
