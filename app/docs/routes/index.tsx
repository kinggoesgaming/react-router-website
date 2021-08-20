import { MetaFunction, LoaderFunction, json, RouteComponent } from "remix";
import { useRouteData } from "remix";

import { getDoc, getVersion, getVersions } from "../../utils.server";

let meta: MetaFunction = () => {
  return {
    title: "Remix Starter",
    description: "Welcome to remix!",
  };
};

let loader: LoaderFunction = async ({ context, params }) => {
  let versions = await getVersions();
  let version = getVersion(params.version, versions) || {
    version: params.version,
    head: params.version,
    isLatest: false,
  };

  try {
    let doc = await getDoc(context.docs, "docs/index", version);
    return json(doc, {});
  } catch (error: unknown) {
    console.error(error);
    return json({ notFound: true }, { status: 404 });
  }
};

const IndexPage: RouteComponent = () => {
  let data = useRouteData();

  return (
    <div style={{ textAlign: "center", padding: 20 }}>
      <h2>{data.title}</h2>
      <article dangerouslySetInnerHTML={{ __html: data.html }} />
    </div>
  );
};

export default IndexPage;
export { loader, meta };