# The World on Friday, 20 November 2026 — in one image

Entry for the make.fun bounty **news-image-20261120**
("Sum up 20 November's world news in one image").

`main.ts` (Node 22, standard library only) copies the finished front-page
image `entry.png` held in this repository to `/output/entry.png`
(or to `$MAKEFUN_OUTPUT_DIR/entry.png` outside the grader).

The image is a newspaper-style front page dated **Friday 20 November 2026**
with six panels, one per major story of the day. The final story lineup is
fixed on the morning of 21 November 2026 (JST), once 20 November has ended
in every time zone, so the page can sum up the whole day.

Local run:

```sh
mkdir -p out && MAKEFUN_OUTPUT_DIR=out node main.ts
```
