import React from 'react'
import logo1 from "../assets/img/logo1.png"
import logo2 from "../assets/img/logo2.png"
import logo3 from "../assets/img/logo3.png"
import logo4 from "../assets/img/logo4.png"
import solar from "../assets/img/solar.png"

const WorkingOrmado = () => {
    return (
        <div className="Myform">

            <div className="writeforms">

                <div className="title">
                    <h3>Ormado</h3>
                    <h4>Working in Ormado Kaffeehaus</h4>
                </div>

                <div className="mainpart">
                    <form>
                        <div className="first">

                            <label className='ones' htmlFor="branch"> <h1>Branch</h1>
                                <select id='choose' classname="form-select" aria-label="Default select example">
                                    <option selected>Select branch</option>
                                    <option value="{1}">One</option>
                                    <option value="{2}">Two</option>
                                    <option value="{3}">Three</option>
                                </select>
                                <input type="text" />
                            </label>


                            <label className='mt-3' > <h1>Position</h1> <input type="text" /></label>

                            <div className="cat ">
                                <label className='mt-3' ><h1>Full name</h1><input id='one' placeholder='enter your fullname' type="text" /></label>
                                <label className='mt-3 ' ><h1>Phone number</h1><input id='two' placeholder='enter your phone' type="text" /> </label>
                            </div>

                            <div className="cat2">
                                <label className='mt-3' ><h1>Email</h1><input id='one' placeholder='Enter your email address' type="text" /></label>
                                <label className='mt-3 ' ><h1>Age</h1><input id='two' type="text" /> </label>
                            </div>

                            <div className="cat3">
                                <label className='mt-3' ><h1>Nationality</h1><input id='one' type="text" /></label>
                                <label className='gender mt-3' ><h1>Gender</h1>

                                    <select id='formchoosing' classname="form-select" aria-label="Default select example">
                                        <option selected>Male</option>
                                        <option value="{1}">One</option>
                                        <option value="{2}">Two</option>
                                        <option value="{3}">Three</option>
                                   </select>
                                   <input className='cd' type="text" />

                                </label>
                            </div>

                            <div className="cat4">
                                <label className=' label1 mt-3' ><h1>Portfolio</h1> <input id='one' placeholder='Attach the document' type="text" /> <img width={20} height={20} src={solar} alt="" /></label>
                                <label className='mt-3 ' ><h1>Place of residence</h1><input id='two' type="text" /> </label>
                            </div>

                            <label className='mt-3' > <h1>The reason why you left your former workplace?</h1> <input style={{ width: "400px" }} type="text" /></label>

                            <label className='mt-3' > <h1>Marital status </h1><input type="text" /></label>

                            <label className='mt-3' > <h1>Education</h1> <input type="text" /></label>

                            <label className='mt-3' > <h1>Do you have any experience in the job you are applying for?</h1> <input id='second' type="text" /></label>

                            <label className='mt-3' > <h1>What languages do you speak?</h1> <input id='second' type="text" /></label>

                            <label className='mt-3' > <h1>Is there any criminal responsibility</h1> <input id='second' type="text" /></label>

                            <label className='mt-3' > <h1>Have you worked in any of our branches?</h1> <input id='second' type="text" /></label>

                            <label className='mt-3' > <h1>How long would you like to work with us?</h1> <input id='second' type="text" /></label>

                            <label className='mt-3' > <h1>How would you describe your availability?</h1> <input id='second' type="text" /></label>

                            <label className='mt-3' > <h1>Your feedback</h1> <input placeholder='Enter information about you' id='second' type="text" /></label>

                            <label className='mt-3' > <h1>Do you have any chronic diseases, and if so, which ones?</h1> <input id='second' type="text" /></label>

                            <label className='mt-3' > <h1>How did you know about us?</h1> <input id='second' type="text" /></label>

                            <label className='mt-3' > <h1>Longest term work where and how long did it last?</h1> <input id='second' type="text" /></label>

                            <label className='mt-3' > <h1>Additional Information</h1> <input id='second' type="text" /></label>

                        </div>

                        <button className="btnicon mt-3">

                            <div className="box1"><img src={logo1} alt="" /></div>
                            <div className="box2"><img src={logo2} alt="" /></div>
                            <div className='writing'><h3 >Send</h3></div>
                            <div className="box3"><img src={logo3} alt="" /></div>
                            <div className="box4"><img src={logo4} alt="" /></div>

                        </button>


                    </form>






                </div>
            </div>
        </div>
    )
}

export default WorkingOrmado    