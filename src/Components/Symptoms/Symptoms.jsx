import React from 'react'
import Logo_img1 from '../Images/img5.png'
import { NavLink } from 'react-router-dom'
const Symptoms=()=> {
    return (
        <>
        <section id='header' className='d-flex align-items-center'>
        <div className="container-fluid nav_bg">
            <div className="row">
                <div className="col-10 mx-auto">
                    <div className="row">
                        <div className="col-md-6 pt-5 pt-lg-0 order-2 order-lg-1 d-flex justify-content-center flex-column">
                        <h1 className="label1">
                            Reduce your <strong className='brand-name'>STRESS</strong><br/>                            
                        </h1>
                        <h2 className='label2 my-3'>
                            # Know the <strong className='brand-name'>common signs of stress.</strong><br/>
                            # Talk with <strong className='brand-name'>family and friends by phone, text, or email.</strong><br/>
                            # Take breaks from <strong className='brand-name'>news stories, including social media.</strong><br/>
                            # Practice <strong className='brand-name'>healthy habits, including exercise.</strong><br/>
                        </h2>
                            <div className='mt-3'>
                                <NavLink to='/' className='btn-get-started'>
                                    Get Started
                                </NavLink>
                            </div>
                        </div>
                        <div className='header-img col-lg-6 order-1 order-lg-2'>
                            <img src={Logo_img1} className='animated img-fluid ' alt='home-img'/>
                        </div>
                    </div>

                </div>
            </div>                
        </div>
        </section>
    </>
    )
}
export default Symptoms;
