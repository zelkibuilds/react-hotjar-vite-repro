import {
  Links,
  LiveReload,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
} from "@remix-run/react";
import { useEffect } from "react";
import { hotjar } from "react-hotjar";

export default function App() {
  useHotjar();

  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <Meta />
        <Links />
      </head>
      <body>
        <Outlet />
        <ScrollRestoration />
        <LiveReload />
        <Scripts />
      </body>
    </html>
  );
}

const useHotjar = (hotjarId?: string, hotjarSv?: string) => {
  useEffect(() => {
    if (hotjar.initialized() || !(hotjarId && hotjarSv)) {
      return;
    }

    hotjar.initialize(Number(hotjarId), Number(hotjarSv));
  }, [hotjarId, hotjarSv]);
};
