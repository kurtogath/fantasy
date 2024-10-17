"use client";

import { Player } from "../types";

export function PlayerDescription({
    player,
    flag,
}: {
    player: Player;
    flag: string;
}) {
    return (
        <p>
            {`${player.name} con el dorsal ${player.dorsal} nacido el ${player.birthday} en ${player.birthplace} ${flag}. 
          Juega de ${player.position} en el ${player.team}`}
        </p>
    );
}
