from pathlib import Path

from PIL import Image, ImageOps


OUTPUT_DIR = Path("/home/ubuntu/webdev-static-assets")

JOBS = [
    {
        "source": Path("/home/ubuntu/upload/IMG-20260825-WA0026.jpg"),
        "output": OUTPUT_DIR / "xii-h-gallery-class-portrait.jpg",
        "crop": (0, 190, 1280, 910),
    },
    {
        "source": Path("/home/ubuntu/upload/IMG-20260820-WA0033.jpg"),
        "output": OUTPUT_DIR / "xii-h-gallery-class-uniform.jpg",
        "crop": (130, 75, 3902, 2197),
    },
    {
        "source": Path("/home/ubuntu/upload/IMG-20260820-WA0017.jpg"),
        "output": OUTPUT_DIR / "xii-h-gallery-boys-portrait.jpg",
        "crop": (0, 660, 900, 1166),
    },
    {
        "source": Path("/home/ubuntu/upload/IMG-20260820-WA0008.jpg"),
        "output": OUTPUT_DIR / "xii-h-gallery-boys-action.jpg",
        "crop": (0, 730, 900, 1236),
    },
]


def export_crop(job: dict[str, object]) -> None:
    source = job["source"]
    output = job["output"]
    crop = job["crop"]
    if not isinstance(source, Path) or not isinstance(output, Path) or not isinstance(crop, tuple):
        raise TypeError("Konfigurasi crop tidak valid")

    with Image.open(source) as image:
        image = ImageOps.exif_transpose(image).convert("RGB")
        image = image.crop(crop)
        image = image.resize((1200, 675), Image.Resampling.LANCZOS)
        image.save(output, "JPEG", quality=88, optimize=True, progressive=True)
        print(f"{output.name}: {image.size[0]}x{image.size[1]}")


def main() -> None:
    OUTPUT_DIR.mkdir(parents=True, exist_ok=True)
    for job in JOBS:
        export_crop(job)


if __name__ == "__main__":
    main()
