import React from "react";
import './Footer.css';

export default function Footer() {
    return (
        <>
            <div className="bg-color py-2">
                <div className="container ">
                    <h5 className="fw-bold mb-3">Technical Help</h5>
                    <p className="mb-1"><i class="fa-solid fa-phone"></i> &nbsp;020 - 29840031</p>
                    <p className="mb-0"><i class="fa-solid fa-phone"></i> &nbsp;020 - 24394400</p>
                </div>
            </div>
            <div>
                <p className="container-fluid text-center my-3">Copyright © Pune District Education Association, Pune
                    2018 Powered by <strong>TechDivinity</strong> Ver:[2023-02-08-V3.5-TECHD]19-10-2023</p>
            </div>
        </>
    )
}