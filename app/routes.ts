import { type RouteConfig, route, index } from "@react-router/dev/routes";

export const routes: RouteConfig = [
  index("pages/splash.tsx"),
  route("/brand", "pages/brand.tsx"),
  route("/healthcheck", "pages/healthcheck.tsx"),
  route("/color-scheme", "actions/color-scheme.ts"),

  route("/:ref?", "pages/docs-layout.tsx", { id: "docs" }, [
    index("pages/docs-index.tsx"),
    route("home", "pages/doc.tsx", { id: "home" }),
    route("*", "pages/doc.tsx"),
  ]),

  route("/*", "pages/notfound.tsx"),

  // short version URLs for changelogs and stuff
  route("/v6/*", "pages/redirect-v6-doc.tsx"),
  route("/v7/*", "pages/redirect-v7-doc.tsx"),

  // v6 URLs before the api reference docs
  route("/en/:ref", "pages/docs-layout.tsx", { id: "v6-docs" }, [
    index("pages/docs-home.tsx", {
      id: "v6-index",
    }),
    route("*", "pages/doc.tsx", { id: "v6-guide" }),
  ]),
];

if (process.env.NODE_ENV === "development") {
  routes.push(route("/__playground", "components/_playground/playground.tsx"));
}