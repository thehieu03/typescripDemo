import type {JSX} from "react";

export interface Items {
    icon?: JSX.Element;
    title: string;
    to?: string;
    code?: string;
    children?: {
        title: string;
        data: Items[];
    }
}