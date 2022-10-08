import { useEffect } from "react";

// Use url hook
const useUrl = (url, convert, setState) => {
  useEffect(() => {
    // IIFE fetch
    (async function () {
      try {
        // Get data
        const response = await fetch(url);
        const data = await response.json();
        // Set data
        setState(convert(data));
      } catch (err) {
        console.log(url, err);
      }
    })();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
};

// Export
export { useUrl };
