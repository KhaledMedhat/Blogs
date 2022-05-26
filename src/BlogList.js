import { Link } from 'react-router-dom'

const BlogList = ({ blogs }) => {
  return (
    <div className="blog-list">
      {blogs.map((data) => (
        <div className="blog-preview" key={data.id}>
          <Link to={`/blogs/${data.id}`}>
            <h2>{data.title}</h2>
            <p>Written by {data.author}</p>
          </Link>
        </div>
      ))}
    </div>
  )
}

export default BlogList
