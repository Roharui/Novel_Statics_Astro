import React, { useState, useEffect } from "react";
import type { NovelStatistics, Rate } from "../../../interfaces/novel.type";
import { SummaryRate } from "./NovelSummaryRate";

export function NovelDataSummary({ data }: { data: NovelStatistics }) {
  const { reader_prefer, view_avg, reading_rate, upload_rate, novel } = data;
  const { type } = novel;
  return (
    <div className="novel-statics-summary">
      <SummaryRate rate={reader_prefer} platform={type} name={"독자 선호도"} />
      <SummaryRate
        rate={view_avg}
        platform={type}
        name={"평균 조회수"}
        suffix=""
      />
      <SummaryRate
        rate={reading_rate}
        platform={type}
        name={"연독률 (독자 이탈율)"}
      />
      <SummaryRate rate={upload_rate} platform={type} name={"일일 연재율"} />
    </div>
  );
}
