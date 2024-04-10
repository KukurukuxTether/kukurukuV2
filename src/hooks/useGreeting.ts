import { useEffect, useState } from "react";

const useGreeting = () => {
  const [greeting, setGreeting] = useState<"morning" | "afternoon" | "evening">(
    "morning",
  );

  useEffect(() => {
    const date = new Date();
    const hour = date.getHours();
    if (hour < 12) {
      setGreeting("morning");
    } else if (hour < 17) {
      setGreeting("afternoon");
    } else {
      setGreeting("evening");
    }
  }, []);

  return {
    greeting,
  };
};

export default useGreeting;
