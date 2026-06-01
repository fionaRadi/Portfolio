"use client";

import { useState } from "react";

export default function Bouton() {
    const [active, setActive] = useState(false);

    return (
        <button
            type="button"
            onClick={() => setActive((value) => !value)}
            className={`bg-white border border-gray-300 px-8 py-4 rounded-full hover:bg-gray-100 transition-colors duration-300 ${active ? "text-blue-600" : "text-black"}`}
        >
            Cliquez-moi
        </button>
    );
}