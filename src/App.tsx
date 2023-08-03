import {useState} from 'react';
import TabsItems from './TabsItems';
import data from './data.json';
import './index.css';

    export type syka = {
      titel:string,
      current: number, 
      previous: number
    }
  
function App() {

  const [one, setOne] = useState(true);
  const [two, setTwo] = useState(false);
  const [three, setThree] = useState(false);
  const [component, setComponent] = useState(data.map(item => {
    const id = item.title.toLowerCase().replace(/ /g, '-');
    return (        
      <div className={`container-tabs-item container-tabs-item--${id}`}><TabsItems titel={item.title} current={item.timeframes.daily.current} previous={item.timeframes.daily.previous}/></div>)
  }))

  const showDaily = () => {
    setComponent(data.map(item => {
      const id = item.title.toLowerCase().replace(/ /g, '-');
      return (        
    <div className={`container-tabs-item container-tabs-item--${id}`}><TabsItems titel={item.title} current={item.timeframes.daily.current} previous={item.timeframes.daily.previous}/></div>)
    }))
    setOne(true)
    setTwo(false)
    setThree(false)

  }

  const showWeekly = () => {
    setComponent(data.map(item => {
      const id = item.title.toLowerCase().replace(/ /g, '-');
      return (        
      <div className={`container-tabs-item container-tabs-item--${id}`}><TabsItems titel={item.title} current={item.timeframes.weekly.current} previous={item.timeframes.weekly.previous}/></div>)
    }))
    setOne(false)
    setTwo(true)
    setThree(false)
  }

 const showMonthly = () => {
  setComponent(data.map(item => {
    const id = item.title.toLowerCase().replace(/ /g, '-');
   return (        
    <div className={`container-tabs-item container-tabs-item--${id}`}><TabsItems titel={item.title} current={item.timeframes.monthly.current} previous={item.timeframes.monthly.previous}/></div>)
  }))
  setOne(false)
  setTwo(false)
  setThree(true)
 }

  return (
    <div className='container'>
      <section className='wrapper-person'>
        <div className='person'>
          <img src='/images/image-jeremy.png' alt='photo' className='avatar'/>
          <div className='info-text'>
            <p className='info-subtitel'>Report for</p>
            <h3 className='info-title'>Jeremy</h3>
            <h3 className='info-title'>Robson</h3>
          </div>
        </div>
        <div className='tabs-list'>
          <button className={one ? 'btn-list-active' : 'btn-list'} onClick={showDaily}>Daily</button>
          <button className={two ? 'btn-list-active' : 'btn-list'} onClick={showWeekly}>Weekly</button>
          <button className={three? 'btn-list-active' : 'btn-list'} onClick={showMonthly}>Monthly</button>
        </div>
      </section>
      <section className='wrapper-tabs'>
        {component}
      </section>
    </div>
  );
}

export default App;
