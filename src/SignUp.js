import './Form.css';
import Man from './images/man.png'


export default function Signup(){
   return(
      <div>
      <div className='back-Body' id='signupformdiv'>

                    <label className="label-head">Create an account, its free!</label>
                    <label className="label">Email</label>
                    <input type="text" id="email" name="email" className='text-box'></input>
                    <label className="label">Username</label>
                    <input type="text" id="username" name="username" className='text-box'></input>
                    <label className="label">Password</label>
                    <input type="password" id="password" name="password" className='text-box'></input>
                    <button className='sbmt-btn' > Sign Up</button>

        </div>

         <div className='desc-align'>
                     
               <span className='journal'>Your Daily Journal</span>
               <br></br>
               <br></br>
               <span className='about'>something describing our website.</span>
               <br></br>
               <br></br>
               <br></br>
               <br></br>
               <img src={Man} alt="Man Logo" />

         </div>
         </div>
   );
};
