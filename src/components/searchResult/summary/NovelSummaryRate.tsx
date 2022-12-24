import React, { useState, useEffect } from "react";

import type { Rate } from "../../../interfaces/novel.type";

const PLATFORM: Record<string, string> = {
  NOVELPIA: "노벨피아",
  MUNPIA: "문피아",
};

export function SummaryRate({
  rate,
  platform,
  name,
  suffix = "%",
}: {
  rate: Rate;
  platform: string;
  name: string;
  suffix?: string;
}) {
  return (
    <div className="summary-rate">
      <div className="rate-title">
        <span>{name}</span>
        <div className="calc-info"></div>
      </div>
      <div className="rate-summary">
        <div className="novel-summary-info">
          <span className="summary-title">해당 소설</span>
          <span className="summary-info">
            {rate.cur}
            {suffix}
          </span>
          <span className="cur-percentage">상위 {rate.percentage}%</span>
        </div>
        <div className="avg-info">
          <div className="total-avg">
            <span className="summary-title">전체 평균</span>
            <span className="summary-info ex-info">
              {rate.avg}
              {suffix}
            </span>
          </div>
          <div className="platform-avg">
            <span className="summary-title">{PLATFORM[platform]} 평균</span>
            <span className="summary-info ex-info">
              {rate.content_avg}
              {suffix}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}
