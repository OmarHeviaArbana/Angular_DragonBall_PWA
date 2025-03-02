# Angular Progresive Web App Dragonball

## Descripción

Progressive Web App (PWA) que consume una api pública y que puede ser instalada en un dispositivo móvil como si fuera una aplicación nativa.

## Link

https://dragonball-pwa.netlify.app/

## Funcionalidades

- Configuración del fichero manifest.json es un fichero de configuración JSON el cual contiene información de la aplicación.
- Integrar y modificar todo lo necesario del service worker para que pueda instalarse y funcionar sin internet, dando lugar al concepto de offline first web.
- Estrategias de cache para que la apliación funcione en base a los recursos disponibles en cada momento.
- Consumo de una API pública.
- Utilizción de componentes de Angular Material para un listado y vista detalle.
- Lighthouse es una herramienta para auditar la PWA y se genera un reporte completo.
  
<br>
  
<div align="center">
  <image style="box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px; margin-bottom: 30px ; border-radius: 10px ; border: 20px solid white ; width: 300px" src="src/assets/miniatura_one.png" alt="Vista principal">
  <image style="box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px; margin-bottom: 30px ; border-radius: 10px ; border: 20px solid white; width: 300px" src="src/assets/miniatura_two.png" alt="Vista listado">
  <image style="box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px; margin-bottom: 30px ; border-radius: 10px ; border: 20px solid white; width: 300px" src="src/assets/miniatura_three.png" alt="Vista Detalle">
  <image style="box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px; margin-bottom: 30px ; border-radius: 10px ; border: 20px solid white; width: 300px;" src="src/assets/miniatura_five.png" alt="App icon ">
</div>
  
## Informe Lighthouse

La herramienta LightHouse proporciona un análisis detallado del rendimiento, accesibilidad, mejores prácticas y SEO de una aplicación web.

El informe destaca áreas optimización bastante claras en términos de rendimiento, desde la mejora de recursos multimedia hasta la reducción de scripts innecesarios. Implementando estas mejoras, se pueden reducir significativamente los tiempos de carga y mejorar la experiencia del usuario.
  
#### First Contentful Paint (FCP)

Indica cuánto tiempo transcurre hasta que el primer contenido es renderizado en pantalla. Un tiempo elevado afecta negativamente la percepción del usuario sobre la velocidad de carga. Esto es debido a recursos pesados como imágenes grandes y scripts no optimizados.

#### Largest Contentful Paint (LCP)

Mide el tiempo hasta que el mayor elemento visible en pantalla (usualmente una imagen o texto destacado) está completamente renderizado. En este caso,  nos encontramos con LCP elevado (6940 ms), en parte debido a imágenes grandes sin precargar.

En este link se pueden ver los resultados y los puntos de mejora para próximos evolutivos y que son los siguientes: https://pagespeed.web.dev/analysis/https-dragonball-pwa-netlify-app/modgsu44hn?hl=es&form_factor=mobile
  
<image style="box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px; margin-bottom: 30px ; border-radius: 10px ; border: 20px solid white" src="src/assets/miniatura_four.png" alt="Detalle informe de rendimiento Lighthouse">

**Autor:** Omar Hevia Arbana
**Fecha:** Diciembre 2024

---

# Angular Progresive Web App Dragonball

## Description

Progressive Web App (PWA) that consumes a public API and can be installed on a mobile device as if it were a native application.

## Features

- Configuration of the `manifest.json` file, a JSON configuration file that contains information about the application.
- Integration and modification of everything necessary in the service worker to allow installation and offline functionality, following the offline-first web concept.
- Caching strategies to ensure the application works based on the available resources at any given time.
- Consumption of a public API.
- Use of Angular Material components for a list and detail view.
- Lighthouse is a tool for auditing the PWA, generating a complete report.

## Lighthouse Report

The Lighthouse tool provides a detailed analysis of the performance, accessibility, best practices, and SEO of a web application.

The report highlights clear optimization areas in terms of performance, from improving multimedia resources to reducing unnecessary scripts. By implementing these improvements, loading times can be significantly reduced, enhancing the user experience.

#### First Contentful Paint (FCP)

Indicates how much time elapses until the first content is rendered on the screen. A high time negatively affects the user's perception of loading speed. This is due to heavy resources such as large images and unoptimized scripts.

#### Largest Contentful Paint (LCP)

Measures the time until the largest visible element on the screen (usually an image or highlighted text) is fully rendered. In this case, we encounter a high LCP (6940 ms), partly due to large images that are not preloaded.

At this link, you can see the results and the improvement points for future updates:  
https://pagespeed.web.dev/analysis/https-dragonball-pwa-netlify-app/modgsu44hn?hl=en&form_factor=mobile

**Author:** Omar Hevia Arbana
**Date:** December 2024

---

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via a platform of your choice. To use this command, you need to first add a package that implements end-to-end testing capabilities.

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI Overview and Command Reference](https://angular.io/cli) page.
