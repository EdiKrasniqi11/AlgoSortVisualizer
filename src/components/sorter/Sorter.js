import './Sorter.css'

export default function Sorter(props){
    const children = props.array.length;

    return(
        <div className="sort-array">
        {props.array.map((value, idx) =>(
            <div key={idx} id={value} className="array-item" style={{height: `${value}px`, width: `calc(55%/${children})`}}>
            </div>
            )
        )}
        <div className="animationSpeedDiv">
          <h4>Animation Speed: {props.animationSpeed}ms/animation</h4>
          <input type="range" className="animationSpeedControl" value={props.animationSpeed} onChange={(e) => props.setAnimationSpeed(e.target.value)}></input>
          <div style={{display: 'flex'}}><div className="color-box" style={{background: `${props.normalBarColor}`}}></div><h4>Normal Color</h4></div>
          <div style={{display: 'flex'}}><div className="color-box" style={{background: `${props.compareBarColor}`}}></div><h4>Comparing Color</h4></div>
          <div style={{display: 'flex'}}><div className="color-box" style={{background: `${props.pivotBarColor}`}}></div><h4>Pivot Color</h4></div>
        </div>
      </div>
    )
}