import assert from "node:assert/strict";
import test from "node:test";

import { escapeHtml } from "./send-enquiry.ts";

test("escapeHtml escapes HTML-sensitive characters without using browser globals", () => {
  assert.equal(
    escapeHtml('<script>alert("x") & y</script>'),
    "&lt;script&gt;alert(&quot;x&quot;) &amp; y&lt;/script&gt;",
  );
});
