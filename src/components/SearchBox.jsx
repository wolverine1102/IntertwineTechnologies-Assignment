import { InputText } from 'primereact/inputtext';

export default function SearchBox({ value, handleChange, style }) {
    return (
        <span className="p-input-icon-left">
            <i className="pi pi-search" />
            <InputText placeholder="Search"
                       type='text'
                       value={value} 
                       onChange={handleChange}
                       style={style} />
        </span>
    )
}
