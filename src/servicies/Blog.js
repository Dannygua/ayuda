const getBlog = async () => {
    //const response = await fetch('http://localhost:8000/api/clases');
    const response = await fetch('http://localhost:8000/api/blogs');
    return response.json();
};

const Blog = {
    getBlog
};

export default Blog;