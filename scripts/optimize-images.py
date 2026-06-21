"""Resize CookTriage images to sensible web dimensions."""
from __future__ import annotations

from pathlib import Path

from PIL import Image

ROOT = Path(__file__).resolve().parents[1]
IMG = ROOT / "assets" / "images"

# (filename, max_width, max_height) — None means keep that axis
TARGETS: dict[str, tuple[int | None, int | None]] = {
    "logo-mark.jpg": (128, 128),
    "logo-mark.png": (128, 128),
    "search-empty.jpg": (144, 144),
    "learn-teaser.jpg": (480, 360),
    "rescue-illustration.jpg": (480, 360),
    "hero-illustration.jpg": (1280, 720),
    "og-social-card.jpg": (1200, 630),
}

CARD_PREFIXES = ("cat-", "lesson-")
STEP_FILES = ("step-symptom.png", "step-cause.png", "step-fix.png")
CARD_MAX = (560, 840)  # 2x retina for ~280px cards
STEP_MAX = (160, 160)


def fit(img: Image.Image, max_w: int | None, max_h: int | None) -> Image.Image:
    w, h = img.size
    scale = 1.0
    if max_w and w > max_w:
        scale = min(scale, max_w / w)
    if max_h and h > max_h:
        scale = min(scale, max_h / h)
    if scale >= 1.0:
        return img
    nw, nh = max(1, int(w * scale)), max(1, int(h * scale))
    return img.resize((nw, nh), Image.Resampling.LANCZOS)


def save(img: Image.Image, path: Path) -> None:
    ext = path.suffix.lower()
    if ext in {".jpg", ".jpeg"}:
        img.convert("RGB").save(path, "JPEG", quality=85, optimize=True)
    elif ext == ".png":
        img.save(path, "PNG", optimize=True)
    else:
        raise ValueError(path)


def process(path: Path, max_w: int | None, max_h: int | None) -> str:
    before = path.stat().st_size
    with Image.open(path) as src:
        old = src.size
        out = fit(src, max_w, max_h)
        if out.size == old and ext_is_jpeg_png(path):
            # still recompress jpeg
            if path.suffix.lower() in {".jpg", ".jpeg"} and out.size == old:
                save(out, path)
                after = path.stat().st_size
                return f"{path.name}: {old[0]}x{old[1]} recompressed {before//1024}KB -> {after//1024}KB"
        save(out, path)
    after = path.stat().st_size
    with Image.open(path) as check:
        new = check.size
    return f"{path.name}: {old[0]}x{old[1]} -> {new[0]}x{new[1]}, {before//1024}KB -> {after//1024}KB"


def ext_is_jpeg_png(path: Path) -> bool:
    return path.suffix.lower() in {".jpg", ".jpeg", ".png"}


def main() -> None:
    lines: list[str] = []

    for name, (mw, mh) in TARGETS.items():
        p = IMG / name
        if p.exists():
            lines.append(process(p, mw, mh))

    # PNG favicon from logo
    logo_jpg = IMG / "logo-mark.jpg"
    logo_png = IMG / "logo-mark.png"
    if logo_jpg.exists():
        with Image.open(logo_jpg) as src:
            icon = fit(src, 128, 128)
            save(icon, logo_png)
        lines.append(f"logo-mark.png: wrote {logo_png.stat().st_size // 1024}KB")

    for p in sorted(IMG.iterdir()):
        if p.name.startswith(CARD_PREFIXES):
            lines.append(process(p, CARD_MAX[0], CARD_MAX[1]))
        elif p.name in STEP_FILES:
            lines.append(process(p, STEP_MAX[0], STEP_MAX[1]))

    for line in lines:
        print(line)


if __name__ == "__main__":
    main()