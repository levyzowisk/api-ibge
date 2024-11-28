import Option from "./option"


export default function Select(props) {
    
    return(
    <>
        <select  name={props.name} onChange={props.onChange} disabled={props.disabled}> 
            <option disabled hidden selected required value="0">Selecione a região</option>
            {props.option.map((element) => (                
                
                <Option key={element.id} value={element.id} contentOption={element.nome} />
            ))}   
        </select>
        
    </>
    )
}
