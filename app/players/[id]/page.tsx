import emojiFlags from "emoji-flags";
import { PlayerDescription } from "../../../src/components/PlayerDescription";
import playersData from "../../../src/data/players.json";
import { Player } from "../../../src/types";

export default function Teams({ params }: { params: { id: string } }) {
    const { id } = params;
    const player: Player | undefined = playersData.find(
        (p: Player) => p.id === id,
    );

    if (!player) {
        return <div>Jugador no encontrado</div>;
    }

    const flag = emojiFlags.countryCode(player.flag)?.emoji || "";

    return (
        <div className="">
            <main className="">
                <PlayerDescription player={player} flag={flag} />
            </main>
        </div>
    );
}
