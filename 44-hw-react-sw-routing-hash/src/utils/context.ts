import React from "react";
import { Item } from "./types";

export const SWContext = React.createContext(
    {
        changePage: (item: Item) => {}
    }
)