# caTinder

## Branch: _After time_

caTinder App is a simple project that helps to understand important concepts on an React Native Project. Here you'll see How to:

- Implement a custom bottom bar using React Navigation;
- Implement a custom hook for applying the concept 'separetion of concerns';
- Implement view page without accomplement;
- Write some unit test in visual components;
- Write test to test a custom hook;
- Write a simple end-to-end test using React Native Detox.

I hope this help you in something

## Architecture

This project has been configured to use TypeScript and to get the best organization possible the `catinder` project contains the following directories:
[`components`](./components):

> Where are the codes referring to visual components.

[`src/hooks`](./src/hooks).

> In this directory is present the custom Hook useTheCat. Its use is a practical example of separation of responsibilities. In this project useTheCat is responsible for controlling the request for new products and paging.

> On larger projects a custom Hook may have more responsibility, such as processing data for screens and implementing business rules at the mobile level.

[`src/routes`](./src/routes).

> In this directory are the settings related to the application navigation. In this project, the `react-native-navigation` library was used because it is a consolidated library, with good documentation and good support for React Hooks.

[`src/screens`](./src/screens).

> In this directory are the three main screens of the project, Home, Chat and Profile.

[`src/services`](./src/services).

> This is one of the fundamental directories of this project. It contains the files: (i)`TheCat.service.ts` - responsible for providing an axios instance connected to the `api.thecatapi.com` domain, in this project the use of this file was minimal, but it can be used to intercept requests and inject information into the header, such as Bearer Token, custom attributes, among others; (ii)`TheCat.api.ts` - responsible for mapping the routes used by the project.

[`src/util`](./src/util).

> This directory contains the types used in the project and functions for inserting the TestID to do tests end-to-end.

## Dependencies

This project uses the follown dependencies

- React Navigation 6.x
- Axios
- React Native magnus
- git-cz
- Testing Library
- Detox

## Installing and running

## How to run the project

Clone the project `git clone -b chore/afterTime https://github.com/ramoncruzz/catinder/tree/chore/afterTime`

and execute: `yarn install`, `cd ios/`, `pod install`, `cd ..`

> [ios]: `yarn ios` > [android]: `yarn android`

## How to run the tests

For running the unit test you should run the follow command;

> ` yarn test`

For running the end-to-end tests you should to do a task first. (Please, use the iOS Project)

> `npm install -g detox-cli`

execute the follow command for build an artifact for testing:

> `yarn ios:e2e-build`

and last, execute this command for running the e-2-e test.

> `yarn ios:e2e`

You'll seen something like the one shown in the follow video:

[![IMAGE ALT TEXT HERE](data:image/png;base64,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)](https://youtu.be/JaRvVk3W2mA)
