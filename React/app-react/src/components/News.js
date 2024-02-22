

function News(){
    const newsPosts = [
        {
            title: "Último Momento",
            content: "Una noticia de último momento súper importante",
            imageUrl: "https://img-s-msn-com.akamaized.net/tenant/amp/entityid/BB1i8pCn.img" 
        }, 
        {
            title: "Noticia secundaria",
            content: "A nadie le importa",
            imageUrl: "https://viapais.com.ar/resizer/w_aFbYkjudK5R2wnfSVZDqnp5FE=/980x640/smart/filters:quality(75):format(webp)/cloudfront-us-east-1.images.arcpublishing.com/grupoclarin/53HGJV32SNFFDAUO227Q62P3RY.jpg"
        },
        {
            title: "¿Dónde está Wally?",
            content: "Encontrá a Wally en la siguiente imagen.",
            imageUrl: "https://media.traveler.es/photos/6137735986b46eac7cf5a92f/master/w_1600,c_limit/121326.png"
        }
    ];

    return(
        <div className="news-list row">
            {newsPosts.map((nw, index)=>(
                <div className="col" key={index} index={index} news={nw}>
                   <h4> {nw.title}</h4>
                   <p>{nw.content}</p>
                   <img src={nw.imageUrl} alt={nw.title}  width="20%"/>
                </div>
            ))}

        </div>
    )

};

export default News;