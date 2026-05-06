import trainerSprite from '../assets/trainer-sprite.png'

function TrainerCard(){
    return(
        <div className="trainerCardContainer">
            <img src={trainerSprite} className="trainerCard" alt="trainer-card"></img>
        </div>
    );
}
export default TrainerCard