<!-- badges -->
<div style="text-align: right">
  <img src="https://img.shields.io/github/license/Hsins/OJ-Note.svg?style=flat-square" alt="license badge">
</div>

<!-- logo, title and description -->
<div style="text-align: center">
  <img style="height: 150px" src="https://camo.githubusercontent.com/04634d2289fd4ac8767e74607f2328c3a781e1344fd9292967ed29f1dccff1f7/68747470733a2f2f692e696d6775722e636f6d2f6f50436462414d2e706e67" alt="logo">
  <h1>Online Judge Note</h1>
  <p>📝 Solutions and notes of the problems on online judge platforms like LeetCode, Codility and HackerRank.</p>
</div>

## Branches

There are a three branches for difference usage here:

- [`main`](https://github.com/Hsins/OJ-Note/tree/main) holds the README and License.
- [`docs`](https://github.com/Hsins/OJ-Note/tree/docs) stores the source code of this [site](https://hsins.github.io/OJ-Note/).
- [`gh-pages`](https://github.com/Hsins/OJ-Note/tree/gh-pages) hosts the website pages published by GitHub Actions (check the [workflow file](https://github.com/Hsins/OJ-Note/blob/docs/.github/workflows/site-deployment.yml)).

## Quick Start

```bash
# clone the project and checkout to 'docs' branch
$ git clone https://github.com/Hsins/OJ-Note
$ cd OJ-Note && git checkout docs

# create the virtual environment
$ python3 -m venv env

# activate the virtual environment
$ source env/bin/activate                       # Unix-like
$ .\env\Scripts\Activate.ps1                    # Windows

# install dependencies
$ pip install -r requirements.txt

# start the server
$ mkdocs serve
```

## Related Repositories

- [Hsins/Codility | GitHub](https://github.com/Hsins/Codility)
- [Hsins/HackerRank | GitHub](https://github.com/Hsins/HackerRank)
- [Hsins/LeetCode | GitHub](https://github.com/Hsins/LeetCode)

## License

Licensed under the MIT License, Copyright © 2020-present Hsins.
