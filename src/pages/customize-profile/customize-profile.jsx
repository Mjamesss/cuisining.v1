import React from "react";
import "../../fw-cuisining.css";    

const ProfileForm = () => {
  return (
    <>
    <div className="container d-flex flex-column align-items-start b-dashed">
        <h1 className="align-self-start mt-5 ml-5 font-weight-900">Cuisining</h1>
        <h2 className="align-self-start mt-3 ml-1 font-weight-600">Customize Profile</h2>
        
        <div className="d-flex align-items-center b-dashed">
            <img 
                src="https://via.placeholder.com/150" 
                className="rounded-circle" 
                alt="Avatar" 
                style={{ width: '230px', height: '230px', backgroundColor:"red"}} 
            />
            <div className="ms-3">
                <p className="mb-1 ml-5 font-weight-500">First Paragraph</p>
                <p className="mb-0 ml-5 font-weight-400">Second Paragraph</p>
            </div>
        </div>
        <div className="mt-3">
            <label htmlFor="normal-textbox">FullName</label>
            <input 
                type="text" 
                id="normal-textbox" 
                className="input-text" 
                placeholder="Enter text here..." 
            />
            </div>
            <div className="b-dashed">
                <h4> Do you have any experience in cooking before?</h4>
            </div>
    </div>
        <footer className="bg-dark text-white text-center py-3">
    &copy; 2024 Your Website
    </footer>

    </>
  );
};

export default ProfileForm;
