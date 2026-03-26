import { Routes, Route, Navigate } from "react-router-dom";

import Docs from "./pages/Docs/Docs.js";
import DocsCard from "./pages/Docs/DocsCard.js";
import DocsTypography from "./pages/Docs/DocsTypography.js";
import DocsButton from "./pages/Docs/DocsButton.js";
import DocsStack from "./pages/Docs/DocsStack.js";
import DocsGrid from "./pages/Docs/DocsGrid.js";
import DocsAppBar from "./pages/Docs/DocsAppBar.js";
import DocsIntroduction from "./pages/Docs/DocsIntroduction.js";

// Assessment 3 - JENNIE ARTIST
import Assessment3 from "./pages/Assessment3/Assessment3.js";
import JennieHomepage from "./pages/Assessment3/JennieHomepage.js";

const Router = () => {
  return (
    <Routes>
      {/* Default route redirects to docs */}
      <Route index element={<Navigate to="/docs/introduction" replace />} />

      {/* Docs */}
      <Route path="docs" element={<Docs />}>
        <Route index element={<Navigate to="introduction" replace />} />
        <Route path="introduction" element={<DocsIntroduction />} />
        <Route path="card" element={<DocsCard />} />
        <Route path="typography" element={<DocsTypography />} />
        <Route path="button" element={<DocsButton />} />
        <Route path="stack" element={<DocsStack />} />
        <Route path="grid" element={<DocsGrid />} />
        <Route path="appbar" element={<DocsAppBar />} />
      </Route>

       {/* Assessment 3 - JENNIE ARTIST */}
       <Route path="assessment3" element={<Assessment3 />}>
        <Route index element={<Navigate to="jennie-homepage" replace />} />
        <Route path="jennie-homepage" element={<JennieHomepage />} />
      </Route>
    </Routes>
  );
};

export default Router;
