// Synthetics runtime libs
/* eslint-disable @typescript-eslint/no-var-requires, @typescript-eslint/no-unused-vars */
const synthetics = require('Synthetics');
/* eslint-disable @typescript-eslint/no-var-requires, @typescript-eslint/no-unused-vars */
const log = require('SyntheticsLogger');

// optional aws-sdk usage for secrets, etc
// import * as aws from 'aws-sdk';

import * as puppeteer from 'puppeteer';

const test = async function () {
  const page: puppeteer.Page = await synthetics.getPage();
  // page is the puppeteer object
};
exports.handler = async () => {
  return await test();
};
