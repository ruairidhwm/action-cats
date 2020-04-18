import * as core from '@actions/core'
import * as github from '@actions/github'
import {catGifs} from './constants'

async function run(): Promise<void> {
  try {
    const fetch = require("node-fetch");
    const tmp = await fetch("http://api.giphy.com/v1/gifs/random?tag=cat", {
      headers: {
        "api_key":core.getInput('GIPHY_TOKEN')
      }
      // body: JSON.stringify({})
    })
    const body = await tmp.json();
    console.log(body["data"]["image_original_url"])
    const randomCatGif = catGifs[Math.floor(Math.random() * catGifs.length)]
    const message = `![Cat Gif](${randomCatGif})`
    const githubToken = core.getInput('GITHUB_TOKEN')

    const context = github.context
    if (context.payload.pull_request == null) {
      core.setFailed('No pull request found.')
      return
    }
    const pullRequestNumber = context.payload.pull_request.number

    const octokit = new github.GitHub(githubToken)

    octokit.issues.createComment({
      ...context.repo,
      issue_number: pullRequestNumber,
      body: message
    })
  } catch (error) {
    console.log("test 2")
    core.setFailed(error.message)
  }
}

run()
