import React, { useState, useEffect } from "react";
import config from "../../Resources/config.json";
import axios from "axios";
function Page(props) {
  const [Imgs, setresImgs] = useState([]);

  useEffect(() => {
    async function fetchMyAPI() {
      let { data: Imgs } = await axios.get(config.apiEndpoint);
      //console.log(Imgs);
      setresImgs(Imgs);
    }
    fetchMyAPI();
  }, []);
  console.log(Imgs);
  return (
    <div>
      {Imgs.slice(0, 5).map((item, index) => {
        return <img alt={item.title} src={item.url} />;
      })}
    </div>
  );
}

export default Page;
