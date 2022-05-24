import { useEffect, useState } from "react";
import { useTheme } from "@emotion/react";

export const useNavColor = () => {
  const theme = useTheme();
  const [background, setBackground] = useState<string>("");

  const handleResize = () => {
    if (window.scrollY >= 100 && window.scrollY < 200) {
      setBackground("rgba(7, 7, 7, 0.5)");
    } else if (window.scrollY >= 200) {
      setBackground(theme.colors["black-highlight"]);
    } else {
      setBackground("transparent");
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleResize);
    return () => window.removeEventListener("scroll", handleResize);
  }, [handleResize]);

  return { background };
};
