import { useState } from "react";
import axios from "axios";

export const useNextCall = (
  initialArray: any,
  initialNextUrl: string | null,
  params: string = ""
) => {
  const [items, setItems] = useState<any[]>([...initialArray]);
  const [nextUrl, setNextUrl] = useState<string | null>(initialNextUrl);

  const fetchMore = async () => {
    const { data } = await axios.post(
      `http://localhost:3000/api/spotify/nextCall`,
      { nextUrl, params }
    );
    setItems(items.concat(data.items));
    setNextUrl(data.next);
  };

  return { fetchMore, items, nextUrl };
};
