import { useEffect, useState } from "react"
import Select from "../components/Select";


export default function Home() {
    const [region, setRegion] = useState("")
    const [data, setData] = useState([])
    const [state, setState]  = useState("")
    const [estado, setEstado] = useState([]);
    const [cidade, setCidade] = useState([]);

    const onChange = (event) => {
        const value = event.target.value;
        if(event.target.name == "Regiao") {
            setRegion(value);

            fetch(`https://servicodados.ibge.gov.br/api/v1/localidades/regioes/${value}/estados`)
            .then(res => res.json())
            .then(data => {
                j
                setEstado(data)
            })
    
        }

        if(event.target.name == "Estado") {
            setState(value)
            console.log(value);
            
            fetch(`https://servicodados.ibge.gov.br/api/v1/localidades/estados/${value}/municipios`)
            .then(res => res.json())
            .then(data => {
                console.log(data);
                setCidade(data)
                
            })
        }
        
    }

    useEffect(() => {
        fetch("https://servicodados.ibge.gov.br/api/v1/localidades/regioes")
            .then(res => res.json())
            .then(data => {
            // console.log(data);
            setData(data);
            
        })
    }, [])

  

    return (
        <>
            <Select  name={'Regiao'} option={data} onChange={onChange} />
            <Select  name={'Estado'} option={estado} onChange={onChange} disabled={region !== "" ? false : true}/>
            <Select  name={'Cidade'} option={cidade} onChange={onChange} disabled={state !== "" ? false : true}/>
            

        </>
    )
}