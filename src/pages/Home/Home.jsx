import React from 'react';
import BannerHero from '../../components/BannerHero/BannerHero';

const Home = () => {
    return (
        <section className='w-full min-w-[320px]'>
            <h1 className='hidden'>HomeSection</h1>
            <BannerHero/>
        </section>
    );
}

export default Home;