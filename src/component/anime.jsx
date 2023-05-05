import React from "react"; 

const Anime =()=>{
    const [items, setItems]= React.useState([]); 

    React.useEffect(()=> { 

        fetch("https://animechan.vercel.app/api/quotes/anime?title=haikyuu")
        .then((response) => response.json())
        .then((json) => {
            setItems(json);
        });

    }, []);

    return(
        <div className="anime">
            <h1>Quotes from haikyuu: the vollyball anime</h1>

            {items.map((item)=>(
                <ul key={item.id}>
                    <li>
                        Charchter: {item.character}
                        <br/> 
                        Quote: {item.quote}
                    </li>
                </ul>
            ))}
        </div>
    );
};

export default Anime; 