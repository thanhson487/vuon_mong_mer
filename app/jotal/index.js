import { atom } from "jotai";

const localStorageEffect = (key , initialValue =[]) => {
  const getStoredValue = ()  => {
    if (typeof window !== "undefined") {
      try {
        const storedValue = localStorage.getItem(key);
        return storedValue ? JSON.parse(storedValue) : initialValue;
      } catch (error) {
        console.error("Error reading localStorage", error);
        return initialValue;
      }
    }
    return initialValue; // Luôn trả về mảng rỗng nếu không đọc được localStorage
  };

  const baseAtom = atom(getStoredValue());

  const derivedAtom = atom(
    (get) => get(baseAtom),
    (get, set, newValue) => {
      set(baseAtom, Array.isArray(newValue) ? newValue : []);
      if (typeof window !== "undefined") {
        try {
          localStorage.setItem(key, JSON.stringify(newValue));
        } catch (error) {
          console.error("Error writing to localStorage", error);
        }
      }
    }
  );

  return derivedAtom;
};

// Tạo atom lưu giỏ hàng vào localStorage
export const shoppingCartAtom = localStorageEffect("shoppingCart", []);
