import React from "react";
import './Header.css';

export default function Header() {

    return (            
        <>    
            <div className="bg-color mb-4 py-2" id='header'>
                <div className="container d-flex flex-lg-row flex-column justify-content-center align-items-center">
                    <div className="logo me-lg-5 mb-lg-0 mb-2">
                        <img src="Image/logo1.png" alt="Logo" />
                    </div>
                    <div className="text-center">   
                        <h4 className="fw-bold mb-0">PUNE DISTRICT EDUCATION ASSOCIATION</h4>
                        <p className="mb-lg-2 mb-0">48/1 A, Erandawana, Paud Road, Pune - 411038</p>
                        <h5 className="fw-bold mb-0">Welcome to PDEA's ERP System</h5>
                    </div>
                    <div className="logo ms-lg-5 mt-lg-0 mt-2">            
                        <img src="Image/logo2.png" alt="Logo" />              
                    </div>  
                </div>    
            </div >
        </>
    )
}