import { useEffect, useState } from "react";

import { copy, linkIcon, loader, tick } from "../src/assets/";
import copyToClipboard from "../utils/CopyToClipboard";

const Demo = () => {
  const [article, setArticle] = useState({ url: "", summary: "" });
  const [browserHistory, setBrowserHistory] = useState([]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setBrowserHistory([...browserHistory, article.url]); // Add the new article to browserHistory
    setArticle({ url: "", summary: "" }); // Reset the input fields after submission
    alert("Submitted");
  };

  const handleChange = (e) => {
    setArticle({ ...article, url: e.target.value });
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
          value={article.url}
          onChange={(e) => {
            setArticle({ ...article, url: e.target.value });
          }}
          required
          className="url_input peer valid:border-green-400"
        ></input>
        <button
          type="submit"
          className="submit_btn peer-focus:border-gray-700 peer-focus:text-gray-700 "
        >
          <p>↵</p>
        </button>
      </form>

      {/* Show Browser History */}
      {browserHistory.length > 0 ? (
        <section id="history_Container" className="mt-8">
          <table className="table-auto text-left w-full rounded-md border-spacing-2">
            <thead>
              <tr className="">
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

      {/* Display Results */}
    </section>
  );
};

export default Demo;
