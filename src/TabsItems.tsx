import { syka } from "./App";
import './index.css';


const TabsItems = ({titel, current, previous}:syka) => {

    return (
            <section className="container-info-item">
                <div className="titel-section">
                    <p className="text1">{titel}</p>
                    <button className="btn-info"><img src="/images/icon-ellipsis.svg"/></button>
                </div>
                <h3 className="text2">{current}hrs</h3>
                <p className="text3">last Week - {previous}hrs</p>
            </section>
    )

}

export default TabsItems;