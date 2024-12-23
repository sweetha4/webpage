// import React from 'react';
import React, { useContext } from "react";
import "./page.css";
import { useNavigate } from "react-router-dom";
import { UserContext } from "../context/UserContext.js";
import ClipLoader from "react-spinners/ClipLoader"
import{useState,useEffect, useTransition} from 'react'
import { IoMdTrendingUp } from "react-icons/io";
import { MdOutlineYoutubeSearchedFor } from "react-icons/md";
import { FcLike } from "react-icons/fc";
import { MdOutlineInsertComment } from "react-icons/md";
import { CiShare2 } from "react-icons/ci";
import Popup from 'reactjs-popup'; 
import 'reactjs-popup/dist/index.css';  
import { useDispatch, useSelector } from 'react-redux';
import { addPost } from "../../redux/postsSlice";  

function Page() {
    const { username, logout } = useContext(UserContext);
    const[loading, setLoading] = useState(false);
    const [popupOpen, setPopupOpen] = useState(false); 
    const [textInput, setTextInput] = useState(""); 
  const [image, setImage] = useState(null); 
const [secondPopupOpen, setSecondPopupOpen] = useState(false);  
const [selectedTrend, setSelectedTrend] = useState(null);
  const [isTrendSelected, setIsTrendSelected] = useState(false); 

const navigate = useNavigate();
//   const [posts,setPosts] = useState([ 
//   {
//     // image: `${process.env.PUBLIC_URL}/images/image.jpg`,
//     // text: '"Sleek. Stylish. Classy."',
//     additionalContent: [
//       { type: 'text', content: 'Creativity in web design involves combining different elements...' },
//       { type: 'image', content: `${process.env.PUBLIC_URL}/images/post1.jpg` },
//     ],
//   },
//   {
//     // image: `${process.env.PUBLIC_URL}/images/image.jpg`,
//     // text: '"A Touch of Class for Your Digital Presence!"',
//     additionalContent: [
//       { type: 'text', content: 'A website design creative brief is a document that contains...' },
//       { type: 'image', content: `${process.env.PUBLIC_URL}/images/post2.jpg` },
//     ],
//   },
// ]);
const posts = useSelector((state) => state.posts.posts);
const dispatch = useDispatch();
const color = "#36d7b7"; // Define the color for the loader
const override = {display: "block", margin: "0 auto"};
const topics = {
  "What's Hot?": [
    "Explore history of Chennai",
    "Stroll down to Marina",
    "Respects at Enchanting",
  ],
  Sports: ["Football", "Basketball", "Tennis"],
  Cinema: ["Action Movies", "Drama", "Horror"],
  Politics: ["Elections", "International Relations", "Political Debates"],
  Business: ["Tech Startups", "Investment Strategies", "Economic Policies"],
};

    useEffect(() =>{
    setLoading(true)
    setTimeout(() => {
      setLoading(false)
    },2000)
  },[])
// Handle text input change
const handleTextChange = (event) => {
  setTextInput(event.target.value);
};
   
  const handleFileChange = (event) => {
    setImage(URL.createObjectURL(event.target.files[0])); // Generate a URL for the image
  };

  // Handle post submit (save text and image)
  const handlePostSubmit = () => {
    if (textInput || image) {
      // setPosts([
      //   ...posts,
      //   {
      //     text: textInput,
      //     image: image,
      //   },
      // ]);
      dispatch(addPost({ text: textInput, image: image }));
      setTextInput(""); 
      setImage(null); 
      setPopupOpen(false); // Close the popup
    }
  };
    const togglePopup = () => setPopupOpen(!popupOpen);
    const toggleSecondPopup = () => setSecondPopupOpen(!secondPopupOpen);
  //   useEffect(() => {
  //     console.log(popupOpen, "popup")
  //   }, [popupOpen])
 
  // const override = {
  //   display: "block",
  //   margin: "0 auto",
  // };

  // const color = "#36d7b7";
// const togglePopup = () => setPopupOpen(!popupOpen);
//   const navigate = useNavigate();
//   const goToLoginForm = () => {
//     navigate("/");
//   };
const handleTrendClick = (trend) => {
  setSelectedTrend(trend);
  setIsTrendSelected(true);
  // setSelectedTopics(topics[trend]); // Set topics based on selected trend
};

const goToProfilePage = () => {
  navigate("/profile");  // Navigate to the Profile page
};

  return (
    // <div>
    //   {loading? (
    //     <ClipLoader color={color} loading = {loading} css={override} size={50}/>
    //   ) : (
    
    <div className="web">
      <nav className="nav">
      <div className="profile">
      <button onClick={togglePopup} className="profile-btn">Open Popup</button> 
        <img src={`${process.env.PUBLIC_URL}/images/profile.jpg`} className="post-image" alt="Post" />
        </div>

        <span>Title {`${username}`}</span>
        <button onClick={toggleSecondPopup} className="popup-btn">
          Open the Popup
        </button>
      </nav>
       {/* Popup for Personal Details */}
       {/* <Popup open={popupOpen} closeOnDocumentClick onClose={togglePopup}>
        <div className="popup-content">
          <h2>Personal Details</h2>
          <div className="personal-details">
            <p><strong>Name:</strong> {personalDetails.name}</p>
            <p><strong>Email:</strong> {personalDetails.email}</p>
            <p><strong>Phone:</strong> {personalDetails.phone}</p>
            <p><strong>Address:</strong> {personalDetails.address}</p>
            <p><strong>Bio:</strong> {personalDetails.bio}</p>
          </div>
          <button onClick={togglePopup} className="cancel-btn">Close</button>
        </div>
      </Popup> */}

       {/* Popup for showing "My Profile" button */}
       {/* <Popup open={popupOpen} closeOnDocumentClick onClose={togglePopup} position={"top right"}>
        <div className="popup-content">
          <button onClick={goToProfilePage} className="pro">My Profile</button>
          {/* <button onClick={togglePopup} className="cancel-btn">Close</button>  */}
        {/* </div>
      </Popup> */} 
     {popupOpen?
     <div className="pop">
      <div className="poppro">
      <button onClick={goToProfilePage}>My Profile</button>
      </div>
     </div>
     : ""
    }
      <div className="main">
        <div className="trend">
        <h3>Trending</h3>
          {loading? (
          <ClipLoader color={color} loading = {loading} css={override} size={50}/>
          ) : (
            <div className="trend-content">
               {["What's Hot?", "Sports", "Cinema", "Politics", "Business"].map((trend) => (
                <div
                 key={trend}
                 className="trend-item"
                onClick={() => handleTrendClick(trend)} // Update selected trend
                >
                  <IoMdTrendingUp size={30} color="#ff5733" />
                  <h3>{trend}</h3>
                </div>
              ))}
            </div>
          )}
        </div>
               {/* <IoMdTrendingUp size={30} color="#ff5733" />
               <h3>{trend}</h3>
                 {selectedTrend === trend && (
               <ul>
               {topics[trend].map((topic, index) => (
              <li key={index}>{topic}</li>
              ))}
              </ul>
              )}
             </div>
             ))}
            </div>
             )}
            </div> */}
              
            {/* <div className="trend-item">
            <IoMdTrendingUp size={30} color="#ff5733" />
            <h3>What's Hot?</h3>
            </div>
            <div className="trend-item">
            <IoMdTrendingUp size={30} color="#ff5733" />
            <h3>Sports</h3>
            </div>
            <div className="trend-item">
            <IoMdTrendingUp size={30} color="#ff5733" />
            <h3>Cinema</h3>
            </div>
            <div className="trend-item">
            <IoMdTrendingUp size={30} color="#ff5733" />
            <h3>Politics</h3>
            </div>
            <div className="trend-item">
            <IoMdTrendingUp size={30} color="#ff5733" />
            <h3>Business</h3>
         </div>
         </div>
          )}
        </div> */}

        {/* <div className="post">
        <h3>Post</h3>
          {loading? (
        <ClipLoader color={color} loading = {loading} css={override} size={50}/>
          ) : (
          <div>
           */}

        {selectedTrend? 
        <div className="post">
        <div className="">
          {selectedTrend && (
          <div className="selected-trend">
          <h4>Topics in {selectedTrend}</h4>
          <ul>
          {topics[selectedTrend].map((topic, index) => (
          <li key={index}>{topic}</li>
          ))}
          </ul>
          </div>
          )}
        </div> 
        </div>
             : <div className="post">
             <h3>Post</h3>
               {loading? (
             <ClipLoader color={color} loading = {loading} css={override} size={50}/>
               ) : (
               <div>
               <div>  
       <div className="parent">
       <div className="post-content">
        <img src={`${process.env.PUBLIC_URL}/images/image.jpg`} className="post-image" alt="Post" />
        <p>"Making memories through innovative web design"</p>
        </div>
        <Popup open={secondPopupOpen} closeOnDocumentClick onClose={toggleSecondPopup}>
        <div className="popup-content">
        <textarea name="text" id="message"></textarea>
       <input type="file" />   
        <button onClick={toggleSecondPopup} className="cancel-btn">Post</button>
        <button onClick={toggleSecondPopup} className="cancel-btn">Cancel</button>
        </div>
        </Popup>
        <div>
        <p>Web design involves creating the visual elements and layout of a website, while coding involves translating these designs into a functional website using programming languages like HTML, CSS, and JavaScript. Typically, dedicated web developers translate the designs to code.   </p>
        </div>
        <br></br>
       <div className="post-container">
        <img src={`${process.env.PUBLIC_URL}/images/image2.jpg`} className="poster" alt="Post" />
        <div className="icon">
        <FcLike size={30} color="#ff5733" />
        <MdOutlineInsertComment size={30} color="blue" />
        < CiShare2 size={30} color="black"/>
       </div>
       </div>
       </div>
        <br></br>
        <div className="parent1">
        <div className="post-content">
        <img src={`${process.env.PUBLIC_URL}/images/image.jpg`} className="post-image" alt="Post" />
        <p>"Sleek. Stylish. Classy."</p>
        </div>
        <div>
        <p>Creativity in web design involves combining different elements, such as color, typography, layout, images, animation, and interactivity, to create a unique and engaging experience for the audience. </p>
        </div>
        <br></br>
        <img src={`${process.env.PUBLIC_URL}/images/post1.jpg`} className="poster2" alt="Post" />
        <div className="icon">
        <FcLike size={30} color="#ff5733" />
        <MdOutlineInsertComment size={30} color="blue" />
        < CiShare2 size={30} color="black"/>
        </div>
        </div>
        <br></br>
        <div className="parent2">
        <div className="post-content">
        <img src={`${process.env.PUBLIC_URL}/images/image.jpg`} className="post-image" alt="Post" />
        <p>"A Touch of Class for Your Digital Presence!"</p>
        </div>
        <div>
        <p>A website design creative brief is a document that contains all the necessary information to create and build a new website from scratch.  </p>
        </div>
        <br></br>
        <div className="post-container">
        <img src={`${process.env.PUBLIC_URL}/images/post2.jpg`} className="poster" alt="Post" />
        <div className="icon">
        <FcLike size={30} color="#ff5733" />
        <MdOutlineInsertComment size={30} color="blue" />
        < CiShare2 size={30} color="black"/>
       </div>
      </div>
      </div>
       </div> 
       {posts.map((content, index) => (
                  <div
                    key={index}
                    // className={index % 2 === 0 ? "parent" : index % 3 === 0 ? "parent2" : "parent1"}
                    className="parent"
>
                    <p>{content.text}</p>

                    {content.image && (
                      <img src={content.image} className="poster" alt="Post" />
                    )}
     <div className="icon">
      <FcLike size={30} color="#ff5733" />
      <MdOutlineInsertComment size={30} color="blue" />
      <CiShare2 size={30} color="black" />
    </div>
  </div>
))}
 </div>
      )}
        </div>
             }

     {/* <div>  
     <div className="parent">
       <div className="post-content">
        <img src={`${process.env.PUBLIC_URL}/images/image.jpg`} className="post-image" alt="Post" />
        <p>"Making memories through innovative web design"</p>
        </div>
        <Popup open={secondPopupOpen} closeOnDocumentClick onClose={toggleSecondPopup}>
        <div className="popup-content">
        <textarea name="text" id="message"></textarea>
       <input type="file" />   
        <button onClick={toggleSecondPopup} className="cancel-btn">Post</button>
        <button onClick={toggleSecondPopup} className="cancel-btn">Cancel</button>
        </div>
        </Popup>
        <div>
        <p>Web design involves creating the visual elements and layout of a website, while coding involves translating these designs into a functional website using programming languages like HTML, CSS, and JavaScript. Typically, dedicated web developers translate the designs to code.   </p>
        </div>
        <br></br>
       <div className="post-container">
        <img src={`${process.env.PUBLIC_URL}/images/image2.jpg`} className="poster" alt="Post" />
        <div className="icon">
        <FcLike size={30} color="#ff5733" />
        <MdOutlineInsertComment size={30} color="blue" />
        < CiShare2 size={30} color="black"/>
       </div>
       </div>
       </div>
        <br></br>
        <div className="parent1">
        <div className="post-content">
        <img src={`${process.env.PUBLIC_URL}/images/image.jpg`} className="post-image" alt="Post" />
        <p>"Sleek. Stylish. Classy."</p>
        </div>
        <div>
        <p>Creativity in web design involves combining different elements, such as color, typography, layout, images, animation, and interactivity, to create a unique and engaging experience for the audience. </p>
        </div>
        <br></br>
        <img src={`${process.env.PUBLIC_URL}/images/post1.jpg`} className="poster2" alt="Post" />
        <div className="icon">
        <FcLike size={30} color="#ff5733" />
        <MdOutlineInsertComment size={30} color="blue" />
        < CiShare2 size={30} color="black"/>
        </div>
        </div>
        <br></br>
        <div className="parent2">
        <div className="post-content">
        <img src={`${process.env.PUBLIC_URL}/images/image.jpg`} className="post-image" alt="Post" />
        <p>"A Touch of Class for Your Digital Presence!"</p>
        </div>
        <div>
        <p>A website design creative brief is a document that contains all the necessary information to create and build a new website from scratch.  </p>
        </div>
        <br></br>
        <div className="post-container">
        <img src={`${process.env.PUBLIC_URL}/images/post2.jpg`} className="poster" alt="Post" />
        <div className="icon">
        <FcLike size={30} color="#ff5733" />
        <MdOutlineInsertComment size={30} color="blue" />
        < CiShare2 size={30} color="black"/>
       </div>
      </div>
      </div>
       </div>  */}
        {/* {posts.map((content, index) => (
        <div
         key={index}
         className={index % 2 === 0 ? "parent" : index % 3 === 0 ? "parent2" : "parent1"}
         >
        {content.image && (
        <img src={content.image} className="poster" alt="Post" />
        )}
        <p>{content.text}</p>
        {content.additionalContent && content.additionalContent.map((item, idx) => (
        <div key={idx}>
        {item.type === "text" && <p>{item.content}</p>}
        {item.type === "image" && (
        <img src={item.content} className="post-image" alt="Post" />
        )}
        </div>
        ))} */}
{/*         
                 {posts.map((content, index) => (
                  <div
                    key={index}
                    // className={index % 2 === 0 ? "parent" : index % 3 === 0 ? "parent2" : "parent1"}
                    className="parent"
>
                    <p>{content.text}</p>

                    {content.image && (
                      <img src={content.image} className="poster" alt="Post" />
                    )} */}
    {/* Render icons */}
    {/* <div className="icon">
      <FcLike size={30} color="#ff5733" />
      <MdOutlineInsertComment size={30} color="blue" />
      <CiShare2 size={30} color="black" />
    </div>
  </div>
))} */}

{/* <Popup open={popupOpen} closeOnDocumentClick>
  <div className="popup-content">
    <textarea
      name="text"
      id="message"
      value={textInput}
      onChange={handleTextChange}
      placeholder="Write something..."
    />
    <input type="file" onChange={handleFileChange} />
    <button onClick={handlePostSubmit} className="cancel-btn">
      Post
    </button>
    <button onClick={togglePopup} className="cancel-btn">
      Cancel
    </button>
  </div>
</Popup> */}
              {/* <Popup open={popupOpen} closeOnDocumentClick>
                <div className="popup-content">
                  <textarea
                    name="text"
                    id="message"
                    value={textInput}
                    onChange= {handleTextChange}
                    placeholder="Write something..."
                  />
                  <input type="file" onChange={handleFileChange} />
                  <button onClick={handlePostSubmit} className="cancel-btn">
                    Post
                  </button>
                  <button onClick={togglePopup} className="cancel-btn">
                    Cancel
                  </button>
                </div>
              </Popup> */}  
        {/* </div>
      )}
        </div> */}

        <div className="yu">
        <h3>For You</h3>
          {loading? (
        <ClipLoader color={color} loading = {loading} css={override} size={50}/>
      ) : (
        <div className="yu-content">
            <div className="yu-item">
            < MdOutlineYoutubeSearchedFor size={30} color="#ff5733" />
            <h3>What's NEW?</h3>
            </div>
            <div className="yu-item">
            < MdOutlineYoutubeSearchedFor size={30} color="#ff5733" />
            <h3>Events</h3>
            </div>
            <div className="yu-item">
            < MdOutlineYoutubeSearchedFor size={30} color="#ff5733" />
            <h3>Notifications</h3>
            </div>
            <div className="yu-img">
            <div>
            <p>Advertisement</p>
            </div>
            <br></br>
           <img src={`${process.env.PUBLIC_URL}/images/adv.png`} className="yu-image" alt="Post" />
        </div>
         </div>
      )}
        </div>
      </div>
      {/* <button onClick={goToLoginForm}>Go to Login</button>   */}
    </div>
  );
}
// function PopupGfg() {
//     return (
//       <div>
//         <h4>Popup</h4>
//         <Popup trigger={<button>Click to open popup</button>} position="right center">
//           <div></div>
//           <button>Click here</button>
//         </Popup>
//       </div>
//     );
//   }

  // export {PopupGfg};
export default Page;
