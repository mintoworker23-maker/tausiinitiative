#!/usr/bin/env python3

from pathlib import Path
from PIL import Image


ROOT = Path(__file__).resolve().parent.parent

JOBS = [
    {
        "source": ROOT / "public" / "gallery" / "herobg.JPG",
        "outputs": [
            {"path": ROOT / "public" / "optimized" / "herobg-960.webp", "width": 960, "quality": 58},
            {"path": ROOT / "public" / "optimized" / "herobg-1600.webp", "width": 1600, "quality": 60},
            {"path": ROOT / "public" / "optimized" / "herobg-2400.webp", "width": 2400, "quality": 64},
        ],
    },
]


def save_variant(source: Path, output: Path, width: int, quality: int) -> None:
    with Image.open(source) as image:
        rgb_image = image.convert("RGB")
        aspect_ratio = rgb_image.height / rgb_image.width
        height = round(width * aspect_ratio)
        resized = rgb_image.resize((width, height), Image.Resampling.LANCZOS)

        output.parent.mkdir(parents=True, exist_ok=True)
        resized.save(
            output,
            "WEBP",
            quality=quality,
            method=6,
            optimize=True,
        )

        size_kb = output.stat().st_size / 1024
        print(f"Created {output.relative_to(ROOT)} at {width}w ({size_kb:.1f} KB)")


def main() -> None:
    for job in JOBS:
        source = job["source"]
        if not source.exists():
            raise FileNotFoundError(f"Missing source image: {source}")

        for variant in job["outputs"]:
            save_variant(
                source=source,
                output=variant["path"],
                width=variant["width"],
                quality=variant["quality"],
            )


if __name__ == "__main__":
    main()
