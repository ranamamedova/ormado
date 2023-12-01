import React from 'react'
import logo1 from "../assets/img/logo1.png"
import logo2 from "../assets/img/logo2.png"
import logo3 from "../assets/img/logo3.png"
import logo4 from "../assets/img/logo4.png"

const Myform = () => {
    return (
        <div  className="Myform">

            <div className="writeforms">

                <div className="title">
                    <h3>Ormado</h3>
                    <h4>Working in Ormado Kaffeehaus</h4>
                </div>

                <div className="mainpart">

                    <div className="first">

                        <label className='ones' htmlFor="branch"> Branch <input id='branch' placeholder='Select branch' type="text" />
                            {/* <select id='branch' style={{ width: "400px" }} classname="form-select no-outline" aria-label="Default select example">
                                <option id='as' selected>Select branch</option>
                                <option value="{1}">One</option>
                                <option value="{2}">Two</option>
                                <option value="{3}">Three</option>
                            </select> */}

                            <div className="dropdown">
                                <button id='drop' style={{ border: "none", width: "50", height: "50", backgroundColor: "rgb(253, 251, 245)" }} className="dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">

                                </button>
                                <ul className="dropdown-menu">
                                    <li><a className="dropdown-item" href="#">Male</a></li>
                                    <li><a className="dropdown-item" href="#">Female</a></li>
                                    <li><a className="dropdown-item" href="#">Something else here</a></li>
                                </ul>
                            </div>

                        </label>


                        <label className='mt-3' > Position <input type="text" /></label>


                        <div className="cat ">
                            <label className='mt-3' >Full name<input id='one' placeholder='enter your fullname' type="text" /></label>
                            <label className='mt-3 ' >Phone number<input id='two' placeholder='enter your phone' type="text" /> </label>
                        </div>

                        <div className="cat2">
                            <label className='mt-3' >Email<input id='one' placeholder='Enter your email address' type="text" /></label>
                            <label className='mt-3 ' >Age<input id='two' type="text" /> </label>
                        </div>

                        <div className="cat3">
                            <label className='mt-3' >Nationality<input id='one' type="text" /></label>
                            <label className='mt-3 ' >Gender<input placeholder='Male' id='two' type="text" />   </label>


                            <div className="dropdown">
                                <button id='drop' style={{ border: "none", width: "50", height: "50", backgroundColor: "rgb(253, 251, 245)" }} className="dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">

                                </button>
                                <ul className="dropdown-menu">
                                    <li><a className="dropdown-item" href="#">Male</a></li>
                                    <li><a className="dropdown-item" href="#">Female</a></li>
                                    <li><a className="dropdown-item" href="#">Something else here</a></li>
                                </ul>
                            </div>



                        </div>



                        <label className='mt-3' htmlFor="second"> The reason why you left your former workplace? <input id='second' style={{ width: "400px" }} type="text" /></label>

                        <label className='mt-3' > Marital status <input type="text" /></label>

                        <label className='mt-3' > Education <input type="text" /></label>

                        <label className='mt-3' > Do you have any experience in the job you are applying for? <input id='second' type="text" /></label>

                        <label className='mt-3' > What languages do you speak? <input id='second' type="text" /></label>

                        <label className='mt-3' > Is there any criminal responsibility <input id='second' type="text" /></label>

                        <label className='mt-3' > Have you worked in any of our branches? <input id='second' type="text" /></label>

                        <label className='mt-3' > How long would you like to work with us? <input id='second' type="text" /></label>

                        <label className='mt-3' > How would you describe your availability? <input id='second' type="text" /></label>

                        <label className='mt-3' > Your feedback <input placeholder='Enter information about you' id='second' type="text" /></label>

                        <label className='mt-3' > Do you have any chronic diseases, and if so, which ones? <input id='second' type="text" /></label>

                        <label className='mt-3' > How did you know about us? <input id='second' type="text" /></label>

                        <label className='mt-3' > Longest term work where and how long did it last? <input id='second' type="text" /></label>

                        <label className='mt-3' > Additional Information <input id='second' type="text" /></label>


                    </div>


                    <div className="footicon mt-3">
                        <div className="box1"><img src={logo1} alt="" /></div>
                        <div className="box2"><img src={logo2} alt="" /></div>
                        <div className='writing'><h3 >Send</h3></div>
                        <div className="box3"><img src={logo3} alt="" /></div>
                        <div className="box4"><img src={logo4} alt="" /></div>
                    </div>

                </div>
            </div>





        </div>


    )
}

export default Myform