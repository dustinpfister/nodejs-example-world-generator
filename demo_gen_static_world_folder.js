#!/usr/bin/env node

let genStaticWorldFolder = require('./lib/gen_map_files.js').genStaticWorldFolder;

genStaticWorldFolder('./.world');
