import React from 'react'
import Logo from '../../images/tabulate-01.png'

function Intro() {
    return (
        <div>
            <img src={Logo} alt="main logo" style={{width: '500px', margin:'auto', display:'block'}} />
            <div style={{width: '500px', margin:'auto', display:'block'}}>
                <div className='row'>
                <button className='btn mb-3'>
                    Login
                </button>
                <button className='btn mb-5'>
                    Register
                </button>
                </div>
            </div>
        </div>
    )
}

export default Intro
