import { InputText } from 'primereact/inputtext';

export default function SearchBox({ value, searchFunction, size, style }) {
    return (
        <span className="p-input-icon-left">
            <i className="pi pi-search" />
            <InputText placeholder="Search"
                       value={value} 
                       onInput={searchFunction} 
                       className={size} 
                       style={style} />
        </span>
    )
}
