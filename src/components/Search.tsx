import React, { useState } from "react";

import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import "../styles/search-input.css";

const showError = (text: string) =>
  toast.error(text, {
    position: "bottom-center",
    autoClose: 5000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
    theme: "dark",
  });

const HOSTS = {
  "novel.munpia.com": (url: URL) => `/munpia${url.pathname}`,
  "novelpia.com": (url: URL) =>
    `/novelpia/${url.pathname.replace("/novel/", "")}`,
};

export function SearchInput() {
  const [search, setSearch] = useState("");
  const [color, setColor] = useState("");

  const clickFn = () => {
    try {
      const url = new URL(search);

      if (Object.keys(HOSTS).includes(url.hostname)) {
        location.pathname = (HOSTS as Record<string, any>)[url.hostname](url);
      } else {
        throw new TypeError();
      }
    } catch (e) {
      if (e instanceof TypeError) {
        showError("올바른 주소가 아닙니다.");
      }
      setColor("#FFD2D2");
    }
  };

  return (
    <div
      className="search-frame-input"
      style={{ backgroundColor: color ?? "#FFF" }}
    >
      <div className="search-input">
        <input
          style={{ backgroundColor: color ?? "#FFF" }}
          onChange={(e) => setSearch(e.target.value)}
          id="search-input"
          className="input"
          placeholder="문피아 또는 노벨피아 소설 링크를 입력해주세요"
        />
      </div>
      <img
        onClick={clickFn}
        src="/assets/search.svg"
        className="-basic-search"
        id="search-btn"
      />
      <ToastContainer
        position="bottom-center"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="dark"
      />
    </div>
  );
}
