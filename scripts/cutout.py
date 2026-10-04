"""Turns the white background of the AKI renders into transparency.

The source images are JPEGs on a white studio background. Flood-filling from the
borders keeps white pixels that belong to the robot itself (its body is almost
white) instead of punching holes through it.
"""

from collections import deque
from pathlib import Path

from PIL import Image, ImageFilter

SRC = Path(__file__).resolve().parent.parent / "public" / "img"
NAMES = ["aki-mascot", "aki-celebrate", "aki-code", "aki-sad", "aki-languages", "aki-streak"]
# Pixels brighter than this on every channel count as background candidates.
THRESHOLD = 236
FEATHER = 1.1


def cutout(path: Path, out: Path) -> None:
    img = Image.open(path).convert("RGB")
    w, h = img.size
    px = img.load()

    bg = bytearray(w * h)
    q = deque()

    def consider(x: int, y: int) -> None:
        i = y * w + x
        if bg[i]:
            return
        r, g, b = px[x, y]
        if r >= THRESHOLD and g >= THRESHOLD and b >= THRESHOLD:
            bg[i] = 1
            q.append((x, y))

    for x in range(w):
        consider(x, 0)
        consider(x, h - 1)
    for y in range(h):
        consider(0, y)
        consider(w - 1, y)

    while q:
        x, y = q.popleft()
        if x > 0:
            consider(x - 1, y)
        if x < w - 1:
            consider(x + 1, y)
        if y > 0:
            consider(x, y - 1)
        if y < h - 1:
            consider(x, y + 1)

    alpha = Image.frombytes("L", (w, h), bytes(255 if not v else 0 for v in bg))
    alpha = alpha.filter(ImageFilter.GaussianBlur(FEATHER))
    img.putalpha(alpha)
    # Nothing in the layout renders these wider than ~420px.
    img = img.resize((768, 768), Image.LANCZOS)
    img = img.crop(img.getbbox())
    img.save(out, quality=86, method=6)
    print(f"{out.name}: {out.stat().st_size // 1024} KB {img.size}")


for name in NAMES:
    cutout(SRC / f"{name}.jpg", SRC / f"{name}.webp")
