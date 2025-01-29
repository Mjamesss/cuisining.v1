import React, { useState } from "react";

const CustomizeProfile = () => {
  const userInfo = {
    name: "John Manuel Cuerdo",
    email: "johnmanuelcuerdo@gmail.com"
  };

  const [hasTakenNCII, setHasTakenNCII] = useState(null);
  const [experienceOption, setExperienceOption] = useState("");
  const [learningMotive, setLearningMotive] = useState("");

  const experienceOptions = [
    "I have a lot of experience in cooking",
    "I have a bit of experience in cooking",
    "I have no experience at all"
  ];

  const motiveOptions = [
    "School Purposes (BSHM Student, taking NCII, etc.)",
    "Home Cooking",
    "Other"
  ];

  const styles = {
    formContainer: {
      background: "rgba(255, 255, 255, 1)", 
      position: "relative",
      width: "1323px",
      height: "1239px",
      left: "58px",
      top: "62px",
      borderRadius: "50px",
    },
    rectangle: {
      position: "absolute",
      width: "518px",
      height: "1239px",
      left: "880px",
      top: "0px",
      background: "#948F5C",
      borderRadius: "50px",
    },
    profile: {
      background: "url('profilecustomize.png')",
      backgroundPosition: "center",
      backgroundSize: "cover",
      width: "280px",
      height: "280px",
      left: "40px",
      top: "160px",
      position: "absolute",
    },
    heading: {
      position: "absolute",
      width: "379px",
      height: "44px",
      left: "90px",
      top: "110px",
      fontFamily: "Poppins",
      fontWeight: "700",
      fontSize: "28px",
      color: "#000000",
    },
    userName: {
      fontSize: "17px",
      fontWeight: "550",
      alignSelf: "start",
      margin: "0",
      color: "#000000",
    },
    userEmail: {
      fontSize: "13px",
      fontWeight: "400",
      marginTop: "15px",
      marginBottom: "0",
      color: "#000000",
    },
    profileHeader: {
      position: "absolute",
      width: "284px",
      height: "62px",
      left: "300px",
      top: "285px",
    },
    cuisininglogo: {
      position: "absolute",
      width: "500px",
      height: "500px",
      left: "856px",
      top: "200px",
      background: "url('/cuisininglogo.png') no-repeat center center",
      backgroundSize: "contain",
    },
    question1: {
      position: "absolute",
      width: "441px",
      height: "31px",
      left: "100px",
      top: "450px",
      fontFamily: "Poppins",
      fontWeight: "550",
      fontSize: "17px",
      color: "#000000",
    },
    question2: {
      position: "absolute",
      width: "441px",
      height: "31px",
      left: "100px",
      top: "615px",
      fontFamily: "Poppins",
      fontWeight: "550",
      fontSize: "17px",
      color: "#000000",
      whiteSpace: "nowrap",
    },
    question3: {
      position: "absolute",
      width: "441px",
      height: "31px",
      left: "100px",
      top: "810px",
      fontFamily: "Poppins",
      fontWeight: "550",
      fontSize: "17px",
      color: "#000000",
      whiteSpace: "nowrap",
    },
    buttonGroup: {
      position: "absolute",
      top: "515px",
      left: "100px",
      display: "flex",
      gap: "20px",
    },
    button: {
      borderRadius: "50px",
      font: "700 15px Poppins",
      width: "140px",
      height: "50px",
      background: "#FFFFFF",
      border: "1px solid #BCBCBC",
      minHeight: "58px",
      cursor: "pointer",
      transition: "all 0.2s ease",
    },
    yesButton: {
      backgroundColor: hasTakenNCII === true ? "#363100" : "transparent",
      color: hasTakenNCII === true ? "#FFFFFF" : "#000000",
      borderColor: hasTakenNCII === true ? "#BCBCBC" : "#BCBCBC",
    },
    noButton: {
      backgroundColor: hasTakenNCII === false ? "#363100" : "transparent",
      color: hasTakenNCII === false ? "#FFFFFF" : "#000000",
      borderColor: hasTakenNCII === false ? "#BCBCBC" : "#BCBCBC",
    },
    saveCancelButtonGroup: {
      position: "absolute",
      top: "1030px", 
      left: "100px",
      display: "flex",
      gap: "20px",
    },
    saveButton: {
      backgroundColor: "#FFFFFF", 
      color: "#000000",
      borderColor: "#BCBCBC",
    },
    cancelButton: {
      backgroundColor: "#FFFFFF", 
      color: "#000000",
      borderColor: "#BCBCBC",
    },
    experienceOption: {
      marginTop: "20px",
      fontFamily: "Poppins",
      fontWeight: "400",
      fontSize: "15px",
      color: "#000000",
      display: "flex",
      alignItems: "center",
      gap: "10px",
    },
    motiveOption: {
      marginTop: "20px",
      fontFamily: "Poppins",
      fontWeight: "400",
      fontSize: "15px",
      color: "#000000",
      display: "flex",
      alignItems: "center",
      gap: "10px",
    },
    radioInput: {
      appearance: "none",
      width: "18px",
      height: "18px",
      borderRadius: "50%",
      border: "2px solid #BCBCBC",
      position: "relative",
      marginRight: "10px",
      cursor: "pointer",
      transition: "all 0.2s ease",
    },
    radioInputChecked: {
      backgroundColor: "#363100",
      borderColor: "#777877",
    },
    radioInputCircle: {
      position: "absolute",
      top: "4px",
      left: "4px",
      width: "8px",
      height: "8px",
      borderRadius: "50%",
      backgroundColor: "#fff",
      transition: "all 0.2s ease",
    },
    label: {
      fontFamily: "Poppins",
      fontSize: "15px",
      fontWeight: "400",
      color: "#000000",
      cursor: "pointer",
    },
  };

  return (
    <div style={styles.formContainer}>
      <div style={styles.rectangle}></div>
      <div style={styles.profile}>
        <div style={styles.cuisininglogo}></div>
      </div>
      <h1 style={styles.heading}>Customize Your Profile</h1>

      <div style={styles.profileHeader}>
        <h1 style={styles.userName}>{userInfo.name}</h1>
        <p style={styles.userEmail}>{userInfo.email}</p>
      </div>
      <p style={styles.question1}>Have you taken any NCII Cookery course?</p>
      <p style={{ ...styles.question2, whiteSpace: 'nowrap' }}>Do you have any experience in cooking before?</p>
      
      <div style={{ position: 'absolute', top: '650px', left: '140px' }}>
        {experienceOptions.map((option, index) => (
          <div key={index} style={styles.experienceOption}>
            <input
              type="radio"
              id={`experience-${index}`}
              name="experience"
              value={option}
              checked={experienceOption === option}
              onChange={() => setExperienceOption(option)}
              style={{
                ...styles.radioInput,
                ...(experienceOption === option ? styles.radioInputChecked : {}),
              }}
            />
            <label htmlFor={`experience-${index}`} style={styles.label}>
              {option}
            </label>
          </div>
        ))}
      </div>

      <p style={{ ...styles.question3, whiteSpace: 'nowrap' }}>What’s your motive in learning how to cook?</p>
      
      <div style={{ position: 'absolute', top: '850px', left: '140px' }}>
        {motiveOptions.map((option, index) => (
          <div key={index} style={styles.motiveOption}>
            <input
              type="radio"
              id={`motive-${index}`}
              name="motive"
              value={option}
              checked={learningMotive === option}
              onChange={() => setLearningMotive(option)}
              style={{
                ...styles.radioInput,
                ...(learningMotive === option ? styles.radioInputChecked : {}),
              }}
            />
            <label htmlFor={`motive-${index}`} style={styles.label}>
              {option}
            </label>
          </div>
        ))}
      </div>

      <div style={styles.buttonGroup}>
        <button
          style={{ ...styles.button, ...styles.yesButton }}
          onClick={() => setHasTakenNCII(true)}
        >
          YES
        </button>
        <button
          style={{ ...styles.button, ...styles.noButton }}
          onClick={() => setHasTakenNCII(false)}
        >
          NO
        </button>
      </div>

      <div style={styles.saveCancelButtonGroup}>
        <button
          style={{ ...styles.button, ...styles.saveButton }}
        >
          Save
        </button>
        <button
          style={{ ...styles.button, ...styles.cancelButton }}
        >
          Cancel
        </button>
      </div>
    </div>
  );
};

export default CustomizeProfile;
