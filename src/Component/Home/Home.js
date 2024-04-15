import React, { useState } from "react";
import './Home.css';

export default function Home() {
    const [type1, setType1] = useState(false);
    const [color, setColor] = useState('');
    const [type2, setType2] = useState(false);

    const showHide = () => {
        if (!type1) {
            setType1(true);
            setColor('text-info');
        }
        else {
            setType1(false);           
            setColor('');          
        } 
    }   

    return (
        <>
            <div className="container-fluid mb-4">       
                <div className="row gy-3 ">
                    <div className="col-lg-3">
                        <div className="box mb-3 rounded-1 blinkText">
                            <i class="fa-solid fa-arrow-right-to-bracket"></i> &nbsp;  
                            <span className="">Hostel Registration</span>
                        </div>
                        <div className="box mb-3 rounded-1 blinkText">
                            <i class="fa-solid fa-arrow-right-to-bracket"></i> &nbsp;
                            <span>Sample Admission Form</span>
                        </div>
                        <div className="bg-light border border-1 rounded">
                            <div className="box">
                                <i class="fa-solid fa-crosshairs"></i> &nbsp;
                                <span>Management</span>
                            </div>
                            <div className="text-center p-3">
                                <img src="Image/SharadPawar.jpg" alt="Sharad Pawar" className="img-thumbnail" />
                                <p className="fw-bold my-1">Hon. Shree Sharad Pawar</p>
                                <h6>
                                    Our Inspiration,<br />
                                    Pune District Education Association, Pune
                                </h6>
                            </div>
                            <div className="text-center px-3">
                                <img src="Image/President.jpg" alt="Ajit Pawar" className="img-thumbnail" />
                                <p className="fw-bold my-1">Hon. Shree Ajit Pawar</p>
                                <h6>
                                    President,<br />
                                    Pune District Education Association, Pune
                                </h6>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-6">
                        <div className='carousel carousel-fade p-3 border border-1 rounded mb-3' id='slider' data-bs-ride="carousel" data-bs-interval="2000">
                            {/* <div className="carousel-indicators">
                                <button data-bs-target='#slider' data-bs-slide-to='0' className="active"></button>
                                <button data-bs-target='#slider' data-bs-slide-to='1'></button>
                                <button data-bs-target='#slider' data-bs-slide-to='2'></button>
                                <button data-bs-target='#slider' data-bs-slide-to='3'></button>
                                <button data-bs-target='#slider' data-bs-slide-to='4'></button>
                                <button data-bs-target='#slider' data-bs-slide-to='5'></button>
                                <button data-bs-target='#slider' data-bs-slide-to='6'></button>
                                <button data-bs-target='#slider' data-bs-slide-to='7'></button>
                                <button data-bs-target='#slider' data-bs-slide-to='8'></button>
                                <button data-bs-target='#slider' data-bs-slide-to='9'></button>
                                <button data-bs-target='#slider' data-bs-slide-to='10'></button>
                                <button data-bs-target='#slider' data-bs-slide-to='11'></button>
                                <button data-bs-target='#slider' data-bs-slide-to='12'></button>
                                <button data-bs-target='#slider' data-bs-slide-to='13'></button>
                                <button data-bs-target='#slider' data-bs-slide-to='14'></button>
                            </div> */}
                            <div className='carousel-inner'>
                                <div className='carousel-item active'>
                                    <img src='Image/Slider1.jpg' alt='Slide' className='w-100' />
                                </div>
                                <div className='carousel-item'>
                                    <img src='Image/Slider2.jpg' alt='Slide' className='w-100' />
                                </div>
                                <div className='carousel-item'>
                                    <img src='Image/Slider3.jpg' alt='Slide' className='w-100' />
                                </div>
                                <div className='carousel-item'>
                                    <img src='Image/Slider4.jpg' alt='Slide' className='w-100' />
                                </div>
                                <div className='carousel-item'>
                                    <img src='Image/Slider5.jpg' alt='Slide' className='w-100' />
                                </div>
                                <div className='carousel-item'>
                                    <img src='Image/Slider6.jpg' alt='Slide' className='w-100' />
                                </div>
                                <div className='carousel-item'>
                                    <img src='Image/Slider7.jpg' alt='Slide' className='w-100' />
                                </div>
                                <div className='carousel-item'>
                                    <img src='Image/Slider8.jpg' alt='Slide' className='w-100' />
                                </div>
                                <div className='carousel-item'>
                                    <img src='Image/Slider9.jpg' alt='Slide' className='w-100' />
                                </div>
                                <div className='carousel-item'>
                                    <img src='Image/Slider10.jpg' alt='Slide' className='w-100' />
                                </div>
                                <div className='carousel-item'>
                                    <img src='Image/Slider11.jpg' alt='Slide' className='w-100' />
                                </div>
                                <div className='carousel-item'>
                                    <img src='Image/Slider12.jpg' alt='Slide' className='w-100' />
                                </div>
                                <div className='carousel-item'>
                                    <img src='Image/Slider13.jpg' alt='Slide' className='w-100' />
                                </div>
                                <div className='carousel-item'>
                                    <img src='Image/Slider14.jpg' alt='Slide' className='w-100' />
                                </div>
                            </div>
                            <button className='carousel-control-prev' data-bs-target='#slider' data-bs-slide='prev'>
                                <span className='carousel-control-prev-icon'></span>
                            </button>
                            <button className='carousel-control-next' data-bs-target='#slider' data-bs-slide='next'>
                                <span className='carousel-control-next-icon'></span>
                            </button>
                        </div>
                        <div className="border border-1 rounded mb-3">
                            <div className="box">
                                <span>About PDEA</span>
                            </div>
                            <p className="p-3 mb-0 text-align">P.D.E.A. is a parent institute and backbone of all the institutes with a
                                sole aim of educating even in the rural families of Pune District and to create the bright
                                future generation. Founder member Shri. Baburaoji Gholap started P.D.E.A. on 7th September
                                1941. Motto is <strong>"Benefit and Happiness of the Society"</strong>.</p>
                        </div>
                        <div className="border border-1 rounded">
                            <div className="box">
                                <span>Select Institute Type To Proceed For Registration</span>
                            </div>
                            <div className="row gy-3 p-3">
                                <div className="col-lg-6">
                                    <div className="box text-center border border-1 border-black rounded">
                                        <span className='h6'>Pre-Primary, Primary Marathi</span>
                                    </div>
                                </div>
                                <div className="col-lg-6">
                                    <div className="box text-center border border-1 border-black rounded">
                                        <span className='h6'>Pre-Primary, Primary English</span>
                                    </div>
                                </div>
                                <div className="col-lg-4">
                                    <div className="box text-center border border-1 border-black rounded">
                                        <span className='h6'>Secondary School</span>
                                    </div>
                                </div>
                                <div className="col-lg-4">
                                    <div className="box text-center border border-1 border-black rounded">
                                        <span className='h6'>Junior College</span>
                                    </div>
                                </div>
                                <div className="col-lg-4">
                                    <div className="box text-center border border-1 border-black rounded">
                                        <span className='h6'>Senior College</span>
                                    </div>
                                </div>
                                <div className="col">
                                    <div className="box text-center border border-1 border-black rounded">
                                        <span className='h6'>Professional College</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-3">
                        <div className="box rounded-1 blinkText">
                            <i class="fa-solid fa-arrow-right-to-bracket"></i> &nbsp;
                            <span>Old Student Admission</span>
                        </div>
                        <div class="accordion mb-4" id="accordionParent">
                            <div class="accordion-item border-0">
                                <h2 class="accordion-header">
                                    <button class="box w-100 text-start border-0 py-2 rounded-top" data-bs-toggle="collapse" data-bs-target="#collapseOne">
                                        <i class="fa-solid fa-arrow-right-to-bracket"></i> &nbsp;
                                        <span>Applicant Student Log In</span>
                                    </button>
                                </h2>
                                <div id="collapseOne" class="accordion-collapse collapse show" data-bs-parent="#accordionParent">
                                    <div class="accordion-body border border-1 rounded-bottom">
                                        <form>
                                            <div className="mb-3">
                                                <input type="text" className="form-control py-1" placeholder="Username" />
                                            </div>
                                            <div className="mb-3 input-group">
                                                <input type={type1 ? 'text' : 'password'} className="form-control py-1 border-end-0" placeholder="Password" />
                                                <i class={`fa-solid fa-eye bg-white input-group-text pt-2 ${color}`} onClick={showHide}></i>
                                            </div>
                                            <div className="mb-3">
                                                <div className="d-flex align-items-center mb-1">
                                                    <label>Captcha : &nbsp;</label>
                                                    <input type="text" className="form-control text-center py-1 px-0 w-50" value={'By4a4d'} readonly />
                                                </div>
                                                <input type={type2 ? 'text' : 'password'} className="form-control d-inline-block py-1 w-50" placeholder="Captcha" />
                                                <span className="form-text text-primary fw-bold ms-2 cursor" onMouseDown={() => setType2(true)} onMouseUp={() => setType2(false)}>Show</span>
                                            </div>
                                            <button className="btn btn-info py-1 me-2">Log In</button>
                                            <button className="btn btn-warning py-1">Forgot Password?</button>
                                        </form>
                                    </div>
                                </div>
                            </div>
                            <div class="accordion-item border-0">
                                <h2 class="accordion-header collapsed">
                                    <button class="box w-100 text-start border-0 py-2 rounded-top" data-bs-toggle="collapse" data-bs-target="#collapseTwo">
                                        <i class="fa-solid fa-arrow-right-to-bracket"></i> &nbsp;
                                        <span>Institute Log In</span>
                                    </button>
                                </h2>
                                <div id="collapseTwo" class="accordion-collapse collapse" data-bs-parent="#accordionParent">
                                    <div class="accordion-body border border-1 rounded-bottom">
                                        <form>
                                            <div className="mb-3">
                                                <input type="text" className="form-control py-1" placeholder="Username" />
                                            </div>
                                            <div className="mb-3 input-group">
                                                <input type={type1 ? 'text' : 'password'} className="form-control py-1 border-end-0" placeholder="Password" />
                                                <i class={`fa-solid fa-eye bg-white input-group-text pt-2 ${color}`} onClick={showHide}></i>
                                            </div>
                                            <div className="mb-3">
                                                <div className="d-flex align-items-center mb-1">
                                                    <label>Captcha : &nbsp;</label>
                                                    <input type="text" className="form-control text-center py-1 px-0 w-50" value={'By4a4d'} readonly />
                                                </div>
                                                <input type={type2 ? 'text' : 'password'} className="form-control d-inline-block py-1 w-50" placeholder="Captcha" />
                                                <span className="form-text text-primary fw-bold ms-2 cursor" onMouseDown={() => setType2(true)} onMouseUp={() => setType2(false)}>Show</span>
                                            </div>
                                            <button className="btn btn-info py-1 me-2">Log In</button>
                                            <button className="btn btn-warning py-1">Forgot Password?</button>
                                        </form>
                                    </div>
                                </div>
                            </div>
                            <div class="accordion-item border-0">
                                <h2 class="accordion-header collapsed">
                                    <button class="box w-100 text-start border-0 py-2 rounded-top" data-bs-toggle="collapse" data-bs-target="#collapseThree">
                                        <i class="fa-solid fa-arrow-right-to-bracket"></i> &nbsp;
                                        <span>Enrolled Student Log In</span>
                                    </button>
                                </h2>
                                <div id="collapseThree" class="accordion-collapse collapse" data-bs-parent="#accordionParent">
                                    <div class="accordion-body border border-1 rounded-bottom">
                                        <form>
                                            <div className="mb-3">
                                                <select className="form-select py-1">
                                                    <option>--Select Institute--</option>
                                                    <option>Institute1</option>
                                                    <option>Institute2</option>
                                                    <option>Institute3</option>
                                                    <option>Institute4</option>
                                                    <option>Institute5</option>
                                                </select>
                                            </div>
                                            <div className="mb-3 input-group">
                                                <input type={type1 ? 'text' : 'password'} className="form-control py-1 border-end-0" placeholder="Password" />
                                                <i class={`fa-solid fa-eye bg-white input-group-text pt-2 ${color}`} onClick={showHide}></i>
                                            </div>
                                            <div className="mb-3">
                                                <div className="d-flex align-items-center mb-1">
                                                    <label>Captcha : &nbsp;</label>
                                                    <input type="text" className="form-control text-center py-1 px-0 w-50" value={'By4a4d'} readonly />
                                                </div>
                                                <input type={type2 ? 'text' : 'password'} className="form-control d-inline-block py-1 w-50" placeholder="Captcha" />
                                                <span className="form-text text-primary fw-bold ms-2 cursor" onMouseDown={() => setType2(true)} onMouseUp={() => setType2(false)}>Show</span>
                                            </div>
                                            <button className="btn btn-info py-1 me-2">Log In</button>
                                            <button className="btn btn-warning py-1">Forgot Password?</button>
                                        </form>
                                    </div>
                                </div>
                            </div>
                            <div class="accordion-item border-0">
                                <h2 class="accordion-header collapsed">
                                    <button class="box w-100 text-start border-0 py-2 rounded-top" data-bs-toggle="collapse" data-bs-target="#collapseFour">
                                        <i class="fa-solid fa-arrow-right-to-bracket"></i> &nbsp;
                                        <span>Sanstha Log In</span>
                                    </button>
                                </h2>
                                <div id="collapseFour" class="accordion-collapse collapse" data-bs-parent="#accordionParent">
                                    <div class="accordion-body border border-1 rounded-bottom">
                                        <form>
                                            <div className="mb-3">
                                                <input type="text" className="form-control py-1" placeholder="Username" />
                                            </div>
                                            <div className="mb-3 input-group">
                                                <input type={type1 ? 'text' : 'password'} className="form-control py-1 border-end-0" placeholder="Password" />
                                                <i class={`fa-solid fa-eye bg-white input-group-text pt-2 ${color}`} onClick={showHide}></i>
                                            </div>
                                            <div className="mb-3">
                                                <div className="d-flex align-items-center mb-1">
                                                    <label>Captcha : &nbsp;</label>
                                                    <input type="text" className="form-control text-center py-1 px-0 w-50" value={'By4a4d'} readonly />
                                                </div>
                                                <input type={type2 ? 'text' : 'password'} className="form-control d-inline-block py-1 w-50" placeholder="Captcha" />
                                                <span className="form-text text-primary fw-bold ms-2 cursor" onMouseDown={() => setType2(true)} onMouseUp={() => setType2(false)}>Show</span>
                                            </div>
                                            <button className="btn btn-info py-1 me-2">Log In</button>
                                            <button className="btn btn-warning py-1">Forgot Password?</button>
                                        </form>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="box mb-3 rounded-1 p-3 bg-success-light hoverEffect link-offset-2">
                            <span>GO TO <i class="fa-solid fa-greater-than fa-xs"></i><i class="fa-solid fa-greater-than fa-xs"></i> PDEA HOME</span>
                        </div>
                        <div className="box mb-3 rounded-1 p-3 bg-success-light hoverEffect link-offset-2">
                            <span>LIBRARY ATTENDANCE</span>
                        </div>
                        <div className="box rounded-1 p-3 bg-success-light hoverEffect link-offset-2">
                            <span>CENTRAL PDEA WEB OPAC</span>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}