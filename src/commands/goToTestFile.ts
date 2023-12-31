import * as vscode from "vscode";
import * as fs from "fs";
import * as path from "path";

import * as fileOperations from "../file_operations";
import * as testFileCreator from "../test_file_creator";
import { getConfig } from "../extension";

export function activate(context: vscode.ExtensionContext) {
  // The command has been defined in the package.json file
  // Now provide the implementation of the command with registerCommand
  // The commandId parameter must match the command field in package.json
  let disposable = vscode.commands.registerCommand(
    "easy-tests.goToTestFile",
    async (...args) => {
      //we have to search for the test file by adding _test.dart to the filename and search for it in the <workspace-folder>/test/ directory

      console.log("GoToTestFile-Args:");
      console.log(args);
      //-> Man muss aufpassen, weil args variieren kann, je nachdem von wo das commando aufgerufen wurde
      var className: string | undefined;
      if (typeof args[0] === "string") {
        className = args[0];
      }

      var path = vscode.window.activeTextEditor?.document.uri.path;

      if (path !== undefined) {
        if (fileOperations.isPathInLibFolder(path)) {
          // TODO: First check whether the test file exists in the intended location
          // If not, you can still search to move the file (Info Dialog)
          var searchResultPath = fileOperations.searchTestFilePath(
            fileOperations.getNameOfTestFile(path)
          );

          if (searchResultPath !== null) {
            //Note: Maybe check, if the path is correct to the original file path? Otherwise recommend to move it to another path?

            fileOperations.openDocumentInEditor(searchResultPath);
          } else {
            //if test file doesn't exist, we recomment to create one :)
            var selection = await vscode.window.showQuickPick(["Yes", "No"], {
              placeHolder:
                "Could not find file '" +
                fileOperations.getNameOfTestFile(path) +
                "' in 'test/'. Do you want to create it?",
            });
            if (selection === "Yes") {
              testFileCreator.createTestFile(path, className);
            }
          }
        } else if (fileOperations.isTestFile(path)) {
          //Do nothing, because we are already in the test file
        } else {
          const { codePath } = getConfig();

          vscode.window.showErrorMessage(
            path + ` is not in the ${codePath} path of this directory`
          );
        }
      } else {
        vscode.window.showErrorMessage(
          "Could not get path of currently open file in explorer"
        );
      }
    }
  );

  context.subscriptions.push(disposable);
}
