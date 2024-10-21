import { PlayerListData } from "@/src/components";
import { Player } from "@/src/types";
import playersData from "../../src/data/players.json";

export default function Players() {
    return (
        <div>
            <p>PLAYERS</p>
            <div className="grid grid-cols-2 justify-between gap-4 lg:grid-cols-4">
                {playersData?.map((player: Player) => (
                    <PlayerListData player={player} key={player.id} />
                ))}
            </div>
        </div>
    );
}
