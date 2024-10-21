"use client";

import emojiFlags from "emoji-flags";
import Link from "next/link";
import { Player } from "../types";

export function PlayerListData({ player }: { player: Player }) {
    const flag = emojiFlags.countryCode(player.flag)?.emoji || "";

    return (
        <Link href={`/players/${player.id}`}>
            <div className="rounded-lg bg-gray-800 p-4">
                <h2 className="">{`${player.name}`}</h2>
                <p>{`${flag} ${player.birthplace}`}</p>
            </div>
        </Link>
    );
}
