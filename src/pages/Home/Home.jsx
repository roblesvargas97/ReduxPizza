import React from 'react';
import BannerHero from '../../components/BannerHero/BannerHero';
import Info from '../../components/Info/Info';
import PizzaMenu from '../PizzaMenu/PizzaMenu';

const Home = () => {
    return (
        <section className='w-full min-w-[320px]'>
            <h1 className='hidden'>HomeSection</h1>
            <BannerHero/>
            <Info/>
            <PizzaMenu/>
        </section>
    );
}

export default Home;