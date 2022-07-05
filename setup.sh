#!/usr/bin/env bash
git clone https://github.com/rauenzi/BDPluginLibrary

cd BDPluginLibrary || exit
sed -i -e 's/\"\.\/examples\"/\"\.\.\/plugins\"/g' ./package.json
sed -i -e 's/\"\.\/release\"/\"\.\.\/releases\"/g' ./package.json
pnpm install

echo "Setup done!"