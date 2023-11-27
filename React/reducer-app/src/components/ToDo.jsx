import React, { useRef, useState,useReducer } from 'react'
import "../../node_modules/bootstrap/dist/css/bootstrap.min.css"
const ToDo = () => {
    const [state, dispatch] = useReducer(reducer, {toDos:[]});
    const [toDos, setTodos] = useState([]);

    let inputRef = useRef("");

    function reducer(state, action) {
       
        switch(action.type){
            case "inputChange":{
                return {
                    
                     toDos: state.toDos.push(action.value.current.value)
                  };
            }
                
        }
          
        }
        
      
      

    // function addToDo(){
    //     const data = [...toDos];

    //     console.log(toDoInputRef.current.value);

    //     data.push(toDoInputRef.current.value);

    //     console.log(data);


    //     setTodos(data);
    // }

    return (
        <>

            <div className='container'>

                <div className="row d-flex  justify-content-center ">
                    <div className="col-8 mt-3">
                        <div className="row">
                            <div className="col">
                            <input ref={inputRef}  className='form-control' />
                            </div>
                            <div className="col">
                            <button onClick={()=>{dispatch({type:"inputChange",value:inputRef});console.log(state);}}  className='btn btn-primary'>Add ToDo</button>
                            </div>
                            
                            
                        </div>

                    </div>
                </div>
                <div className="row d-flex justify-content-center ">
                    <col-8 className="mt-3">
                        <ul className='list-group'>

                            {
                                
                                state.toDos.map((toDo, index) => {
                                    return <li className='list-group-item' key={index}>
                                        {toDo}
                                    </li>
                                })
                            }

                        </ul>
                    </col-8>
                </div>


            </div>

        </>

    )
}

export default ToDo