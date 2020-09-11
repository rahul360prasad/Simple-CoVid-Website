import React from 'react'
import { NavLink } from 'react-router-dom'
import About_img from '../Images/img11.png'

const Saftey=()=> {
    return (
        <>
        <section id='header' className='d-flex align-items-center'>
        <div className="container-fluid nav_bg">
            <div className="row">
                <div className="col-10 mx-auto">
                    <div className="row">
                        <div className="col-md-6 pt-5 pt-lg-0 order-2 order-lg-1 d-flex justify-content-center flex-column">
                        <h2>
                            <strong className='brand-name'>COVID-19</strong> will reshape our world.<br/>
                            We don't yet know when the crisis will end.<br/>
                            But we can be sure that by the time it does, out world will look very different.
                        </h2>
                        <h2 className='my-3'>
                           Be INFORMED<br/>
                           Be PREPARED<br/>
                           Be SMART<br/>
                           Be SAFE <br/>
                           <br/>
                           BE READY to fight<br/>
                           <strong className='brand-name'>#COVID19</strong>
                        </h2>
                            <div className='mt-3'>
                                    <a href='https://rahul360prasad.github.io/Covid19-Status-App-Angular9/' className='btn-get-started'>
                                        Go to Detail
                                    </a>
                            </div>https://rahul360prasad.github.io/Covid19-Status-App-Angular9/
                        </div>
                        <div className='header-img col-lg-6 order-1 order-lg-2'>
                            <img src={About_img} className='animated img-fluid ' alt='about img'/>
                        </div>
                    </div>

                </div>
            </div>                
        </div>
        </section>
    </>
    )
}
export default Saftey;
