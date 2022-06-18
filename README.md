# CI Demo

This repository has the examples on integration of the following github actions:

### On Pull Request
- Head to the .github/workflows folder, and view the file: on-pull-request.yml
- This file has the implementations to run the static analysis whenever the pull request is created. (job: analysis)
- It also has a job for e2e tests, which is dependent on the analysis job.
- A custom action to install the yarn dependencies, checking the cache is also implemented in the .github/actions folder.
- Option to merge is disabled until the status checks are passed.
- The both jobs took around 28 mins atleast to cover, we reduced it to almost 14 mins, by caching the Pods and the build dir.
