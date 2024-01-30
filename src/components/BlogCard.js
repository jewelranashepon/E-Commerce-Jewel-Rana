import React from 'react';
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';


const BlogCard = () => {
    const [currentDate, setCurrentDate] = useState(new Date());
    useEffect(() => {
        const interval = setInterval(() => {
          setCurrentDate(new Date());
        }, 1000); // Update the date every second
    
        return () => clearInterval(interval); // Cleanup the interval on component unmount
      }, []);

      const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
      const formattedDate = currentDate.toLocaleDateString('en-US', options);

  return (
        <div className="blog-card">
            <div className="card-image">
                <img src="images/blog-1.jpg" alt="blogs" className="img-fluid w-100" />
            </div>
            <div className="blog-content">
                <p className="date">
                    {formattedDate}
                </p>
                <h5 className="title">A Serene Symphony of Nature</h5>
                <p className="description">Under the azure canvas of the sky, a beautiful day unfurls its splendor. The sun, 
                a radiant maestro,...
                </p>
                <Link to="/blog/:id" className="button">
                    Read More
                </Link>

            </div>

        </div>      
  )
}

export default BlogCard