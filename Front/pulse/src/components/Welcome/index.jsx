import React from 'react'
import './style.scss'
const Welcome = () => {
    return (
        <div className='welcome'>
           <i class="fa-solid fa-mug-hot"></i>
            <div className="our">
                <div className="left"></div>
                <h1> Welcome</h1>
                <div className="right"></div>
            </div>
            <div className="cards">
                <div className="card">
                    <h1>2002</h1>
                    <p>In vitae nisi aliquam, scelerisque leo a, <br /> volutpat sem. Vivamus rutrum  dui fermentum <br /> eros  hendrerit, id lobortis leo volutpat.</p>
                </div>
                <div className="card">
                    <h1>2002</h1>
                    <p>In vitae nisi aliquam, scelerisque leo a, <br /> volutpat sem. Vivamus rutrum  dui fermentum <br /> eros  hendrerit, id lobortis leo volutpat.</p>
                </div>
                <div className="card">
                    <h1>2002</h1>
                    <p>In vitae nisi aliquam, scelerisque leo a, <br /> volutpat sem. Vivamus rutrum  dui fermentum <br /> eros  hendrerit, id lobortis leo volutpat.</p>
                </div>
            </div>

            <img width={100} src="https://upload.wikimedia.org/wikipedia/commons/c/c1/Imza_ka_esi.png" alt="" />
        </div>
    )
}

export default Welcome