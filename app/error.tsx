"use client"
import { useParams, useSearchParams, usePathname } from "next/navigation";
interface ErrorProps {
    name: string,
    result: () => {}
}
export const revalidate = 0;
export default function Error(error: ErrorProps) {

    // const router = useRout
    return <div>An Error {error.name}</div>
}