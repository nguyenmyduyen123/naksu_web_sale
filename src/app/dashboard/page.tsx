"use client";
import { useLocale } from "@/contexts/LocaleContext";
import useTranslation from "@/hooks/useTranslation";
import KGrid from "@/uikit/Grid";
import KInput from "@/uikit/Input";
import { Grid } from "@mui/material";
import Link from "next/link";
import { useContext, useState } from "react";
// import { Test } from 'vite-app/UI-Base/src';
import { TestA } from 'vite-app/UI-Base/dist/ui-base.umd';


export default function Dashboard() {
  const { t } = useTranslation();
  const { locale, setLocale } = useLocale();
  console.log("locale", locale);
  const [count, setCount] = useState<number>(0);

  return (
    <div>
      
      <button>{locale}</button>
      <div>{t("welcome")}</div>;
      {/* <Grid container rowSpacing={1}>
        <Grid xs={6}>1</Grid>
        <Grid xs={6}>2</Grid>
        <Grid xs={6}>3</Grid>
        <Grid xs={6}>4</Grid>
      </Grid>
    
      <KGrid.Container>
        <KGrid.Item xs={3}>
          shvhsvbhsv
        </KGrid.Item>
        <KGrid.Item xs={3}>1</KGrid.Item>
        <KGrid.Item xs={3}>1</KGrid.Item>
        <KGrid.Item xs={3}>1</KGrid.Item>
      </KGrid.Container>
      <KGrid.Container> */}
      <KInput.TextField />
      {/* </KGrid.Container> */}
    </div>
  );
}
