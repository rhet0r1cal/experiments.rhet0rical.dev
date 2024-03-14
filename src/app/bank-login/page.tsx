// Imports
import type {Metadata} from 'next';

// Manifest
export const metadata: Metadata = {
  title: 'Aurora Alliance Bank - Member Login'
}

// Component
export default function BankLogin(){return(

    <>

        <div id = 'main' className='alt-border fade-in' style={{backgroundColor: 'white'}}>

            <img src = '/images/bank-login/icon.svg' width={50}></img>
            <p style={{paddingLeft: 5, fontSize: 21, marginTop: -10}}>Aurora Alliance Bank</p>

            <p style={{marginTop: -15, fontSize: 13}}>Hello, Valued Member!</p>

            <textarea rows={1} placeholder='User ID' autoComplete='false' maxLength={10}></textarea> <br></br>
            <textarea rows={1} placeholder='Password' style={{marginTop: 10}} autoComplete='false' maxLength={10}></textarea>
            
            <div className = 'flexbox-center'>
                <p id = 'loginButton'>Login</p>
            </div>

        </div>
        <p id = 'alt-footer'>© 2024 Aurora Alliance Bank. All rights reserved. | Created by Rhet0r1cal as an experiment. This page does nothing.</p>

        <img id = 'decal' src = '/images/bank-login/building-art.jpg'></img>
        <script src = 'https://cdn.rhet0rical.dev/scripts/attribute.js'></script>
    </>

)}