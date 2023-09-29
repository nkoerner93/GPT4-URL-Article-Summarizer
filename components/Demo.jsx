import { useEffect, useState } from "react";

import { copy, linkIcon, loader, tick } from "../src/assets/";
import copyToClipboard from "../utils/CopyToClipboard";
import { AiOutlineEnter } from "react-icons/ai";

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
          className="url_input peer valid:border-green-400"
        ></input>
        <span className="absolute right-2 invisible peer-focus:visible">
          <AiOutlineEnter />
        </span>
      </form>
      {browserHistory.length > 0 ? (
        <section id="history_Container" className="mt-8">
          <table className="table-auto text-left w-full">
            <thead>
              <tr className=" bg-slate-100">
                <th>Your URL-History:</th>
              </tr>
            </thead>
            <tbody id="browserHistory">
              {browserHistory.map((url, index) => (
                <tr key={index}>
                  <td>
                    <a href={url} target="_blank">
                      {url}
                    </a>
                  </td>
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
