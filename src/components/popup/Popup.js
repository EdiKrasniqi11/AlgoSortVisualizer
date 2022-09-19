import './Popup.css'

export default function Popup(props){
    return(
        <div className={props.toggle==0?"popup-background": "popup-background active"}>
            <div className="popup-container">
                <h3 onClick={props.deactivate}>x</h3>
                {props.children}
            </div>
        </div>
    )
}