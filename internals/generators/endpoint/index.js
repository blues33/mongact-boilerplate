/**
 * Component Generator
 */

/* eslint strict: ["off"] */

'use strict';

const componentExists = require('../utils/componentExists');

module.exports = {
  description: 'Create a new endpoint',
  prompts: [
    {
      type: 'list',
      name: 'type',
      message: 'Select the type of component',
      default: 'Stateless Function',
      choices: () => ['Endpoint'],
    },
    {
      type: 'input',
      name: 'name',
      message: 'What should it be called?',
      default: 'Button',
      validate: value => {
        if (/.+/.test(value)) {
          return componentExists(value)
            ? 'A component or container with this name already exists'
            : true;
        }

        return 'The name is required';
      },
    },
    {
      type: 'input',
      name: 'fields',
      message:
        'What fields should this endpoint contain? (enter comma separated list)',
      default: 'name, description',
    },
  ],
  actions: () => {
    // Generate index.js and index.test.js

    const actions = [
      {
        type: 'toArray',
      },
      {
        type: 'add',
        path: '../../server/api/endpoints/{{lowerCase name}}/model.js',
        templateFile: './endpoint/model.js.hbs',
        abortOnFail: true,
      },
      {
        type: 'add',
        path: '../../server/api/endpoints/{{lowerCase name}}/routes.js',
        templateFile: './endpoint/routes.js.hbs',
        abortOnFail: true,
      },
      {
        type: 'add',
        path: '../../server/api/endpoints/{{lowerCase name}}/controller.js',
        templateFile: './endpoint/controller.js.hbs',
        abortOnFail: true,
      },
    ];

    actions.push({
      type: 'prettify',
      path: '/endpoints/',
    });

    return actions;
  },
};
