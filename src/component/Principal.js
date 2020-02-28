import React from "react";
import Blog from "../servicies/Blog";
import Comentario from "../servicies/Comentario";
import axios from 'axios';


class Principal extends React.Component{
    state={
        a:[],
        b:[],
        idUser:1,
        mostrar:[],
        name: '',
        description:'',
        relation:" ",


    };
    async componentDidMount() {
        this.setState({a: await Blog.getBlog()});
        this.setState({b: this.state.a['hydra:member']});

        //console.log(this.state.b)

    }
    handleClickFind = (es) =>{
        this.setState(state =>({ idUser: state.idUser = es}))

    };
    showTareas=async(userId)=>{

        const tasks2 = this.state.a['hydra:member'];
        //console.log(this.state.arrTar);
        const userTasks = [];
        tasks2.forEach((tarea)=>{
            if(tarea.id==userId){
                userTasks.push(tarea);
            }
        });
        this.setState({mostrar:userTasks})

        this.setState({
            visible: true,
        });
    };
    detectarCambios=(evento)=>{
        evento.preventDefault();
        this.setState(
            {
                [evento.target.name]:evento.target.value
            }
        )
    };
    crearTarea=(e)=>{
        e.preventDefault();
        //crear objeto que se va a generar
        const tarea ={
            name: this.state.name,
            description: this.state.description,
            relaciontask: "/api/users/"+this.state.relation
        }
        //funcion para crear el objeto
        axios.post('http://127.0.0.1:8000/api/tasks',tarea).then(
            respuesta=>{console.log(respuesta)}
        )
    };
        render() {
        const {a, b, c, d} = this.state;
        console.log(this.state.b)
        return(
            <div>
                <table className="container table table-bordered">
                    <thead>
                    <tr>
                        <th scope="col">Titulo</th>
                        <th scope="col">Ver</th>



                    </tr>
                    </thead>{
                b.map((item) => (
                    <tbody>
                    <tr>


                            <td>{item.Titulo}</td>
                        <td><button type="primary" onClick={()=>this.showTareas(item.id)}>Ver Informacion</button></td>
                        <li><button onClick={()=> this.handleClickFind(item.id)}>Buscar ID Usuario</button></li>

                    </tr>
                    </tbody>



                )
                )

            }
                </table>
                <div className="task-user">
                    {this.state.idUser}


                </div>
                <div>
                    {this.state.mostrar.map((item)=>(

                    <ul>
                        <li>{item.Titulo}</li>
                        <li>{item.Texto}</li>
                            <li>{item.autor}</li>
                    </ul>


                    ))}
                </div>
                <h3> Crear tareas</h3>

                <form onSubmit={this.crearTarea}>

                    Nombre:
                    <input
                        onChange={this.detectarCambios}
                        type="text"
                        name="name"
                        value={this.state.name}
                    /><br/>

                    Descripcion:
                    <input
                        onChange={this.detectarCambios}
                        type="text"
                        name="description"
                        value={this.state.description}
                    /><br/>

                    Relacion:
                    <input
                        onChange={this.detectarCambios}
                        type="text"
                        name="relation"
                        value={this.state.relation}
                    /><br/>


                    <button> Enviar </button>

                </form>
            </div>

        )


    }


    
}

export default Principal;
