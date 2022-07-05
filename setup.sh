git clone https://github.com/rauenzi/BDPluginLibrary
sed -i -e 's/\"\.\/examples\"/\"\.\.\/plugins\"/g' BDPluginLibrary/package.json
sed -i -e 's/\"\.\/release\"/\"\.\.\/releases\"/g' BDPluginLibrary/package.json