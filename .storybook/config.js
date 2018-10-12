import { configure } from '@storybook/react';
import { setOptions } from "@storybook/addon-options";
import { setDefaults } from '@storybook/addon-info';
// import { PropTypesTable } from './PropTable';

setDefaults({
  inline: true,
})

const req = require.context('../src/components/', true, /(\.story\.js$)|(\.story\.jsx$)/);
function loadStories() {
  req.keys().forEach((filename) => req(filename));
}

configure(loadStories, module)


// {
//   "presets": ["env", "react"],
//   "plugins": [
//     "transform-class-properties",
//     "transform-object-rest-spread",
//     "react-docgen"
//   ]
// }
// TableComponent: PropTypesTable
