const getComentario = async () => {
    //const response = await fetch('http://localhost:8000/api/clases');
    const response = await fetch('http://localhost:8000/api/comments');
    return response.json();
};

const Comentario = {
    getComentario
};

export default Comentario;