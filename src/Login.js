import './Form.css'
import PaperPlane from './images/Paperplane.png'

export default function Login(){
    return(
        <div>
            <div className='Paper-plane'>
                <img src={PaperPlane} alt="PaperPlane Logo" />
            </div>

            <div className='back-Body' id='loginformdiv'>

                <label className="label-head" id='welcome'>Welcome Back!</label>
                <label className="label">Email</label>
                <input type="text" id="email" name="email" className='text-box'></input>
                <label className="label">Password</label>
                <input type="password" id="password" name="password" className='text-box'></input>
                <button className='sbmt-btn'> Log In</button>
                <a href='/NavBar.js' className='forgot'>Forgot Password?</a>

            </div>
        </div>
    )
};