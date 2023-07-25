import axios from "axios";
import { useEffect, useState } from "react";
import baseUrl from "../constant/baseUrl";

export interface IGroceryItem {
  name: string;
  _id: string;
  user_id: number;
}

export default () => {
  const [items, setItems] = useState<IGroceryItem[]>([]);
  const [loading, setloading] = useState(false);
  useEffect(() => {
    getGroceryItems();
  }, []);

  const getGroceryItems = async () => {
    try {
      setloading(true);
      const res = await axios({
        url: baseUrl + "/grocery",
      });
      console.log(res);

      setItems(res.data);
    } catch (error) {
      console.log(error);
    } finally {
      setloading(false);
    }
  };
  return {
    loading,
    items,
  };
};
