"use client";

import { useEffect, useState } from "react";

type TypewriterTextProps = {
  words: string[];
};

export function TypewriterText({ words }: TypewriterTextProps) {
  const [wordIndex, setWordIndex] = useState(0);
  const [displayText, setDisplayText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const currentWord = words[wordIndex] ?? "";
    const shouldPause = !isDeleting && displayText === currentWord;
    const shouldSwitch = isDeleting && displayText.length === 0;

    if (shouldSwitch) {
      setIsDeleting(false);
      setWordIndex((current) => (current + 1) % words.length);
      return;
    }

    const timeout = window.setTimeout(
      () => {
        if (shouldPause) {
          setIsDeleting(true);
          return;
        }

        setDisplayText((current) =>
          isDeleting
            ? currentWord.slice(0, current.length - 1)
            : currentWord.slice(0, current.length + 1)
        );
      },
      shouldPause ? 1200 : isDeleting ? 35 : 55
    );

    return () => window.clearTimeout(timeout);
  }, [displayText, isDeleting, wordIndex, words]);

  return (
    <span className="inline-flex min-h-9 items-center text-accent">
      {displayText}
      <span className="ml-1 inline-block h-7 w-px bg-accent" aria-hidden="true" />
    </span>
  );
}
