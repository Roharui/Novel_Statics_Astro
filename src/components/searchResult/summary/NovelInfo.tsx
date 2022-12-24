import React, { useState, useEffect } from "react";
import type { Novel } from "../../../interfaces/novel.type";

export function NovelInfo({ novel }: { novel: Novel }) {
  const createDate = new Intl.DateTimeFormat("ko-KR").format(
    new Date(novel.created_at)
  );
  const updateDate = new Intl.DateTimeFormat("ko-KR").format(
    new Date(novel.updated_at)
  );

  return (
    <div className="novel-summary">
      <div className="thumbnail">
        <img src={novel.thumbnail} />
      </div>
      <div className="novel-info">
        <div className="title-type">
          <div className="title">
            <span className="title-name">{novel.title}</span>
            <div className="artist-tags">
              <span className="artist-name">작가 : {novel.author}</span>
              {novel.is_plus ? (
                <div className="ex-tag plus-tag">PLUS</div>
              ) : null}
              {novel.age_limit === 15 ? (
                <div className="ex-tag age-tag-15">15</div>
              ) : null}
              {novel.age_limit === 19 ? (
                <div className="ex-tag age-tag-19">19</div>
              ) : null}
              {novel.is_end ? <div className="ex-tag end-tag">완결</div> : null}
            </div>
          </div>
          <div className="logo">
            <a href={novel.link}>
              {novel.type === "NOVELPIA" ? (
                <img src="/assets/novelpia.png" id="novelpia" />
              ) : (
                <img src="/assets/munpia.png" id="munpia" />
              )}
            </a>
          </div>
        </div>
        <div className="description">{novel.description}</div>
        <div className="renewal-date">
          <span>등록일자 : {createDate}</span>
          <span>갱신일자 : {updateDate}</span>
        </div>
      </div>
    </div>
  );
}
