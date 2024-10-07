"use client";
import Carousel from "@/components/dashboard/Carousel";
import { useLocale } from "@/contexts/LocaleContext";
import useTranslation from "@/hooks/useTranslation";
import KGrid from "@/uikit/Grid";
import KInput from "@/uikit/Input";
import { Grid } from "@mui/material";
import Link from "next/link";
import { useContext, useState } from "react";
// import { Test } from 'vite-app/UI-Base/src';
import { TestA } from "vite-app/UI-Base";

export default function Dashboard() {
  const { t } = useTranslation();
  const { locale, setLocale } = useLocale();
  console.log("locale", locale);
  const [count, setCount] = useState<number>(0);

  return (
    <div>
      {/* <TestA/> */}
      {/* <button>{locale}</button>
      <div>{t("welcome")}</div>; */}
      <div className="h-14">
        <div className="container h-full">
          <ul className="float-left flex items-center space-x-1  h-full">
            <li>Đăng nhập</li>
            <li>Đăng kí</li>
          </ul>

          <ul className="float-right flex items-center space-x-1  h-full">
            <li>Tìm kiếm</li>
            <li>Giỏ hàng</li>
          </ul>
        </div>
      </div>

      <div className="h-16">
        <div className="container h-full px-5">
          <ul className="float-left flex  items-center space-x-2 h-full">
            <li>Trang chủ</li>
            <li>Giới thiệu</li>
            <li>Dịch vụ</li>
          </ul>

          <ul className="float-right flex  items-center space-x-2 h-full">
            <li>Sản phẩm</li>
            <li>Tin tức</li>
            <li>Liên hệ</li>
          </ul>
        </div>
      </div>
      <div className="container">
        <Carousel />
      </div>
      <div className="container">
        <div className="grid grid-cols-[3fr_5fr_5fr] gap-4">
          <div className="bg-blue-200 hidden md:block">Cột 1 (3 phần)</div>
          <div className="bg-green-200">Cột 2 (4 phần)</div>
          <div className="bg-red-200">Cột 3 (4 phần)</div>
        </div>
      </div>
    </div>
  );
}
