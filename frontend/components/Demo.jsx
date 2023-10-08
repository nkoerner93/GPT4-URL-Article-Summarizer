import { useEffect, useState } from "react";
import { useLazyGetSummaryQuery } from "../src/services/article";
import { copy, linkIcon, loader, tick } from "../src/assets/";
import { fetchBaseQuery } from "@reduxjs/toolkit/query";
import fetchDatabase from "../utils/fetchDatabase.js";

const Demo = () => {
  // Get API URL from .env
  const api = import.meta.env.VITE_BACKEND_API;

  const [article, setArticle] = useState({
    url: "",
    summary: "",
  });
  const [allArticles, setAllArticles] = useState([]);
  const [copied, setCopied] = useState("");

  // RTK lazy query
  const [getSummary, { error, isFetching }] = useLazyGetSummaryQuery();

  // Load data from localStorage on mount
  useEffect(() => {
    const articlesFromLocalStorage = JSON.parse(
      localStorage.getItem("articles")
    );

    if (articlesFromLocalStorage) {
      setAllArticles(articlesFromLocalStorage);
    }
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const getSummaries = await fetchDatabase(api, "GET", article.url);
      // Check if Database entry
      if (getSummaries.url === article.url) {
        console.log("Database Eintrag existiert und ist nicht null");
        // If data is not null (entry found in the database), use it
        console.log(`${getSummaries.url} + ${getSummaries.summary}`);
        setArticle({ url: getSummaries.url, summary: getSummaries.summary });
      } else {
        console.log("Database Eintrag existiert nicht - fetche von rapidAPI");
        const { data } = await getSummary({ articleURL: article.url });
        if (data?.summary) {
          const newArticle = { ...article, summary: data.summary };
          const updatedAllArticles = [newArticle, ...allArticles];
          fetchDatabase(api, "POST", newArticle);
          // update state and local storage
          setArticle(newArticle);
          setAllArticles(updatedAllArticles);
          localStorage.setItem("articles", JSON.stringify(updatedAllArticles));
        }
      }
    } catch (error) {
      // Handle any errors from fetchData or other code
      console.error(error);
    }
  };

  // copy the url and toggle the icon for user feedback
  const handleCopy = (copyUrl) => {
    setCopied(copyUrl);
    navigator.clipboard.writeText(copyUrl);
    setTimeout(() => setCopied(false), 3000);
  };

  const handleKeyDown = (e) => {
    if (e.keyCode === 13) {
      handleSubmit(e);
    }
  };

  return (
    <section className="mt-16 w-full max-w-3xl">
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

      {/* Browse History */}
      <div className="flex flex-col gap-1 max-h-60 overflow-y-auto">
        {allArticles.reverse().map((item, index) => (
          <div
            key={`link-${index}`}
            onClick={() => setArticle(item)}
            className="link_card"
          >
            <div className="copy_btn" onClick={() => handleCopy(item.url)}>
              <img
                src={copied === item.url ? tick : copy}
                alt={copied === item.url ? "tick_icon" : "copy_icon"}
                className="w-[40%] h-[40%] object-contain"
              />
            </div>
            <p className="flex-1 font-satoshi text-blue-700 font-medium text-sm truncate">
              {item.url}
            </p>
          </div>
        ))}
      </div>

      {/* Display Result */}
      <div className="my-10 max-w-full flex justify-center items-center">
        {isFetching ? (
          <img src={loader} alt="loader" className="w-20 h-20 object-contain" />
        ) : error ? (
          <p className="font-inter font-bold text-black text-center">
            Well, that wasn't supposed to happen...
            <br />
            <span className="font-satoshi font-normal text-gray-700">
              {error?.data?.error}
            </span>
          </p>
        ) : (
          article.summary && (
            <div className="flex flex-col gap-3">
              <h2 className="font-satoshi font-bold text-gray-600 text-xl text-center">
                Article <span className="blue_gradient">Summary</span>
              </h2>
              <div className="summary_box">
                <p className="font-inter font-normal text-sm text-gray-500 leading-7">
                  {article.summary}
                </p>
              </div>
            </div>
          )
        )}
      </div>
    </section>
  );
};

export default Demo;
