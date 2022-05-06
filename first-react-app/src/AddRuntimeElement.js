import React,{useState,useEffect} from 'react'

export default function AddRuntimeElement() {

    const [fields, setFields] = useState([{ value: null }]);
    const [inputs, setinputs] = useState([]);

    const handleAdd = () =>{
        let field = { value: null };
        setFields([...fields,field]);
    } 

    const handleChange = (idx , event) =>{
        const values = [...fields];
        values[idx].value = event.target.value;
        setFields([...values]);
    }

    const handleRemove = (i) => {
        const values = [...fields];
        values.splice(i, 1);
        setFields(values);
      }

    const showList = () =>{
        let inputs= [];
        fields.map((field)=> inputs.push(field.value));
        console.log(inputs);
        setinputs(inputs);
    }
    
    return (
        <div>
            <div>
            <button type="button" onClick={() => handleAdd()}>
                +
            </button>
            </div>
            <div>
            {fields.map((field,index) => {
                return(
                    <div key={`divinput-${index}`}>
                    <input
                    type="text"
                    placeholder="Enter text"
                    onChange={e => handleChange(index, e)}
                    />
                    </div>
                );
            })}
            <button type="button" onClick={() => handleRemove()}>
                X
            </button>
            </div>
            <div>
            <button type="button" onClick={() => showList()}>
                Show
            </button>
            { inputs && inputs.map((input,index) => {
                return(
                <div>{input}</div>
                );
            })}
            </div>
           
        </div>

    )
}

