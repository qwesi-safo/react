 
import './App.css';
import image1 from './image1.jpg';
import image2 from './image2.jpg';

function App() {
  return (
    <div className="container">
       <h1>Mechanical and Automatic Watches</h1>
        <img src={image1} className="automatic" alt="watch" />
        <p className='aHistory'>
         Automatic Movement History: As with many horological advances, it is often disputed
          who invented the first automatic watch. In 1776 a man named Abram Louys Perrelet, a church elder 
         from Switzerland, claimed to be the first. He had created a watch that could run on the 
         energy from the movement of the human body for 8 days. Then in 1778 in France, an inventor
          named Hubert Sarton claimed that Parrelet used his ideas to create the invention. The automatic 
         pocket watch became available to the public in 1780, but by the 1800s people had stopped using 
         the watch because it was unreliable
        </p>
        
        <p className='mHistory' >
        Manual Movement History: The man given the credit for inventing the first watch was a locksmith from Nuremberg, 
        Germany, named Peter Henlein. He was well-known for making small spring-powered clocks. 
        Somewhere around 1504-1508, he began making pomander watches that could run for 40 hours 
        before needing to be rewound. A pomander was a small container made of gold or silver and 
        designed to hold perfumes. They were small enough to be worn around the neck or carried in a pocket. 
        These watches were not accurate and only had an hour hand. Some claim that he invented the mainspring, 
        but many have found that it actually appeared in clocks before him in the early 15th century.
        </p>
        <img src={image2} className="mechanical" alt="watch"/>
    </div>
  );
}

export default App;
