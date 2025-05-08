"use client";

import { useRouter } from "next/navigation";
import { Button } from "@/components/ui/button";

export default function HeaderNavigationButton({ name, path}) {

const router = useRouter();

const handleClick = () => {
    router.push(path);
}
    return (
        <Button onClick={handleClick}>
            {name}
        </Button>
    )
}