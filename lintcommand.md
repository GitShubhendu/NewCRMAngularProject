# Add new ESLINT to new project 
- ng add @angular-eslint/schematics
# Replace TSLINT to ESLINT
- ng g @angular-eslint/schematics:convert-tslint-to-eslint --remove-tslint-if-no-more-tslint-targets --ignore-existing-tslint-config
# TsLint is depricated. Before Angular 12 we have TSLINT in build but from Angular 12 it is not installed. to installed the eslint in project use above code. 

# To check the lint in vs code add new extension to vscode "ESLINT"