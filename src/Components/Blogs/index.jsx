import React from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import { motion } from 'framer-motion';
import { Link } from "react-router-dom";

function Blogs() {
  const slugify = (text) =>
  text.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/(^-|-$)/g, "");

  const settings = {
    dots: true,
    infinite: true,
    
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          dots:false,
        },
      },
    ],
  };

  const blog = [
    {
    id:1,
    url:'https://framerusercontent.com/images/Wf3YmLP69JpMrPNpD1dnW2vHRvA.png?scale-down-to=512',
    text:'Introducing Our New Summer Menu',
    date:'April 8, 2025',
  },
  {
    id:2,
    url:'https://framerusercontent.com/images/Rhkw58upm1n7jUfzuc3LJm3sM0c.png',
    text:'Behind the Scenes at Burger Haven',
    date:'April 15, 2025',
  },
  {
    id:3,
    url:'https://framerusercontent.com/images/l0y0d8fO7Z82Jk5gDWGtxAotc3s.png',
    text:'Our Commitment to Sustainability',
    date:'March 30, 2025',
  },
   {
    id:4,
    url:'http://framerusercontent.com/images/EkxNoiGNvgpR7dRKjYjPbplyH2U.jpg?scale-down-to=4096',
    text:'Celebrating One Year of Deliciousness',
    date:'March 28, 2025',
  },
{
    id:5,
    url:'https://framerusercontent.com/images/8UUbu6jwDzmVPoOhkG5TbhdIV1o.jpg?scale-down-to=2048',
    text:'Healthy eating: Our Nutritional Promise',
    date:'March 20, 2025',
  },
]

  return (
    <div className="w-full px-1  md:px-20 bg-white py-0 md:py-16 pt-20 md:pt-50 box-border">
      <h2 className="text-3xl md:text-5xl font-bold text-left px-5 pb-10 md:pb-20">
        Latest burger news
      </h2>
      <Slider {...settings}>
        {blog.map((data, index) => (
          <div key={index} className="px-1">
            <motion.div 
             initial={{opacity:0, y:'10%'}}
              viewport={{once:true}}
                whileInView={{opacity:1, y:0}}
                transition={{duration:1, delay:.1, ease:"easeIn"}}
            className="p-4 text-center border-none z-0 ">
              <div className="z-0 ">
                <motion.img
               whileHover={{scale:1.02}}
               transition={{delay:.3, ease:'easeIn'}}
                className="rounded-4xl object-cover w-full h-[270px] md:h-[370px] "
                style={{ boxShadow: "-15px -15px 0px 0px #F3FFCF"}}
              src={data.url}/>
              </div>
              <div className="pl-5">
                <p className="text-md text-left pt-4">{data.date}</p>
                
              {/* <Link to={`/blogs/`}> */}
             <Link to={`/blog/${slugify(data.text)}`}>
{/* <Link to={`/blog/${data.text.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/(^-|-$)/g, "")}`}> */}

              <h4 className="text-2xl text-left font-bold pt-1">
                {data.text}
              </h4>
              </Link>
              </div>
            </motion.div>
          </div>
        ))}
      </Slider>
    </div>
  );
}

export default Blogs;
