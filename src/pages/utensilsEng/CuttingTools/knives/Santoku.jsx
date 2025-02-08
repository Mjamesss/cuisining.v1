import "../../../../fw-cuisining.css";

const Santoku= () => {
    return(
        <>
         <div className="p5 ">
       <a href="Knife"><img src="back.png"></img> </a>
       </div>
        <div className="p2 d-grid justify-content-center align-items-center">
        <h1 className="font-weight-900">Santoku knife</h1>
            <p className=" p3 d-flex justify-content-center" style={{fontSize:"30px",maxWidth:"1000px",}}>  
            A Santoku knife is a Japanese-style knife known for its precision and 
            versatility in the kitchen. It has a shorter, wider blade with a slight curve,
            making it ideal for slicing, dicing, and mincing. The word "Santoku"
            translates to "three virtues," referring to its ability to handle meat, fish,
            and vegetables with ease.
            <br></br>
            <br></br>
            Unlike a chef’s knife, the Santoku knife has a thinner blade and a granton
            edge, which helps prevent food from sticking. Its lightweight design 
            makes it easy to control, making it a great choice for those who prefer a 
            more balanced and comfortable grip while preparing ingredients.
            </p>

            <img src="chefknifepic.png"></img>
         
        </div>
        </>
    )
}

export default Santoku;