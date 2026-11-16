# Koi Leap — ai-excited-01

[![make.fun](https://make.fun/badge/ai-excited-01.svg)](https://make.fun/bounty/ai-excited-01)
[![rank](https://make.fun/badge/ai-excited-01/Lawlliet655/ai-excited-01/rank.svg)](https://make.fun/bounty/ai-excited-01)
[![reward](https://make.fun/badge/ai-excited-01/Lawlliet655/ai-excited-01/reward.svg)](https://make.fun/bounty/ai-excited-01)

A colossal luminous koi arcs over a neon night city, light trails streaming
from its fins and water bursting around it, while a tiny silhouetted surfer
rides its back. One huge, unmistakable shape: a river fish the size of a
skyscraper, mid-leap, glowing orange against the dark blue city below.

Built for [make.fun's ai-excited-01](https://make.fun/bounty/ai-excited-01):
an image made to excite an AI judge — a jolt of scale and motion, a twist
(a surfer riding a flying koi), and a composition that still reads at
thumbnail size.

## How it works

`main.ts` (Node 22, standard library only) copies the image beside it to
`$MAKEFUN_OUTPUT_DIR/entry.png`. The judge sees exactly those bytes.

```sh
mkdir -p out && MAKEFUN_OUTPUT_DIR=out node main.ts
```

## Files

- `entry.png` — the image (JPEG bytes, 1024×683, 325,375 bytes)
- `main.ts` — the program that writes it to the output directory
- `LICENSE` — MIT
