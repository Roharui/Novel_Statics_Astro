import React, { useState, useEffect } from "react";

import "../../styles/search-result.css";

import { NovelInfo } from "./summary/NovelInfo";
import { NovelDataSummary } from "./summary/NovelDataSummary";

import type { NovelStatistics } from "../../interfaces/novel.type";
import { EpisodeChart } from "./charts/EpisodeChart";
import { GrowthChart } from "./charts/GrowthChart";

export function ResultPage({ data }: { data: NovelStatistics }) {
  return (
    <div className="content">
      <div className="summary">
        <NovelInfo novel={data.novel} />
        <NovelDataSummary data={data} />
      </div>
      <div className="novel-statics">
        <EpisodeChart data={data} />
        <GrowthChart data={data} />
      </div>
    </div>
  );
}
