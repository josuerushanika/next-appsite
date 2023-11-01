'use client';

import { useSearchParams } from "next/navigation";

export default function Page() {
    const searchParams = useSearchParams();
    const queryString = searchParams.toString();
    console.log(`queryString`, queryString);

    const selections = queryString.split('&')

    return  <div> Result </div>;
}