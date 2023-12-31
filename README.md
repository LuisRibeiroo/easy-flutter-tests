# README

#### This is a fork from [Better Flutter Tests](https://marketplace.visualstudio.com/items?itemName=andreasblech.better-tests) with configurable paths

**Improve the quality of your code by accelerating your coding/testing workflow 🚀**

Boost your TDD-Workflow by:

- ✅ Creating a proper `xyz_test.dart` file with boilderplate code for an existing `xyz.dart` file with one click!
- ✅ Switching between `xyz.dart` file and the associated `xyz_test.dart` file instantly
- ✅ Dramatically faster test execution -> Run only the unit tests that affect the file you're currently working on.
- ✅ Using snippets to avoid writing boilderplate code
- ✅ Automatically keep file and folder structure in sync between /lib and /test even if you rename or move a file or folder

## Demo

**Create test file or switch between tests and code with ⌘+T.**
**Execute Tests with ⌥+⌘+T**

![demo-gif](https://bitbucket.org/ThePeacefulCoder/better-flutter-tests/raw/6585f9ac2566ecd6731bfa88fb8e6ed088bb52fc/assets/demo-0.2.0.gif)

**Keep file and folder structure in sync after rename or move operations**

![rename-gif](https://bitbucket.org/ThePeacefulCoder/better-flutter-tests/raw/10e202bfc4e1c121fbb4846e8dc7e3694e5482cf/assets/demo_rename.gif)

## Commands Summary

| Command ( + context menu)      | Shortcut | Description                                                                                                                                                                                                                                              |
| ------------------------------ | -------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Easy Tests: Go to tests        | ⌘+T      | Creates file `xyz_test.dart` for file `xyz.dart` in the `/test` folder. Will automatically create the necessary folder tree under `/test` to match the location of `xyz.dart` under `/lib`.<br />If `xyz_test.dart` already exists, editor will show it. |
| Easy Tests: Go to source file  | ⌘+T      | Opens the `xyz.dart` file if you are inside a `xyz_test.dart` file.                                                                                                                                                                                      |
| Easy Tests: Run tests for file | ⌥+⌘+T    | Executes all tests inside of a `xyz_test.dart`. Works also if you are currently inside of `xyz.dart`                                                                                                                                                     |

## Snippets

| Snippet Prefix | Description                                            |
| -------------- | ------------------------------------------------------ |
| `ftest`        | Creates `test('<test-name>', () {<test-code>})`        |
| `fgroup`       | Creates `group('<group-name>', () {<multiple-tests>})` |

## Extension Settings

This extension contributes the following settings:

`easy-tests.codePath`: Dart code files path within workspace root

`easy-tests.testsPath`: Test files path within workspace root
