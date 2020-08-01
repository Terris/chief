#!/usr/bin/env node
import download from 'download-git-repo'
import yargs from 'yargs'
import { name, version } from '../package'

const { _: args } = yargs
  .scriptName(name)
  .usage('Usage: $0 <project directory>')
  .example('$0 newapp')
  .version(version)
  .strict().argv

const targetDir = String(args).replace(/,/g, '-')

if (!targetDir) {
  console.error('You must specify the project directory.')
  console.error('Example:')
  console.error('yarn create chief-app ./path/to/project')
  process.exit(1)
}

try {
  download('github:terris/create-chief-app#main', targetDir, function (err) {
    console.log('Success!')
    console.log('cd to project and yarn')
  })
} catch (err) {
  console.log(err)
}
