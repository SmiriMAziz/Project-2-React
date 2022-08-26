
import Carousel from './Carousel.js' ; 
import Header from './Header.js' ; 
let header = {
  "head" :{
      "content" : "Expand your career opportunities with Python"
  } , 


  "desc" : {
      "content" : "Take one of Udemy’s range of Python courses and learn how to code using this incredibly useful language. Its simple syntax and readability  makes Python perfect for Flask, Django, data  science, and machine learning. You’ll learn how to build everything from games to sites to apps. Choose from a range of courses that will appeal to ..."
  } ,
  "btn" : {
      "content" : "Explore Python" 
  }
  
}
let courses = [ 
  {
      
      "header": "Learn Python: The Complete Python Programming Course",
      "description": "Avinash Jain, The Codex",
      "rating": 4.4,
      "img": "https://img-c.udemycdn.com/course/750x422/394676_ce3d_5.jpg",
      "students": 2923 ,
      "price": 16.99
  },
  {
      
      "header": "Learning Python for Data Analysis and Visualization",
      "description": "Learn python ",
      "rating": 4.4,
      "img": "https://img-c.udemycdn.com/course/750x422/396876_cc92_7.jpg",
      "students":3000,
      "price": 19.99
  },
  {
      
      "header": "Python for Beginners - Learn Programming from scratch",
      "description": "Python For Beginners ",
      "rating": 4.4,
      "img": "https://img-c.udemycdn.com/course/750x422/405878_e5a0_3.jpg",
      "students":3000,
      "price": 14.99
  },
  {
      
      "header": "Learn Python: Python for Beginners",
      "description": "Python introduction !",
      "rating": 4.4,
      "img": "https://img-c.udemycdn.com/course/750x422/426570_1b91_3.jpg",
      "students": 3000,
      "price": 16.99
  },
  {
     
      "header": "Python Beyond the Basics - Object-Oriented Programming",
      "description": "From Classes To Inheritance ",
      "rating": 4.4,
      "img": "https://img-c.udemycdn.com/course/750x422/449532_2aa9_7.jpg",
      "students": 3000,
      "price": 17.99
  }
]

function App() {
  return (
  <>
    <div className='courses-container'>
      <Header prop = {header} />
      <Carousel prop = {courses}/>
    </div>
  </>
  );
}

export default App;
