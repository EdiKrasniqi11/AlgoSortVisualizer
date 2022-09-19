import './Sorter.css'

export default function Sorter(props){
    const children = props.array.length;

    return(
        <div className="sort-array">
            {props.array.map((value, idx) =>(
                <div key={idx} className="array-item" style={{height: `${value}px`, width: `calc(55%/${children})`}}>
                </div>
                )
            )}
        </div>
    )
}