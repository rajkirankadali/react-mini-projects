import profilePic from './assets/Small-pf.jpg'

function Card(){


    return(
        <>
        <h4>*1) Learnt how to make a Card Component in React*</h4>
        <div className="card">
            <img className="card-img" src={profilePic} alt="Bomma" />
            <h2 className='card-title' >Raj Kiran Kadali</h2>
            <p className='card-text' ><b><i>Praise the Lord Guyzzz</i></b><br /> Hallo! ich bin Raj. Ich bin Frontend Entwickler… ich mache Webseiten so gut, dass sogar dein Browser sich verliebt 😉</p>
        </div>
        </>
        
    );
}

export default Card;