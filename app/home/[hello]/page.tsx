
import { Metadata } from "next";
import { useParams } from "next/navigation"

export const revalidate = 0;

interface PageProps {
    params: { topic: string }
}

export function generateMetadata({ params: { topic } }: PageProps): Metadata {
    return { title: topic };
}


export function generateStaticParams() {
    return ["you", "me", "we"].map(hello => ({ hello }))
}

export default function Page({ params: { topic } }: PageProps) {

    return <div>{topic}</div>
}