"use strict";

const fs = require('fs');
const yaml = require('js-yaml');
const plist = require('plist');

function writePlistFile(grammar, fileName) {
    const text = plist.build(grammar);
    fs.writeFileSync(fileName, text, "utf8");
}

function readYaml(fileName) {
    const text = fs.readFileSync(fileName, "utf8");
    return yaml.safeLoad(text);
}

function buildGrammar() {
    const tsGrammar = readYaml("../wasm.tmLanguage.yaml");

    // Write wasm.tmLanguage
    writePlistFile(tsGrammar, "../wasm.tmLanguage");

    fs.writeFileSync("../wasm.tmLanguage.json", JSON.stringify(tsGrammar, null, 2));
}

buildGrammar();
