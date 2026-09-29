"use client";

import Link from "next/link";
import Image from "next/image";
import { useEffect, useState } from "react";

const nepaliMonthStarts = [
  { date: "2026-04-14", month: "बैशाख", year: 2083 },
  { date: "2026-05-15", month: "जेठ", year: 2083 },
  { date: "2026-06-15", month: "असार", year: 2083 },
  { date: "2026-07-17", month: "साउन", year: 2083 },
  { date: "2026-08-17", month: "भदौ", year: 2083 },
  { date: "2026-09-17", month: "असोज", year: 2083 },
  { date: "2026-10-18", month: "कात्तिक", year: 2083 },
  { date: "2026-11-17", month: "मंसिर", year: 2083 },
  { date: "2026-12-17", month: "पुस", year: 2083 },
  { date: "2027-01-15", month: "माघ", year: 2083 },
  { date: "2027-02-14", month: "फागुन", year: 2083 },
  { date: "2027-03-16", month: "चैत", year: 2083 },
];

function toNepaliDigits(value: number) {
  return String(value).replace(/\d/g, (digit) => "०१२३४५६७८९"[Number(digit)]);
}

function formatNepaliDate(now: Date | null, dateKey: string) {
  if (!now || !dateKey) return "";

  const today = Date.parse(`${dateKey}T00:00:00Z`);
  const monthStart = [...nepaliMonthStarts]
    .reverse()
    .find((month) => Date.parse(`${month.date}T00:00:00Z`) <= today);

  if (!monthStart) return "";

  const monthDay = Math.floor(
    (today - Date.parse(`${monthStart.date}T00:00:00Z`)) / 86_400_000,
  ) + 1;
  const weekday = new Intl.DateTimeFormat("ne-NP", {
    timeZone: "Asia/Kathmandu",
    weekday: "long",
  }).format(now);

  return `${weekday} · ${monthStart.month} ${toNepaliDigits(monthDay)}, ${toNepaliDigits(monthStart.year)}`;
}

function NepalClock() {
  const [now, setNow] = useState<Date | null>(null);

  useEffect(() => {
    const update = () => setNow(new Date());
    update();
    const interval = window.setInterval(update, 1000);
    return () => window.clearInterval(interval);
  }, []);

  const date = now
    ? new Intl.DateTimeFormat("en-GB", {
        timeZone: "Asia/Kathmandu",
        day: "2-digit",
        month: "short",
        year: "numeric",
      }).format(now)
    : "-- --- ----";
  const time = now
    ? new Intl.DateTimeFormat("en-GB", {
        timeZone: "Asia/Kathmandu",
        hour: "2-digit",
        minute: "2-digit",
        second: "2-digit",
        hour12: false,
      }).format(now)
    : "--:--:--";
  const todayParts = now
    ? new Intl.DateTimeFormat("en", {
        timeZone: "Asia/Kathmandu",
        year: "numeric",
        month: "2-digit",
        day: "2-digit",
      }).formatToParts(now)
    : [];
  const todayKey = ["year", "month", "day"]
    .map((type) => todayParts.find((part) => part.type === type)?.value ?? "")
    .join("-");
  const nepaliDate = formatNepaliDate(now, todayKey);
  const nextHoliday = [{ date: "2026-10-17", name: "Phulpati", dateLabel: "17 Oct" }]
    .find((holiday) => holiday.date >= todayKey);

  return (
    <>
      <time className="nepal-clock" dateTime={now?.toISOString()}>
        <span className="nepal-clock-date">{date}</span>
        <span className="nepal-clock-bs" lang="ne">{nepaliDate}</span>
        <span className="nepal-clock-time">{time}</span>
        <span className="nepal-clock-zone">NPT · UTC+05:45</span>
      </time>
      <a
        className="un-holiday-calendar"
        href="/united-nations-holiday.ics"
        download
        aria-label="Download United Nations holiday calendar"
        title="Download United Nations holiday calendar"
      >
        <span className="un-holiday-calendar-label">UNITED NATIONS HOLIDAY</span>
        <span className="un-holiday-calendar-format">.ICS ↗</span>
      </a>
      <a
        className="nepal-holiday"
        href="https://moha.gov.np/en/page/government-and-public-holidays-in-2083"
        aria-label={nextHoliday ? `Upcoming Nepal holiday: ${nextHoliday.name}, ${nextHoliday.dateLabel}` : "View Nepal public holiday calendar"}
        title="View the official Nepal public holiday calendar"
      >
        <span className="nepal-holiday-label">{nextHoliday ? "UPCOMING HOLIDAY" : "NEPAL HOLIDAYS"}</span>
        <span className="nepal-holiday-name">
          {nextHoliday ? `${nextHoliday.name} · ${nextHoliday.dateLabel}` : "View calendar ↗"}
        </span>
      </a>
    </>
  );
}

export default function Navbar() {
  return (
    <>
      <div className="navbar-meta" aria-label="Nepal time and upcoming holidays">
        <div className="container navbar-meta-inner">
          <NepalClock />
        </div>
      </div>
      <header className="navbar">
        <div className="container navbar-inner">
        <Link href="/" className="logo">
          <span className="logo-word">MILAN<span>.</span></span>
          <span className="logo-flag">
            <Image
              src="/images/nepal-flag.webp"
              className="logo-flag-image logo-flag-animated"
              alt="Nepal flag"
              width={25}
              height={31}
              unoptimized
            />
            <svg className="logo-flag-image logo-flag-static" viewBox="0 0 36 42" aria-hidden="true">
              <path fill="#173b8f" d="M4 3h29L18 17h12L12 38H4z" />
              <path fill="#dc143c" d="M5.5 4.5h23.8L16.5 15.5H5.5zm0 12h21.3L11.5 36H5.5z" />
              <path fill="#fff" d="M11 8.2a3 3 0 1 0 3 4.8 3.8 3.8 0 1 1-3-4.8zm.8 13.4.8 2.2 2.3.1-1.8 1.4.7 2.2-2-1.3-1.9 1.3.7-2.2-1.8-1.4 2.3-.1z" />
            </svg>
          </span>
        </Link>

          <div className="navbar-right">
            <nav className="navigation">
              <Link href="/about">About</Link>
              <Link href="/work">Work</Link>
              <Link href="/services">Services</Link>
              <Link href="/impact">Impact</Link>
              <Link href="/contact">Contact</Link>
            </nav>
          </div>
        </div>
      </header>
    </>
  );
}
