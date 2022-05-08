import React, { useState, useEffect } from "react";
import "./About.scss";
import { motion } from "framer-motion";
import { urlFor, client } from "../../client"; //sanity
import { AppWrap } from "../../wrapper";
import { MotionWrap } from "../../wrapper";

// import {images} from '../../constants'
// const abouts = [
//   {title: 'FrontEnd Developer', description:'I am a well FrontEnd Developer', imgUrl: images.about01},
//   {title: 'BackEnd Developer', description:'I am a proficient BackEnd Developer', imgUrl: images.about02},
//   {title: 'Devops', description:'I am good in handling Devops operations', imgUrl: images.about03},
//   {title: 'Database', description:'I write performant Database Queries', imgUrl: images.about04},
// ]

const About = () => {
  const [abouts, setAbouts] = useState([])

  useEffect(() => {
    const query = '*[_type == "abouts"]'
    client.fetch(query)
      .then((data)=>setAbouts(data))
  }, [])
  

  return (
    <>
      <h2 className="head-text">I know That <span>Good App</span><br />means <span>Good Business</span>
      </h2>

      <div className="app__profiles">
        {abouts.map((about,index)=>(
          <motion.div
            whileInView={{ opacity:1 }}
            whileHover={{scale:1.1}}
            transition={{ duration:0.5, type: 'tween' }}
            className="app__profile-item"
            key={about.title + index}
          >
            {/* //for const abouts */}
            {/* <img src={about.imgUrl} alt={about.title}/> */}  
            
            {/* //for sanity */}
            <img src={urlFor(about.imgUrl)} alt={about.title}/>  
            <h2 className="bold-text" style={{marginTop: 10}}>{about.description}</h2>
          </motion.div>
        ))

        }
      </div>
    </>
  );
};

export default AppWrap( 
  MotionWrap(About, 'app__about'),
   'about',
   "app__whitebg"
   );
