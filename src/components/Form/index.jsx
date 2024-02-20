import { useState } from "react"



const Form = () => {
  const[isChecked ,setIsChecked]= useState(false);
  const [isHover ,setIsHover]=useState(false);
  return (
    <div className="mt-5 my-4 d-flex justify-content-center align-items-center gap-3">

      <input 
      onChange={(e)=>setIsChecked(e.target.checked)}
      type="checkbox"
      id="terms" 
      className="form-check-input"/>

      <div className="terms-box">
        <p
        style={{visibility: isHover ? 'visible' : 'hidden' }}
        >
          Size gerçekten bir şey teslim etmeyeceğiz</p>
        <label
         htmlFor="terms">
          <span  className=" user-select: none;">  Koşulları okudum ve kabul ediyorum  </span>
         
        </label>

      </div>



      <button
      onMouseEnter={()=>setIsHover(true)}
      onMouseLeave={()=>setIsHover(false)}
      className="btn btn-primary"
      disabled={!isChecked}
      >

      Siparişi Onayla

      </button>




    </div>
  )
}

export default Form