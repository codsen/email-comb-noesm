import { test } from "uvu";
// eslint-disable-next-line no-unused-vars
import { equal, is, ok, throws, type, not, match } from "uvu/assert";

import { comb } from "./util/util.mjs";
import { comb as comb1 } from "../dist/email-comb.cjs.js";

// whitelisting
// -----------------------------------------------------------------------------

test("01 - nothing removed because of settings.whitelist", () => {
  const actual = comb(
    `<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd" />
<html xmlns="http://www.w3.org/1999/xhtml">
<head>
<meta http-equiv="Content-Type" content="text/html; charset=UTF-8" />
<title>Tile</title>
<style type="text/css">
  .module-1{display: none !important;}
  .module-2{display: none !important;}
  .module-3{display: none !important;}
  .module-zzzzkldfjglfjhlfjlhfglj{display: none !important;}
  .particular{width: 100% !important;}
</style>
</head>
<body>
<table class="module-92" width="100%" border="0" cellpadding="0" cellspacing="0">
<tr class="module-93">
  <td class="module-94 module-lkfjgldhglktjja">
    <img class="module-91" src="image.jpg" width="zzz" height="zzz" border="0" style="display:block;" alt="zzz" />
  </td>
</tr>
</table>
</body>
</html>
`,
    {
      whitelist: [".module-*", ".particular"],
    }
  ).result;

  const intended = `<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd" />
<html xmlns="http://www.w3.org/1999/xhtml">
<head>
<meta http-equiv="Content-Type" content="text/html; charset=UTF-8" />
<title>Tile</title>
<style type="text/css">
  .module-1{display: none !important;}
  .module-2{display: none !important;}
  .module-3{display: none !important;}
  .module-zzzzkldfjglfjhlfjlhfglj{display: none !important;}
  .particular{width: 100% !important;}
</style>
</head>
<body>
<table class="module-92" width="100%" border="0" cellpadding="0" cellspacing="0">
<tr class="module-93">
  <td class="module-94 module-lkfjgldhglktjja">
    <img class="module-91" src="image.jpg" width="zzz" height="zzz" border="0" style="display:block;" alt="zzz" />
  </td>
</tr>
</table>
</body>
</html>
`;

  equal(actual, intended, "01");
});

test("02 - some removed, some whitelisted", () => {
  const actual = comb(
    `<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd" />
<html xmlns="http://www.w3.org/1999/xhtml">
<head>
<meta http-equiv="Content-Type" content="text/html; charset=UTF-8" />
<title>Tile</title>
<style type="text/css">
  .module-1{display: none !important;}
  .module-2{display: none !important;}
  .module-3{display: none !important;}
  .module-zzzzkldfjglfjhlfjlhfglj{display: none !important;}
  .head-only-class-1 a.module-94:hover{width: 100% !important;}
  #head-only-id-1[lang|en]{width: 100% !important;}
</style>
</head>
<body>
<table class="module-92" width="100%" border="0" cellpadding="0" cellspacing="0">
<tr class="module-93 body-only-class-1">
  <td id="body-only-id-1" class="module-94 module-lkfjgldhglktjja">
    <img class="module-91" src="image.jpg" width="zzz" height="zzz" border="0" style="display:block;" alt="zzz" />
  </td>
</tr>
</table>
</body>
</html>
`,
    {
      whitelist: [".module-*", ".particular"],
    }
  ).result;

  const intended = `<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd" />
<html xmlns="http://www.w3.org/1999/xhtml">
<head>
<meta http-equiv="Content-Type" content="text/html; charset=UTF-8" />
<title>Tile</title>
<style type="text/css">
  .module-1{display: none !important;}
  .module-2{display: none !important;}
  .module-3{display: none !important;}
  .module-zzzzkldfjglfjhlfjlhfglj{display: none !important;}
</style>
</head>
<body>
<table class="module-92" width="100%" border="0" cellpadding="0" cellspacing="0">
<tr class="module-93">
  <td class="module-94 module-lkfjgldhglktjja">
    <img class="module-91" src="image.jpg" width="zzz" height="zzz" border="0" style="display:block;" alt="zzz" />
  </td>
</tr>
</table>
</body>
</html>
`;

  equal(actual, intended, "02");
});

test("03 - case of whitelisting everything", () => {
  const actual = comb(
    `<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd" />
<html xmlns="http://www.w3.org/1999/xhtml">
<head>
<meta http-equiv="Content-Type" content="text/html; charset=UTF-8" />
<title>Tile</title>
<style type="text/css">
  .module-1{display: none !important;}
  .module-2{display: none !important;}
  .module-3{display: none !important;}
  .module-zzzzkldfjglfjhlfjlhfglj{display: none !important;}
  .head-only-class-1 a.module-94:hover{width: 100% !important;}
  #head-only-id-1[lang|en]{width: 100% !important;}
</style>
</head>
<body>
<table class="module-92" width="100%" border="0" cellpadding="0" cellspacing="0">
<tr class="module-93 body-only-class-1">
  <td id="body-only-id-1" class="module-94 module-lkfjgldhglktjja">
    <img class="module-91" src="image.jpg" width="zzz" height="zzz" border="0" style="display:block;" alt="zzz" />
  </td>
</tr>
</table>
</body>
</html>
`,
    {
      whitelist: ["*"],
    }
  ).result;

  const intended = `<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd" />
<html xmlns="http://www.w3.org/1999/xhtml">
<head>
<meta http-equiv="Content-Type" content="text/html; charset=UTF-8" />
<title>Tile</title>
<style type="text/css">
  .module-1{display: none !important;}
  .module-2{display: none !important;}
  .module-3{display: none !important;}
  .module-zzzzkldfjglfjhlfjlhfglj{display: none !important;}
  .head-only-class-1 a.module-94:hover{width: 100% !important;}
  #head-only-id-1[lang|en]{width: 100% !important;}
</style>
</head>
<body>
<table class="module-92" width="100%" border="0" cellpadding="0" cellspacing="0">
<tr class="module-93 body-only-class-1">
  <td id="body-only-id-1" class="module-94 module-lkfjgldhglktjja">
    <img class="module-91" src="image.jpg" width="zzz" height="zzz" border="0" style="display:block;" alt="zzz" />
  </td>
</tr>
</table>
</body>
</html>
`;

  equal(actual, intended, "03");
});

test("04 - special case - checking adjacent markers #1", () => {
  const actual = comb(
    `<style type="text/css">
  .del-1{display: none;}
  .real{display: none;}
  .del-3{display: none;}
</style>
<body class="real">
zzz
</body>`
  ).result;

  const intended = `<style type="text/css">
  .real{display: none;}
</style>
<body class="real">
zzz
</body>`;

  equal(actual, intended, "04");
});

test("05 - special case - checking adjacent markers #2", () => {
  const actual = comb(
    `<style type="text/css">.del-1{display: none;}.del-2{display: none;}.del-3{display: none;}</style>
<body>
zzz
</body>
`
  ).result;

  const intended = `<body>
zzz
</body>
`;

  equal(actual, intended, "05");
});

// div~[^whatever] .del-1 {display: none;}
test("06 - special case - checking commas within curly braces", () => {
  const actual = comb(
    `
<style type="text/css">
  .used {display: block;}
  .deleteme{,,,<<<,>>>,,,,,}
</style>
<body class="used">
zzz
</body>`
  ).result;

  const intended = `<style type="text/css">
  .used {display: block;}
</style>
<body class="used">
zzz
</body>`;

  equal(actual, intended, "06");
});

test("07 - whitelisting using non-class/id strings - baseline", () => {
  const { result } = comb1(
    `<style type="text/css">
  [data-ogsc] .sm-text-red-500{display: none;}
</style>
<body class="unused">
zzz
</body>`,
    {
      whitelist: [],
    }
  );

  const intended = `<body>
zzz
</body>`;

  equal(result, intended, "07");
});

test("08 - whitelisting using non-class/id strings - whitelisting", () => {
  const { result } = comb1(
    `<style type="text/css">
  [data-ogsc] .sm-text-red-500{display: none;}
</style>
<body class="unused">
zzz
</body>`,
    {
      whitelist: ["[data-ogsc]*"],
    }
  );

  const intended = `<style type="text/css">
  [data-ogsc] .sm-text-red-500{display: none;}
</style>
<body>
zzz
</body>`;

  equal(result, intended, "08");
});

test.run();
