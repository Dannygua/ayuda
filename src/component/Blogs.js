import React from "react";
import axios from  'axios';
import Blog from "../servicies/Blog";

class Blogs extends React.Component{
    state={
        titulo:'',
        autor:'',
        texto:'',
        c:[],
        d:[]
    }
    handleChangeInput = (es, input) => {
        const newState = {};
        newState[input] = es.target.value;
        this.setState(newState);
    };
    //me permite agreagar tareas y descripciones
    // Cambiar por el nombre de atributos de la bbdd antes del Curren//
    handleAddTask = () => {
        this.setState((currentState) => ({
                d: [
                    ...currentState.d,
                    {
                        Titulo: currentState.titulo,
                        Texto: currentState.texto,
                        autor:currentState.autor
                    }
                ]

            })
        )

    };
    async componentDidMount() {
        this.setState({c: await Blog.getBlog()});
        this.setState({d: this.state.c['hydra:member']});

        //console.log(this.state.b)

    }
    render() {
        const {titulo,autor,texto,c,d}=this.state;
        return(
            <div>

                {this.state.title}
                Titulo:<input onChange={(es) => this.handleChangeInput(es, 'titulo')} value={titulo}/>
                <br/>
                Texto:<input onChange={(es) => this.handleChangeInput(es, 'texto')} value={texto}/>
                <br/>
                Autor:<input onChange={(es) => this.handleChangeInput(es, 'autor')} value={autor}/>
                <div>
                    <button onClick={this.handleAddTask}>Agregar</button>

                </div>
                <div>
                    {
                        d.map((item)=> (
                            <ul>
                                <li>{item.Titulo}</li>
                                <li>{item.Texto}</li>
                                <li>{item.autor}</li>
                            </ul>
                        )
                        )

                    }
                </div>

            </div>
        )
    }

}

export default Blogs