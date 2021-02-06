import Bulbasaur from "../assets/demo.png";

const Card=(props)=>{
    const styles={
        card:{
            "min-width": "100px",
            "max-width": "250px"
        },
        image:{
            "margin": "auto",
            "margin-top": "20px",
            "max-width": "100px",
            "max-height": "100px"
        }
    }


    
    return(
        <div className="card" style={styles.card}>
        <img
          src={Bulbasaur}
          className="img-thumbnail"
          style={styles.image}
          alt="..."
        />
        <div className="card-body  text-center">
          <h5 className="card-title">{props.name}</h5>
          <p className="card-text">Type - {props.type}</p>
          <a href="#" className="btn btn-primary">
            Abilities
          </a>
        </div>
      </div>
    )
}

export default Card;