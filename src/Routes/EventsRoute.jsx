import RouteTemplate from "../Components/RouteTemplate";

export default function EventsRoute(){
    return <RouteTemplate>
        <article className="text-red-800 font-bold text-[1.2rem] bg-red-400 py-5 rounded-lg mt-5">
            <p>NO HAY EVENTOS A LA FECHA</p>
        </article>
        {/* <article className="w">
            <h2 className="text-left font-bold text-2xl">Culto especial de niños</h2>
            <p className="text-left">
                Te invitamos a un culto muy especial dedicado a nuestros niños. Será un tiempo lleno de alegría, canciones, juegos, y un mensaje sencillo pero poderoso sobre el amor de Dios.💖
                <br/>
                📅 Fecha: 02/05/2027<br/>
                🕒 Hora: 18:00hs<br/>
                📍 Lugar: Av. Juan Ramón Vidal<br/>
                <br/>
                Vení con tu familia y amigos, y dejá que los más pequeños descubran cuánto los ama Jesús. ¡No te lo podés perder! 🙌✨
            </p>
        </article> */}
    </RouteTemplate>
}