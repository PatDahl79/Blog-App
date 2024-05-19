import { Button } from '@material-tailwind/react'
import React, { useContext } from 'react'
import myContext from '../../context/data/myContext';
import Image from '../../assets/P3.png'

function BlogPostCard() {
  const context = useContext(myContext);
  const { mode } = context;

  return (
    <div>
      <section className="text-gray-600 body-font">
        <div className="container px-5 py-10 mx-auto max-w-7xl ">

          {/* Main Content  */}
          <div className="flex flex-wrap justify-center -m-4 mb-5">
            {/* Card 1  */}
            <div className="p-4 md:w-1/3" >
              <div
                style={{
                  background: mode === 'dark'
                    ? 'rgb(30, 41, 59)'
                    : 'white',
                  borderBottom: mode === 'dark'
                    ?
                    ' 4px solid rgb(226, 232, 240)'
                    : ' 4px solid rgb(30, 41, 59)'
                }}
                className={`h-full shadow-lg  hover:-translate-y-1 cursor-pointer hover:shadow-gray-400
               ${mode === 'dark'
                   ? 'shadow-gray-700'
                   : 'shadow-xl'
                   } 
               rounded-xl overflow-hidden`} 
              >
                {/* Blog Thumbnail  */}
                <img className="w-[150px] " src={Image} alt="blog" />

                {/* Top Items  */}
                <div className="p-6">
                  {/* Blog Date  */}
                  <h2 className="tracking-widest text-xs title-font font-medium text-gray-400 mb-1" style={{
                    color: mode === 'dark'
                      ? 'rgb(226, 232, 240)'
                      : ' rgb(30, 41, 59)'
                  }}>
                    {'25 Feb 2024'}
                  </h2>

                  {/* Blog Title  */}
                  <h1 className="title-font text-lg font-bold text-gray-900 mb-3" style={{
                    color: mode === 'dark'
                      ? 'rgb(226, 232, 240)'
                      : ' rgb(30, 41, 59)'
                  }}>
                    {'ADHD in men'}
                  </h1>

                  <h2 className="title-font text-sm font-bold text-gray-900 mb-3" style={{
                    color: mode === 'dark'
                      ? 'rgb(226, 232, 240)'
                      : ' rgb(30, 41, 59)'
                  }}>
                    {'ADHD and Relationships: How to Communicate Effectively'}
                  </h2>

                  {/* Blog Description  */}
                  <p className="leading-relaxed mb-3" style={{
                    color: mode === 'dark'
                      ? 'rgb(226, 232, 240)'
                      : ' rgb(30, 41, 59)'
                  }}>
                     This post explores unique challenges faced by adult men with ADHD and offers
                      practical tips and strategies for managing symptoms and thriving in various areas of life.
                  </p>
                </div>
              </div>
            </div>

            {/* Card 2  */}
            <div className="p-4 md:w-1/3" >
              <div
                style={{
                  background: mode === 'dark'
                    ? 'rgb(30, 41, 59)'
                    : 'white',
                  borderBottom: mode === 'dark'
                    ?
                    ' 4px solid rgb(226, 232, 240)'
                    : ' 4px solid rgb(30, 41, 59)'
                }}
               className={`h-full shadow-lg  hover:-translate-y-1 cursor-pointer hover:shadow-gray-400
               ${mode === 'dark'
                   ? 'shadow-gray-700'
                   : 'shadow-xl'
                   } 
               rounded-xl overflow-hidden`} 
              >
                {/* Blog Thumbnail  */}
                <img className="w-[150px] " src={Image} alt="blog" />

                {/* Top Items  */}
                <div className="p-6">
                  {/* Blog Date  */}
                  <h2 className="tracking-widest text-xs title-font font-medium text-gray-400 mb-1" style={{
                    color: mode === 'dark'
                      ? 'rgb(226, 232, 240)'
                      : ' rgb(30, 41, 59)'
                  }}>
                    {'15 March 2024'}
                  </h2>

                  {/* Blog Title  */}
                  <h1 className="title-font text-lg font-bold text-gray-900 mb-3" style={{
                    color: mode === 'dark'
                      ? 'rgb(226, 232, 240)'
                      : ' rgb(30, 41, 59)'
                  }}>
                    {'ADHD in women'}
                  </h1>

                  <h2 className="title-font text-sm font-bold text-gray-900 mb-3" style={{
                    color: mode === 'dark'
                      ? 'rgb(226, 232, 240)'
                      : ' rgb(30, 41, 59)'
                  }}>
                    {'Thriving with ADHD: Empowering Women to Succeed'}
                  </h2>

                  {/* Blog Description  */}
                  <p className="leading-relaxed mb-3" style={{
                    color: mode === 'dark'
                      ? 'rgb(226, 232, 240)'
                      : ' rgb(30, 41, 59)'
                  }}>
                    This post celebrates the strengths and resilience of women with 
                    ADHD while providing actionable advice on managing symptoms, balancing responsibilities, and achieving personal and professional goals.
                  </p>
                </div>
              </div>
            </div>

            {/* Card 3 */}
            <div className="p-4 md:w-1/3" >
              <div
                style={{
                  background: mode === 'dark'
                    ? 'rgb(30, 41, 59)'
                    : 'white',
                  borderBottom: mode === 'dark'
                    ?
                    ' 4px solid rgb(226, 232, 240)'
                    : ' 4px solid rgb(30, 41, 59)'
                }}
                className={`h-full shadow-lg  hover:-translate-y-1 cursor-pointer hover:shadow-gray-400
               ${mode === 'dark'
                   ? 'shadow-gray-700'
                   : 'shadow-xl'
                   } 
               rounded-xl overflow-hidden`} 
              >
                {/* Blog Thumbnail  */}
                <img className="w-[150px] " src={Image} alt="blog" />

                {/* Top Items  */}
                <div className="p-6">
                  {/* Blog Date  */}
                  <h2 className="tracking-widest text-xs title-font font-medium text-gray-400 mb-1" style={{
                    color: mode === 'dark'
                      ? 'rgb(226, 232, 240)'
                      : ' rgb(30, 41, 59)'
                  }}>
                    {'30 April 2024'}
                  </h2>

                  {/* Blog Title  */}
                  <h1 className="title-font text-lg font-bold text-gray-900 mb-3" style={{
                    color: mode === 'dark'
                      ? 'rgb(226, 232, 240)'
                      : ' rgb(30, 41, 59)'
                  }}>
                    {'ADHD in kids'}
                  </h1>

                  <h2 className="title-font text-sm font-bold text-gray-900 mb-3" style={{
                    color: mode === 'dark'
                      ? 'rgb(226, 232, 240)'
                      : ' rgb(30, 41, 59)'
                  }}>
                    {'Understanding ADHD in Children: A Parent,s guide'}
                  </h2>

                  {/* Blog Description  */}
                  <p className="leading-relaxed mb-3" style={{
                    color: mode === 'dark'
                      ? 'rgb(226, 232, 240)'
                      : ' rgb(30, 41, 59)'
                  }}>
                    This post provides an overview of ADHD in children, including common symptoms, diagnosis, 
                    and treatment options, along with practical strategies for supporting children with ADHD at home and in school.
                  </p>
                </div>
              </div>
            </div>

          

           
          </div>

          {/* See More Button  */}
          <div className="flex justify-center my-5">
            <Button
              style={{
                background: mode === 'dark'
                  ? 'rgb(226, 232, 240)'
                  : 'rgb(30, 41, 59)',
                color: mode === 'dark'
                  ?
                  'rgb(30, 41, 59)'
                  : 'rgb(226, 232, 240)'
              }}>
              See More
            </Button>
          </div>
        </div>
      </section >
    </div >
  )
  }

export default BlogPostCard