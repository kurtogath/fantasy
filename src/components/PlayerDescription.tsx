"use client";

import { ArrowLeftIcon } from "@heroicons/react/24/outline";
import Link from "next/link";
import { Player } from "../types";

export function PlayerDescription({
    player,
    flag,
}: {
    player: Player;
    flag: string;
}) {
    return (
        <div className="flex flex-col">
            <div className="flex justify-center pb-5">
                <img
                    src={player.img}
                    alt={player.name}
                    className="h-auto max-w-full rounded-lg object-scale-down md:w-1/3"
                />
            </div>
            <p>
                {`${player.name} con el dorsal ${player.dorsal} nacido el ${player.birthday} en ${player.birthplace} ${flag}. 
            Juega de ${player.position} en el ${player.team}. Mide ${player.height} cm `}
            </p>
            <div className="w-auto">
                <Link className="right-0" href={`/players`}>
                    <div className="flex">
                        <ArrowLeftIcon className="mr-2 w-5" />
                        Mas jugadores
                    </div>
                </Link>
            </div>
        </div>
    );
}
