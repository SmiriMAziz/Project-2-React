import Card from './MyCard.js' ; 
import React from 'react' ; 
import './cardsstyle.css' ; 
import "bootstrap/dist/js/bootstrap";
import 'bootstrap/dist/css/bootstrap.min.css';



function carousel (props) {

     
    let courses = props.prop ; 
    
   
    
    return(
    <>
        <div id="carouselExampleControls" className="carousel slide" data-bs-interval="false" >
                <div className="carousel-inner all-courses justify-content center" all-courses>
                    
                    <div className='carousel-item active d-flex'>
                        {
                            courses.map((course) => {
                                return(
                                
                                    <Card prop = {course} />
                                
                                );
                             })
                        }
                    </div>
                   
                    
                
                </div>
                <button className="text-bg-dark carousel-control-prev" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="prev">
                    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Previous</span>
                </button>
                <button className="text-bg-dark carousel-control-next" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="next">
                    <span className="carousel-control-next-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Next</span>
                </button>
                    
            </div>
    </>
    ) ; 
}


export default carousel ; 
