import React from 'react'
import Homeimg from '../Images/img2.png'
import { NavLink } from 'react-router-dom'
export default function Home() {
    return (
        <>
            <section id='header' className='d-flex align-items-center'>
            <div className="container-fluid nav_bg">
                <div className="row">
                    <div className="col-10 mx-auto">
                        <div className="row">
                            <div className="col-md-6 pt-5 pt-lg-0 order-2 order-lg-1 d-flex justify-content-center flex-column">
                            <h1>
                                Slow the spread of <strong className='brand-name'>COVID-19</strong> stay home if you can.
                            </h1>
                            <h2 className='my-3'>
                                The doctor of the future will given no medicine but will interest his patients in the care of the human frame, in diet and in the cause and prevention of disease.
                            </h2>
                                <div className='mt-3'>
                                    <a href='https://rahul360prasad.github.io/Global-CoronaVirus-covid-19-Tracker/' className='btn-get-started'>
                                        Current Cases
                                    </a>
                                </div>
                            </div>
                            <div className='header-img col-lg-6 order-1 order-lg-2'>
                                <img src={Homeimg} className='animated img-fluid ' alt='home img'/>
                            </div>
                        </div>

                    </div>
                </div>                
            </div>
            </section>
        </>
    )
}
