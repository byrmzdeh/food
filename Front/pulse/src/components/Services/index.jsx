import React from 'react'
import './style.scss'

const Services = () => {
    return (
        <div className='services'>
            <i class="fa-solid fa-burger"></i>
            <div className="our">
                <div className="left"></div>
                <h1> Our Services</h1>
                <div className="right"></div>
            </div>
            <div className="cards">
                <div className="card">
                    <i class="fa-solid fa-mug-saucer"></i>
                    <h1>Breakfast</h1>
                    <p>In vitae nisi aliquam, scelerisque leo a, <br /> volutpat sem. Vivamus rutrum  dui fermentum <br /> eros  hendrerit, id lobortis leo volutpat.</p>
                </div>
                <div className="card">
                    <i class="fa-solid fa-egg"></i>
                    <h1>Brunch</h1>
                    <p>In vitae nisi aliquam, scelerisque leo a, <br /> volutpat sem. Vivamus rutrum  dui fermentum <br /> eros  hendrerit, id lobortis leo volutpat.</p>
                </div>
                <div className="card">
                    <i class="fa-solid fa-drumstick-bite"></i>
                    <h1>Lunch</h1>
                    <p>In vitae nisi aliquam, scelerisque leo a, <br /> volutpat sem. Vivamus rutrum  dui fermentum <br /> eros  hendrerit, id lobortis leo volutpat.</p>
                </div>

                <div className="card">
                    <i class="fa-regular fa-lemon"></i>
                    <h1>Dinner</h1>
                    <p>In vitae nisi aliquam, scelerisque leo a, <br /> volutpat sem. Vivamus rutrum  dui fermentum <br /> eros  hendrerit, id lobortis leo volutpat.</p>
                </div>
            </div>

       
        </div>
    )
}

export default Services