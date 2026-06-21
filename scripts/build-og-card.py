"""Build CookTriage OG social card (1200x630) with exact text."""
from __future__ import annotations

from pathlib import Path

from PIL import Image, ImageDraw, ImageFont

ROOT = Path(__file__).resolve().parents[1]
OUT = ROOT / "assets" / "images" / "og-social-card.jpg"
LOGO = ROOT / "assets" / "images" / "logo-mark.jpg"

W, H = 1200, 630


def lerp(a: int, b: int, t: float) -> int:
    return int(a + (b - a) * t)


def gradient_bg() -> Image.Image:
    img = Image.new("RGB", (W, H))
    px = img.load()
    for y in range(H):
        t = y / (H - 1)
        r = lerp(42, 107, t)
        g = lerp(28, 58, t)
        b = lerp(18, 28, t)
        for x in range(W):
            px[x, y] = (r, g, b)
    return img


def load_font(path: str, size: int) -> ImageFont.FreeTypeFont | ImageFont.ImageFont:
    try:
        return ImageFont.truetype(path, size)
    except OSError:
        return ImageFont.load_default()


def main() -> None:
    img = gradient_bg()
    draw = ImageDraw.Draw(img)

    # Warm accent glow
    glow = Image.new("RGBA", (W, H), (0, 0, 0, 0))
    glow_draw = ImageDraw.Draw(glow)
    glow_draw.ellipse((760, -120, 1280, 360), fill=(245, 184, 46, 55))
    glow_draw.ellipse((-80, 320, 520, 760), fill=(232, 93, 26, 45))
    img = Image.alpha_composite(img.convert("RGBA"), glow).convert("RGB")
    draw = ImageDraw.Draw(img)

    display = load_font("C:/Windows/Fonts/georgiab.ttf", 86)
    display_italic = load_font("C:/Windows/Fonts/georgiaz.ttf", 58)
    sans = load_font("C:/Windows/Fonts/segoeui.ttf", 30)
    sans_bold = load_font("C:/Windows/Fonts/segoeuib.ttf", 22)

    draw.text((72, 96), "Cook", font=display, fill=(250, 246, 240))
    triage_x = 72 + draw.textlength("Cook", font=display)
    draw.text((triage_x, 96), "Triage", font=display, fill=(245, 184, 46))

    draw.text((72, 198), "Rescue Your Dinner", font=display_italic, fill=(250, 246, 240))

    draw.text(
        (72, 292),
        "Symptom  →  Cause  →  Fix",
        font=sans,
        fill=(232, 93, 26),
    )

    draw.text(
        (72, 360),
        "Free kitchen troubleshooting for home cooks.",
        font=sans,
        fill=(210, 198, 180),
    )

    # Flow pills
    pill_y = 430
    labels = [("Symptom", (232, 93, 26)), ("Cause", (255, 255, 255)), ("Fix", (61, 107, 71))]
    x = 72
    for label, color in labels:
        tw = draw.textlength(label, font=sans_bold)
        pad_x, pad_y = 22, 12
        box = (x, pill_y, x + tw + pad_x * 2, pill_y + 38)
        if label == "Symptom":
            draw.rounded_rectangle(box, radius=18, fill=(232, 93, 26))
            text_color = (255, 255, 255)
        elif label == "Cause":
            draw.rounded_rectangle(box, radius=18, outline=(255, 255, 255, 120), width=2)
            text_color = (250, 246, 240)
        else:
            draw.rounded_rectangle(box, radius=18, fill=(61, 107, 71))
            text_color = (255, 255, 255)
        draw.text((x + pad_x, pill_y + pad_y - 2), label, font=sans_bold, fill=text_color)
        x = box[2] + 18

    draw.text((72, H - 72), "KR8ZYSHO3.github.io/Cook-Triage", font=sans_bold, fill=(180, 168, 150))

    if LOGO.exists():
        logo = Image.open(LOGO).convert("RGBA")
        size = 280
        logo = logo.resize((size, size), Image.Resampling.LANCZOS)
        mask = Image.new("L", (size, size), 0)
        mask_draw = ImageDraw.Draw(mask)
        mask_draw.rounded_rectangle((0, 0, size, size), radius=48, fill=255)
        logo.putalpha(mask)
        img.paste(logo, (W - size - 88, (H - size) // 2), logo)

    OUT.parent.mkdir(parents=True, exist_ok=True)
    img.save(OUT, "JPEG", quality=92, optimize=True)
    print(f"Wrote {OUT} ({W}x{H})")


if __name__ == "__main__":
    main()