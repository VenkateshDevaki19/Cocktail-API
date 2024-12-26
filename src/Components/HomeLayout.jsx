import React from 'react'
import { Outlet, useNavigation } from 'react-router'
import NavBar from './NavBar';

const HomeLayout = () => {
    const navigate = useNavigation();
    console.log(navigate);

    const isPageLoading = navigate.state === 'loading';
  return (
    <>
    <NavBar />

    <section className='page'>
        {isPageLoading ? <div className='loading' />: <Outlet />}
    </section>
    </>
  )
}

export default HomeLayout;
