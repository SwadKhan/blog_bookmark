
import PropTypes from 'prop-types';
import BookMark from './BookMark';

function BookMarks({bookMarks,readingTime}) {
    return (
        <div className='md:w-1/3 bg-gray-400 ml-4 mt-2 pt-4'>
            <div className='text-4xl'>
                <h3 className='text-4xl'>Reading time: {readingTime}</h3>
            </div>
          <h1 className='text-3xl text-center '>BookMarked Blogs:{bookMarks.length}</h1> 
          {
            bookMarks.map((bookmark,idx)=><BookMark key={idx} bookmark={bookmark}></BookMark>)
          }
        </div>
    );
}
BookMarks.propTypes={
   bookMarks:PropTypes.array,
   readingTime:PropTypes.number
}

export default BookMarks;