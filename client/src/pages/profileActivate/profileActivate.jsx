import React from "react";

import "./profileActivate.css"

function ProfileActivate(){
    return(
        
    <div className="activation">
        
        {/* <div className="wrapper"> */}

        <form className="signup-form">
            {/* <!-- FORM HEADER --> */}
            <div className="form-header">
                <h1>Account Activation</h1>
            </div>
            {/* <!-- FORM BODY --> */}
            <div className="form-body">
                
                <div className="row">
                    <div className="input-group">
                        <label>Website Information </label>
                        <input type="text" placholder="Enter your first name"/>
                    </div>
                    <div class="input-group">
                        <label>Company registration no.</label>
                        <input type="text" placholder="Enter your last name"/>
                    </div>
                </div>

                <div class="row">
                    <div class="input-group">
                        <label>Area of work </label>
                        <select name="cars" id="cars">
                          <option value="volvo">Volvo</option>
                          <option value="saab">Saab</option>
                          <option value="mercedes">Mercedes</option>
                          <option value="audi">Audi</option>
                        </select>   
                    </div>
                    <div class="input-group">
                        <label>Location of work</label>
                        <select name="cars" id="cars">
                          <option value="volvo">Volvo</option>
                          <option value="saab">Saab</option>
                          <option value="mercedes">Mercedes</option>
                          <option value="audi">Audi</option>
                        </select>
                    </div>
                </div>

                <div class="row">
                    <div class="input-group">
                        <label>Password </label>
                        <input type="password" placholder="Enter your your password"/>
                    </div>
                    <div class="input-group">
                        <label>Confirm Password</label>
                        <input type="password" placholder="Enter your password again"/>
                    </div>
                </div>

                <div class="row">
                    <div class="input-group">
                        <label>Password </label>
                        <input type="password" placholder="Enter your your password"/>
                    </div>
                    <div class="input-group">
                        <label>Confirm Password</label>
                        <input type="password" placholder="Enter your password again"/>
                    </div>
                </div>

                </div>

                <div class="form-footer">
                <button class="btn">Create</button>
            </div>
                </form>
        </div>

     
    );
}  

export default ProfileActivate;



