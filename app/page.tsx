'use client';

import Form from "@/components/Form";
import ShortURLField from "@/components/ShortURLField";
import { isURLShortSuccessAtom } from "@/lib/atoms/shortURL";
import { useAtomValue } from "jotai";

export default function Home() {
  const isURLShortSuccess = useAtomValue(isURLShortSuccessAtom);

  return (
    <section>
      <Form />
      {isURLShortSuccess && <ShortURLField />}
    </section>
  );
}
