import { readFile } from "fs";
import { join, resolve } from "path";
import React from "react";
import express from "express";
import App from "../src/App";

import { renderToNodeStream, renderToString } from "react-dom/server";

const router = express.Router();

router.get("/", (req, res) => {
  const fileName = join(__dirname, "../build", "index.html");

  readFile(
    fileName,
    "utf8",
    (err, data) => {
      if (err) {
        console.error(err);
        return res.status(500).send("An error occurred");
      }
      res.send(
        data.replace(
          '<div id="root"></div>',
          `<div id="root">${renderToString(<App />)}</div>`
        )
      );
    }
  );
});

router.use(
  express.static(resolve(__dirname, "../build"), { maxAge: "30d", extensions: ['js', 'css'], index: false })
);
export default router;
