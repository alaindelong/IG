import React from "react";
import Map from "./Map"

function Home(){
    return(
        <div className="row p-4" style={{minHeight:"60em"}}>
            <div className="col-xs-12 col-sm-6 mr-2">
                <h5 style={{color:"orangered"}}>Organizza il tuo itinerarion sulla Via Portoghese in Galicia</h5>
                <p className="mt-4">
                Questo itinerario si snoda verso ovest costeggiando il fiume Miño, 
                fino a raggiungere il suo ampio estuario. A dominare il paesaggio 
                troviamo il monte di Santa Trega, belvedere che domina l'Atlantico 
                e il Portogallo, famoso per l'incredibile castro 
                (insediamento fortificato di origine celtica), parzialmente scavato, 
                un grande villaggio che giunse al suo culmine durante la romanizzazione.
                 Alle pendici del monte il porto di A Guarda offre riparo alla sua flotta peschereccia.
                </p>
                <p>
                L'itinerario prosegue verso nord, parallelamente alla linea della costa, 
                scoscesa e agreste. Si passa da Oia, località portuale famosa per il suo 
                monastero Cistercense; la chiesa medievale si conserva in buono stato e presenta 
                una nobile facciata barocca. Il cammino doppia Cabo Silleiro per penetrare in 
                un territorio più protetto, la splendida Ría di Vigo. Si arriva prima a Baiona, 
                località storica dalle incantevoli strade e piazze, con una chiesa del XIII secolo , 
                una cappella barocca dedicata a santa Liberata e la spettacolare fortezza di Monterreal, 
                oggi Parador de turismo. 
                È stata la prima località a conoscere l'esito del primo viaggio di Colombo in America, 
                quando, il 28 febbraio 1493, entrò nel porto la caravella Pinta.
                </p>
                <div>
                    <img src="/cammino.jpg" alt=""/>
                </div>
            </div>
            <div className="col-xs-12 col-sm-6">
                <Map/>
            </div>
        </div>
    )
}
export default Home