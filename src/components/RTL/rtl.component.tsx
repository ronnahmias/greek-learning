"use client";
import React from "react";
import rtlPlugin from "stylis-plugin-rtl";
import { CacheProvider } from "@emotion/react";
import createCache from "@emotion/cache";
import { prefixer } from "stylis";

// Create rtl cache
const cacheRtl = createCache({
  key: "muirtl",
  stylisPlugins: [prefixer, rtlPlugin],
});

export const RtlCacheProvider = React.memo<{ children: React.ReactNode }>(
  function RtlCacheProvider(props) {
    return <CacheProvider value={cacheRtl}>{props.children} </CacheProvider>;
  }
);
