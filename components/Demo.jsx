import { useEffect, useState } from "react";

import { copy, linkIcon, loader, tick } from "../src/assets/";

const Demo = () => {
  const [article, setArticle] = useState("");
  const [browserHistory, setBrowserHistory] = useState([]);

  const handleSubmit = (e) => {
    e.preventDefault();
    setBrowserHistory([...browserHistory, article]); // Add the new article to browserHistory
    setArticle(""); // Reset the input field after submission
  };

  const handleChange = (e) => {
    setArticle(e.target.value);
  };

  return (
    <section className="mt-16 w-full max-w-xl">
      {/* Search */}
      <div className="flex flex-col w-full gap-2"></div>
      <form
        className="relative flex justify-center items-center"
        onSubmit={handleSubmit}
      >
        <img
          src={linkIcon}
          alt="link_icon"
          className="absolute left-0 my-2 ml-3 w-5"
        ></img>
        <input
          type="url"
          placeholder="Enter a URL"
          value={article}
          onChange={handleChange}
          required
          className="url_input peer"
        ></input>
      </form>
      {browserHistory.length > 0 ? (
        <section id="history_Container" className="mt-8">
          <table className="table-auto text-left">
            <thead>
              <tr>
                <th>Your URL-History:</th>
              </tr>
            </thead>
            <tbody id="browserHistory">
              {browserHistory.map((url, index) => (
                <tr key={index}>
                  <td>{url}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </section>
      ) : null}
    </section>
  );
};

export default Demo;
