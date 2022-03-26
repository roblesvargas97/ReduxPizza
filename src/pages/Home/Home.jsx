import React from 'react';
import BannerHero from '../../components/BannerHero/BannerHero';
import Info from '../../components/Info/Info';

const Home = () => {
    return (
        <section className='w-full min-w-[320px]'>
            <h1 className='hidden'>HomeSection</h1>
            <BannerHero/>
            <Info/>
        </section>
    );
}

export default Home;