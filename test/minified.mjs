import { test } from "uvu";
// eslint-disable-next-line no-unused-vars
import { equal, is, ok, throws, type, not, match } from "uvu/assert";

import { comb } from "./util/util.mjs";

// inputs were pre-mangled by html-minifier
// -----------------------------------------------------------------------------

test("01 - pair of tags, tight", () => {
  const source = `<body><h2 style=padding:0;margin:10px class=test>News</h2></body>`;
  const intended = `<body><h2 style=padding:0;margin:10px>News</h2></body>`;

  equal(comb(source).result, intended, "01");
});

test("02 - pair of tags, spaced", () => {
  const source = `<body><h2 style=padding:0;margin:10px class=test >News</h2></body>`;
  const intended = `<body><h2 style=padding:0;margin:10px>News</h2></body>`;

  equal(comb(source).result, intended, "02");
});

test("03 - self-closing tag, tight", () => {
  const source = `<body><br style=padding:0;margin:10px class=test/>News</body>`;
  const intended = `<body><br style=padding:0;margin:10px/>News</body>`;

  equal(comb(source).result, intended, "03");
});

test("04 - self-closing tag, spaced", () => {
  const source = `<body><br style=padding:0;margin:10px class=test />News</body>`;
  const intended = `<body><br style=padding:0;margin:10px/>News</body>`;

  equal(comb(source).result, intended, "04");
});

test.run();
