import { useEffect, useState } from "react";

const useClickOutside = (divRef) => {
  const [isClickOutside, setIsClickOutside] = useState(false);

  useEffect(() => {
    document.addEventListener("click", handleClick);
    return () => document.removeEventListener("click", handleClick);
    function handleClick(e) {
      if (divRef && divRef.current) {
        const ref = divRef.current;
        if (!ref.contains(e.target)) {
          setIsClickOutside(false);
        }
      }
    }
  }, [divRef]);
  return [isClickOutside, setIsClickOutside];
};

export default useClickOutside;
