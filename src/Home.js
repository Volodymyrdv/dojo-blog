import BlogList from './BlogList';
import spinner from './spinner.svg';
import useFetch from './useFetch';

const Home = () => {
  const { data: blogs, isPending, error } = useFetch('http://localhost:8000/blogs');
  return (
    <div className='home'>
      {error && <div>{error}</div>}
      {isPending && <img src={spinner} alt='spinner'></img>}
      {blogs && <BlogList blogs={blogs} title='All Blogs!' />}
    </div>
  );
};

export default Home;
