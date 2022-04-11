import { registerApplication, start } from "single-spa";

/*
registerApplication({
  name: "@single-spa/welcome",
  app: () =>
    System.import(
      "https://unpkg.com/single-spa-welcome/dist/single-spa-welcome.js"
    ),
  activeWhen: ["/"],
});*/

// tem que adicionar no index.ejs tambem na sessão de imports
registerApplication({
  name: "@burich/main-page",
  app: () => System.import("@burich/main-page"),
  activeWhen: ["/main"]
});

registerApplication({
  name: "@burich/nav-bar",
  app: () => System.import("@burich/nav-bar"),
  activeWhen: ["/"]
});

// para outra rota
registerApplication({
  name: "@burich/seccond-page",
  app: () => System.import("@burich/seccond-page"),
  activeWhen: ["/seccond"]
});


start({
  urlRerouteOnly: true,
});
