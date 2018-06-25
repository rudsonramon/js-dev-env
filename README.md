# js-dev-env
JavaScript Development Environment from my personal project

# git Commands
1.Stage all the files changed
git add .

2.Commit changes locally
git commit -m "added new features"

3.Push work to Github
git push

## To disable SSL verification for a specific repository
If the repository is completely under your control, you can try:

- git config http.sslVerify false

# Javascript editors - Options
- VSCode;
- Webstorm;
- Atom;
- Brackets;

# Project standard definitions

## Define  a Consistent code style (https://editorconfig.org/)
Create a file called .editorconfig and place it in the root of your project
[myProject]
|- .editorconfig

it helps you to have a standard for you editor configuration to everyone who is coding with you.

## Package managers

- NPM; (the most popular)
- JSPM;
- Bower;
- Jam;
- Volo.

the package.json is a copy from => http://bit.ly/jsdevpackagejson

after this, just use npm install to get all the necessary packages to this project.