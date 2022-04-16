# LoginModule

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 10.0.4.

## Create an angular library

Create a new Angular workspace with the command `ng new <workspace-name> --create-application=false`

Then navigate into the workspace folder with the command `cd <workspace-name>`

Create a new library project for your component with the command `ng generate library <project-name>` (from inside the workspace folder)


## Build

Run the command `ng build <project-name> --prod` from your workspace folder to build your component, the output files are created in the `dist/<project-name>` folder.

## Publish the app

Run `npm login` from the command line and enter the credentials

Navigate to the project dist folder with the command `cd dist/<project-name>`

Run the command `npm publish` to publish the component the npm.


Your new Angular component will be published on the npm website at `https://www.npmjs.com/package/<project-name>`
