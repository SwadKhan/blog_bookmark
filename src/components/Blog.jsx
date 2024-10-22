import PropTypes from "prop-types";
import {FaBookmark} from 'react-icons/fa';

function Blog({blog, handleAddBookmark,handleMarksAsRead}) {
    const {id,title,cover,author,author_img,reading_time,posted_date,hashtags}=blog;
    return (
        <div className="mb-20 space-y-4">
            <img className="w-full h-96 mb-8 object-cover object-full" src={cover} alt={`cover picture of the title ${title}`}   />
            <div className="flex justify-between mb-4 ">
                <div className="flex">
                 <img className="w-14 h-14 rounded-full bg-cover content-stretch"
                  src={author_img} alt="" />
                  <div className="ml-6">
                    <h3 className="text-2xl ">{author}</h3>
                    <p>{posted_date}</p>
                  </div>
                </div>
                <div>
                   <span>{reading_time} mins read</span>
                   <button 
                   onClick={()=>handleAddBookmark(blog)}
                   className="ml-2 text-2xl text-yellow-200"><FaBookmark></FaBookmark></button>
                </div>
            </div>
            <h2 className="text-4xl justify-items-start flex">{title}</h2>
            <p className="justify-items-start flex">{
                hashtags.map((hash,idx)=><span key={idx}><a href="">#{hash}</a></span>)
}
</p>
<button className=" text-purple-400 font-bold underline justify-items-start flex" onClick={()=>handleMarksAsRead(id,reading_time)}>Mark As Read</button>
        </div>
    );
}

Blog.propTypes={
    blog: PropTypes.object.isRequired,
    handleAddBookmark:PropTypes.func,
    handleMarksAsRead:PropTypes.func
}

export default Blog;