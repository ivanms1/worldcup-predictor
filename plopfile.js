module.exports = function (plop) {
  plop.setGenerator("component", {
    description: "Create a component",
    prompts: [
      {
        type: "input",
        name: "name",
        message: "What is this component's name?",
      },
    ],
    actions: [
      {
        type: "add",
        path: "src/components/{{pascalCase name}}/{{pascalCase name}}.tsx",
        templateFile: "templates/Component.tsx.hbs",
      },
      {
        type: "add",
        path: "src/components/{{pascalCase name}}/index.ts",
        templateFile: "templates/Index.tsx.hbs",
      },
      {
        type: "add",
        path: "src/components/{{pascalCase name}}/{{pascalCase name}}.module.scss",
        templateFile: "templates/PageModule.module.scss.hbs",
      },
    ],
  });
  plop.setGenerator("page", {
    description: "Create a page",
    prompts: [
      {
        type: "input",
        name: "name",
        message: "What is this page's name?",
      },
    ],
    actions: [
      {
        type: "add",
        path: "pages/{{kebabCase name}}/{{kebabCase name}}.tsx",
        templateFile: "templates/Page.tsx.hbs",
      },
      {
        type: "add",
        path: "pages/{{pascalCase name}}/index.ts",
        templateFile: "templates/Index.tsx.hbs",
      },
      {
        type: "add",
        path: "src/pages/{{pascalCase name}}/{{pascalCase name}}.tsx",
        templateFile: "templates/Component.tsx.hbs",
      },
      {
        type: "add",
        path: "src/pages/{{pascalCase name}}/index.ts",
        templateFile: "templates/Index.tsx.hbs",
      },
      {
        type: "add",
        path: "src/pages/{{pascalCase name}}/{{pascalCase name}}.module.scss",
        templateFile: "templates/PageModule.module.scss.hbs",
      },
    ],
  });
};
