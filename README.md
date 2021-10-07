<!-- badges -->
<div align="right">

  [![](https://img.shields.io/github/license/Hsins/OJ-Note.svg?style=flat-square)](./LICENSE)

</div>

<!-- logo, title and description -->
<div align="center">

  <img src="https://i.imgur.com/oPCdbAM.png" alt="OJ-Note" height="150px">

# Online Judge Note

📝 _Solutions and notes of the problems on online judge platforms like [LeetCode](), [Codility]() and [HackerRank]()._

<!-- Badges -->

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
