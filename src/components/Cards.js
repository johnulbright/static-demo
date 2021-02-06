import {useEffect,useState} from 'react';


import Card from './Card'
// Function name matches file name
const Cards = () => {
  // return must have one parent element
  const [cards,setCards]=useState();
  useEffect(()=>{getCards(8)},[])

  //helper function
    const getCards=(n)=>{
        let temp=[];
        for (let i=0;i<n;i++){
            temp.push(
                <Card name="Bulbasaur" type="Grass"/>
            )
        }
        setCards(temp)
    }

  return (
    <div className="container">
      <div className="row justify-content-center">
       {cards}
      </div>
    </div>
  );
};

// Makes it available for import
export default Cards;
